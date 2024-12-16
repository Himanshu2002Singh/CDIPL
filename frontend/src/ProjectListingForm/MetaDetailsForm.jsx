import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';
import './MetaDetailsForm.css';

const MetaDetailsForm = ({ projectTittle, onClose }) => {
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [metaKeywords , setMetaKeywords] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${config.baseURL}/meta-details`, {
        metaTitle,
        metaDescription,
        metaKeywords,
        projectTittle,
      });
      alert('MetaDetails added successfully');
      onClose();
    } catch (error) {
      console.error('Error adding MetaDetails:', error);
      alert('Failed to add MetaDetails');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Add MetaDetails</h3>
        <form onSubmit={handleSubmit}>
          <label style={{color:'black'}}>
            Meta Title:
            <input
              type="text"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              required
            />
          </label>
          <label style={{color:'black'}} >
            Meta Description:
            <textarea
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
            ></textarea>
          </label>

          <label style={{color:'black'}} >
            Meta Keywords:
            <textarea
              value={metaKeywords}
              onChange={(e) => setMetaKeywords(e.target.value)}
            ></textarea>
          </label>
          <div className="form-buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MetaDetailsForm;
