const Project = require('../models/projectModel');

const submitProject = async (req, res) => {
  const {
    tittle,
    name,
    location,
    superArea,
    avgPrice,
    totalArea,
    propertyType,
    possession,
    reraId,
    description,
    proximity,
    investmentpotential,
    startingPrice
  } = req.body;

  // Input validation (basic example, you can enhance it further)
  if (!tittle || !name || !location || !avgPrice || !totalArea) {
    return res.status(400).json({ success: false, message: 'Required fields are missing' });
  }

  try {
    // Create new project
    const project = await Project.create({
      tittle,
      name,
      location,
      superArea,
      avgPrice,
      totalArea,
      propertyType,
      possession,
      reraId,
      projectDescription: description,
      proximity,
      investmentPotential: investmentpotential,
      startingPrice,
    });

    res.status(201).json({ success: true, message: 'Project submitted successfully', project });
  } catch (error) {
    console.error('Error submitting project:', error);
    res.status(500).json({ success: false, message: 'Error submitting project', error: error.message });
  }
};



// Fetch all projects
const fetchProjects = async (req, res) => {
  try {
    const projects = await Project.findAll(); // Fetch all projects from the database
    res.status(200).json({ success: true, projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ success: false, message: 'Error fetching projects', error: error.message });
  }
};

// Fetch a single project by tittle
const fetchProjectByTittle = async (req, res) => {
  const { tittle } = req.params;

  try {
    const project = await Project.findOne({ where: { tittle } });
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.status(200).json({ success: true, project });
  } catch (error) {
    console.error('Error fetching project by tittle:', error);
    res.status(500).json({ success: false, message: 'Error fetching project', error: error.message });
  }
};




module.exports = { submitProject, fetchProjects, fetchProjectByTittle };