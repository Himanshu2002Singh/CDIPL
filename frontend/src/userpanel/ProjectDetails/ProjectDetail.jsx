
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import './ProjectDetail.css';
import { FaRulerCombined, FaMoneyBillWave, FaBuilding, FaMapMarkedAlt, FaCalendarAlt, FaShoppingCart, FaPaw, FaUtensils, FaShieldAlt, FaTableTennis, FaVolleyballBall, FaVideo, FaWifi, FaLeaf, FaFilm, FaDrumstickBite, FaGolfBall, FaPhoneAlt, FaDoorOpen, FaHotTub, FaFireExtinguisher } from 'react-icons/fa';

import gallery1 from '../../assets/Image-1.jpg';
import gallery2 from '../../assets/Studio apartment.png';
import gallery3 from '../../assets/orizzontefront.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import FeedbackForm from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet'; // Import Helmet
import img3 from '../../assets/youtube.jpg'; 

import floor3 from '../../assets/msdb.jpg'; 
import config from '../../config';

const ProjectDetail = () => {

  const { tittle } = useParams(); // Get the projectId from URL
 
// Get the projectId from URL
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const [pamenities, setPamenities] = useState(null); 
  const [floorDetails, setFloorDetails] = useState([]);
  const [metaDetails, setMetaDetails] = useState(''); // State to store meta details
  const [metastilte , setMetaTitle] = useState('');
  const [metaKeywords , setMetaKeywords]= useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');

  const [activeIndex, setActiveIndex] = useState(0);

  const openPopup = (title) => {
    setPopupTitle(title);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleCarouselChange = (index) => {
    setActiveIndex(index);
  };


  const formatPrice = (price) => {
    const numericPrice = Number(price.toString().replace(/,/g, ''));

    if (isNaN(numericPrice)) {
        return "Invalid Price";
    }

    if (numericPrice >= 10000000) {
        return `${(numericPrice / 10000000).toFixed(2)} Cr`;
    } else if (numericPrice >= 100000) {
        return `${(numericPrice / 100000).toFixed(2)} Lakh`;
    }
    return numericPrice.toString();
};



  const [videoData, setVideoData] = useState(null);
  const placeholderVideoUrl = 'https://www.youtube.com/watch?v=somePlaceholderId'; // Define a placeholder video URL


  const Imagesdetails = [
    {
      title: "Luxury Apartments",
      locations: "Prime Locations: Noida Expressway, Sector 140A",
    },
    {
      title: "Commercial Spaces",
      locations: "Prime Locations: Sector 142, Tech Zone IV",
    },
    {
      title: "Retail Outlets",
      locations: "Prime Locations: Sector 135, Greater Noida Link Road",
    },
  ];
  useEffect(() => {
    const fetchAmenities = async () => {
      try {
        const response = await axios.get(`${config.baseURL}/fetchamenities/${tittle}`);
        if (response.data.success) {
          setPamenities(response.data.amenities);
         
        } else {
          setError('No amenities found for this project');
        }
      } catch (error) {
        setError('Error fetching amenities: ' + error.message);
      }
    };
  
    fetchAmenities();
  }, [tittle]);



    // Fetch meta details from the backend
    useEffect(() => {
      const fetchMetaDetails = async () => {
        try {
          const response = await axios.get(`${config.baseURL}/meta-details/${tittle}`);
          if (response.data.success) {
            setMetaDetails(response.data.metaDetails.metaDescription);
            setMetaTitle(response.data.metaDetails.metaTitle);
            setMetaKeywords(response.data.metaDetails.metaKeywords);
            console.log(response.data.metaDetails.metaDescription) // Assume meta contains title and description
          } else {
            console.error('Error fetching meta details:', response.data.message);
          }
        } catch (error) {
          console.error('Error fetching meta details:', error);
        }
      };
  
      fetchMetaDetails();
    }, [tittle]);
  
  
  // Fetch the project data from backend using tittle
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(`${config.baseURL}/project/${tittle}`);
        setProjectData(response.data.project); // Make sure you're accessing the `project` field
        setLoading(false);
      } catch (error) {
        console.error('Error fetching project data:', error);
        setLoading(false);
      }
    };

    fetchProjectData();
  }, [tittle]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${config.baseURL}/uploads/${tittle}`); // Adjust the endpoint accordingly
        if (response.data.success) {
          console.log('Fetched images:', response.data.images); // Add this log to check the structure of images
  
          // Assuming response.data.images is an array of URLs
          setImages(response.data.images); // Set images to state
        } else {
          setError(response.data.message); // Handle error message
        }
      } catch (error) {
        console.error('Error fetching images:', error);
        setError('Error fetching images.');
      } finally {
        setLoading(false); // Ensure loading is stopped
      }
    };
  
    fetchImages();
  }, [tittle]); // Dependency array ensures this runs when 'tittle' changes
  


  useEffect(() => {
    const fetchFloorDetailsByTitle = async () => {
      try {
        const response = await axios.get(`${config.baseURL}/floorplans/${tittle}`);

        console.log(response.data)
        setFloorDetails(response.data);
      } catch (error) {
        console.error('Error fetching floor plans:', error);
      }
    };

    if (tittle) {
      fetchFloorDetailsByTitle();
    }
  }, [tittle]);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get(`${config.baseURL}/get/${tittle}`);
        setVideoData(response.data);
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };

    fetchVideoDetails();
  }, [tittle]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (!projectData) {
    return <div>No project data found</div>;
  }


  if(!pamenities){
    return <div>No found data</div>
  }

  if (!images) {
    return <div>No found data</div>
  }
  

// Now using categorized images
const mainGalleryImages = images?.mainGallery || [];
const GalleryImages = images?.gallery || [];
const paymentPlanImages = images?.paymentPlan || [];
const logoImages = images?.logo || [];


  return (
    <div className="project-detail-container container-fluid">

<Helmet>
        <title>{metastilte ||  `${projectData.name}`}</title>
        <meta
          name="description"
          content={
            metaDetails ||
            `Discover details about ${projectData.name || 'this project'}, located at ${projectData.location || 'a prime location'}. Starting price: ${projectData.startingPrice || 'Contact us for details'}.`
          }
        />
        <meta 
        name="keywords"
         content={ metaKeywords || `real estate, ${projectData.name || 'this project'},${projectData.location || 'a prime location'}, properties, home buying, real estate services `} 
         />

      </Helmet>
      <div className="container-fluid py-4">
  {/* Hero Section */}
  <div className="row">
    <div className="col-12">
      <div className="row">
        {/* Main Gallery Image */}
        <div className="col-lg-8 col-md-12 mb-4">
          <img
            src={`${config.baseURL2}${mainGalleryImages[0]?.filePath.replace(/\\/g, '/')}`}
            className="img-fluid rounded shadow"
            alt="Main Gallery Image"
            style={{ maxHeight: "500px", objectFit: "cover", width: "100%" }}
          />
        </div>
        {/* Collage of Other Gallery Images */}
        <div className="col-lg-4 col-md-12">
          <div className="row g-2">
            {GalleryImages.slice(0, 6).map((image, index) => (
              <div className="col-6" key={index}>
                <img
                  src={`${config.baseURL2}${image?.filePath.replace(/\\/g, '/')}`}
                  className="img-fluid rounded shadow"
                  alt={`Gallery Image ${index + 1}`}
                  style={{ height: "120px", objectFit: "cover", width: "100%" }}
                />
              </div>
            ))}
            {/* Placeholder for remaining images */}
            <div className="col-12">
              <div className="position-relative">
                <img
                  src={`${config.baseURL2}${GalleryImages[0]?.filePath.replace(/\\/g, '/')}`}
                  className="img-fluid rounded shadow"
                  alt="More Images"
                  style={{ height: "250px", objectFit: "cover", width: "100%" }}
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 text-white"
                  style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                >
                  + {mainGalleryImages.length-2} More Images
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Details Section */}
  <div className="row mt-4 justify-content-center">
  {/* Details */}


  <div className="col-10">
  {/* Main Card Section */}
  <div className="card shadow-sm project-main-card">
    <div className="card-body">
      {/* Project Name, Logo, and Starting Price */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          {logoImages.length > 0 && (
            <img
              src={`${config.baseURL2}${logoImages[0]?.filePath.replace(/\\/g, '/')}`}
              alt="Project Logo"
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
                marginRight: "20px", // Gap between logo and name
              }}
            />
          )}
          <h2 className="project-heading" style={{ margin: 0 }}>
            <strong>{projectData.name}</strong>
          </h2>
        </div>
        <div>
          <h4 style={{ margin: 0 }}>
            <strong>Starting Price:</strong>
          </h4>
          <h5 style={{ fontWeight: "bold", color: "#ff5722" }}>
            ₹{formatPrice(projectData.startingPrice)}
          </h5>
        </div>
      </div>

      {/* Details in Cards */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card project-card shadow-sm">
            <div className="card-body project-card-body">
              <ul className="list-unstyled project-details-list mb-0">
                <li><strong>RERA ID:</strong> {projectData.reraId || "N/A"}</li>
                <li><strong>Location:</strong> {projectData.location}</li>
                <li><strong>Possession:</strong> {projectData.possession}</li>
                <li><strong>Property Type:</strong> {projectData.propertyType}</li>
                <li><strong>Land Type:</strong> {projectData.superArea}</li>
                <li><strong>Sq.ft. Price:</strong> ₹{projectData.avgPrice}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card project-card shadow-sm">
            <div className="card-body project-card-body">
              <h3>Prime Locations</h3>
              <ul className="project-additional-details himanshu">
                {projectData.proximity
                  .split(',')
                  .slice(0, 4) // केवल पहले 4 लोकेशन्स को चयनित करें
                  .reduce((rows, location, index) => {
                    if (index % 2 === 0) {
                      rows.push([location.trim()]);
                    } else {
                      rows[rows.length - 1].push(location.trim());
                    }
                    return rows;
                  }, [])
                  .map((row, rowIndex) => (
                    <li key={rowIndex} className="roww">
                      <div className="coll">{row[0]}</div>
                      {row[1] && <div className="coll">{row[1]}</div>}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
</div>


      {/* Project Highlights and Contact Form */}
      <div className="project-highlights-and-contact container mt-4 pt-4 pb-4">
        <div className="row">
          {/* Left Side: Project Highlights */}
          <div className="col-md-8">
            <div className="new-section">
              <h2 className="mb-4">Project Highlights</h2>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="highlight-box">
                    <FaRulerCombined className="highlight-icon" />
                    <div className="highlight-text">
                      <strong>{projectData.superArea}</strong>
                      <p>Land Type</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="highlight-box">
                    <FaMoneyBillWave className="highlight-icon" />
                    <div className="highlight-text">
                      <strong>{projectData.avgPrice}</strong>
                      <p>/Sq. ft. Price</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="highlight-box">
                    <FaBuilding className="highlight-icon" />
                    <div className="highlight-text">
                      <strong>Under Construction</strong>
                      <p>Status</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="highlight-box">
                    <FaShoppingCart className="highlight-icon" />
                    <div className="highlight-text">
                      <strong>{projectData.propertyType}</strong>
                      <p>Property Type</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="highlight-box">
                    <FaCalendarAlt className="highlight-icon" />
                    <div className="highlight-text">
                      <strong>0-1 Years</strong>
                      <p>Possession</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="highlight-box">
                    <FaMapMarkedAlt className="highlight-icon" />
                    <div className="highlight-text">
                      <strong>{projectData.totalArea}</strong>
                      <p>Total Area</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="col-md-4">
            <div className="contact-form-container p-4">
              <h3>Connect With Our Experts</h3>
              <p>Let's find the perfect deal for you.</p>

              <form className="contact-form">
               
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Interest in Like 3BHk , 2BHK.."
                  ></textarea>
                </div>
                {/* <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="agreeTerms"
                  />
                  <label className="form-check-label" htmlFor="agreeTerms" style={{color:'black'}}>
                    I agree to Terms of Use
                  </label>
                </div> */}
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      {/* Sticky Header */}
      <div className="sticky-header">
        <div className="container">
          <ul className="nav">
            <li><a href="#overview">Overview</a></li>
            <li><a href="#amenities">Amenities</a></li>
            <li><a href="#floor-plans">Floor Plan</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#Youtube">Video</a></li>

            <li><a href="#payment-plan">Payment Plan</a></li>
            <li><a href="#Faq">Faq</a></li>
            <li><a href="#payment-plan">Location</a></li>
            
            {/* Download Brochure Button */}
            <li className="ml-auto">
              <button className="btn btn-primary ">Download Brochure</button>

            </li>
          </ul>
        </div>
      </div>
      {/* Overview Section */}
      {/* Overview Section */}
      <section id="overview" className="container mt-4">
        <h3>Overview</h3>
        <div className="row">
          {/* Left Side: Overview Details */}
          <div className="col-md-9">
            <div className="overview-details">
              <h4> {projectData.name}</h4>
              <p>
                {projectData.projectDescription}
              </p>
              <ul>
                <li><strong>Location:</strong>{projectData.location}</li>
                <li><strong>Project Type:</strong> {projectData.propertyType}</li>
                <li><strong>RERA ID:</strong>{projectData.reraId}</li>
                <li><strong>Total Area:</strong> {projectData.avgPrice}</li>
                <li><strong>Possession:</strong> {projectData.possession}</li>
    
  <li className="proximity-list">
  <strong>Prime Locations:</strong>
  <ul className='himanshu'>
    {projectData.proximity.split(',').reduce((rows, location, index) => {
      if (index % 2 === 0) {
        rows.push([location.trim()]);
      } else {
        rows[rows.length - 1].push(location.trim());
      }
      return rows;
    }, []).map((row, rowIndex) => (
      <li key={rowIndex} className="roww">
        <div className="coll">{row[0]}</div>
        {row[1] && <div className="coll">{row[1]}</div>} {/* Only show second column if exists */}
      </li>
    ))}
  </ul>
</li>




                <li><strong>Investment Potential:</strong> {projectData.investmentPotential}</li>
              </ul>

              {/* Prices Section */}
              <h5 style={{fontWeight:600}}>Prices:</h5>
              <p>Starting from:<strong>{formatPrice(	projectData.startingPrice)}</strong></p>

              {/* More Details Section */}
              {/* <div className="more-details-box mt-4 p-3 border">
                <h5 className="mb-3">More Details</h5>
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <p><strong>Open Uncovered Parking:</strong> 1</p>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <p><strong>Number of Bathroom:</strong> 1</p>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <p><strong>Furnishing Status:</strong> Semi-Furnished</p>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <p><strong>Covered Parking:</strong> 1</p>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <p><strong>Facing:</strong> West</p>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <p><strong>View:</strong> City</p>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <p><strong>Total Floor Count:</strong> 50</p>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <p><strong>Flooring:</strong> Marble</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Side: Image Carousel with Content Boxes */}
          <div className="col-md-3">
            <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel" onSlide={(e) => handleCarouselChange(e)}>
              <div className="carousel-inner">
                {Imagesdetails.map((detail, index) => (
                  <div className={`carousel-item ${index === activeIndex ? 'active' : ''}`} key={index}>
                    <img src={index === 0 ? gallery3 : index === 1 ? gallery1 : gallery2} className="d-block w-100" alt={`Project ${index + 1}`} />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev" onClick={() => handleCarouselChange((activeIndex - 1 + Imagesdetails.length) % Imagesdetails.length)}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next" onClick={() => handleCarouselChange((activeIndex + 1) % Imagesdetails.length)}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            {/* Content Box Below Carousel */}
            <div className="carousel-content mt-3">
              <div className="content-box">
                <h5>{Imagesdetails[activeIndex].title}</h5>
                <p>{Imagesdetails[activeIndex].locations}</p>
                <button className="btn btn-primary invest-now" onClick={() => openPopup(Imagesdetails[activeIndex].title)}>Invest Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Popup Form */}
        {popupVisible && (
          <div className="popup" style={{ display: 'block', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1000 }}>
            <div className="popup-content" style={{ background: '#fff', padding: '20px', borderRadius: '8px',  margin: '100px auto', position: 'relative' }}>
              <span className="close" onClick={closePopup} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', fontSize: '20px' }}>&times;</span>
              <h3>{popupTitle}</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone:</label>
                  <input type="tel" className="form-control" id="phone" required />
                </div>
                <button type="submit" className="btn btn-danger">Submit</button>
              </form>
            </div>
          </div>
        )}
      </section>

      {/* Overview content here */} {/* This is where you'd include the overview details, similar to the other sections */}

      {/* Amenities Section */}
      {/* Amenities Section */}
      <section id="amenities" className="container mt-4">
      <h3>Amenities</h3>
      {error && <p className="error-message">{error}</p>}
      <div className="row">
        {/* Conditionally render amenities based on the response */}
        {pamenities.petArea && (
          <div className="col-md-3 mb-3">
            <div className="highlight-box">
              <FaPaw className="highlight-icon" />
              <div className="highlight-text"><strong>Pet Area</strong></div>
            </div>
          </div>
        )}
        {pamenities.restaurant && (
          <div className="col-md-3 mb-3">
            <div className="highlight-box">
              <FaUtensils className="highlight-icon" />
              <div className="highlight-text"><strong>Restaurant</strong></div>
            </div>
          </div>
        )}
        {pamenities.security && (
          <div className="col-md-3 mb-3">
            <div className="highlight-box">
              <FaShieldAlt className="highlight-icon" />
              <div className="highlight-text"><strong>24x7 Security</strong></div>
            </div>
          </div>
        )}
        {pamenities.tennisCourt && (
          <div className="col-md-3 mb-3">
            <div className="highlight-box">
              <FaTableTennis className="highlight-icon" />
              <div className="highlight-text"><strong>Tennis Court</strong></div>
            </div>
          </div>
        )}
        {pamenities.squashCourt && (
          <div className="col-md-3 mb-3">
            <div className="highlight-box">
              <FaVolleyballBall className="highlight-icon" />
              <div className="highlight-text"><strong>Squash Court</strong></div>
            </div>
          </div>
        )}
        {pamenities.atm && (
          <div className="col-md-3 mb-3">
            <div className="highlight-box">
              <FaMoneyBillWave className="highlight-icon" />
              <div className="highlight-text"><strong>ATM's</strong></div>
            </div>
          </div>
        )}
        {pamenities.cctv && (
          <div className="col-md-3 mb-3">
            <div className="highlight-box">
              <FaVideo className="highlight-icon" />
              <div className="highlight-text"><strong>CCTV</strong></div>
            </div>
          </div>
        )}
        {pamenities.centralWifi && (
          <div className="col-md-3 mb-3">
            <div className="highlight-box">
              <FaWifi className="highlight-icon" />
              <div className="highlight-text"><strong>Central Wifi</strong></div>
            </div>
          </div>
        )}
        {pamenities.multiplex && (
          <div className="col-md-3 mb-3">
            <div className="highlight-box">
              <FaFilm className="highlight-icon" />
              <div className="highlight-text"><strong>Multiplex</strong></div>
            </div>
          </div>
        )}
        {pamenities.greenArea && (
          <div className="col-md-3 mb-3">
            <div className="highlight-box">
              <FaLeaf className="highlight-icon" />
              <div className="highlight-text"><strong>Green Area</strong></div>
            </div>
          </div>
        )}
        {pamenities.barbequeArea && (
          <div className="col-md-3 mb-3">
            <div className="highlight-box">
              <FaDrumstickBite className="highlight-icon" />
              <div className="highlight-text"><strong>Barbeque Area</strong></div>
            </div>
          </div>
        )}
        {pamenities.golfCourse && (
          <div className="col-md-3 mb-3">
            <div className="highlight-box">
              <FaGolfBall className="highlight-icon" />
              <div className="highlight-text"><strong>Golf Course</strong></div>
            </div>
          </div>
        )}
        {pamenities.intercom && (
          <div className="col-md-3 mb-3">
            <div className="highlight-box">
              <FaPhoneAlt className="highlight-icon" />
              <div className="highlight-text"><strong>Intercom</strong></div>
            </div>
          </div>
        )}
        {pamenities.balcony && (
          <div className="col-md-3 mb-3">
            <div className="highlight-box">
              <FaDoorOpen className="highlight-icon" />
              <div className="highlight-text"><strong>Balcony</strong></div>
            </div>
          </div>
        )}
        {pamenities.jacuzzi && (
          <div className="col-md-3 mb-3">
            <div className="highlight-box">
              <FaHotTub className="highlight-icon" />
              <div className="highlight-text"><strong>Jacuzzi</strong></div>
            </div>
          </div>
        )}
        {pamenities.fireFighting && (
          <div className="col-md-3 mb-3">
            <div className="highlight-box">
              <FaFireExtinguisher className="highlight-icon" />
              <div className="highlight-text"><strong>Fire Fighting Systems</strong></div>
            </div>
          </div>
        )}
      </div>
    </section>
      {/* Floor Plans Section */}
      <section id="floor-plans" className="container mt-4">
  <h3>Floor Plans for {tittle}</h3>
  <div className="row">
    {floorDetails.map((floor, index) => (
      <div key={index} className="col-12 col-sm-6 col-md-4 mb-4"> {/* Adjust column classes for responsiveness */}
        <div className="card5">
          <img
            src={floor.imageUrl ? `${config.baseURL2}${floor.imageUrl}` : floor3} // Fallback image if imageUrl is not present
            className="card5-img-top"
            alt={`Floor Plan (${floor.tittle})`}
          />
          <div className="card5-body">
            <h5 className="card5-title">Total Area</h5>
            <p className="card5-text">BHK: {floor.bhk}</p>
            <p className="card5-text">Area: {floor.area}</p>
            <p className="card5-text">Price: {formatPrice(floor.price)}</p>
            <button className="btn btn-danger">
              <i className="fas fa-phone-alt"></i> Get a call back
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      <section id="gallery" className="container mt-4">
  <h3>Gallery</h3>
  <div className="row">
    {GalleryImages?.map((image, index) => (
      <div className="col-md-4 mb-4" key={index}>
        <div className="card h-100">
          <img
            src={`${config.baseURL2}${image?.filePath.replace(/\\/g, '/')}`} // The image will be fetched from the gallery array
            className="card-img-top"
            alt={`Gallery Image ${index + 1}`}
            style={{ maxHeight: '200px', objectFit: 'cover' }}
          />
        </div>
      </div>
    ))}
  </div>
       </section>

       <section id="payment-plan" className="container mt-4">
      <h3>Payment Plans</h3>
      <div className="row justify-content-center">
      {paymentPlanImages.slice(0,1)?.map((image, index) => (
        <div className="col-md-8 mb-4" key={index}>
          <div className="card payment-plan-card h-100">
            <img
              src={`${config.baseURL2}${image?.filePath.replace(/\\/g, '/')}`} // Fetching image from backend
              className="card-img-top payment-plan-img"
              alt="Payment Plan"
            />
            <div className="card-body text-center">
              <a
                href={`${config.baseURL2}${image?.filePath.replace(/\\/g, '/')}`}
                download
                className="btn btn-link text-danger download-link"
              >
                <i className="fa fa-download"></i> Download Payment Plan
              </a>
            </div>

          </div>
        </div>
          ))}
      </div>
    </section>

    <section id="video-presentation" className="container mt-4">
  <h3>Video Presentation of {tittle}</h3>
  <p>
    Click for the video of {tittle} and understand every perspective of 
    'quality living' that they are offering. For more property videos, visit our YouTube channel.
  </p>
  <div className="video-container">
    {videoData?.youtubeLink ? (
      <iframe
        src={`https://www.youtube.com/embed/${videoData.youtubeLink.split('v=')[1]}`}
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
        className="video-iframe"
      />
    ) : (
      <img src={img3} alt="Presentation" className="video-placeholder" />
    )}
  </div>
  <p className="video-description">{videoData?.description || "Watch our presentation!"}</p>
</section>

<section id="location-section" className="container mt-4">
  <h4>Location</h4>
  {videoData?.locationLink ? (
    <iframe
      src={videoData.locationLink.replace('/maps/', '/maps/embed?pb=')}
      className="location-iframe"
      allowFullScreen=""
      loading="lazy"
      title="Google Maps Location"
    ></iframe>
  ) : (
    <p>No location available</p>
  )}
</section>


      {/* Continue with the remaining sections such as Floor Plan, Gallery, Payment Plan */}

      {/* Add other sections like Amenities, Floor Plan, Gallery, etc. here */}
      <FeedbackForm />
      <Footer />

    </div>
  );
};

export default ProjectDetail;


