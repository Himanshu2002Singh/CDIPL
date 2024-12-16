const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Import Sequelize instance

// Define the Content model
const Content = sequelize.define('Content', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false, // Equivalent to `required: true` in Mongoose
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensure the URL is unique
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, // Default to current timestamp
  },
});

Content.sync(); // Sync with the database
module.exports = Content;
