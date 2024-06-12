const { Category } = require('../models');

const categorydata = [
  {
    title: 'HTML',
  },
  {
    title: 'JavaScript',
  },
  {
    title: 'CSS',
  },
  {
    title: 'Node.js',
  },
];

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;
