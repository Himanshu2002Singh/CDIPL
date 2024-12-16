import React, { useEffect, useState } from 'react';
import './AboutCompany.css'; // Import the CSS file for styling
import backgroundImg from '../../assets/AboutBG.png'; // Background Image
import storyImage1 from '../../assets/storyimg1.png'; // First Story image
import storyImage2 from '../../assets/storyimg2.png'; // Second Story image
import missionImg from '../../assets/mission.png'; // Mission image
import visionImg from '../../assets/vision.png'; // Vision image
import FeedbackForm from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import vipin from '../../assets/Vipin-Chaudhary (1).jpg';
import seema from '../../assets/pixelcut-export.jpeg';
import megha from '../../assets/Megha-Tyagi (1).jpg'
import ajay from '../../assets/Ajay-Gupta.png';
import DeveloperCarousel from '../DeveloperCarousel/DeveloperCarousel';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import config from '../../config';


const AboutCompany = () => {
   
  const [metaDetails, setMetaDetails] = useState(''); // State to store meta details
  const [metastilte , setMetaTitle] = useState('');
  const [metaKeywords , setMetaKeywords]= useState('');

  useEffect(() => {
    const fetchMetaDetails = async () => {
      try {
        const response = await axios.get(`${config.baseURL}/meta-about-details`);
        if (response.data.success) {

          setMetaDetails(response.data.metaAboutDetails.metaDescription);
          setMetaTitle(response.data.metaAboutDetails.metaTitle);
          setMetaKeywords(response.data.metaAboutDetails.metaKeywords);
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

  
  return (
    <div className="about-company-container">
      {/* Background Image with Title */}
      <Helmet>
        <title>{metastilte ||  `About CDIPL`}</title>
        <meta 
        name="description" 
        content={
           metaDetails || `Discover properties, read blogs, and explore our real estate services.`} />
        <meta 
        name="keywords"
         content={metaKeywords || `real estate, properties, home buying, real estate services` } />
      </Helmet>

      <div className="about-company-header" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="overlay">
          <div className="company-title">
            <h1>CDIPL - About Our Company</h1>
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className="sticky-nav">
        <ul>
          <li>
            <a href="#about-company">About Company</a>
          </li>
          <li>
          <a href="#leadership" >Leadership</a>
          </li>
          <li>
            <a href="#ceo-desk">CEO Desk</a>
          </li>
        </ul>
      </div>

      {/* About Company Section */}
   
      <section id="about-company" className="our-story-section">
  <div className="container">
    <h2 className="story-heading">Our Story</h2>
    <div className="story-content-wrapper">
      {/* Combined image section with slight overlap */}
      <div className="combined-story-image">
        <div className="image-wrapper overlap">
          <img src={storyImage1} alt="Sharda Quad" className="story-img story-img1 animated-image" />
          <img src={storyImage2} alt="WTC Noida" className="story-img story-img2 animated-image" />
          <div className="image-overlay">CDIPL</div>
        </div>
      </div>

      {/* Right side: Story content */}
      <div className="story-content">
        <p className="animated-content">
          Welcome to <strong>Contour Direct India Private Limited</strong>, a sister concern firm of <strong>CBPL</strong>.
          Founded in 2024, CDIPL is a Real estate Consulting firm with huge aspirations
          and the entire Real estate world to capture in its arms. CDIPL is aligned to
          cater Residential, Commercial, and Mixed Use real estate needs of DELHI NCR
          region. The core idea behind CDIPL is that the journey of a Real Estate buyer is
          no different than marriage between two individuals.
        </p>
        <p className="animated-content">
          At CDIPL, we believe that finding a home is more than just a transaction—it's a
          personal journey. Founded on the principles of trust, integrity, and dedication,
          we’re here to make your real estate experience as smooth and enjoyable as
          you would imagine.
        </p>
        <div className="story-highlights">
          <div className="highlight animated-content">
            <h3>RERA</h3>
            <p>Approved Project</p>
          </div>
          <div className="highlight animated-content">
            <h3>#1</h3>
            <p>India's No.1 Property Advisor</p>
          </div>
          <div className="highlight animated-content">
            <h3>5000+</h3>
            <p>Happy & Satisfied Customers</p>
          </div>
          <div className="highlight animated-content">
            <h3>40m+</h3>
            <p>Million Square Feet Sold</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

 

      <section id="mission-vision" className="mission-vision-section">
  <div className="container">
    {/* Mission Section */}
    <div className="mission-vision-wrapper">
      <div className="mission-image mission-vision-image">
        <img src={missionImg} alt="Mission" className="image-box" />
        <div className="image-text">CDIPL</div>
      </div>
      <div className="mission-content mission-vision-content">
        <h2>Mission</h2>
       
        <p>
       <strong> Client-Centric Approach:</strong> "Put our clients at the centre of everything we do,
understanding their unique needs and providing customised solutions that
exceed their expectations."
</p>
<p>
<strong>Integrity and Trust: </strong>"Maintain the highest standards of integrity and
transparency, building trust with clients, partners, and the community
through honest and ethical practices."
</p>
<p>
<strong>Market Expertise:</strong> "Leverage deep market knowledge and industry
expertise to provide insightful guidance, helping clients make informed
decisions and achieve their real estate goals."
</p><p>
<strong>Partner Focus: </strong>"Foster strong relationships with our partners we serve,
contributing to their growth and development.”

        </p>
      </div>
    </div>

    {/* Vision Section */}
    <div className="mission-vision-wrapper reverse-layout">
      <div className="vision-content mission-vision-content">
        <h2>Vision</h2>
    
        <p>
        To be the leading real estate consulting firm known for transforming the way people
experience buying, selling, and investing in property. We aspire to set the industry
standard for excellence, innovation, and client satisfaction, creating trust, integrity and
enduring relationships”
        </p>
        <p> At CDIPL, we value transparency, reliability, and client satisfaction. Our goal is
to be your trusted partner in the entire journey, and we are dedicated to earn
your trust through our unwavering commitment to excellence.</p>
      </div>
      <div className="vision-image mission-vision-image">
        <img src={visionImg} alt="Vision" className="image-box" />
        <div className="image-text">CDIPL</div>
      </div>
    </div>
  </div>
</section>

 {/* Leadership Section */}

   <section id="leadership" className="leadership-section">
   <div className="container">
     <h2 className="leadership-heading">Leadership</h2>
     <div className="leadership-grid">
       {/* VIPIN RAGHUVANSHI */}
       <div className="leadership-card">
         <div className="leader-left">
           <img src={vipin} alt="Vipin Raghuvanshi" className="leader-photo" />
           <div className="leader-info">
             <h3>VIPIN RAGHUVANSHI</h3>
             <p className="leader-position">CEO & Founder, CBPL & CDIPL</p>
           </div>
         </div>
         <div className="leader-right">
           <p className="leader-intro">Vipin Raghuvanshi is an accomplished real estate visionary with over 20 years of
experience in the industry. As the Founder and Managing Director of CDIPL, he has
earned a reputation in the real estate market in Noida. His journey began with a
passion to learn about Real estate industry. He acknowledges the fact that
hardwork and discipline is the key to success. And under his leadership, CBPL has
become synonymous with quality, integrity, and excellence in real estate.</p>
         </div>
       </div>
 
       {/* SEEMA RAGHUVANSHI */}
       <div className="leadership-card">
         <div className="leader-left">
           <img src={seema} alt="Seema Raghuvanshi" className="leader-photo" />
           <div className="leader-info">
             <h3>SEEMA RAGHUVANSHI</h3>
             <p className="leader-position">COO, CBPL & CDIPL</p>
           </div>
         </div>
         <div className="leader-right">
           <p className="leader-intro">                                                                                                                                                                                                                                                                                                                               Mrs. Seema Raghuvanshi, the Chief Operating Officer of the company, graduated
with a Master’s in Business Administration degree from Sophia Polytechnic College
in Mumbai. She heads the Sales Operations, & Finance department of the
company.
Seema Raghuvanshi is a dynamic professional with a unique blend of creativity
and business acumen. Her first innings as Fashion Designer has been defined by a
passion for design & attention to detail.</p>
         </div>
       </div>
 
       {/* MEGHA TYAGI */}
       <div className="leadership-card">
         <div className="leader-left">
           <img src={megha} alt="Megha Tyagi" className="leader-photo" />
           <div className="leader-info">
             <h3>MEGHA TYAGI</h3>
             <p className="leader-position">Director, Sales</p>
           </div>
         </div>
         <div className="leader-right">
           <p className="leader-intro">Megha Tyagi is an accomplished professional with a diverse academic and
industry background. After earning a bachelor's degree in physical therapy from
Bangalore, Megha pursued double master’s degrees in neurorehabilitation and
healthcare from Brunel University, London. Following five years in the UK, Megha
returned to India to launch a successful real estate venture.
Since joining the Contour family in 2017, Megha has taken on the role of Director,
overseeing direct and channel sales, marketing, and operations.</p>
         </div>
       </div>
 
       {/* AJAY KUMAR GUPTA */}
       <div className="leadership-card">
         <div className="leader-left">
           <img src={ajay} alt="Ajay Kumar Gupta" className="leader-photo" />
           <div className="leader-info">
             <h3>AJAY KUMAR GUPTA</h3>
             <p className="leader-position">Director, Sales</p>
           </div>
         </div>
         <div className="leader-right">
           <p className="leader-intro">Ajay Kumar Gupta has been an IT professional teacher with a deep understanding
of the technological landscape, focusing on educating and mentoring students in
information technology. His role involves training individuals on key IT skills, helping
them to navigate the ever-evolving tech world, and equipping them with practical
knowledge for professional growth in the industry.


In his current role, Ajay Kumar Gupta holds the position of Sales Director in CDIPL &
CBPL.
</p>
         </div>
       </div>
 
       {/* VINAY TOMAR */}
       <div className="leadership-card">
         <div className="leader-left">
           <img src="path-to-vinay-image" alt="Vinay Tomar" className="leader-photo" />
           <div className="leader-info">
             <h3>VINAY TOMAR</h3>
             <p className="leader-position">Asst. Director Sales - CDIPL</p>
           </div>
         </div>
         <div className="leader-right">
           <p className="leader-intro">Completed his MBA from SYMBIOSIS University Pune in 2015 and B. Tech from MIT,
Pune. Has 13 years of Sales experience in the IT, Health & Nutrition and Real Estate
Industry.
Professional Journey:
As, Key Account Sales Manager, Vinay has managed strategic accounts, where he
leveraged his deep understanding of technology to offer customised solutions that
meet client needs. His strong analytical and communication skills have made him
a trusted partner in ensuring the smooth execution of sales strategies and
operations for high-profile clients.</p>
         </div>
       </div>
     </div>
   </div>
 </section>
 
    
    

      {/* CEO Desk Section */}
      <section id="ceo-desk" className="ceo-desk-section">
  <div className="container">
    <h2 className="ceo-desk-heading">CEO's Desk</h2>
    <div className="ceo-desk-content">
      {/* Left side - CEO's Image */}
      <div className="ceo-image">
        <img src={vipin} alt="Vipin Raghuvanshi" />
      </div>

      {/* Right side - CEO's Message */}
      <div className="ceo-message">
        <p>I’m thrilled and excited to extend a warm welcome to you on behalf of our entire CDIPL
        team. As the Founder of CDIPL, I am honoured to share our journey and vision with you.</p>
        <p>From the very beginning, our mission has been to build an ecosystem that fosters trust
and integrity with our customers, channel partners and employees. We believe that
success is not just about what we achieve but about the positive impact we have on
our clients, partners, and community.</p>
        <p>Our dedicated team is at the heart of everything we do. With a passion for delivering
excellence and making clients aspirations as ours, we strive to exceed expectations
and deliver exceptional results.
</p>
        <p>We’re committed to fostering a culture of collaboration, transparency, and continuous
improvement. Your trust and support mean the world to us, and we are excited to build
lasting relationships and achieve remarkable outcomes together.</p>
      </div>
    </div>
  </div>
</section>

      <DeveloperCarousel/>
      <FeedbackForm/>
      <Footer/>
    </div>
  );
};

export default AboutCompany;
