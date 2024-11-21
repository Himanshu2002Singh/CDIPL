import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";

import Calendar from "./scenes/calendar/calendar";

import Website from "./Website";
import Dashboard3 from "./Dashboard3";
import Login from "./userpanel/Auth/Login";
import Navbar from "./userpanel/Header/UserHeader";
import Signup from "./userpanel/Auth/Signup";
import Projects from "./userpanel/Project/Project";
import ProjectDetail from "./userpanel/ProjectDetails/ProjectDetail";
import PropertyListing from "./userpanel/PropertyListing/PropertyListing";
import AboutCompany from "./userpanel/AboutCompany/AboutCompany";
import ProjectForm from "./ProjectListingForm/ProjectForm";
import AmenitiesForm from "./ProjectListingForm/AmenitiesForm";
import ContactUs from "./userpanel/ContactUs/ContactUs";
import UploadForm from "./ProjectListingForm/UploadForm";
import FloorDetails from "./ProjectListingForm/FloorDetails";
import AddDetailsForm from "./ProjectListingForm/AddDetailsForm";
import ProjectList from "./ProjectListingForm/ProjectList";
import UpdateDetails from "./ProjectListingForm/updateProperty";
import BlogPage from "./userpanel/Blogpage/Blogpage";
import ProjectTrim from "./userpanel/PropertyListing/ProjectTrim";
import BlogContent from "./userpanel/Blogpage/Jware_Airport";
import Blog2Content from "./userpanel/Blogpage/Sukhbiri_Home";


function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // State to track admin login

  return (
    <div>
      <div>
        {/* Render Navbar only when admin is not logged in */}
        {!isAdminLoggedIn && <Navbar />} 
        <Routes>
          <Route path='/' element={<Website />} />
          {/* Conditional rendering for the dashboard route */}
          {isAdminLoggedIn && <Route path="/dashboard" element={<Dashboard3 />} />}
          <Route path='/login' element={<Login setIsAdminLoggedIn={setIsAdminLoggedIn} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project/:tittle" element={<ProjectDetail />} />
          <Route path="/property" element={<ProjectTrim />} />
          <Route path='/About-Us' element={<AboutCompany />} />
          <Route path="/Contact-Us" element={<ContactUs />} />
          
          <Route path="/insights" element={<BlogPage />} />
          <Route path="/jewar-noida-international-airport-takes-first-flight" element={<BlogContent/>}/>
          <Route path="/sukhbiri-homes-noida" element={<Blog2Content/>}/>
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path="/team" element={<Team />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/invoices" element={<Invoices />} />
          {isAdminLoggedIn &&
          <Route path='/project-Listing-form' element={<ProjectForm />} />}
        
           <Route path="/amenities-form/:tittle" element={<AmenitiesForm />} />
           <Route path="/upload/:tittle" element={<UploadForm />} />
           <Route path="/floordetails/:tittle" element={<FloorDetails/>} />
           <Route path="/additional/:tittle" element={<AddDetailsForm/>} />
           <Route path='/projectlist' element={<ProjectList/>}/>
           <Route path='/updateproject' element={<UpdateDetails/>}/>

          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/line" element={<Line />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/geography" element={<Geography />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
