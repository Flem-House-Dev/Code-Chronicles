const router = require('express').Router();

const userRoutes = require('./user-routes');
const blogFormRoutes = require('./blog-form-routes.js');
const deleteBlog = require('./blog-delete.js');


router.use('/users', userRoutes);
router.use('/blog_form', blogFormRoutes);
router.use('/blog_delete', deleteBlog);

module.exports = router;
