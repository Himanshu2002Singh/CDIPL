const express = require('express');
const { createFloorDetails, getFloorDetailsByTittle , updateFloorDetails } = require('../controllers/floorDetailsController');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Sanitize title to create a valid folder name
    const sanitizedTittle = req.params.tittle.replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    const folderPath = path.join(__dirname, `../uploads/floorplans/${sanitizedTittle}`);
    
    // Ensure directory creation for the floorplan folder
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    
    cb(null, folderPath); // Upload directly to the target directory
  },
  filename: (req, file, cb) => {
    // Use the original name for the uploaded file to avoid confusion; could add timestamp for uniqueness
    cb(null, file.originalname);
  },
});

const upload = multer({ storage }); // Configure multer with storage

const router = express.Router();

// Route to create new floor details
router.post('/upload/floorplan/:tittle', upload.single('image'), createFloorDetails);

// Route to get floor details by title
router.get('/floorplans/:tittle', getFloorDetailsByTittle);


// Update floor details route
router.post('/updatefloor/:tittle', upload.single('image'), updateFloorDetails);


module.exports = router;
