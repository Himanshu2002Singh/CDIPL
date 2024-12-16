const express = require('express');
const {
  addMetaDetails,
  fetchMetaDetails,
  updateMetaDetails,
  deleteMetaDetails,
} = require('../controllers/AddMetaDetails');

const router = express.Router();

// Route to add MetaDetails
router.post('/meta-details', addMetaDetails);

// Route to fetch MetaDetails by project title
router.get('/meta-details/:projectTittle', fetchMetaDetails);

// Route to update MetaDetails by project title
router.put('/updatemeta-details/:projectTittle', updateMetaDetails);

// Route to delete MetaDetails by project title
router.delete('/meta-details/:projectTittle', deleteMetaDetails);

module.exports = router;
