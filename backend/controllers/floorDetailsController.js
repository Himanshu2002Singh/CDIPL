const FloorDetails = require('../models/floorDetailsModel');
const path = require('path');
const fs = require('fs');

// Create new floor details with image upload
const createFloorDetails = async (req, res) => {
  try {
    const { bhk, area, price } = req.body;

    // Ensure tittle is provided
    const { tittle } = req.params;
    if (!tittle) {
      return res.status(400).json({ message: 'Title is required' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'No image file provided' });
    }

    // Sanitize title to create a valid folder name
    const sanitizedTittle = tittle.replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    const folderPath = path.join(__dirname, `../uploads/floorplans/${sanitizedTittle}`);

    // Define the uploaded file URL path
    const imageUrl = `/uploads/floorplans/${sanitizedTittle}/${req.file.filename}`;

    // Move the file to the correct directory
    const targetPath = path.join(folderPath, req.file.filename);
    fs.renameSync(req.file.path, targetPath); // Move file to the target directory

    // Save floor details to the database
    const newFloorDetail = await FloorDetails.create({
      tittle: sanitizedTittle,
      bhk,
      area,
      price,
      imageUrl,
    });

    res.status(201).json({ message: 'Floor plan details saved successfully', data: newFloorDetail });
  } catch (error) {
    console.error(`Error saving floor details: ${error.message}`);
    res.status(500).json({ message: 'Error saving floor details', error: error.message });
  }
};

// Fetch floor plans by title
const getFloorDetailsByTittle = async (req, res) => {
  try {
    const { tittle } = req.params;
    
    // Ensure tittle is provided
    if (!tittle) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const floorPlans = await FloorDetails.findAll({ where: { tittle } });

    if (!floorPlans.length) {
      return res.status(404).json({ message: 'No floor plans found for this title' });
    }

    res.status(200).json(floorPlans);
  } catch (error) {
    console.error(`Error fetching floor details: ${error.message}`);
    res.status(500).json({ message: 'Error fetching floor details', error: error.message });
  }
};


// Update floor details with optional image update
const updateFloorDetails = async (req, res) => {
  try {
    const { bhk, area, price } = req.body;
    const { tittle } = req.params;
    const { id } = req.body; // Assuming the floor detail ID is passed in the body

    // Ensure title and ID are provided
    if (!tittle || !id) {
      return res.status(400).json({ message: 'Title and floor detail ID are required' });
    }

    // Fetch the existing floor detail by ID and title
    const floorDetail = await FloorDetails.findOne({ where: { tittle, id } });

    if (!floorDetail) {
      return res.status(404).json({ message: 'Floor detail not found' });
    }

    // If there's a new image file, handle file upload
    let updatedImageUrl = floorDetail.imageUrl;
    if (req.file) {
      const sanitizedTittle = tittle.replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
      const folderPath = path.join(__dirname, `../uploads/floorplans/${sanitizedTittle}`);
      const newImageUrl = `/uploads/floorplans/${sanitizedTittle}/${req.file.filename}`;
      const targetPath = path.join(folderPath, req.file.filename);

      // Move the new image file
      fs.renameSync(req.file.path, targetPath);

      // Delete the old image file if it exists
      if (fs.existsSync(path.join(__dirname, `..${floorDetail.imageUrl}`))) {
        fs.unlinkSync(path.join(__dirname, `..${floorDetail.imageUrl}`));
      }

      updatedImageUrl = newImageUrl;
    }

    // Update floor details in the database
    await FloorDetails.update(
      { bhk, area, price, imageUrl: updatedImageUrl },
      { where: { id, tittle } }
    );

    res.status(200).json({ message: 'Floor details updated successfully' });
  } catch (error) {
    console.error(`Error updating floor details: ${error.message}`);
    res.status(500).json({ message: 'Error updating floor details', error: error.message });
  }
};


module.exports = {
  createFloorDetails,
  getFloorDetailsByTittle,
  updateFloorDetails,
};
