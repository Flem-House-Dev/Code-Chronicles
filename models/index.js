const User = require('./User');
const Category = require('./Category');
const Blog = require('./Blog');

Category.hasMany(Blog, {
  foreignKey: 'category_id',
});

Blog.belongsTo(Category, {
  foreignKey: 'category_id',
});

module.exports = { User, Category, Blog };
