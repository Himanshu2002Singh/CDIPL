import React, { useState } from 'react';
import axios from 'axios'; // You can use fetch or axios based on your backend setup
import './ProjectForm.css';
import { useNavigate } from 'react-router-dom';
import Topbar from '../scenes/global/Topbar';
import Sidebar from '../scenes/global/Sidebar';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";

const ProjectForm = () => {
    const [formData, setFormData] = useState({
        tittle:'',
        name: '',
        location: '',
        superArea: '',
        avgPrice: '',
        totalArea: '',
        propertyType: '',
        possession: '',
        reraId: '',
        description: '',
        proximity: '',
        investmentpotential: '',
        startingPrice: '',
      });
    
      const [message, setMessage] = useState('');
      const [error, setError] = useState('');
      const navigate = useNavigate();
      const [loading, setLoading] = useState(false);
      const [theme, colorMode] = useMode();
      const [isSidebar, setIsSidebar] = useState(true);
      const [step, setStep] = useState(1); // Tracks the current step of the form
      
    
      // Handle input change
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      // Handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        setLoading(true);
    
        try {
           // Basic form validation for startingPrice to be a valid number
           
          const response = await axios.post('http://localhost:5000/api/projects', formData);
    
          if (response.data.success) {
            setMessage('Form data submitted successfully');
            // setSetw(formData.tittle);
            setFormData({
              tittle:'',
              name: '',
              location: '',
              superArea: '',
              avgPrice: '',
              totalArea: '',
              propertyType: '',
              possession: '',
              reraId: '',
              description: '',
              proximity: '',
              investmentpotential: '',
              startingPrice: '',
            });
            setLoading(false);
              
      // Navigate to the Amenities form with project ID
      navigate(`/amenities-form/${formData.tittle}`);
          }
        } catch (error) {
          setLoading(false);
          setError('Error submitting form: ' + error.response.data.message);
        }
      };
    
      // Handle Next button to go to next step of the form
      const handleNext = (e) => {
        e.preventDefault();
        setStep(step + 1);
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
    <div className="projectlisting-container projectlisting-mt-5">
      <h2 style={{color:'black'}}>Submit Project Details</h2>
      
      {step === 1 && (
        <form onSubmit={handleNext}>
          <div className="projectlisting-mb-3">
            <label htmlFor="tittle" className="projectlisting-form-label">Project Tittle</label>
            <input
              type="text"
              className="projectlisting-form-control"
              id="tittle"
              name="tittle"
              value={formData.tittle}
              onChange={handleChange}
              placeholder="Enter project tittle"
              required
            />
          </div>
          <div className="projectlisting-mb-3">
            <label htmlFor="name" className="projectlisting-form-label">Project Name</label>
            <input
              type="text"
              className="projectlisting-form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter project name"
              required
            />
          </div>
          <div className="projectlisting-mb-3">
            <label htmlFor="location" className="projectlisting-form-label">Location</label>
            <input
              type="text"
              className="projectlisting-form-control"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
              required
            />
          </div>
          <div className="projectlisting-mb-3">
            <label htmlFor="superArea" className="projectlisting-form-label">Super Area</label>
            <input
              type="text"
              className="projectlisting-form-control"
              id="superArea"
              name="superArea"
              value={formData.superArea}
              onChange={handleChange}
              placeholder="Enter super area (sqft)"
              required
            />
          </div>
          <div className="projectlisting-mb-3">
            <label htmlFor="avgPrice" className="projectlisting-form-label">Avg. Price</label>
            <input
              type="text"
              className="projectlisting-form-control"
              id="avgPrice"
              name="avgPrice"
              value={formData.avgPrice}
              onChange={handleChange}
              placeholder="Enter avg. price per sqft"
              required
            />
          </div>
          <div className="projectlisting-mb-3">
            <label htmlFor="totalArea" className="projectlisting-form-label">Total Area</label>
            <input
              type="text"
              className="projectlisting-form-control"
              id="totalArea"
              name="totalArea"
              value={formData.totalArea}
              onChange={handleChange}
              placeholder="Enter total area (acres)"
              required
            />
          </div>
          <div className="projectlisting-mb-3">
            <label htmlFor="propertyType" className="projectlisting-form-label">Property Type</label>
            <input
              type="text"
              className="projectlisting-form-control"
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              placeholder="Enter property type"
              required
            />
          </div>
          <div className="projectlisting-mb-3">
            <label htmlFor="possession" className="projectlisting-form-label">Possession</label>
            <input
              type="text"
              className="projectlisting-form-control"
              id="possession"
              name="possession"
              value={formData.possession}
              onChange={handleChange}
              placeholder="Enter possession (years)"
              required
            />
          </div>
          <div className="projectlisting-mb-3">
            <label htmlFor="reraId" className="projectlisting-form-label">RERA ID</label>
            <input
              type="text"
              className="projectlisting-form-control"
              id="reraId"
              name="reraId"
              value={formData.reraId}
              onChange={handleChange}
              placeholder="Enter RERA ID"
              required
            />
          </div>
          <button type="submit" className="projectlisting-btn projectlisting-btn-primary">Next</button>
        </form>
      )}
      
      {step === 2 && (
        <form onSubmit={handleSubmit}>
          <div className="projectlisting-mb-3">
            <label htmlFor="description">Project Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter project description"
              required
            />
          </div>
          <div className="projectlisting-mb-3">
            <label htmlFor="proximity">Prime Location</label>
            <input
              type="text"
              id="proximity"
              name="proximity"
              value={formData.proximity}
              onChange={handleChange}
              placeholder="Enter prime locations"
              required
            />
          </div>
          <div className="projectlisting-mb-3">
            <label htmlFor="investmentpotential">Investment Potential</label>
            <input
              type="text"
              id="investmentpotential"
              name="investmentpotential"
              value={formData.investmentpotential}
              onChange={handleChange}
              placeholder="Enter Investment Potential"
              required
            />
          </div>
          <div className="projectlisting-mb-3">
            <label htmlFor="startingPrice">Starting Price</label>
            <input
              type="text"
              id="startingPrice"
              name="startingPrice"
              value={formData.startingPrice}
              onChange={handleChange}
              placeholder="Enter Starting Price"
              required
            />
          </div>
          <button type="submit" className="projectlisting-btn projectlisting-btn-primary">Submit</button>
        </form>
      )}

      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>

    </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
      </div>
  );
};

export default ProjectForm;
