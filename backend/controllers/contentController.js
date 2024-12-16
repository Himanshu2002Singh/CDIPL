const { Content } = require('../models/contentModel'); // Import Content model
const { v4: uuidv4 } = require('uuid');

exports.saveContent = async (req, res) => {
  const { content, url } = req.body; // Expecting content and URL from the user

  if (!content || !url) {
    return res.status(400).json({ error: 'Content and URL are required' });
  }

  const pageId = uuidv4(); // Generate a unique page ID for the content

  try {
    const newContent = await Content.create({
      content,
      url,
      pageId,
    });

    res.status(201).json({ message: 'Content saved successfully', contentId: newContent.id, url });
  } catch (error) {
    console.error('Error saving content:', error);
    res.status(500).json({ error: 'Failed to save content' });
  }
};
