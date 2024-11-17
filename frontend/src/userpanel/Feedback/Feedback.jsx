/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import './Feedback.css';
import axios from 'axios';
import config from '../../config';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        // Send inquiry data to backend
        const response = await axios.post(`${config.baseURL}/inquiries/submit`, {
            name,
            phone,   // Include phone number in the request
            message,
        });

        if (response.status === 201) {
            alert('Inquiry submitted successfully');
            setName('');
            setPhone('');  // Reset phone number field
            setMessage('');
           
        }
    } catch (error) {
        alert('Error submitting inquiry');
    }
};



  return (
    <div className="contact-container">
      {/* Google Maps iframe */}
      <div className="map-section">
      <iframe 
      className='map-iframe'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5088040750966!2d77.30839828206425!3d28.58450912359919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce54e9bcf820d%3A0x7e5e5cb0dc9c7437!2sContour%20Buildcon%20(P)%20Ltd.!5e0!3m2!1sen!2sin!4v1728504832191!5m2!1sen!2sin"
         width="600"
          height="650" 
           allowfullscreen="" 
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade">
        
      </iframe>
      </div>

      <div className="content-container">
        {/* Form Section */}
        <div className="form-section">
          <h2>Send us a Message</h2>
          <p>We're here to assist you with any inquiries, questions, or support you need. Reach out to us for detailed property information, expert advice, or general assistance, and we'll get back to you promptly.</p>
          <form onSubmit={handleSubmit} id="contact-form">
          <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            </div>
                            <div className="form-group">
                            <label htmlFor="phone">Your Phone Number</label>
                            <input
                                type="phone"
                                id="phone"
                                placeholder="Your Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            </div>
                            </div>

                            <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                placeholder="Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
        </div>

        {/* Contact Information Section */}
        <div className="info-section">
          <h2>Contact Information</h2>
          <p>Contact us for property details, expert advice, or general inquiries. We're here to help!</p>
          <div className="info-item">
            <h4>Address</h4>
            <p>B-84, Sector 2, Noida 201301, GautamBuddh Nagar, Uttar Pradesh</p>
          </div>
          <div className="info-item">
            <h4>Phone</h4>
            <p>+91 9266768043</p>
          </div>
          <div className="info-item">
            <h4>E-mail</h4>
            <p>info@contourdirectindia.com</p>
          </div>
          <div className="social-media">
            <a href="https://www.facebook.com/contourdirectindia">
            <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/company/contour-direct-india/">
            <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/contourdirectindia/">
            <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@ContourDirectIndia">
            <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
