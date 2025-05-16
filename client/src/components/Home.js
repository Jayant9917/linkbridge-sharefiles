import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [file, setFile] = useState(null);
  const [downloadLink, setDownloadLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadProgress(0);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setIsLoading(true);
    setUploadProgress(0);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:10000'}/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setDownloadLink(data.path);
      setUploadProgress(100);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        // For HTTPS or localhost
        await navigator.clipboard.writeText(downloadLink);
        alert('Link copied to clipboard!');
      } else {
        // Fallback for non-HTTPS
        const textArea = document.createElement('textarea');
        textArea.value = downloadLink;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          document.execCommand('copy');
          alert('Link copied to clipboard!');
        } catch (err) {
          console.error('Failed to copy text: ', err);
          alert('Failed to copy link. Please try selecting and copying manually.');
        }
        
        textArea.remove();
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy link. Please try selecting and copying manually.');
    }
  };

  return (
    <div className="home-page">
      <div className="home-container">
        <div className="hero-section">
          <h1>Welcome to LinkBridge</h1>
          <p>Share your files securely and instantly</p>
        </div>

        <div className="upload-section">
          <h2 className="section-title">Upload File</h2>
          <form className="upload-form" onSubmit={handleUpload}>
            <div className="form-group">
              <label htmlFor="file">Choose a file</label>
              <input
                type="file"
                id="file"
                onChange={handleFileChange}
                required
                disabled={isLoading}
              />
            </div>
            <button 
              type="submit" 
              className="upload-button"
              disabled={isLoading || !file}
            >
              {isLoading ? 'Uploading...' : 'Upload'}
            </button>
            {isLoading && (
              <div className="upload-progress">
                <div 
                  className="progress-bar" 
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            )}
          </form>
        </div>

        {downloadLink && (
          <div className="download-section">
            <h2 className="section-title">Download Link</h2>
            <div className="download-form">
              <div className="form-group">
                <input
                  type="text"
                  value={downloadLink}
                  readOnly
                  className="download-link"
                />
              </div>
              <button onClick={copyToClipboard} className="download-button">
                Copy Link
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home; 