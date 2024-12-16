const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Project = require('./projectModel'); // Import Project model

// Define MetaDetails model
const MetaDetails = sequelize.define('MetaDetails', {
  metaTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  metaDescription: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  metaKeywords:{
    type: DataTypes.TEXT,
    allowNull: true,
  },
  projectTittle: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Project,
      key: 'tittle',
    },
  },
});

// Sync model with database
MetaDetails.sync();

module.exports = MetaDetails;
