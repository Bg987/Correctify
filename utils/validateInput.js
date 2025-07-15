function validateText(text) {
  if (!text || text.trim().length < 5) {
    return "Text must be at least 5 characters.";
  }
  return null;
}

module.exports = { validateText };
