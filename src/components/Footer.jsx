import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><i className="icon">📧</i> info@wellingtoncollege.ac.uk</p>
          <p><i className="icon">📞</i> +44 20 1234 5678</p>
          <p><i className="icon">📍</i> 123 College Road, London, UK</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/academics">Academic Programmes</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="https://facebook.com/wellingtoncollege" className="social-icon">Facebook</a>
            <a href="https://twitter.com/wellingtoncollege" className="social-icon">Twitter</a>
            <a href="https://instagram.com/wellingtoncollege" className="social-icon">Instagram</a>
            <a href="https://linkedin.com/school/wellingtoncollege" className="social-icon">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Wellington College. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 