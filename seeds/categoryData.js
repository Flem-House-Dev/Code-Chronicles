const { Category } = require('../models');

const categorydata = [
  {
    title: 'Printemps',
  },
  {
    title: 'Sommer',
  },
  {
    title: 'Herfst',
  },
  {
    title: 'Invierno',
  },
];

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;
