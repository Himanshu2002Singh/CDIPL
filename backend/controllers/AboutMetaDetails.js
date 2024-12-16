const metaabout = require('../models/MetaAbout');

// Fetch Meta Details
exports.getMetaAboutDetails = async (req, res) => {
  try {
    const metaAboutDetails = await metaabout.findOne();
    if (!metaAboutDetails) {
      return res.status(404).json({ success: false, message: 'Meta About details not found.' });
    }
    res.status(200).json({ success: true, metaAboutDetails });
  } catch (error) {
    console.error('Error fetching Meta About details:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};

// Create Meta Details
exports.createMetaAboutDetails = async (req, res) => {
  try {
    const { metaTitle, metaKeywords, metaDescription } = req.body;

    // Check if meta details already exist
    const existingMeta = await metaabout.findOne();
    if (existingMeta) {
      return res.status(400).json({ success: false, message: 'Meta About details already exist. Use update instead.' });
    }

    // Create new meta details
    const metaAboutDetails = await metaabout.create({
      metaTitle,
      metaKeywords,
      metaDescription,
    });

    res.status(201).json({ success: true, message: 'Meta About details created successfully.', metaAboutDetails });
  } catch (error) {
    console.error('Error creating Meta About details:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};

// Update Meta Details
exports.updateMetaAboutDetails = async (req, res) => {
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
    const metaAboutDetails = await metaabout.findOne();

    if (!metaAboutDetails) {
      console.error("Meta About details not found in database.");
      return res.status(404).json({ success: false, message: 'Meta About details not found. Use create instead.' });
    }

    // Update fields
    metaAboutDetails.metaTitle = metaTitle;
    metaAboutDetails.metaKeywords = metaKeywords;
    metaAboutDetails.metaDescription = metaDescription;

    // Save updated meta details
    const updatedMeta = await metaAboutDetails.save();

    res.status(200).json({
      success: true,
      message: 'Meta About details updated successfully.',
      metaAboutDetails: updatedMeta,
    });
  } catch (error) {
    console.error('Error updating Meta About details:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};
