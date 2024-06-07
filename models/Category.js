const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog_category extends Model {}

Blog_category.init(
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
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog_category',
  }
);

module.exports = Blog_category;
