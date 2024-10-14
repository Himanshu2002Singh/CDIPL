import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Projectlist.css'; // Ensure this is your correct CSS file
import Topbar from '../scenes/global/Topbar';
import Sidebar from '../scenes/global/Sidebar';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import config from '../config';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [step, setStep] = useState(1); // Tracks the current step of the form
    
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${config.baseURL}/fetchprojects`);
      setProjects(response.data.projects);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const deleteProject = async (tittle) => {
    try {
      await axios.delete(`${config.baseURL}/project/${tittle}`);
      fetchProjects(); // Refresh the project list
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (

    <div>
        
  
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
    <div className="projectlist-container">
      <h2>Project List</h2>
      <table className="projectlist-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Name</th>
            <th>Location</th>
            <th>Super Area</th>
            <th>Avg Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.tittle}>
              <td>{project.tittle}</td>
              <td>{project.name}</td>
              <td>{project.location}</td>
              <td>{project.superArea}</td>
              <td>{project.avgPrice}</td>
              <td>
                <button className="projectlist-button" onClick={() => deleteProject(project.tittle)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
      </div>
  );
};

export default ProjectList;
