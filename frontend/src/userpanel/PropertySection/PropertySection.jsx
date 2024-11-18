import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './PropertySection.css';

const PropertySection = () => {
  const navigate = useNavigate();

  const properties = [
    { name: 'Apartment', icon: 'fa-building', count: '6 Properties', type: 'Residential' },
    { name: 'Commercial', icon: 'fa-city', count: '6 Properties', type: 'Commercial' },
    { name: 'Plot', icon: 'fa-store', count: '6 Properties', type: 'Plot' },
    { name: 'Villa', icon: 'fa-home', count: '3 Properties', type: 'Villa' },
  ];

  const handleRedirect = (propertyType) => {
    // Redirect to the PropertyGrid page with propertyType as a query parameter
    navigate(`/property?propertyType=${propertyType}`);
  };

  return (
    <div className="property-section">
      <h3 className="about-title">Newly Listed</h3>
      <h2 className="section-title">Search By Property Requirement</h2>
      <div className="property-container3">
        {properties.map((property, index) => (
          <div
            key={index}
            className="property-card"
            onClick={() => handleRedirect(property.type)} // Call handleRedirect with property type
          >
            <div className="icon">
              <i className={`fas ${property.icon}`}></i>
            </div>
            <h3 className="property-name">{property.name}</h3>
            
            <span className="view-more">View More</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertySection;
