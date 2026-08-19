const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firebaseUid: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
    },
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    avatar: {
      type: String,
      default: '',
    },
    role: {
      type: String,
      enum: ['student', 'instructor', 'admin', 'super_admin'],
      default: 'student',
      index: true,
    },
    status: {
      type: String,
      enum: ['active', 'disabled'],
      default: 'active',
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// Unique compound indexes or other custom indexes if necessary
module.exports = mongoose.model('User', userSchema);
