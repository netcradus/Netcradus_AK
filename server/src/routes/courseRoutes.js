const express = require('express');
const router = express.Router();
const { getCourses, getCourseBySlug } = require('../controllers/courseController');
const { getCoursesQuerySchema } = require('../validators/courseValidator');
const validate = require('../middleware/validate');

router.get('/', validate(getCoursesQuerySchema, 'query'), getCourses);
router.get('/:slug', getCourseBySlug);

module.exports = router;
