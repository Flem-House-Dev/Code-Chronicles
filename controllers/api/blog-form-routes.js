const router = require('express').Router();
const { Blog } = require('../../models');

function getCategoryId (category) {
    switch(category) {
        case 'HTML':
            return 1;
        case 'JavaScript':
            return 2;
        case 'CSS':
            return 3;
        case 'Node.js':
            return 4;
        default:
            return null;
    }
}

router.post('/', async (req, res) => {
    try {
        const { title, author, text_body, category } = req.body;
        const category_id = getCategoryId(category);

        if (category_id === null) {
            return res.status(400).json({ error: 'Invalid category' });
        }
        
        const newBlogPost = await Blog.create({
            title,
            author,
            text_body,
            category_id,
            post_date: new Date()
        })

        res.status(201).json(newBlogPost);

    } catch (err) {
        console.error('Error creating new blog post', err);
        res.status(500).json(err);
    }
});

module.exports = router;