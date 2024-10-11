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
        <h1 className="heroHeading">Find & Buy Your Ideal Home, Flat, Plot or Villa with Confidence!</h1>

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
            <input type="text" placeholder="Enter Property" className="searchInput" />
            <select className="propertyTypeSelect">
              <option value="">Property Type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="villa">Villa</option>
              <option value="flat">Flat</option>

            </select>
            <select className="propertyTypeSelect">
              <option value="">Noida</option>
              <option value="house">Delhi</option>
              <option value="flat">Gurugaon</option>
             
            </select>s
            
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
