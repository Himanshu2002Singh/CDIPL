const multer = require('multer');
const express = require('express');
const router = express.Router();

// Configure multer for image uploads (limit file size to 5MB)
const upload = multer({
  limits: { fileSize: 5 * 1024 * 1024 },
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'blogfolder/'), // Save images to blogfolder
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
  }),
});

router.post('/upload', upload.single('image'), (req, res) => {
  try {
    const fileUrl = `http://localhost:5000/blogfolder/${req.file.filename}`;
    res.status(200).json({ url: fileUrl });
  } catch (error) {
    console.error('Image upload error:', error);
    res.status(500).json({ error: 'Image upload failed' });
  }
});

module.exports = router;
