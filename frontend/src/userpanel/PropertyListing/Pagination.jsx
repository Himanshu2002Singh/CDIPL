import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, onPageChange }) => {
  return (
    <div className="pagination">
      <button
        className="pagination-arrow-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &larr;
      </button>
      <span>Page {currentPage}</span>
      <button
        className="pagination-arrow-btn"
        onClick={() => onPageChange(currentPage + 1)}
      >
        &rarr;
      </button>
    </div>
  );
};

export default Pagination;
