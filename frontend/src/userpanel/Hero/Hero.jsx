import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./Hero.css";
import herovideo from '../../assets/hero2.mp4';

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // State for search inputs
  const [searchParams, setSearchParams] = useState({
    location: '',
    landType: '',
    propertyType: '',
    name: ''
  });

  // Handle change in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle search form submission
  const handleSearch = () => {
    // Construct the query string from searchParams
    const queryString = new URLSearchParams(searchParams).toString();
    
    // Redirect to PropertyGrid page with query parameters
    navigate(`/property?${queryString}`);
  };

  return (
    <section className="heroSec">
      <video
        src={herovideo}
        className="heroVideo"
        playsInline
        autoPlay
        loop
        muted
      ></video>

      <div className="heroContent">
        <h1 className="heroHeading">Find & Buy Your Ideal Residential or Commercial Property with Confidence!</h1>

        <div className="searchContainer">
          <div className="inputGroup">
            <div className="formItem">
              <label htmlFor="locationSelect">Location</label>
              <select
                id="location"
                className="propertyTypeSelect"
                name="location"
                value={searchParams.location}
                onChange={handleChange}
              >
                <option value="">Select Location</option>
                <option value="noida">Noida</option>
                <option value="delhi">Delhi</option>
                <option value="Greater-Noida">Greater Noida</option>
                <option value="Yamuna-Express">Yamuna Expressway</option>
              </select>
            </div>

            <div className="formItem">
              <label htmlFor="landTypeSelect">Land Type</label>
              <select
                id="landType"
                className="propertyTypeSelect"
                name="landType"
                value={searchParams.landType}
                onChange={handleChange}
              >
                <option value="">Select Land Type</option>
                <option value="freehold">Freehold</option>
                <option value="ReraApproved">RERA Approved</option>
              </select>
            </div>

            <div className="formItem">
              <label htmlFor="propertyTypeSelect">Property Type</label>
              <select
                id="propertyType"
                className="propertyTypeSelect"
                name="propertyType"
                value={searchParams.propertyType}
                onChange={handleChange}
              >
                <option value="">Select Property Type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="OfficeSpace">Office Space/IT-ITES</option>
                <option value="studio Apartment">Studio Apartments</option>
                <option value="MixedUse">Mixed Use</option>
                <option value="Agri">Agriculture</option>
              </select>
            </div>

            <div className="formItem">
              <label htmlFor="projectName">Project Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter Project Name"
                className="searchInput"
                name="name"
                value={searchParams.name}
                onChange={handleChange}
              />
            </div>

            <button className="searchBtn" onClick={handleSearch}>
              Search Property
            </button>
          </div>
        </div>

        <div className="stats">
          <p className="statItem">🏠 Over 2M Properties.</p>
          <p className="statItem">😊 46,789 people happy</p>
          <p className="statItem">⭐ 4.8 Top rated by People</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
