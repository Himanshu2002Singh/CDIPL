import React from 'react'
import HeroSection from './userpanel/Hero/Hero'

import Companies from './userpanel/Plan/Company'
import AboutSection from './userpanel/About/About'
import Footer from './userpanel/Footer/Footer'
import Projects from './userpanel/Project/Project'
import FeedbackForm from './userpanel/Feedback/Feedback'
import ProcessSection from './userpanel/Process-Work/Processwork'
import BlogSection from './userpanel/BlogSection/BlogSection'
import DeveloperCarousel from './userpanel/DeveloperCarousel/DeveloperCarousel'
import InquiryForm from './userpanel/Feedback/Feedback'
import Testimonials from './userpanel/Testimonials/Testimonials'
import ProjectsCarousel from './userpanel/ExplosiveProject/ExplosiveProject'
import WhyChooseUs from './userpanel/Process-Work/Processwork'




const Website = () => {
  return (
   
    <div>
      <HeroSection />
      <Companies/>
      <Projects/>
      <AboutSection/>
      <ProjectsCarousel/>
      <DeveloperCarousel/>
      <WhyChooseUs/>
      
        <Testimonials/>
        <InquiryForm/>
      <BlogSection/>

      
      <Footer/>
    </div>

  )
}

export default Website