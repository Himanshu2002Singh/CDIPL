import React from 'react';
import './ImageSection.css'; // CSS for the styling

import hero from '../assets/heroiuyt.jpg'

const ImageSection = () => {
  return (
    <div className="image-section">
      <img
        src={hero} // Replace with your image URL
        alt="Full-width section"
        className="responsive-image"
      />
    </div>
  );
};

export default ImageSection;
