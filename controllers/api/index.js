const router = require('express').Router();

const userRoutes = require('./user-routes');
const blogFormRoutes = require('./blog-form-routes.js');

router.use('/users', userRoutes);
router.use('/blog_form', blogFormRoutes);

module.exports = router;
