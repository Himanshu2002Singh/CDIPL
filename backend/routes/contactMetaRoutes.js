const express = require('express');
const {
  getMetaContactDetails,
  createMetaContactDetails,
  updateMetaContactDetails,
} = require('../controllers/ContactMetaDetail');

const router = express.Router();

// Get Meta About Details
router.get('/meta-contact-details', getMetaContactDetails);

// Create Meta About Details
router.post('/meta-contact-details/create', createMetaContactDetails);

// Update Meta About Details
router.put('/meta-contact-details/update', updateMetaContactDetails);

module.exports = router;
