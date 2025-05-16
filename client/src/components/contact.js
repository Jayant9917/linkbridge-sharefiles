import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>Have questions or feedback? We'd love to hear from you!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>ranajaynt527@gmail.com</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Phone</h3>
              <p>+91 7819016236</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>Roorkee, Uttarakhand , India</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        <div className="social-links">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">LinkedIn</a>
            <a href="#" className="social-icon">GitHub</a>
            <a href="#" className="social-icon">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
