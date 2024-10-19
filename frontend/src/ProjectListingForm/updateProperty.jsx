import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import Topbar from '../scenes/global/Topbar';
import Sidebar from '../scenes/global/Sidebar';
import {
  CssBaseline, ThemeProvider, Dialog, DialogTitle, DialogContent, DialogActions,
  Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import './Updatelist.css';

const UpdateDetails = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentTab, setCurrentTab] = useState('projectDetails');
  const [floorDetailsFetched, setFloorDetailsFetched] = useState(false);
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${config.baseURL}/fetchprojects`);
        setProjects(response.data.projects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const fetchFloorDetails = async (title) => {
    try {
      const response = await axios.get(`${config.baseURL}/floorplans/${title}`);
      setSelectedProject((prevProject) => ({
        ...prevProject,
        floorDetails: response.data,
      }));
      setFloorDetailsFetched(true);
    } catch (error) {
      console.error('Error fetching floor details:', error);
    }
  };

  useEffect(() => {
    if (currentTab === 'floorDetails' && selectedProject && !floorDetailsFetched) {
      fetchFloorDetails(selectedProject.tittle);
    }
  }, [currentTab, selectedProject, floorDetailsFetched]);

  const handleEdit = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setFloorDetailsFetched(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleSaveProjectDetails = async (e) => {
    e.preventDefault();
    if (selectedProject && selectedProject.tittle) {
      try {
        await axios.post(`${config.baseURL}/updateproject/${selectedProject.tittle}`, selectedProject);
        alert("Project updated successfully!");
        setIsModalOpen(false);
        window.location.reload();
      } catch (error) {
        console.error('Error updating project:', error);
        alert('Failed to update project. Please check your input values.');
      }
    } else {
      alert('Project title is missing.');
    }
  };

  const handleFloorDetailChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFloorDetails = [...selectedProject.floorDetails];
    updatedFloorDetails[index] = { ...updatedFloorDetails[index], [name]: value };
    setSelectedProject((prevProject) => ({
      ...prevProject,
      floorDetails: updatedFloorDetails,
    }));
  };

  // Upload image for floor plans
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post(`${config.baseURL}/upload/floorplan/${selectedProject.tittle}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data.imageUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  const handleFloorImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      uploadImage(file).then((imageUrl) => {
        const updatedFloorDetails = [...selectedProject.floorDetails];
        updatedFloorDetails[index] = { ...updatedFloorDetails[index], imageUrl };
        setSelectedProject((prevProject) => ({
          ...prevProject,
          floorDetails: updatedFloorDetails,
        }));
      });
    }
  };

  const handleSaveFloorDetails = async (index) => {
    const floorDetail = selectedProject.floorDetails[index];
    const { bhk, area, price, id } = floorDetail;

    const formData = new FormData();
    formData.append('bhk', bhk);
    formData.append('area', area);
    formData.append('price', price);
    formData.append('id', id);

    try {
      await axios.post(`${config.baseURL}/floorplans/${selectedProject.tittle}`, formData);
      alert('Floor details updated successfully!');
      setFloorDetailsFetched(false); // Fetch floor details again if necessary
      // Optionally reload the project to reflect changes
      fetchFloorDetails(selectedProject.tittle);
    } catch (error) {
      console.error('Error updating floor details:', error);
      alert(error.response?.data?.message || 'Failed to update floor details.');
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedProject({ ...selectedProject, [name]: value });
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

              <div className="project-list">
                <h1>Project List</h1>
                {projects.length > 0 ? (
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Title</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>Location</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {projects.map((project) => (
                          <TableRow key={project.tittle}>
                            <TableCell>{project.tittle}</TableCell>
                            <TableCell>{project.name}</TableCell>
                            <TableCell>{project.location}</TableCell>
                            <TableCell>
                              <button
                                className="updatebutton"
                                onClick={() => handleEdit(project)}
                              >
                                Edit
                              </button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                ) : (
                  <p>No projects available.</p>
                )}
              </div>

              {selectedProject && (
                <Dialog open={isModalOpen} onClose={handleClose} fullWidth maxWidth="md">
                  <DialogTitle>Edit Project: {selectedProject.tittle}</DialogTitle>
                  <DialogContent>
                    <div className="tabs">
                      <div className="popupdatebutton-container">
                        <button
                          className={`popupdatebutton ${currentTab === 'projectDetails' ? 'active-tab' : ''}`}
                          onClick={() => setCurrentTab('projectDetails')}
                        >
                          Edit Project Details
                        </button>
                        <button
                          className={`popupdatebutton ${currentTab === 'floorDetails' ? 'active-tab' : ''}`}
                          onClick={() => setCurrentTab('floorDetails')}
                        >
                          Edit Floor Details
                        </button>
                        <button
                          className={`popupdatebutton ${currentTab === 'additionalDetails' ? 'active-tab' : ''}`}
                          onClick={() => setCurrentTab('additionalDetails')}
                        >
                          Edit Additional Details
                        </button>
                      </div>
                    </div>

                    {currentTab === 'projectDetails' && (
                      <form className="form-details" onSubmit={handleSaveProjectDetails}>
                        <h3>Project Details</h3>

                        <div className="form-row">
                          <label>Title</label>
                          <input type="text" name="tittle" value={selectedProject.tittle} onChange={handleInputChange} />
                        </div>

                        <div className="form-row">
                          <label>Name</label>
                          <input type="text" name="name" value={selectedProject.name} onChange={handleInputChange} />
                        </div>

                        <div className="form-row">
                          <label>Location</label>
                          <input type="text" name="location" value={selectedProject.location} onChange={handleInputChange} />
                        </div>

                        {/* New input fields for project details */}
                        <div className="form-row">
                          <label>Super Area</label>
                          <input type="text" name="superArea" value={selectedProject.superArea} onChange={handleInputChange} />
                        </div>

                        <div className="form-row">
                          <label>Average Price</label>
                          <input type="text" name="avgPrice" value={selectedProject.avgPrice} onChange={handleInputChange} />
                        </div>

                        <div className="form-row">
                          <label>Total Area</label>
                          <input type="text" name="totalArea" value={selectedProject.totalArea} onChange={handleInputChange} />
                        </div>

                        <div className="form-row">
                          <label>Property Type</label>
                          <input type="text" name="propertyType" value={selectedProject.propertyType} onChange={handleInputChange} />
                        </div>

                        <button type="submit">Save Project Details</button>
                      </form>
                    )}

                    {currentTab === 'floorDetails' && selectedProject.floorDetails && (
                      <div>
                        <h3>Floor Details</h3>
                        {selectedProject.floorDetails.map((floorDetail, index) => (
                          <div key={index} className="floor-detail">
                            <h4>Floor Detail {index + 1}</h4>
                            <div className="form-row">
                              <label>BHK</label>
                              <input
                                type="text"
                                name="bhk"
                                value={floorDetail.bhk}
                                onChange={(e) => handleFloorDetailChange(e, index)}
                              />
                            </div>

                            <div className="form-row">
                              <label>Area</label>
                              <input
                                type="text"
                                name="area"
                                value={floorDetail.area}
                                onChange={(e) => handleFloorDetailChange(e, index)}
                              />
                            </div>

                            <div className="form-row">
                              <label>Price</label>
                              <input
                                type="text"
                                name="price"
                                value={floorDetail.price}
                                onChange={(e) => handleFloorDetailChange(e, index)}
                              />
                            </div>

                            {/* New input fields for floor details */}
                            <div className="form-row">
                              <label>Floor Image</label>
                              <input
                                type="file"
                                onChange={(e) => handleFloorImageChange(e, index)}
                              />
                            </div>

                            <button onClick={() => handleSaveFloorDetails(index)}>Save Floor Detail</button>
                          </div>
                        ))}
                      </div>
                    )}

                    {currentTab === 'additionalDetails' && (
                      <form className="form-details">
                        <h3>Additional Project Details</h3>

                        <div className="form-row">
                          <label>Additional Features</label>
                          <textarea
                            name="additionalFeatures"
                            value={selectedProject.additionalFeatures}
                            onChange={handleInputChange}
                          />
                        </div>

                        <button type="submit">Save Additional Details</button>
                      </form>
                    )}
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                  </DialogActions>
                </Dialog>
              )}
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
};

export default UpdateDetails;
