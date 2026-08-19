const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required'],
      index: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: [true, 'Course ID is required'],
      index: true,
    },
    paymentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Payment',
      default: null,
    },
    enrollmentType: {
      type: String,
      enum: ['free', 'paid', 'manual', 'corporate'],
      required: [true, 'Enrollment type is required'],
    },
    pricePaid: {
      type: Number,
      required: true,
      default: 0,
      min: [0, 'Paid price cannot be negative'], // stored in paise
    },
    currency: {
      type: String,
      default: 'INR',
    },
    status: {
      type: String,
      enum: ['active', 'paused', 'completed', 'revoked'],
      default: 'active',
      index: true,
    },
    completedLessons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson',
      },
    ],
    lastAccessedLesson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lesson',
      default: null,
    },
    progressPercentage: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    completedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Mandatory compound unique index to prevent duplicate enrollments
enrollmentSchema.index({ userId: 1, courseId: 1 }, { unique: true });

module.exports = mongoose.model('Enrollment', enrollmentSchema);
