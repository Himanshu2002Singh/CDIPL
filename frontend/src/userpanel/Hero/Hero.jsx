import React from "react";
import "./Hero.css"; // import your CSS file for styling
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
      
    </section>
  );
};

export default HeroSection;
