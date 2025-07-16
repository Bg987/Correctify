function validateText(text) {
  if (!text || text.trim().length < 5) {
    return "Text must be at least 5 characters.";
  }

  const wordCount = text.trim().split(/\s+/).length;
  if (wordCount > 700) {
    return "Text must be not be 700 words long.";
  }
  
  return null;
}

module.exports = { validateText };
