const router = require('express').Router();
const { Blog } = require('../../models');

router.delete('/:id', async (req,res) => {
    try {
      Blog.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json({ message: 'Blog deleted successfully'});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;