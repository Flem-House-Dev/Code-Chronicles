const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BLog_article extends Model {}

BLog_article.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // ToDo: Connect the blog author to the username of the logged in user.
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    text_body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'blog_category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog_article',
  }
);

module.exports = BLog_article;
