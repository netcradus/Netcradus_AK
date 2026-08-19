const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: [true, 'Course ID is required'],
      index: true,
    },
    title: {
      type: String,
      required: [true, 'Module title is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },
    order: {
      type: Number,
      required: [true, 'Module order number is required'],
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Compound unique index to prevent duplicate module ordering within a course
moduleSchema.index({ courseId: 1, order: 1 }, { unique: true });

module.exports = mongoose.model('Module', moduleSchema);
