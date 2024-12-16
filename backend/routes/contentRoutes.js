const express = require('express');
const router = express.Router();
const { saveContent } = require('../controllers/contentController');

// Route to save content
router.post('/save', saveContent);

module.exports = router;
