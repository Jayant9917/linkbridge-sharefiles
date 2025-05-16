import React from 'react';
import { 
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaAddressBook,
  FaShieldAlt,
  FaFileContract,
  FaLock,
  FaLink,
  FaUser,
  FaUpload,
  FaDownload
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>LinkBridge</h3>
          <p>Your trusted platform for secure and efficient file sharing.</p>
          <SocialIcons dark={true} />
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/"><FaHome /> Home</Link></li>
            <li><Link to="/about"><FaInfoCircle /> About</Link></li>
            <li><Link to="/contact"><FaAddressBook /> Contact</Link></li>
            <li><Link to="/privacy"><FaShieldAlt /> Privacy Policy</Link></li>
            <li><Link to="/terms"><FaFileContract /> Terms of Service</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Features</h4>
          <ul>
            <li><FaLock /> Secure File Sharing</li>
            <li><FaLink /> Instant Links</li>
            <li><FaUser /> No Account Needed</li>
            <li><FaUpload /> Easy Upload</li>
            <li><FaDownload /> Fast Downloads</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li><FaEnvelope />ranajaynt527@gmail.com</li>
            <li>Roorkee, Uttarakhand, India</li>
            <li>+91 7819016236</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LinkBridge. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 