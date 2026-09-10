const mongoose = require('mongoose');
const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');
const User = require('../models/User');
const asyncHandler = require('../utils/asyncHandler');
const { createEnrollmentSchema } = require('../validators/enrollmentValidator');

/**
 * @desc    Submit an Academy course enrollment application
 * @route   POST /api/v1/enrollments
 * @access  Public
 */
const createEnrollment = asyncHandler(async (req, res, next) => {
  // 1. Validate incoming request body via Joi
  const { error, value } = createEnrollmentSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const errorMessage = error.details.map((detail) => detail.message).join(', ');
    return res.status(400).json({
      success: false,
      message: errorMessage,
    });
  }

  const { fullName, email, phone, courseId, courseSlug, courseName } = value;

  // 2. Resolve target Course document
  let targetCourse = null;

  if (courseId && mongoose.Types.ObjectId.isValid(courseId)) {
    targetCourse = await Course.findById(courseId);
  }

  if (!targetCourse && (courseSlug || courseName)) {
    const searchTerm = (courseSlug || courseName).trim();
    targetCourse = await Course.findOne({
      $or: [
        { slug: searchTerm.toLowerCase() },
        { title: { $regex: new RegExp(`^${searchTerm}$`, 'i') } },
        { shortDescription: { $regex: new RegExp(`^${searchTerm}$`, 'i') } },
      ],
      published: true,
    });
  }

  if (!targetCourse) {
    return res.status(404).json({
      success: false,
      message: 'The requested course was not found or is currently inactive.',
    });
  }

  // 3. Find or create guest student User record
  const lowerEmail = email.toLowerCase().trim();
  let user = await User.findOne({ email: lowerEmail });

  if (!user) {
    user = await User.create({
      email: lowerEmail,
      fullName: fullName.trim(),
      phone: phone.trim(),
      role: 'student',
      status: 'active',
    });
  }

  // 4. Duplicate protection check (check existing active enrollment)
  const existingEnrollment = await Enrollment.findOne({
    userId: user._id,
    courseId: targetCourse._id,
    status: { $in: ['active', 'completed'] },
  });

  if (existingEnrollment) {
    return res.status(400).json({
      success: false,
      message: `An active enrollment application already exists for '${targetCourse.title}' under this email address.`,
    });
  }

  // 5. Create new Enrollment record
  const enrollment = await Enrollment.create({
    userId: user._id,
    courseId: targetCourse._id,
    enrollmentType: 'free',
    pricePaid: 0,
    currency: 'INR',
    status: 'active',
  });

  res.status(201).json({
    success: true,
    message: `Enrollment submitted successfully for ${targetCourse.title}! Our team will contact you within 2 hours.`,
    data: {
      enrollmentId: enrollment._id,
      courseTitle: targetCourse.title,
      studentName: user.fullName,
      studentEmail: user.email,
      status: enrollment.status,
      createdAt: enrollment.createdAt,
    },
  });
});

module.exports = {
  createEnrollment,
};
