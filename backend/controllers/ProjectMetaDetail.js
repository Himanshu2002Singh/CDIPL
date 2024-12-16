const metaallproject = require('../models/MetaProject');

// Fetch Meta Details
exports.getMetaAllProjectDetails = async (req, res) => {
  try {
    const metaAllProjectDetails = await metaallproject.findOne();
    if (!metaAllProjectDetails) {
      return res.status(404).json({ success: false, message: 'Meta Project details not found.' });
    }
    res.status(200).json({ success: true, metaAllProjectDetails });
  } catch (error) {
    console.error('Error fetching Meta Project details:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};

// Create Meta Details
exports.createMetAllProjectDetails = async (req, res) => {
  try {
    const { metaTitle, metaKeywords, metaDescription } = req.body;

    // Check if meta details already exist
    const existingMeta = await metaallproject.findOne();
    if (existingMeta) {
      return res.status(400).json({ success: false, message: 'Meta Project details already exist. Use update instead.' });
    }

    // Create new meta details
    const metaAllProjectDetails = await metaallproject.create({
      metaTitle,
      metaKeywords,
      metaDescription,
    });

    res.status(201).json({ success: true, message: 'Meta Project details created successfully.', metaAllProjectDetails });
  } catch (error) {
    console.error('Error creating Meta Project details:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};

// Update Meta Details
exports.updateMetaAllProjectDetails = async (req, res) => {
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
    const metaAllProjectDetails = await metaallproject.findOne();

    if (!metaAllProjectDetails) {
      console.error("Meta Project details not found in database.");
      return res.status(404).json({ success: false, message: 'Meta Project details not found. Use create instead.' });
    }

    // Update fields
    metaAllProjectDetails.metaTitle = metaTitle;
    metaAllProjectDetails.metaKeywords = metaKeywords;
    metaAllProjectDetails.metaDescription = metaDescription;

    // Save updated meta details
    const updatedMeta = await metaallproject.save();

    res.status(200).json({
      success: true,
      message: 'Meta Project details updated successfully.',
      metaAllProjectDetails: updatedMeta,
    });
  } catch (error) {
    console.error('Error updating Meta Project details:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};
