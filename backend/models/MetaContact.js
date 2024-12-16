const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Define Model
const MetaContact = sequelize.define('metacontact', {
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
MetaContact.sync();

module.exports = MetaContact;
