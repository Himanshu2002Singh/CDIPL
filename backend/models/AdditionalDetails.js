// models/AdditionalDetails.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Adjust the path as per your project structure

const AdditionalDetails = sequelize.define('AdditionalDetails', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  youtubeLink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  locationLink: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

AdditionalDetails.sync();

module.exports = AdditionalDetails;
