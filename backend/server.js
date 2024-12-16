const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const { connectDB } = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes'); // Updated route for projects
const amenitiesRoutes = require('./routes/amenitiesRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const contentRoutes = require('./routes/contentRoutes');
const imageRoutes = require('./routes/imageRoutes');
const floorDetailsRoutes = require('./routes/floorDetailsRoutes');
const additionalDetailsRoutes = require('./routes/additionalDetails');
const contactMessageRoutes = require('./routes/contactMessageRoutes');
const  addMetaDetails  = require('./routes/adMetaRoutes');
const aboutMetaRoutes = require('./routes/aboutMetaRoutes');
const contactMetaRoutes = require('./routes/contactMetaRoutes');
const metaRoutes = require('./routes/metaRoutes');
const allprojectMeta = require('./routes/allprojectMetaRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Middleware for body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the database
connectDB();

// Serve static files from the blogfolder directory
app.use('/blogfolder', express.static(path.join(__dirname, 'blogfolder')));

// Routes for the different API endpoints
app.use('/api', userRoutes);
app.use('/api', projectRoutes);
app.use('/api', amenitiesRoutes);
app.use('/api', floorDetailsRoutes);
app.use('/api', uploadRoutes);
app.use('/api', additionalDetailsRoutes);
app.use('/api/inquiries', contactMessageRoutes);
app.use('/api',addMetaDetails);
app.use('/api', contentRoutes);
app.use('/api', imageRoutes);

// Serve static files (e.g., uploaded images) from the blogfolder
app.use('/blogfolder', express.static(path.join(__dirname, 'blogfolder')));

// Routes
app.use('/api', metaRoutes);

// Routes
app.use('/api', aboutMetaRoutes);
// Routes
app.use('/api', contactMetaRoutes);

// Routes
app.use('/api', allprojectMeta);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
