import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faRulerCombined, faBuilding, faCouch, faKey } from '@fortawesome/free-solid-svg-icons';
import './Project.css';
import office2 from '../../assets/Image-1.jpg';
import office3 from '../../assets/m3m-the-line.png';
import office4 from '../../assets/Image-1.jpg';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,  // Disable center mode for uniform size and spacing
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
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
            Discover premium properties that blend cutting-edge infrastructure with prime locations—ideal for businesses seeking expansion and growth.
            </p>
          </div>

          {/* Slick Slider with fixed-width cards */}
          <Slider {...settings}>
            <OfficeCard
              projectId="1"
              imgSrc={office2}
              tittle= 'Sharda-QUAd-WTC'
              name="Sharda QUAd WTC"
              location="Techzone-4, Greater Noida, Pincode-201009"
              Area="5000 sqft"
              Type="Office"
              Configuration="Fully Furnished"
              RERA="UPRERAPRJ3357"
              price="₹40* Lakh"
            />
            <OfficeCard
              projectId="2"
              imgSrc={office3}
              name="M3M The Line"
              tittle="m3m-the-line-sector-72-noida"
              location="Sector 72, Noida, Pincode-201308"
              Area="7500 sqft"
              Type="Retail"
              Configuration="Shell"
              RERA="UPRERAPRJ246070"
              price="₹42.4* Cr"
            />
            <OfficeCard
              projectId="3"
              imgSrc={office4}
              name="M3M The Cullinan"
              tittle="m3m-the-cullinan-sector-94-noida"
              location="Sector 94, Noida, Pincode-201308"
              Area="10000 sqft"
              Type="Luxury Apartments"
              Configuration="Fully Furnished"
              RERA="UPRERAPRJ442214"
              price="₹6.81 Cr"
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

const OfficeCard = ({ name, tittle, imgSrc, location, RERA, Area, Type, Configuration, price }) => {
  return (
    <div className="office-item p-4">
      <div className="office-img mb-4">
        <img src={imgSrc} className="img-fluid w-100 rounded" alt={name} />
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
