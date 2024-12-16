const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Define Model
const MetaHomeDetails = sequelize.define('metahomedetails', {
  metaTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  metaKeywords: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  metaDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Sync model with database
MetaHomeDetails.sync();

module.exports = MetaHomeDetails;
