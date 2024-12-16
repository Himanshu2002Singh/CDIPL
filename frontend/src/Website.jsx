import React , {useEffect , useState} from 'react';
import { Helmet } from 'react-helmet';

import HeroSection from './userpanel/Hero/Hero';
import Companies from './userpanel/Plan/Company';
import AboutSection from './userpanel/About/About';
import Footer from './userpanel/Footer/Footer';
import Projects from './userpanel/Project/Project';
import BlogSection from './userpanel/BlogSection/BlogSection';
import DeveloperCarousel from './userpanel/DeveloperCarousel/DeveloperCarousel';
import Testimonials from './userpanel/Testimonials/Testimonials';

import WhyChooseUs from './userpanel/Process-Work/Processwork';
import ContactPage from './userpanel/Feedback/Feedback';
import PropertySection from './userpanel/PropertySection/PropertySection';
import ImageSection from './userpanel/Imagesection';

import axios from 'axios';
import config from './config';




const Website = () => {
 
  const [metaDetails, setMetaDetails] = useState(''); // State to store meta details
  const [metastilte , setMetaTitle] = useState('');
  const [metaKeywords , setMetaKeywords]= useState('');

  useEffect(() => {
    const fetchMetaDetails = async () => {
      try {
        const response = await axios.get(`${config.baseURL}/meta-home-details`);
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

  return (
    <div>
      <Helmet>
        {/* Global Meta Tags */}
        <title>{metastilte ||  `Real Estate Website - Home`}</title>
        <meta 
        name="description" 
        content={
           metaDetails || `Discover properties, read blogs, and explore our real estate services.`} />
        <meta 
        name="keywords"
         content={metaKeywords || `real estate, properties, home buying, real estate services` } />
      </Helmet>
      <HeroSection />
      <Companies />
      <PropertySection />
      <Projects />
      <AboutSection />
      <ImageSection />
      <DeveloperCarousel />
      <WhyChooseUs />
      <Testimonials />
      <ContactPage />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Website;
