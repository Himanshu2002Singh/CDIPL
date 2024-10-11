import React from "react";
import "./Footer.css"; // Import your CSS file
import cdipl from '../../assets/cdipl.png';
import home from '../../assets/contact-img.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <img src={cdipl} alt="Veedoo Logo" className="logo" />
          <p className="footer-text">
          Welcome to <strong>Contour Direct India Private Limited</strong>, a sister concern firm of <strong>CBPL</strong>.
            Founded in 2019, CDIPL is a Real estate Consulting firm with huge aspirations
            and the entire Real estate world to capture in its arms. CDIPL is aligned to
            cater Residential, Commercial, and Mixed Use real estate needs of the DELHI NCR
            region.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/contourdirectindia"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com/contourdirectindia/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.youtube.com/@ContourDirectIndia"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
         
        </div>

        <div className="footer-right">
          <div className="contact-box">
            <img src={home} alt="House" className="house-img" />
            <p className="contact-text">
            Looking to buy? Discover your perfect property today!
            </p>
            <a href="#" className="contact-link">Contact Us</a>
          </div>

          <div className="subscribe-box">
  <h4>Subscribe for property updates</h4>
  <form className="subscribe-form">
    <input
      type="email"
      placeholder="Enter Your Mail id"
      className="subscribe-input"
    />
    <button type="submit" className="subscribe-btn">Send</button>
  </form>
  <div className="terms-checkbox">
    <input type="checkbox" id="agree" />
    <label htmlFor="agree">I agree with the terms & conditions</label>
  </div>
</div>

        </div>
      </div>

      <div className="footer-links">
        <div className="link-column">
          <h4>Pages</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Property</a></li>
            <li><a href="About-us">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="Contact-us">Contact Us</a></li>
          </ul>
        </div>

        <div className="link-column">
          <h4>Inner Pages</h4>
          <ul>
            <li><a href="#">Property Listing</a></li>
            <li><a href="#">Property Detail</a></li>
            <li><a href="#">Property Plans</a></li>
            <li><a href="#">Locate Property</a></li>
          
            <li><a href="#">Property Gallery</a></li>
          </ul>
        </div>

        <div className="link-column">
          <h4>Utility Pages</h4>
          <ul>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">Mobile App</a></li>
            <li><a href="#">Agent Blog</a></li>
            <li><a href="#">Media Room</a></li>
          </ul>
        </div>

        <div className="link-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Pricing Plans</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Contact Support</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
  <p>&copy; 2024 CDIPL. All rights Reserved</p>
  <p className="lki">Designed & Developed by DSMARKIT</p>
</div>

    </div>
  );
};

export default Footer;
