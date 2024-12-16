const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Define Model
const MetaAllProject = sequelize.define('metaallproject', {
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
MetaAllProject.sync();

module.exports = MetaAllProject;
