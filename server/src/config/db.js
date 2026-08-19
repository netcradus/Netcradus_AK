const mongoose = require('mongoose');

/**
 * Reusable function to initialize Mongoose connection to MongoDB.
 * Ensures credentials are redacted in logs.
 * Exits process with 1 if connection fails.
 */
const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('[Database Connection Error] MONGODB_URI environment variable is missing.');
    process.exit(1);
  }

  // Parse and redact credentials from URI for safe logging
  let safeUri = uri;
  try {
    if (uri.startsWith('mongodb+srv://') || uri.startsWith('mongodb://')) {
      const urlParts = uri.split('@');
      if (urlParts.length > 1) {
        const protocolPart = urlParts[0].split('://');
        const protocol = protocolPart[0];
        safeUri = `${protocol}://****:****@${urlParts[1]}`;
      }
    }
  } catch (err) {
    safeUri = 'mongodb://****:****@hidden-host';
  }

  try {
    console.log(`[Database] Attempting connection to: ${safeUri}`);
    const conn = await mongoose.connect(uri);
    console.log(`[Database] MongoDB Connected Successfully: ${conn.connection.host} / ${conn.connection.name}`);
    return conn;
  } catch (error) {
    console.error(`[Database Error] Connection failed to ${safeUri}: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
