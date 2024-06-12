const sequelize = require('../config/connection');
const seedBlogs = require('./blogData');
const seedCategory = require('./categoryData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategory();

  await seedBlogs();

  process.exit(0);
};

seedAll();
