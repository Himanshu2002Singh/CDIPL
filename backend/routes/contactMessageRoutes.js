const express = require('express');
const router = express.Router();
const { addContactMessage, getContactMessages } = require('../controllers/contactMessageController');

// Route to submit a contact message
router.post('/submit', addContactMessage);

// Optional route to get all contact messages (admin use case)
router.get('/messages', getContactMessages);

module.exports = router;
