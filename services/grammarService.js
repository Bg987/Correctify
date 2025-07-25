require('dotenv').config();
const axios = require('axios');

const COHERE_API_KEY = process.env.COHERE_API_KEY;

async function correctGrammar(text) {
  const prompt = `
You are a helpful English teacher.
Please:give me only correct paragraph with correct grammar.
Do not change the size of paragraph no of words in corrected text and no of words in text provides must be same.
TEXT:
${text}

RESPONSE:
`;

  try {
    const response = await axios.post(
      'https://api.cohere.ai/v1/generate',
      {
        model: 'command-r-plus',
        prompt: prompt,
        max_tokens: 5000,
        temperature: 0.3,
        p: 1,
        k: 0,
        stop_sequences: ["\n\n"]
      },
      {
        headers: {
          Authorization: `Bearer ${COHERE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log("1.Response from Cohere API:", response.data);
    const result = response.data.generations[0].text;
    return result;
  } catch (err) {
    console.error("❌ Cohere API Error:", err.response?.data || err.message);
    return "⚠️ Could not process correction.";
  }
}

module.exports = { correctGrammar };
