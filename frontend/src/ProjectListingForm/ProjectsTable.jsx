import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MetaDetailsForm from './MetaDetailsForm';
import MetaForm from './SeoPannel';
import config from '../config';
import './ProjectTable.css';
import MetaAboutForm from './AboutSeo';
import MetaContactForm from './MetaContactForm';
import MetaProjectForm from './ProjectMeta';

const ProjectsTable = () => {
  const [activePage, setActivePage] = useState('Home');
  const [projects, setProjects] = useState([]);
  const [popupData, setPopupData] = useState({ isOpen: false, action: '', itemName: '' });

  const pages = ['Home', 'About', 'Contact Us', 'Blogs', 'Project List', 'Project Details'];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const endpointMap = {
          Home: '/home-meta',
          About: '/about-meta',
          'Contact Us': '/contact-meta',
          Blogs: '/fetchBlogs',
          'Project List': '/all-project',
          'Project Details': '/fetchprojects',
        };

        const response = await axios.get(`${config.baseURL}${endpointMap[activePage]}`);
        setProjects(response.data.items || response.data.projects || []);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // alert(`Failed to load ${activePage} data.`);
      }
    };

    fetchProjects();
  }, [activePage]);

  const openPopup = (action, itemName) => {
    setPopupData({ isOpen: true, action, itemName });
  };

  const closePopup = () => {
    setPopupData({ isOpen: false, action: '', itemName: '' });
  };

  const renderTable = () => {
    if (activePage === 'Project Details') {
      // Multi-row table for Project Details
      return (
        <table className="metadd-table">
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
              <tr key={project.title}>
                <td>{project.name}</td>
                <td>{project.location}</td>
                <td>{project.startingPrice}</td>
                <td>{project.propertyType}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      onClick={() => openPopup('Add Meta', project.name)}
                      className="metadd-btn metadd-add-btn"
                    >
                      Add Meta
                    </button>
                    <button
                      onClick={() => openPopup('Update Meta', project.name)}
                      className="metadd-btn metadd-update-btn"
                    >
                      Update Meta
                    </button>
                    <button
                      onClick={() => openPopup('Delete Meta', project.name)}
                      className="metadd-btn metadd-delete-btn"
                    >
                      Delete Meta
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    // Single-row table for other pages
    return (
      <table className="metadd-table">
        <thead>
          <tr>
            <th>Page Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{activePage} Page</td>
            <td>
              <div className="action-buttons">
                <button
                  onClick={() => openPopup('Add Meta', `${activePage} Page`)}
                  className="metadd-btn metadd-add-btn"
                >
                  Add Meta
                </button>
                <button
                  onClick={() => openPopup('Update Meta', `${activePage} Page`)}
                  className="metadd-btn metadd-update-btn"
                >
                  Update Meta
                </button>
                <button
                  onClick={() => openPopup('Delete Meta', `${activePage} Page`)}
                  className="metadd-btn metadd-delete-btn"
                >
                  Delete Meta
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const renderPopupForm = () => {
    if (popupData.isOpen) {
      if (activePage === 'Home') {
        // Render MetaForm for Home Page
        return (
          <MetaForm
            action={popupData.action}
            itemName={popupData.itemName}
            onClose={closePopup}
          />
        );
      } else if (activePage === 'Project Details') {
        // Render MetaDetailsForm for Project Details Page
        return (
          <MetaDetailsForm
            action={popupData.action}
            itemName={popupData.itemName}
            onClose={closePopup}
          />
        );
      }

      else if (activePage === 'About') {
        // Render MetaDetailsForm for Project Details Page
        return (
          <MetaAboutForm
            action={popupData.action}
            itemName={popupData.itemName}
            onClose={closePopup}
          />
        );
  }

  else if (activePage === 'Contact Us') {
    // Render MetaDetailsForm for Project Details Page
    return (
      <MetaContactForm
        action={popupData.action}
        itemName={popupData.itemName}
        onClose={closePopup}
      />
    );
}

else if (activePage === 'Project List') {
  // Render MetaDetailsForm for Project Details Page
  return (
    <MetaProjectForm
      action={popupData.action}
      itemName={popupData.itemName}
      onClose={closePopup}
    />
  );
}
    }
    return null;
  };

  return (
    <div className="projects-table" style={{ marginTop: '5%' }}>
      <h2>{activePage}</h2>

      {/* Navigation Buttons */}
      <div className="page-navigation">
        {pages.map((page) => (
          <button
            key={page}
            className={`metadd-btn metadd-nav-btn ${page === activePage ? 'active' : ''}`}
            onClick={() => setActivePage(page)}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Render Dynamic Table */}
      {renderTable()}

      {/* Conditional Popup Form */}
      {renderPopupForm()}
    </div>
  );
};

export default ProjectsTable;
