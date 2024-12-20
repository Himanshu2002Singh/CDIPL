import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import Topbar from '../scenes/global/Topbar';
import Sidebar from '../scenes/global/Sidebar';
import { CssBaseline, ThemeProvider, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";

const UpdateFloorPlan = ({ tittle }) => {
  const [floorPlans, setFloorPlans] = useState([]);
  const [floorDetails, setFloorDetails] = useState({
    bhk: '',
    area: '',
    price: '',
    image: null,
  });

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);
  const [openPopup, setOpenPopup] = useState(false); // For the popup form

  useEffect(() => {
    // Fetch all floor plans
    axios.get(`${config.baseURL}/floorplans/${tittle}`)
      .then((response) => {
        if (response.data.length > 0) {
          setFloorPlans(response.data); // Set the floor plans list
        }
      })
      .catch((error) => console.error("Error fetching floor plans:", error));
  }, [tittle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFloorDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFloorDetails((prevDetails) => ({ ...prevDetails, image: e.target.files[0] }));
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRowClick = (floorPlan) => {
    setFloorDetails({
      bhk: floorPlan.bhk,
      area: floorPlan.area,
      price: floorPlan.price,
      image: null,
    });
    setImagePreview(floorPlan.imageUrl);
    setOpenPopup(true); // Open the popup form when a row is clicked
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('bhk', floorDetails.bhk);
    formData.append('area', floorDetails.area);
    formData.append('price', floorDetails.price);
    if (floorDetails.image) {
      formData.append('image', floorDetails.image);
    }

    axios.put(`${config.baseURL}/floorplans/${tittle}`, formData)
      .then((response) => {
        alert(response.data.message);
        setOpenPopup(false); // Close the popup after updating
      })
      .catch((error) => {
        console.error("Error updating floor plan:", error);
        alert('Error updating floor plan');
      });
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
              <div className="floor-plans-list">
                <h2>Available Floor Plans</h2>
                <table>
                  <thead>
                    <tr>
                      <th>BHK</th>
                      <th>Area (sq ft)</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {floorPlans.map((floorPlan) => (
                      <tr key={floorPlan.id}>
                        <td>{floorPlan.bhk}</td>
                        <td>{floorPlan.area}</td>
                        <td>{floorPlan.price}</td>
                        <td>
                          <button onClick={() => handleRowClick(floorPlan)}>Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Popup form to update floor plan */}
              <Dialog open={openPopup} onClose={() => setOpenPopup(false)}>
                <DialogTitle>Update Floor Plan</DialogTitle>
                <DialogContent>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label>BHK</label>
                      <input
                        type="number"
                        name="bhk"
                        value={floorDetails.bhk}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label>Area (sq ft)</label>
                      <input
                        type="number"
                        name="area"
                        value={floorDetails.area}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label>Price</label>
                      <input
                        type="number"
                        name="price"
                        value={floorDetails.price}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label>Floor Plan Image</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      {imagePreview && <img src={imagePreview} alt="Preview" width="100" />}
                    </div>
                    <DialogActions>
                      <Button onClick={() => setOpenPopup(false)} color="primary">Cancel</Button>
                      <Button type="submit" color="primary">Update</Button>
                    </DialogActions>
                  </form>
                </DialogContent>
              </Dialog>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
};

export default UpdateFloorPlan;
