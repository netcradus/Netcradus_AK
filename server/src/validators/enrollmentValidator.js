const Joi = require('joi');

const createEnrollmentSchema = Joi.object({
  fullName: Joi.string().trim().min(2).max(100).required().messages({
    'string.empty': 'Full name is required',
    'string.min': 'Full name must be at least 2 characters',
  }),
  email: Joi.string().trim().email().required().messages({
    'string.empty': 'Email address is required',
    'string.email': 'Please provide a valid email address',
  }),
  phone: Joi.string().trim().min(7).max(20).required().messages({
    'string.empty': 'Phone number is required',
    'string.min': 'Please provide a valid phone number',
  }),
  courseName: Joi.string().trim().optional(),
  courseSlug: Joi.string().trim().optional(),
  courseId: Joi.string().trim().optional(),
}).or('courseName', 'courseSlug', 'courseId').messages({
  'object.missing': 'Please select a course to enroll in',
});

module.exports = {
  createEnrollmentSchema,
};
