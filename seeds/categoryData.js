const { Category } = require('../models');

const categorydata = [
  {
    title: 'HTML',
  },
  {
    title: 'CSS',
  },
  {
    title: 'Java Script',
  },
  {
    title: 'Node',
  },
];

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;
