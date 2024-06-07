const User = require('./User');
const Blog_category = require('./Category');
const BLog_article = require('./Blog');

Blog_category.hasMany(BLog_article, {
  foreignKey: 'category_id',
});

BLog_article.belongsTo(Blog_category, {
  foreignKey: 'category_id',
});

module.exports = { User, Blog_category, BLog_article };
