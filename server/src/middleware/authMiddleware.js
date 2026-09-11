const jwt = require('jsonwebtoken');
const asyncHandler = require('../utils/asyncHandler');
const User = require('../models/User');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // 1. Extract token from HTTP-only Cookie or Authorization Header
  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  } else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'You are not logged in. Please log in to access this page.',
    });
  }

  // 2. Verify JWT Token
  try {
    const jwtSecret = process.env.JWT_SECRET || 'netcradus_default_jwt_secret_key_2026_fallback';
    const decoded = jwt.verify(token, jwtSecret);

    // 3. Check if User still exists in Database
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return res.status(401).json({
        success: false,
        message: 'The account belonging to this token no longer exists.',
      });
    }

    // 4. Check if User account is active
    if (currentUser.status === 'disabled') {
      return res.status(403).json({
        success: false,
        message: 'Your account has been disabled. Please contact support.',
      });
    }

    // 5. Attach User object to Request
    req.user = currentUser;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired session. Please log in again.',
    });
  }
});

module.exports = { protect };
