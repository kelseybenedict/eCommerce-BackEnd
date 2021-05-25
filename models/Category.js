const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER, // type is integer
      allowNull: false, // can't be null
      primaryKey: true, // this is the primary key
      autoIncrement: true, // uses auto increment
    },
    category_name: {
      type: DataTypes.STRING, // type is string
      allowNull: false, // can't be null
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
