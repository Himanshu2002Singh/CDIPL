const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Define Model
const MetaAbout = sequelize.define('metaabout', {
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
MetaAbout.sync();

module.exports = MetaAbout;
