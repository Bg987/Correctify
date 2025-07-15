function logRequest(original, corrected, timeMs) {
  console.log("📘 Correction Log");
  console.log("Original   :", original);
  console.log("Corrected  :", corrected);
  console.log("Time Taken :", timeMs + "ms");
  console.log("---------------------------");
}

module.exports = { logRequest };
