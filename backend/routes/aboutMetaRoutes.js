const express = require('express');
const {
  getMetaAboutDetails,
  createMetaAboutDetails,
  updateMetaAboutDetails,
} = require('../controllers/AboutMetaDetails');

const router = express.Router();

// Get Meta About Details
router.get('/meta-about-details', getMetaAboutDetails);

// Create Meta About Details
router.post('/meta-about-details/create', createMetaAboutDetails);

// Update Meta About Details
router.put('/meta-about-details/update', updateMetaAboutDetails);

module.exports = router;
