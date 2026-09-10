const Joi = require('joi');

const getCoursesQuerySchema = Joi.object({
  category: Joi.string().trim().optional(),
  search: Joi.string().trim().optional(),
  page: Joi.number().integer().min(1).optional(),
  limit: Joi.number().integer().min(1).max(100).optional(),
});

module.exports = {
  getCoursesQuerySchema,
};
