const ContactMessage = require('../models/contactMessageModel');

// Add a new contact message
exports.addContactMessage = async (req, res) => {
  const { name, phone, message } = req.body;

  try {
    const newMessage = await ContactMessage.create({
      name,
      phone,
      message,
    });
    res.status(201).json({ success: true, message: 'Message submitted successfully', data: newMessage });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error submitting message', error });
  }
};

// Get contact messages (optional, for admin or other purposes)
exports.getContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.findAll();
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching messages', error });
  }
};
