import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import config from '../config';
import './FloorDetails.css'; // Include your custom CSS file

import Topbar from '../scenes/global/Topbar';
import Sidebar from '../scenes/global/Sidebar';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";

const FloorDetails = () => {
  const { tittle } = useParams(); // Get project title from URL parameters

  // State to handle multiple floor plans
  const [floorPlans, setFloorPlans] = useState([{ bhk: '', area: '', price: '', image: null }]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  // Function to handle dynamic floor plan input changes
  const handleFloorPlanChange = (index, field) => (e) => {
    const updatedFloorPlans = [...floorPlans];
    if (field === 'image') {
      updatedFloorPlans[index][field] = e.target.files[0];
    } else {
      updatedFloorPlans[index][field] = e.target.value;
    }
    setFloorPlans(updatedFloorPlans);
  };

  // Function to add more floor plan entries
  const handleAddMoreFloorPlan = () => {
    setFloorPlans([...floorPlans, { bhk: '', area: '', price: '', image: null }]);
  };

  // Function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!floorPlans.length) {
      setError('Please add at least one floor plan.');
      return;
    }

    // Upload each floor plan
    for (let i = 0; i < floorPlans.length; i++) {
      const formData = new FormData();
      formData.append('bhk', floorPlans[i].bhk);
      formData.append('area', floorPlans[i].area);
      formData.append('price', floorPlans[i].price);
      formData.append('image', floorPlans[i].image);

      try {
        await axios.post(`${config.baseURL}/upload/floorplan/${tittle}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        setMessage((prev) => `${prev}\nFloor plan ${i + 1} uploaded successfully!`);
        navigate(`/additional/${tittle}`);
        
      } catch (error) {
        setError((prev) => `${prev}\nError uploading floor plan ${i + 1}: ` + (error.response?.data?.message || error.message));
      }
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
    
    <div className="floor-details-container">
      <h2 className="form-title">Upload Floor Plans for {tittle}</h2>
      <form className="floor-details-form" onSubmit={handleSubmit}>
        {floorPlans.map((plan, index) => (
          <div key={index} className="floor-plan-entry">
            <div className="form-group">
              <label>BHK Type</label>
              <input
                type="text"
                value={plan.bhk}
                onChange={handleFloorPlanChange(index, 'bhk')}
                placeholder="Enter BHK Type (e.g., 2BHK, 3BHK)"
                required
              />
            </div>
            <div className="form-group">
              <label>Built-up Area (Sq.ft)</label>
              <input
                type="text"
                value={plan.area}
                onChange={handleFloorPlanChange(index, 'area')}
                placeholder="Enter Built-up Area"
                required
              />
            </div>
            <div className="form-group">
              <label>Price (in Cr)</label>
              <input
                type="text"
                value={plan.price}
                onChange={handleFloorPlanChange(index, 'price')}
                placeholder="Enter Price"
                required
              />
            </div>
            <div className="form-group">
              <label>Upload Floor Plan Image</label>
              <input
                type="file"
                onChange={handleFloorPlanChange(index, 'image')}
                
              />
            </div>
          </div>
        ))}

        <button type="button" className="add-more-button" onClick={handleAddMoreFloorPlan}>
          Add More Floor Plan
        </button>
        <button type="submit" className="submit-button">Upload Floor Plans</button>
      </form>

      {message && <pre className="feedback-message">{message}</pre>}
      {error && <pre className="error-message">{error}</pre>}
    </div>
    </main>
    </div></ThemeProvider></ColorModeContext.Provider></div>
  );
};

export default FloorDetails;
