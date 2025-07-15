const { correctGrammar } = require('../services/grammarService');
const { explainCorrection } = require('../services/explainService');
const { validateText } = require('../utils/validateInput');
const { logRequest } = require('../utils/logger');


async function handleCorrection(req, res) {
  const userText = req.params.text;
  const error = validateText(userText);
  if (error) return res.status(400).json({ error });

  const start = Date.now();

  try {
    const corrected = await correctGrammar(userText);//pass for correct grammar
    const explanation = await explainCorrection(userText, corrected);//for mistake explanation
    const responseTime = Date.now() - start;

    logRequest(userText, corrected, responseTime);

    res.json({
      original: userText,
      corrected,
      explanation,
      responseTimeMs: responseTime
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
}

module.exports = { handleCorrection };
