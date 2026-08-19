/**
 * Utility wrapper to catch errors in async express routes
 * and forward them to the next middleware (errorHandler)
 * @param {Function} fn - Async Express router callback function
 * @returns {Function} Express middleware wrapper
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;
