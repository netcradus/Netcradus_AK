/**
 * Utility to escape special regex characters in user inputs
 * to prevent Regex Injection (ReDoS) and unhandled SyntaxError crashes.
 * @param {string} string - Unsanitized user input string
 * @returns {string} Escaped string safe for RegExp construction
 */
const escapeRegex = (string) => {
  if (!string || typeof string !== 'string') return '';
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

module.exports = escapeRegex;
