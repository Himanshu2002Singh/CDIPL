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

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${config.baseURL}/fetchprojects`);
        if (response.data.success) {
          const projectData = response.data.projects.slice(0, 6); // Limit to 6 projects
          setProjects(projectData);

          // Fetch images for each project based on title
          projectData.forEach((project) => {
            fetchImagesByTitle(project.tittle); // Ensure titles match correctly
          });
        } else {
          setError('Error fetching projects');
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError('Error fetching projects.');
      } finally {
        setLoading(false);
      }
    };

    const fetchImagesByTitle = async (tittle) => {
      try {
        const response = await axios.get(`${config.baseURL}/uploads/${tittle}`);
        if (response.data.success) {
          setImages((prevImages) => ({
            ...prevImages,
            [tittle]: response.data.images.mainGallery || [],
          }));
        } else {
          console.error(`Error fetching images for ${tittle}:`, response.data.message);
        }
      } catch (error) {
        console.error(`Error fetching images for ${tittle}:`, error);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
      <h2 className="exclusive-title">Leading Real Estate Investment Opportunity</h2>
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
              <button onClick={() => openProject(project.tittle)}>Read More</button>
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
