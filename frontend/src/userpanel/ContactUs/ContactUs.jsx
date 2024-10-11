import React from "react";
import "./ContactUs.css"; // Ensure the CSS file is created and linked correctly
import Footer from "../Footer/Footer";
import backgroundImg from '../../assets/r1.png';
import { Container } from "react-bootstrap";

const ContactUs = () => {
  return (
    <>
     <Container fluid>
      <div className="cdipl-contact-section">
        {/* Breadcrumb Section */}
        <div className="cdipl-breadcrumb" style={{ backgroundImage: `url(${backgroundImg})` }}>
          <div className="overlay">
            <div className="company-title">
              <a href="/">Home</a> <span> / </span> <span>Contact Us</span>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="cdipl-map-container">
          <iframe
            className="mapiy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5088040750966!2d77.30839828206425!3d28.58450912359919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce54e9bcf820d%3A0x7e5e5cb0dc9c7437!2sContour%20Buildcon%20(P)%20Ltd.!5e0!3m2!1sen!2sin!4v1728504832191!5m2!1sen!2sin"
            width="100%"
            height="650" 
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
          ></iframe>
        </div>

        {/* Contact Information */}
        <div className="cdipl-contact-info-container">
          {/* Left Contact Information Section */}
          <div className="cdipl-contact-info-left">
            <h3>Contact Us</h3>
            <h4>To Know More About Properties</h4>

            <div className="cdipl-contact-details">
              <div className="cdipl-detail-item">
                <i className="fa fa-globe"></i>
                <div>
                  <p><strong>Our Address</strong></p>
                  <p>B-84, Sector 2, Noida 201301, GautamBuddh Nagar, Uttar Pradesh</p>
                </div>
              </div>
              <div className="cdipl-detail-item">
                <i className="fa fa-phone"></i>
                <div>
                  <p><strong>Contact Us</strong></p>
                  <p>+91 9266768043 </p>
                </div>
              </div>
              <div className="cdipl-detail-item">
                <i className="fa fa-clock"></i>
                <div>
                  <p><strong>Working Hours</strong></p>
                  <p>Wed-Mon: 9:30 AM - 6:30 PM<br /> Tuesday our Holiday</p>
                </div>
              </div>
              <div className="cdipl-detail-item">
                <i className="fa fa-envelope"></i>
                <div>
                  <p><strong>Email Us</strong></p>
                  <p>info@contourdirectindia.com<br />contourdirectindia@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="cdipl-contact-form-container">
            <form className="cdipl-contact-form">
              <div className="cdipl-form-row">
                <input type="text" placeholder="Name*" required />
                <input type="email" placeholder="Email*" required />
              </div>
              <div className="cdipl-form-row">
                <input type="date" placeholder="Desired Date*" required />
                <input type="time" placeholder="Desired Time*" required />
              </div>
              <textarea
                placeholder="Additional Message"
                rows="5"
                className="cdipl-textarea"
              ></textarea>
              <button type="submit" className="cdipl-submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
      </Container>
      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default ContactUs;
