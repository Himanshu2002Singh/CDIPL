import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';


const MetaProjectForm = ({onClose}) => {
  const [metaTitle, setMetaTitle] = useState('');
  const [metaKeywords, setMetaKeywords] = useState('');
  const [metaDescription, setMetaDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.baseURL}/meta-allproject-details/create`, {
        metaTitle,
        metaKeywords,
        metaDescription,
      });
      if (response.data.success) {
        alert('Meta details updated successfully.');
        onClose();
      } else {
        alert('Failed to update meta details.');
      }
    } catch (error) {
      console.error('Error updating meta details:', error);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
    <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="metaTitle" style={{ color:'black'}} >Meta Title:</label>
        <input
          type="text"
          id="metaTitle"
          value={metaTitle}
          onChange={(e) => setMetaTitle(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', margin: '5px 0' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="metaKeywords"  style={{ color:'black'}} >Meta Keywords:</label>
        <input
          type="text"
          id="metaKeywords"
          value={metaKeywords}
          onChange={(e) => setMetaKeywords(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', margin: '5px 0' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="metaDescription" style={{ color:'black'}}>Meta Description:</label>
        <textarea
          id="metaDescription"
          value={metaDescription}
          onChange={(e) => setMetaDescription(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', margin: '5px 0' }}
        ></textarea>
      </div>
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

export default MetaProjectForm;
