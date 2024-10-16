import React from "react";
import "./Hero.css";
import herovideo from '../../assets/hero2.mp4';

const HeroSection = () => {
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
        <h1 className="heroHeading">Find & Buy Your Ideal Residential or Commercial Property with Confidence!</h1>

        <div className="searchContainer">
          {/* <div className="searchOptions">
            <label className="radioLabel">
              <input type="radio" name="propertyType" value="lease" />
              For 
            </label>
            <label className="radioLabel">
              <input type="radio" name="propertyType" value="rent" />
              For FreeHold
            </label>
            <label className="radioLabel">
              <input type="radio" name="propertyType" value="sale" />
              For Sale
            </label>
          </div> */}

<div className="inputGroup">
  <div className="formItem">
    <label htmlFor="locationSelect">Location</label>
    <select id="locationSelect" className="propertyTypeSelect">
      <option value="noida">Noida</option>
      <option value="house">Delhi</option>
      <option value="Greater-Noida">Greater Noida</option>
      <option value="Yamuna-Express">Yamuna Expressway</option>
    </select>
  </div>

  <div className="formItem">
    <label htmlFor="landTypeSelect">Land Type</label>
    <select id="landTypeSelect" className="propertyTypeSelect">
      {/* <option value="lease">Leasehold</option> */}
      <option value="freehold">Freehold</option>
      <option value="ReraApproved">RERA Approved</option>
    </select>
  </div>

  <div className="formItem">
    <label htmlFor="propertyTypeSelect">Property Type</label>
    <select id="propertyTypeSelect" className="propertyTypeSelect">
      <option value="residential">Residential</option>
      <option value="commercial">Commercial</option>
      <option value="OfficeSpace">Office Space/IT-ITES</option>
      <option value="MixedUse">Mixed Use</option>
      <option value="Agri">Agriculture</option>
    </select>
  </div>

  <div className="formItem">
    <label htmlFor="projectName">Project Name</label>
    <input id="projectName" type="text" placeholder="Enter Project Name" className="searchInput" />
  </div>

  <button className="searchBtn">Search Property</button>
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
