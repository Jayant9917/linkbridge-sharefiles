import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './SocialIcons.css';

const SocialIcons = ({ dark = false }) => {
  return (
    <div className="social-icons-container">
      <a 
        href="https://github.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`social-icon ${dark ? 'dark' : ''}`}
      >
        <FaGithub />
      </a>
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`social-icon ${dark ? 'dark' : ''}`}
      >
        <FaLinkedin />
      </a>
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`social-icon ${dark ? 'dark' : ''}`}
      >
        <FaTwitter />
      </a>
      <a 
        href="mailto:support@linkbridge.com" 
        className={`social-icon ${dark ? 'dark' : ''}`}
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialIcons; 