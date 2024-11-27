import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill styling
import axios from 'axios';
import './TextEditor.css';

const TextEditor = () => {
  const [content, setContent] = useState(''); // Editor content
  const [status, setStatus] = useState(''); // Status messages (saving, saved, etc.)
  const [url, setUrl] = useState(''); // Published URL
  const [customUrl, setCustomUrl] = useState(''); // Custom URL entered by the user
  const [showUrlPopup, setShowUrlPopup] = useState(false); // Show/Hide URL input popup

  // Function to save content manually
  const handleSave = async () => {
    setStatus('Saving...');
    if (!customUrl.trim()) {
      setStatus('Please enter a valid URL');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/save', { content, url: customUrl });
      setUrl(response.data.url);
      setStatus('Saved! Content published successfully.');
      setShowUrlPopup(false); // Close the URL popup
    } catch (error) {
      console.error('Error saving content:', error);
      setStatus('Failed to save content.');
    }
  };

  // Autosave function triggered every 5 seconds
  useEffect(() => {
    const autosave = setInterval(() => {
      if (content.trim() !== '') {
        handleSave();
      }
    }, 5000);

    return () => clearInterval(autosave);
  }, [content]);

  // ReactQuill modules and formats
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', { color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'list',
    'bullet',
    'link',
    'image',
    'video',
  ];

  return (
    <div className="text-editor-container" style={{marginTop:'7%'}}>
      <h2 className="editor-title">Text Editor</h2>

      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        placeholder="Write something amazing..."
      />

      <div className="editor-actions">
        <button onClick={() => setShowUrlPopup(true)} className="save-button">
          Save & Publish
        </button>
        <span className="status-message">{status}</span>
      </div>

      {showUrlPopup && (
        <div className="url-popup">
          <div className="popup-content">
            <label htmlFor="url">Enter a Custom URL:</label>
            <input
              type="text"
              id="url"
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              placeholder="Enter URL"
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setShowUrlPopup(false)}>Cancel</button>
          </div>
        </div>
      )}

      {url && (
        <div className="published-url">
          <p>Page Published!</p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        </div>
      )}
    </div>
  );
};

export default TextEditor;
