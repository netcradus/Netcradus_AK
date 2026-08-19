const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema(
  {
    certificateId: {
      type: String,
      required: [true, 'Certificate ID is required'],
      unique: true,
      trim: true,
      index: true,
    },
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
    studentName: {
      type: String,
      required: [true, 'Student name snapshot is required'],
      trim: true,
    },
    courseName: {
      type: String,
      required: [true, 'Course name snapshot is required'],
      trim: true,
    },
    issueDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    pdfUrl: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: ['active', 'revoked'],
      default: 'active',
      index: true,
    },
    revokedAt: {
      type: Date,
      default: null,
    },
    revocationReason: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

// Compound unique index so a student gets only one certificate per course
certificateSchema.index({ userId: 1, courseId: 1 }, { unique: true });

module.exports = mongoose.model('Certificate', certificateSchema);
