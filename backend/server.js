const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const { connectDB } = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes'); // Updated route for projects
const amenitiesRoutes = require('./routes/amenitiesRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const floorDetailsRoutes = require('./routes/floorDetailsRoutes');
const additionalDetailsRoutes = require('./routes/additionalDetails');
const contactMessageRoutes = require('./routes/contactMessageRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to database
connectDB();


// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Routes
app.use('/api', userRoutes);
// Routes
app.use('/api', projectRoutes); // Using the project routes

app.use('/api' , amenitiesRoutes);


// Routes
app.use('/api', floorDetailsRoutes);



// Use the upload routes
app.use('/api', uploadRoutes);

// Use additional details routes
app.use('/api', additionalDetailsRoutes);

// Use the contact message routes
app.use('/api/inquiries', contactMessageRoutes);




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
