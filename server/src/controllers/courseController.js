const Course = require('../models/Course');
const asyncHandler = require('../utils/asyncHandler');

// Category slug/key mapping to DB category values
const categoryMap = {
  cyber: 'CYBER SECURITY',
  ai: 'ARTIFICIAL INTELLIGENCE',
  cloud: 'CLOUD COMPUTING',
  data: 'DATA SCIENCE',
  fullstack: 'FULL STACK DEVELOPMENT',
};

/**
 * @desc    Get all active/published Academy courses (supports optional category filter)
 * @route   GET /api/v1/courses
 * @access  Public
 */
const getCourses = asyncHandler(async (req, res, next) => {
  const query = { published: true };

  // Parse category filter
  if (req.query.category && req.query.category.toLowerCase() !== 'all') {
    const rawCategory = req.query.category.toLowerCase().trim();
    const mappedCategory = categoryMap[rawCategory] || req.query.category.trim();

    // Perform case-insensitive match for flexibility
    query.category = { $regex: new RegExp(`^${mappedCategory}$`, 'i') };
  }

  // Parse optional search query
  if (req.query.search) {
    const searchRegex = new RegExp(req.query.search.trim(), 'i');
    query.$or = [
      { title: searchRegex },
      { shortDescription: searchRegex },
      { category: searchRegex },
      { tags: searchRegex },
    ];
  }

  const courses = await Course.find(query).sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: courses.length,
    data: courses,
  });
});

/**
 * @desc    Get single course by slug identifier
 * @route   GET /api/v1/courses/:slug
 * @access  Public
 */
const getCourseBySlug = asyncHandler(async (req, res, next) => {
  const { slug } = req.params;

  const course = await Course.findOne({
    slug: slug.toLowerCase().trim(),
    published: true,
  });

  if (!course) {
    return res.status(404).json({
      success: false,
      message: `Course with slug '${slug}' was not found or is currently inactive.`,
    });
  }

  res.status(200).json({
    success: true,
    data: course,
  });
});

module.exports = {
  getCourses,
  getCourseBySlug,
};
