import React from "react";
import "./About.css"; // Assuming you have a CSS file for custom styling.

function AboutSection() {
  return (
    <div className="container-fluid py-5 about-section" style={{ backgroundColor: 'whitesmoke' }}>
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          {/* Left Image Section */}
          <div className="col-xl-5 col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
            <div className="image-wrapper bg-light rounded shadow-sm overflow-hidden">
              <img
                src="./orizzontefront.jpeg"
                className="img-fluid w-100 mb-3"
                alt="Property"
              />
              <img
                src="./9cf68128810d357b9b12d61c921a49b4.webp"
                className="img-fluid w-100 border-bottom border-5 border-primary rounded-top"
                alt="Property"
              />
            </div>
          </div>
          {/* Right Content Section */}
          <div className="col-xl-7 col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
            <h5 className="sub-title pe-3" style={{ color: "#c33764" }}>About Our Company</h5>
            <h1 className="display-5 mb-4 fw-bold" style={{ color: "#1d2671" }}>
              Why Choose Our Real Estate Services?
            </h1>
            <p className="mb-4 text-muted">
              Welcome to <strong>Contour Direct India Private Limited </strong>, a sister concern firm of <strong>CBPL</strong>. 
              Founded in 2019, CDIPL is a Real Estate Developer and Consulting firm with aspirations to cater to the 
              Residential, Commercial, and Mixed-Use real estate needs of the DELHI NCR region.
            </p>
            <p className="mb-4 text-muted">
              At CDIPL, we believe that finding a home is more than just a transaction—it's a personal journey.
              We’re founded on the principles of trust, integrity, and dedication, making your real estate experience smooth and enjoyable.
            </p>

            {/* Service Highlights */}
            <div className="row gy-4">
              <div className="col-12 col-sm-6 icon-text d-flex align-items-center">
                <i className="fas fa-map-marked-alt fa-lg text-danger"></i>
                <h5 className="ms-3">Extensive Property Listings</h5>
              </div>
              <div className="col-12 col-sm-6 icon-text d-flex align-items-center">
                <i className="fas fa-key fa-lg text-danger"></i>
                <h5 className="ms-3">Exclusive Properties Available</h5>
              </div>
            </div>

            {/* Experience & Services */}
            <div className="row mt-4">
              <div className="col-4 col-md-3 text-center">
                <div className="years-experience">
                  <div className="mb-2">
                    <i className="fas fa-building fa-3x text-danger"></i>
                  </div>
                  <h1 className="display-5 fw-bold mb-0">34</h1>
                  <p className="text-muted">Years of Experience</p>
                </div>
              </div>
              <div className="col-8 col-md-9">
                <div className="mb-4">
                  <p className="h5 text-secondary d-flex align-items-center">
                    <i className="fas fa-shield-alt text-secondary me-2"></i>
                    Trusted by Thousands of Clients
                  </p>
                  <p className="h5 text-secondary d-flex align-items-center">
                    <i className="fas fa-chart-line text-secondary me-2"></i>
                    Comprehensive Market Insights
                  </p>
                  <p className="h5 text-secondary d-flex align-items-center">
                    <i className="fas fa-user-check text-secondary me-2"></i>
                    Personalized Service for Every Client
                  </p>
                </div>
                {/* Contact Information */}
                <div className="d-flex align-items-center">
                  <a
                    href="tel:+01234567890"
                    className="btn btn-outline-danger me-4 wow tada"
                    data-wow-delay=".9s"
                  >
                    <i className="fa fa-phone-alt fa-2x"></i>
                  </a>
                  <div className="phone-info">
                    <span className="text-danger">Have any questions?</span>
                    <span className="text-secondary fw-bold fs-5">
                      <br/>
                      Call Us: +91-8087616057
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
