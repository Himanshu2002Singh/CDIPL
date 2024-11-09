import React, { useState } from 'react';
import PropertyGrid from './PropertyCard';
import Pagination from './Pagination';

const ProjectTrim = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <PropertyGrid />
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default ProjectTrim;
