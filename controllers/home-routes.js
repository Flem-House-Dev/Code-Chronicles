const router = require('express').Router();
const { Category, Blog } = require('../models');
const withAuth = require('../utils/auth');

// GET all categories for homepage
router.get('/', async (req, res) => {
  try {
    const dbCategoryData = await Category.findAll({
      include: [
        {
          model: Blog,
          attributes: ['title'],
        },
      ],
    });

    const categories = dbCategoryData.map((category) =>
      category.get({ plain: true })
    );

    res.render('homepage', {
      categories,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/blog_form', async (req, res) => {
  try {
    res.render('blog_form', {
      loggedIn: req.session.loggedIn,
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one category
// Replacing the logic with the custom middleware
router.get('/category/:id', withAuth, async (req, res) => {
  try {
    const dbCategoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Blog,
          attributes: ['id', 'title', 'author', 'post_date', 'text_body'],
        },
      ],
    });

    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }

    const category = dbCategoryData.get({ plain: true });

    res.render('category', { category, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blog
// Replacing the logic with the custom middleware
router.get('/blog/:id', withAuth, async (req, res) => {
  try {
    const dbBlogData = await Blog.findByPk(req.params.id);

    if (!dbBlogData) {
      res.status(404).json({ message: 'No blog found with this id' });
      return;
    }

    const blog = dbBlogData.get({ plain: true });

    res.render('blog', { blog, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ---------------------------------------



// ---------------------------------------
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

