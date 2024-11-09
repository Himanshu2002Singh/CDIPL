import React, { useEffect, useState } from 'react';
import Slider from 'react-slick'; // Import the Slider component
import axios from 'axios';
import config from '../../config';
import './ProjectsCarousel.css';

const ProjectsCarousel = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [images, setImages] = useState({}); // Store images by project title

 
  // Slider settings
  const settings = {
    dots: true, // Enable dots
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2, // Adjust number of slides per view
    slidesToScroll: 1,
   
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 3 slides on desktop
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
        },
      },
    ],
  };

  return (
    <div className="m-exclusive">
         <h5 className="about-title" style={{color:'white'}}>Spotlight</h5>
      <h2 className="exclusive-title">Discover premium properties that blend cutting-edge infrastructure with prime locations—ideal for businesses seeking expansion and growth.</h2>
      <p className="exclusive-subtitle"></p>

      <Slider {...settings} className="swiper-container">
        {projects.map((project, index) => (
          <div key={index} className="swiper-slide">
            {images[project.tittle] && images[project.tittle].length > 0 ? (
              <img 
                src={`${config.baseURL2}${images[project.tittle][0].filePath}`} 
                alt={project.tittle} 
                className="d-block w-100"
              />
            ) : (
              <img src="/default-placeholder.png" alt="default" /> // Fallback image
            )}
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>RERA No: {project.reraId}</p>
              <p>{project.location}</p>
              <button style={{marginTop:'7%'}} onClick={() => openProject(project.tittle)}>Read More</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Function to open a single project by title
const openProject = (tittle) => {
  window.location.href = `/project/${tittle}`;
};

export default ProjectsCarousel;
