import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MetaDetailsForm from './MetaDetailsForm';
import config from '../config';
import './ProjectTable.css';

const ProjectsTable = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${config.baseURL}/fetchprojects`);
        setProjects(response.data.projects);
      } catch (error) {
        console.error('Error fetching projects:', error);
        alert('Failed to load projects.');
      }
    };

    fetchProjects();
  }, []);

  const handleAddMeta = (projectTittle) => {
    setSelectedProject(projectTittle);
  };

  const closeMetaForm = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-table" style={{marginTop:'7%'}}>
      <h2>Projects</h2>
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Location</th>
            <th>Starting Price</th>
            <th>Property Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.tittle}>
              <td>{project.name}</td>
              <td>{project.location}</td>
              <td>{project.startingPrice}</td>
              <td>{project.propertyType}</td>
              <td>
                <button
                  onClick={() => handleAddMeta(project.tittle)}
                  className="add-meta-btn"
                >
                  Add Meta
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedProject && (
        <MetaDetailsForm projectTittle={selectedProject} onClose={closeMetaForm} />
      )}
    </div>
  );
};

export default ProjectsTable;
