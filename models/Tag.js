const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER, // setting type integer
      allowNull: false, // can't be null
      primaryKey: true, // setting as primary key
      autoIncrement: true, // uses auto increment
    },
    tag_name: {
      type: DataTypes.STRING, // setting type string
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
