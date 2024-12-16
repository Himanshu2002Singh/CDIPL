const metacontact = require('../models/MetaContact');

// Fetch Meta Details
exports.getMetaContactDetails = async (req, res) => {
  try {
    const metaContactDetails = await metacontact.findOne();
    if (!metaContactDetails) {
      return res.status(404).json({ success: false, message: 'Meta Contact details not found.' });
    }
    res.status(200).json({ success: true, metaContactDetails });
  } catch (error) {
    console.error('Error fetching Meta Contact details:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};

// Create Meta Details
exports.createMetaContactDetails = async (req, res) => {
  try {
    const { metaTitle, metaKeywords, metaDescription } = req.body;

    // Check if meta details already exist
    const existingMeta = await metacontact.findOne();
    if (existingMeta) {
      return res.status(400).json({ success: false, message: 'Meta Contact details already exist. Use update instead.' });
    }

    // Create new meta details
    const metaContactDetails = await metacontact.create({
      metaTitle,
      metaKeywords,
      metaDescription,
    });

    res.status(201).json({ success: true, message: 'Meta Contact details created successfully.', metaContactDetails });
  } catch (error) {
    console.error('Error creating Meta Conytact details:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};

// Update Meta Details
exports.updateMetaContactDetails = async (req, res) => {
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
    const metaContactDetails = await metacontact.findOne();

    if (!metaContactDetails) {
      console.error("Meta Contact details not found in database.");
      return res.status(404).json({ success: false, message: 'Meta Contact details not found. Use create instead.' });
    }

    // Update fields
    metaContactDetails.metaTitle = metaTitle;
    metaContactDetails.metaKeywords = metaKeywords;
    metaContactDetails.metaDescription = metaDescription;

    // Save updated meta details
    const updatedMeta = await metaContactDetails.save();

    res.status(200).json({
      success: true,
      message: 'Meta Contact details updated successfully.',
      metaContactDetails: updatedMeta,
    });
  } catch (error) {
    console.error('Error updating Meta Contact details:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};
