import React from 'react';
import { 
  FaShieldAlt,
  FaRocket,
  FaUser,
  FaUpload,
  FaDownload,
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaLock,
  FaChartLine,
  FaGlobe,
  FaEnvelope
} from 'react-icons/fa';
import SocialIcons from './SocialIcons';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1>About LinkBridge</h1>
          <p>Your trusted platform for secure and efficient file sharing.</p>
        </div>

        <div className="about-content">
          <div className="about-card">
            <div className="card-icon">
              <FaRocket />
            </div>
            <h3>Our Mission</h3>
            <p>LinkBridge is dedicated to providing a simple, secure, and efficient way to share files. We believe in making file sharing accessible to everyone without compromising on security or user experience.</p>
            <div className="mission-stats">
              <div className="stat-item">
                <FaChartLine />
                <span>100+</span>
                <p>Files Shared</p>
              </div>
              <div className="stat-item">
                <FaGlobe />
                <span>50+</span>
                <p>Countries</p>
              </div>
            </div>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <FaShieldAlt />
            </div>
            <h3>Security & Privacy</h3>
            <p>Your security is our top priority. We implement industry-standard encryption and security measures to ensure your files are protected at all times.</p>
            <ul className="security-features">
              <li><FaLock /> End-to-End Encryption</li>
              <li><FaShieldAlt /> Secure File Transfer</li>
              <li><FaUser /> Privacy-First Approach</li>
            </ul>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <FaCode />
            </div>
            <h3>Technology Stack</h3>
            <p>Built with modern technologies to ensure reliability and performance.</p>
            <ul className="tech-stack">
              <li><FaCode /> React.js - Frontend Framework</li>
              <li><FaServer /> Node.js - Backend Runtime</li>
              <li><FaDatabase /> MongoDB - Database</li>
              <li><FaCloud /> AWS S3 - File Storage</li>
            </ul>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <FaRocket />
            </div>
            <h3>Features</h3>
            <p>Experience the best in file sharing with our comprehensive feature set.</p>
            <ul className="feature-list">
              <li><FaUpload /> Easy Upload</li>
              <li><FaDownload /> Fast Downloads</li>
              <li><FaUser /> No Account Needed</li>
              <li><FaGlobe /> Global Access</li>
            </ul>
          </div>
        </div>

        <div className="contact-section">
          <h3>Get in Touch</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope />
              <span>ranajaynt527@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaGlobe />
              <span>Roorkee, Uttarakhand, India</span>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <span>+91 7819016236</span>
            </div>
          </div>
          <div className="social-links">
            <h4>Connect With Us</h4>
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 