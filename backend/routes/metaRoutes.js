const express = require('express');
const {
  getMetaHomeDetails,
  createMetaHomeDetails,
  updateMetaHomeDetails,
} = require('../controllers/HomeMetaDetails');

const router = express.Router();

// Get Meta Details
router.get('/meta-home-details', getMetaHomeDetails);

// Create Meta Details
router.post('/meta-home-details/create', createMetaHomeDetails);

// Update Meta Details
router.put('/meta-home-details/update', updateMetaHomeDetails);

module.exports = router;
