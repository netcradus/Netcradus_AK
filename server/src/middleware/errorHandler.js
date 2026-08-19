/**
 * Global Error Handler Middleware
 * Normalizes all error types (Mongoose CastErrors, ValidationErrors, duplicates) 
 * into structured JSON responses.
 */
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log error stack trace during development
  if (process.env.NODE_ENV === 'development') {
    console.error('Error Details:', err);
  }

  // Handle Mongoose Bad ObjectId CastError
  if (err.name === 'CastError') {
    error.message = `Resource not found with id of ${err.value}`;
    error.statusCode = 404;
  }

  // Handle Mongoose Duplicate Key Error (e.g. duplicate email, unique fields)
  if (err.code === 11000) {
    error.message = 'Duplicate field value entered. Resource already exists.';
    error.statusCode = 400;
  }

  // Handle Mongoose Validation Errors
  if (err.name === 'ValidationError') {
    error.message = Object.values(err.errors).map(val => val.message).join(', ');
    error.statusCode = 400;
  }

  const statusCode = error.statusCode || err.statusCode || 500;
  const message = error.message || 'An unexpected internal server error occurred';

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

module.exports = errorHandler;
