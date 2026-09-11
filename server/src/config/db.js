const mongoose = require('mongoose');

/**
 * Reusable function to initialize Mongoose connection to MongoDB.
 * Exits process with 1 if connection fails.
 */
const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('[Database Connection Error] MONGODB_URI environment variable is missing.');
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log('[Database] MongoDB connected successfully');
    return conn;
  } catch (error) {
    console.error(`[Database] MongoDB connection failed: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
