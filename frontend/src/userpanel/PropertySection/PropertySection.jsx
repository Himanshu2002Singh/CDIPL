import React from 'react';
import './PropertySection.css'; // Make sure to create and link the CSS file

const PropertySection = () => {
  const properties = [
    { name: 'Apartment', icon: 'fa-building', count: '6 Properties' },
    { name: 'Commercial', icon: 'fa-city', count: '6 Properties' },
    { name: 'Solo Shop', icon: 'fa-store', count: '6 Properties' },
   
    { name: 'Villa', icon: 'fa-home', count: '3 Properties' },

  ];

  return (
    <div className="property-section">
      <h3 className="about-title">Newly Listed</h3>
      <h2 className="section-title">Search By Property Requirement</h2>
      <div className="property-container">
        {properties.map((property, index) => (
          <div key={index} className="property-card">
            <div className="icon">
              <i className={`fas ${property.icon}`}></i>
            </div>
            <h3 className="property-name">{property.name}</h3>
            <p className="property-count">{property.count}</p>
            <span className="view-more-text">View More</span> {/* Text instead of button */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertySection;
