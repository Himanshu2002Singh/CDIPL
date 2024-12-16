import React, { useEffect, useState } from "react";
import "./ContactUs.css"; // Ensure the CSS file is created and linked correctly
import Footer from "../Footer/Footer";
import backgroundImg from '../../assets/r1.png';
import { Container } from "react-bootstrap";
import axios from "axios";
import config from "../../config";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [metaDetails, setMetaDetails] = useState(''); // State to store meta details
  const [metastilte , setMetaTitle] = useState('');
  const [metaKeywords , setMetaKeywords]= useState('');

  useEffect(() => {
    const fetchMetaDetails = async () => {
      try {
        const response = await axios.get(`${config.baseURL}/meta-contact-details`);
        if (response.data.success) {

          setMetaDetails(response.data.metaHomeDetails.metaDescription);
          setMetaTitle(response.data.metaHomeDetails.metaTitle);
          setMetaKeywords(response.data.metaHomeDetails.metaKeywords);
          console.log(response.data) // Assume meta contains title and description
        } else {
          console.error('Error fetching meta details:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching meta details:', error);
      }
    };

    fetchMetaDetails();
  })

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
    <>
         {/* Background Image with Title */}
         <Helmet>
        <title>{metastilte ||  `Contact Us- CDIPL`}</title>
        <meta 
        name="description" 
        content={
           metaDetails || `Discover properties, read blogs, and explore our real estate services.`} />
        <meta 
        name="keywords"
         content={metaKeywords || `real estate, properties, home buying, real estate services` } />
      </Helmet>
     <Container fluid>
      <div className="cdipl-contact-section">
        {/* Breadcrumb Section */}
        <div className="cdipl-breadcrumb" style={{ backgroundImage: `url(${backgroundImg})` }}>
          <div className="">
            <div className="company-title">
              <a href="/"><span>Reach Out, We're Here! </span></a>
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
            <form className="cdipl-contact-form" onSubmit={handleSubmit}>
              <div className="cdipl-form-row">
                <input 
                id="name"
                 type="text"
                  placeholder="Name*" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required  />
                <input type="text"
                                        id="number"
                                        placeholder="Enter your Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div className="cdipl-form-row">
                <input type="date" placeholder="Desired Date*" required />
                <input type="time" placeholder="Desired Time*" required />
              </div>
              <textarea
                 id="message"
                 placeholder="Enter your message"
                 value={message}
                 onChange={(e) => setMessage(e.target.value)}
                
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
