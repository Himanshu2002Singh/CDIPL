const express = require('express');
const {
  getMetaAllProjectDetails,
  createMetAllProjectDetails,
  updateMetaAllProjectDetails,
} = require('../controllers/ProjectMetaDetail');

const router = express.Router();

// Get Meta About Details
router.get('/meta-allproject-details', getMetaAllProjectDetails);

// Create Meta About Details
router.post('/meta-allproject-details/create', createMetAllProjectDetails);

// Update Meta About Details
router.put('/meta-allproject-details/update', updateMetaAllProjectDetails);

module.exports = router;
