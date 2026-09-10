const Joi = require('joi');

const createInquirySchema = Joi.object({
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
  }),
  interestedCourse: Joi.string().trim().required().messages({
    'string.empty': 'Interested course is required',
  }),
  message: Joi.string().trim().allow('').optional(),
  source: Joi.string()
    .trim()
    .valid(
      'contact_page',
      'quick_enquiry',
      'callback_request',
      'demo_request',
      'workshop_registration'
    )
    .default('quick_enquiry'),
});

module.exports = {
  createInquirySchema,
};
