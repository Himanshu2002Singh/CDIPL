const MetaDetails = require('../models/MetaDetails');
const Project = require('../models/projectModel');

// Add MetaDetails
const addMetaDetails = async (req, res) => {
  const { metaTitle , metaDescription,metaKeywords,  projectTittle } = req.body;

  try {
    const project = await Project.findOne({ where: { tittle: projectTittle } });

    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    const metaDetails = await MetaDetails.create({ metaTitle, metaDescription,metaKeywords, projectTittle });
    res.status(201).json({ success: true, message: 'MetaDetails added successfully', metaDetails });
  } catch (error) {
    console.error('Error adding MetaDetails:', error);
    res.status(500).json({ success: false, message: 'Error adding MetaDetails', error: error.message });
  }
};

// Fetch MetaDetails
const fetchMetaDetails = async (req, res) => {
  const { projectTittle } = req.params;

  try {
    const metaDetails = await MetaDetails.findOne({ where: { projectTittle } });

    if (!metaDetails) {
      return res.status(404).json({ success: false, message: 'MetaDetails not found' });
    }

    res.status(200).json({ success: true, metaDetails });
  } catch (error) {
    console.error('Error fetching MetaDetails:', error);
    res.status(500).json({ success: false, message: 'Error fetching MetaDetails', error: error.message });
  }
};

// Update MetaDetails
const updateMetaDetails = async (req, res) => {
  const { projectTittle } = req.params;

  try {
    const metaDetails = await MetaDetails.findOne({ where: { projectTittle } });

    if (!metaDetails) {
      return res.status(404).json({ success: false, message: 'MetaDetails not found' });
    }

    await metaDetails.update(req.body);
    res.status(200).json({ success: true, message: 'MetaDetails updated successfully', metaDetails });
  } catch (error) {
    console.error('Error updating MetaDetails:', error);
    res.status(500).json({ success: false, message: 'Error updating MetaDetails', error: error.message });
  }
};

// Delete MetaDetails
const deleteMetaDetails = async (req, res) => {
  const { projectTittle } = req.params;

  try {
    const metaDetails = await MetaDetails.findOne({ where: { projectTittle } });

    if (!metaDetails) {
      return res.status(404).json({ success: false, message: 'MetaDetails not found' });
    }

    await metaDetails.destroy();
    res.status(200).json({ success: true, message: 'MetaDetails deleted successfully' });
  } catch (error) {
    console.error('Error deleting MetaDetails:', error);
    res.status(500).json({ success: false, message: 'Error deleting MetaDetails', error: error.message });
  }
};

module.exports = { addMetaDetails, fetchMetaDetails, updateMetaDetails, deleteMetaDetails };
