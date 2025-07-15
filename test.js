const { correctGrammar } = require('./services/grammarService');
const { explainCorrection } = require('./services/explainService');

async function test() {
  const original = "They gone to college every Mondays.";
  const corrected = await correctGrammar(original);
  const explanation = await explainCorrection(original, corrected);//for mistake explanation

  console.log("Original:", original);
  console.log("Corrected:", corrected);
  console.log("Explanation:", explanation);
  console.log("Test completed successfully.");
}

test();
