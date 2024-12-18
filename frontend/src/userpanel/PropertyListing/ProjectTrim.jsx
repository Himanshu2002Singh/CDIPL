import React, { useState } from 'react';
import PropertyGrid from './PropertyCard';
import Pagination from './Pagination';
import Footer from '../Footer/Footer';

const ProjectTrim = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <PropertyGrid />
      
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} style={{ marginBottom:'20px'}}/>
      <Footer/>
    </div>
  );
};

export default ProjectTrim;
