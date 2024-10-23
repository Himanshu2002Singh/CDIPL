import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faRulerCombined, faBuilding, faCouch, faKey } from '@fortawesome/free-solid-svg-icons';
import './Project.css';
import config from '../../config';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null);     // For error state
  const [images, setImages] = useState({});     // To store images

  // Fetching projects from backend (API call simulation)
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${config.baseURL}/fetchprojects`);
        if (response.data.success && Array.isArray(response.data.projects)) {
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
    fetchProjects();
  }, []);

  const fetchImagesByTitle = async (tittle) => {
    try {
      const response = await axios.get(`${config.baseURL}/uploads/${tittle}`); // Adjust the endpoint accordingly
      if (response.data.success) {
        setImages((prevImages) => ({
          ...prevImages,
          [tittle]: response.data.images, // Store images with tittle as key
        }));
      } else {
        console.error(`No images found for ${tittle}`);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container-fluid contact overflow-hidden pb-5" style={{ background: 'black' }}>
      <div className="container py-5">
        <div className="office pt-5">
          <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="sub-style" style={{ color: '#BE7C2A' }}>
              <h5 className="aboutproject-title px-3" style={{ color: '#BE7C2A' }}>OUR PROJECTS</h5>
            </div>
            <h2 className="projecttittle">Explore Our Best Properties</h2>
            <p className="projectsubtitle">
              Discover premium properties that blend cutting-edge infrastructure with prime locations—ideal for businesses seeking expansion and growth.
            </p>
          </div>

          {/* Check if projects is an array before using .map */}
          {Array.isArray(projects) && projects.length > 0 ? (
            <Slider {...settings}>
              {projects.map((project) => {
                const mainGalleryImages = images[project.tittle]?.mainGallery || []; // Get mainGallery images for the project
                const imgSrc = mainGalleryImages[0] || '/default-image.jpg'; // Use first image or fallback to default

                return (
                  <OfficeCard
                    key={project.id}
                    name={project.name}
                    tittle={project.tittle}
                    imgSrc={imgSrc} // Use the first image from the mainGallery or default
                    location={project.location}
                    Area={project.Area}
                    Type={project.Type}
                    Configuration={project.Configuration}
                    RERA={project.RERA}
                    price={project.price}
                  />
                );
              })}
            </Slider>
          ) : (
            <p>No projects available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const OfficeCard = ({ name, tittle, imgSrc, location, RERA, Area, Type, Configuration, price }) => {
  // Check if filePath exists before calling .replace()
  const imagePath = imgSrc?.filePath ? `${config.baseURL2}${imgSrc.filePath.replace(/\\/g, '/')}` : '/default-image.jpg';

  return (
    <div className="office-item p-4">
      <div className="office-img mb-4">
        {/* Use the imagePath for the src */}
        <img src={imagePath} className="img-fluid w-100 rounded" alt={name} />
      </div>
      <div className="office-content d-flex flex-column">
        <h4 className="mb-2">{name}</h4>
        <p className="mb-2 text-secondary">
          <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#BE7C2A' }} /> {location}
        </p>
        <div className="d-flex justify-content-between mb-2">
          <p><FontAwesomeIcon icon={faRulerCombined} style={{ color: '#BE7C2A' }} /> <strong>Area: </strong>{Area}</p>
          <p><FontAwesomeIcon icon={faKey} style={{ color: '#BE7C2A' }} /> <strong>RERA: </strong>{RERA}</p>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <p><FontAwesomeIcon icon={faBuilding} style={{ color: '#BE7C2A' }} /> <strong>Type: </strong>{Type}</p>
          <p><FontAwesomeIcon icon={faCouch} style={{ color: '#BE7C2A' }} /> <strong>Configuration: </strong>{Configuration}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <h5 className="mb-0" style={{ color: '#BE7C2A' }}>{price}</h5>
          <Link to={`/project/${tittle}`} className="explore-btn smoth-scroll">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
