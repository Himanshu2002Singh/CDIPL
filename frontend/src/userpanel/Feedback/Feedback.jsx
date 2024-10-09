import React from 'react';
import './Feedback.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      {/* Google Maps iframe */}
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.983853193135!2d-73.93524258459368!3d40.730610979328865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18055555%3A0x89f3d34808f0c1bb!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1619634896145!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        title="Google Maps"
      ></iframe>

      <div className="overlay">
        {/* Contact Form Section */}
        <div className="form-section">
          <h2>Send us a Message</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="Enter your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" placeholder="Enter your Email" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="info-section">
          <h2>Contact Information</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.</p>
          <div className="info-item">
            <h4>Address</h4>
            <p>4b Long Street, Miami, USA</p>
          </div>
          <div className="info-item">
            <h4>Phone</h4>
            <p>+3230-45-45-67</p>
          </div>
          <div className="info-item">
            <h4>E-mail</h4>
            <p>greendream@mail.com</p>
          </div>
          <div className="social-media">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
