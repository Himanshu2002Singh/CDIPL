import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Project.css';
import office2 from '../../assets/Image-1.jpg';
import office3 from '../../assets/m3m-the-line.png';
import office1 from '../../assets/Studio apartment.png';
import office4 from '../../assets/Image-1.jpg';

const Projects = () => {
  return (
    <div className="container-fluid contact overflow-hidden pb-5">
      <div className="container py-5">
        <div className="office pt-5">
          <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="sub-style">
              <h5 className="sub-title text-danger px-3">OUR PROJECTS</h5>
            </div>
            <h2 className="projecttittle">Explore Our Best Properties</h2>
            <p className="projectsubtitle">
              Discover premium office spaces that combine modern infrastructure with prime locations. Perfect for businesses looking for expansion and growth.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            <OfficeCard
              projectId="1"
              delay="0.1s"
              imgSrc={office2}
              tittle="Sharda-QUAd-WTC"
              name="Sharda QUAd WTC"
              phone="+91 9876543210"
              price="₹7,000/sqft"
              address="WTC, Plot no-13A & 13B Sector-Techzone, Greater Noida, Pincode-201308."
            />
            <OfficeCard
              projectId="2"
              delay="0.3s"
              imgSrc={office1}
              tittle="NOIDA-NXT"
              name="NOIDA NXT"
              phone="(012) 0345 6789"
              price="₹85,00/Sqft"
              address="WTC, Plot no-13A & 13B Sector-Techzone, Greater Noida, Pincode-201308."
            />
            <OfficeCard
              projectId="3"
              delay="0.5s"
              imgSrc={office3}
              tittle="m3m-the-line.pn"
              name="M3M The Line"
              phone="01234 567 890"
              price="₹23,500/sqft"
              address="WTC, Plot no-13A & 13B Sector-Techzone, Greater Noida, Pincode-201308."
            />
            <OfficeCard
              projectId="4"
              delay="0.7s"
              imgSrc={office4}
              tittle="WEB"
              name="WEB"
              phone="+91 1234567890"
              price="₹22,500/sqft"
              address="WTC, Plot no-13A & 13B Sector-Techzone, Greater Noida, Pincode-201308."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const OfficeCard = ({ tittle, delay, imgSrc, name, phone, price, address }) => {
  return (
    <div className={`col-md-6 col-lg-6 col-xl-3 wow fadeInUp`} data-wow-delay={delay}>
      <div className="office-item p-4">
        <div className="office-img mb-4">
          <img src={imgSrc} className="img-fluid w-100 rounded" alt={name} />
        </div>
        <div className="office-content d-flex flex-column">
          <h4 className="mb-2">{name}</h4>
          <a href={`tel:${phone}`} className="text-secondary fs-5 mb-2">
            {phone}
          </a>
          <h5 className="price fs-4 textdre mb-2">{price}</h5> {/* Updated Price style */}
          <p className="mb-0">{address}</p>
          {/* Link to the detail page */}
          <Link to={`/project/${tittle}`} className=" byt mt-3">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
