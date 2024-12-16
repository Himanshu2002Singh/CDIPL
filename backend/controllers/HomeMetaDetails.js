
const metahomedetails = require('../models/MetaHomeDetails');

// Fetch Meta Details
exports.getMetaHomeDetails = async (req, res) => {
  try {
    const metaHomeDetails = await metahomedetails.findOne();
    if (!metaHomeDetails) {
      return res.status(404).json({ success: false, message: 'Meta details not found.' });
    }
    res.status(200).json({ success: true, metaHomeDetails });
  } catch (error) {
    console.error('Error fetching meta details:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};

// Create Meta Details
exports.createMetaHomeDetails = async (req, res) => {
  try {
    const { metaTitle, metaKeywords, metaDescription } = req.body;

    // Check if meta details already exist
    const existingMeta = await metahomedetails.findOne();
    if (existingMeta) {
      return res.status(400).json({ success: false, message: 'Meta details already exist. Use update instead.' });
    }

    // Create new meta details
    const metaHomeDetails = await metahomedetails.create({
      metaTitle,
      metaKeywords,
      metaDescription,
    });

    res.status(201).json({ success: true, message: 'Meta details created successfully.', metaHomeDetails });
  } catch (error) {
    console.error('Error creating meta details:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};

// Update Meta Details
// Update Meta Details
exports.updateMetaHomeDetails = async (req, res) => {
    try {
      const { metaTitle, metaKeywords, metaDescription } = req.body;
  
      // Validate request body
      if (!metaTitle || !metaKeywords || !metaDescription) {
        return res.status(400).json({
          success: false,
          message: 'All fields are required: metaTitle, metaKeywords, metaDescription.',
        });
      }
  
      // Fetch existing meta details
      const metaHomeDetails = await metahomedetails.findOne();
  
      if (!metaHomeDetails) {
        console.error("Meta details not found in database.");
        return res.status(404).json({ success: false, message: 'Meta details not found. Use create instead.' });
      }
  
      // Update fields
      metaHomeDetails.metaTitle = metaTitle;
      metaHomeDetails.metaKeywords = metaKeywords;
      metaHomeDetails.metaDescription = metaDescription;
  
      // Save updated meta details
      const updatedMeta = await metaHomeDetails.save();
  
      res.status(200).json({
        success: true,
        message: 'Meta details updated successfully.',
        metaHomeDetails: updatedMeta,
      });
    } catch (error) {
      console.error('Error updating meta details:', error.message);
      res.status(500).json({ success: false, message: 'Internal server error.' });
    }
  };
  