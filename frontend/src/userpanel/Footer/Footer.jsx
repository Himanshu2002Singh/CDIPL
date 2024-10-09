/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css"; // Assuming you have a CSS file for styling.


const Footer = () => {


  return (
    <>
    

      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-secondary mb-4">Contact Info</h4>
                <a href="#">
                  <i className="fa fa-map-marker-alt me-2"></i> B-84, Sector 2, Noida 201301, GautamBuddh Nagar  , Uttar Pradesh  
                </a>
                <a href="#">
                  <i className="fas fa-envelope me-2"></i> info@contourdirectindia.com
                </a>
                <a href="#">
                  <i className="fas fa-phone me-2"></i> +91 9266768043
                </a>
                

                <div className="d-flex align-items-center">
                  <i className="fas fa-share fa-2x text-secondary me-2"></i>
                  <a className="btn mx-1" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn mx-1" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn mx-1" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="btn mx-1" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-secondary mb-4">Office Hours</h4>
                <div className="mb-3">
                  <h6 className="text-white mb-0">Wednesday - Monday:</h6>
                  <p className="text-white mb-0">09.30 am to 06.30 pm</p>
                </div>
                
                <div className="mb-3">
                  
                  <p className="text-white mb-0">All Tuesday is our Holiday</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-secondary mb-4">Our Services</h4>
                <a href="/property">
                  <i className="fas fa-angle-right me-2"></i> Property
                </a>
                <a href="/About-Us">
                  <i className="fas fa-angle-right me-2"></i> About
                </a>
                <a href="/Contact-Us">
                  <i className="fas fa-angle-right me-2"></i> Contact
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2"></i> Blog
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2"></i> Counselling
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2"></i> Work / Career
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <h4 className="text-secondary mb-4">CDIPL</h4>
                <p className="text-white mb-3">
                  Welcome to <strong>Contour Direct India Private Limited</strong>, a sister concern firm of <strong>CBPL</strong>.
                  Founded in 2019, CDIPL is a Real estate Consulting firm with huge aspirations
                  and the entire Real estate world to capture in its arms. CDIPL is aligned to
                  cater Residential, Commercial, and Mixed Use real estate needs of the DELHI NCR
                  region.
                </p>
                {/* <div className="position-relative mx-auto rounded-pill">
                  <input
                    className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                  >
                    SignUp
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Copyright Start */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-white">
                <a href="www.cdipl.com" className="border-bottom text-white">
                  <i className="fas fa-copyright text-light me-2"></i>CDIPL
                </a>
                , All rights reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-white">
              Designed & Developed By{" "}
              <a className="border-bottom text-white" href="">
                DSMARKIT
              </a>{" "}
            
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}

      {/* Back to Top */}
      <a href="#" className="btn btn-danger btn-lg-square back-to-top">
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  );
};

export default Footer;
