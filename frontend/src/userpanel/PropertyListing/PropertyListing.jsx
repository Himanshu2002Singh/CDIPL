import React from 'react';
import './PropertyListing.css';
import config from '../../config';
import { Link } from 'react-router-dom';

const PropertyListing = ({ property }) => {

  const imagePath = property.image?.filePath ? `${config.baseURL2}${property.image.filePath.replace(/\\/g, '/')}` : '/default-image.jpg';
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
  return (

    <div className="property-card">
      {/* Display property image */}

    

      <img src={imagePath} alt={property.tittle} className="property-image" />
      
      {/* Property details section */}
      <div className="property-details">
        <h5>{property.name}</h5>
        
        <p className="price">₹{property.startingPrice === 4.97 ? '4.97cr' : formatPrice(property.startingPrice)}</p>

        <p>{property.location}</p>
        
        {/* Additional property information */}
        <div className="property-info">
          <span> <strong>RERA ID: </strong>{property.reraId} </span>
          <span><strong>Property Type: </strong>{property.propertyType}</span>
          <span><strong>Total Project Area : </strong>{property.totalArea}</span>
        </div>
        
        {/* View button */}
        <Link to={`/project/${property.tittle}`}>
        <button className="property-view-btn">View</button>
        </Link>
        
      </div>
    </div>
  );
};

export default PropertyListing;
