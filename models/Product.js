// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER, // setting type integer
      allowNull: false, // can't be null
      primaryKey: true, // set primary key
      autoIncrement: true, // uses autoincrement
    },
    product_name: {
      type: DataTypes.STRING, // setting type string
      allowNull: false, // can't be null
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // setting type decimal
      allowNull: false, // can't be null
      validate: { // validation to check for decimal
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER, // setting type integer
      allowNull: false, // can't be null
      defaultValue: 10, // setting default value
      validate: { // validation to check for numeric value
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER, // setting type integer
      allowNull: true, // can be null
      references: { // references category model's id
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
