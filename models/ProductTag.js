const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER, // setting type integer
      allowNull: false, // can't be null 
      primaryKey: true, // set as primary key
      autoIncrement: true, // uses autoincrement
    },
    product_id: {
      type: DataTypes.INTEGER, // setting type integer
      references: { // references product model's id
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER, // setting type integer
      references: { // references tag model's id
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
