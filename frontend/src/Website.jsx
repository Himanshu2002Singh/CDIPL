import React from 'react'
import HeroSection from './userpanel/Hero/Hero'

import Companies from './userpanel/Plan/Company'
import AboutSection from './userpanel/About/About'
import Footer from './userpanel/Footer/Footer'
import Projects from './userpanel/Project/Project'

import BlogSection from './userpanel/BlogSection/BlogSection'
import DeveloperCarousel from './userpanel/DeveloperCarousel/DeveloperCarousel'

import Testimonials from './userpanel/Testimonials/Testimonials'
import ProjectsCarousel from './userpanel/ExplosiveProject/ExplosiveProject'
import WhyChooseUs from './userpanel/Process-Work/Processwork'
import ContactPage from './userpanel/Feedback/Feedback'
import PropertySection from './userpanel/PropertySection/PropertySection'
import ImageSection from './userpanel/Imagesection'




const Website = () => {
  return (
   
    <div>
      <HeroSection />
      <Companies/>
      <PropertySection/>
      <Projects/>
      <AboutSection/>
      {/* <ProjectsCarousel/> */}
      <ImageSection/>
       <DeveloperCarousel/>
      <WhyChooseUs/> 
      
        <Testimonials/>
        <ContactPage/>
      <BlogSection/> 
      
      <Footer/>
    </div>

  )
}

export default Website;