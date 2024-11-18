const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Storage configuration for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const { title, category } = req.params;

    // Define the folder path using project title and category
    const folderPath = path.join(__dirname, '..', 'uploads', title, category);

    // Create the folder if it doesn't exist
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    cb(null, folderPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Save file with timestamp
  },
});

// File filter to allow only image and video uploads
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|webp|avif|mp4|avi/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    cb(null, true);
  } else {
    cb(new Error('Only images and videos are allowed!'), false);
  }
};

// Configure multer with storage, limits, and file filter
const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 }, // Limit file size to 10MB
  fileFilter: fileFilter,
});

module.exports = upload;
