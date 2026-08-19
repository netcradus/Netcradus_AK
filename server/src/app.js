const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// 1. Security Headers via Helmet
app.use(helmet());

// 2. Enable CORS with configurable origins
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// 3. Logger configurations based on environment
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// 4. Body parser and size limits to prevent DOS
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// 5. Data sanitization to protect against MongoDB Query Injections
app.use(mongoSanitize());

// 6. Global Request Rate Limiter (100 requests per 15 minutes)
const limiter = rateLimit({
  max: 100,
  windowMs: 15 * 60 * 1000,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again in 15 minutes.'
  }
});
app.use('/api', limiter);

// 7. Base server health verification endpoint
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Netcradus LMS API Server is running healthy',
    timestamp: new Date()
  });
});

// 8. Capture and forward unhandled endpoint requests
app.all('*', (req, res, next) => {
  const err = new Error(`Endpoint ${req.originalUrl} does not exist on this server`);
  err.statusCode = 404;
  next(err);
});

// 9. Centralized Error Interceptor
app.use(errorHandler);

module.exports = app;
