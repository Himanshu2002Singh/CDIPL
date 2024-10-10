import React from 'react';
import './About.css'; // Import the CSS file

const AboutCdipl = () => {
  return (
    <div className='aboutcdipl-container mt-30'>
      <div className="aboutcdipl">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 aboutcdipl-images">
            <div className="main-image">
              <img src={require('../../assets/about2.jpg')} alt="Hotel Interior" className="img-fluid" />
            </div>
            <div className="small-image">
              <img src={require('../../assets/about1.jpg')} alt="Bedroom" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 aboutcdipl-content">
            <h5 className="about-title">About Us</h5>
            <h1 className="about-heading"> Why Choose Our Real Estate Services?</h1>
            <p className="about-description">
              Welcome to <strong>Contour Direct India Private Limited</strong>, a sister concern firm of <strong>CBPL</strong>. 
              Founded in 2019, CDIPL is a Real Estate Developer and Consulting firm with aspirations to cater to the 
              Residential, Commercial, and Mixed-Use real estate needs of the DELHI NCR region.
            </p>
            <p>
              At CDIPL, we believe that finding a home is more than just a transaction—it's a personal journey.
              We’re founded on the principles of trust, integrity, and dedication, making your real estate experience smooth and enjoyable.
            </p>
            
            <ul className="about-benefits green mb-30">
              <li>Comprehensive Property Search Assistance: Personalized recommendations based on your specific needs.</li>
              <li>Transparent Legal Assistance: We ensure every step of the process is legally sound, from documentation to finalization.</li>
              <li>Post-Sale Property Management: Ongoing support for property maintenance and management services.</li>
              <li>Market Analysis and Valuation: Accurate market insights to help you make informed decisions.</li>
              <li>End-to-End Solutions: From financing assistance to the final sale, we handle all aspects of the process.</li>
            </ul>
            
            <div className="aboutcdipl-bottom">
              <a href="about.html" className="explore-btn smoth-scroll">Explore Properties</a>
              <div className="call-info">
                <div className="call-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="call-details">
                  <p>Call Us Anytime</p>
                  <span>+00 123 456789</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCdipl;
