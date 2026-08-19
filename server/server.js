const dotenv = require('dotenv');
// Initialize environment configs
dotenv.config();

const app = require('./src/app');

// Catch uncaught exceptions globally to prevent silent app crashes
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION! Shutting down process...');
  console.error(err.name, err.message, err.stack);
  process.exit(1);
});

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const server = app.listen(PORT, () => {
  console.log(`[Netcradus Backend] Server successfully launched in ${NODE_ENV} mode on port ${PORT}`);
});

// Catch unhandled async promise rejections globally to terminate node process gracefully
process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! Shutting down process gracefully...');
  console.error(err.name, err.message, err.stack);
  server.close(() => {
    process.exit(1);
  });
});
