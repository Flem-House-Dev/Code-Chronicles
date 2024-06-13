const router = require('express').Router();
const { Blog } = require('../../models');



router.post('/', async (req, res) => {
    try {
        const newBlogData = await Blog.create({
            title: req.body.title,
            category_id: req.body.category_id,
            author: req.body.author,
            text_body: req.body.text_body,
        });

        res.status(200).json(newBlogData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;