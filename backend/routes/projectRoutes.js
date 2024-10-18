const express = require('express');
const { submitProject, fetchProjects, fetchProjectByTittle , deleteProjectByTittle ,updateProject  } = require('../controllers/projectController');

const router = express.Router();


// POST route for project submission
router.post('/projects', submitProject);


// GET route to fetch all projects
router.get('/fetchprojects', fetchProjects);

// GET route to fetch a project by tittle
// GET route to fetch a project by tittle
router.get('/project/:tittle', fetchProjectByTittle);


router.get('/updateproject/:tittle' ,updateProject);

// Route to delete a single project by title
router.delete('/deleteproject/:tittle', deleteProjectByTittle);




module.exports = router;
