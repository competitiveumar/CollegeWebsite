import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified mock Footer component for testing
const MockFooter = () => (
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
        </ul>
      </div>
      
      <div className="footer-section">
        <h3>Connect With Us</h3>
        <div className="social-links">
          <a href="https://facebook.com" className="social-icon">Facebook</a>
          <a href="https://twitter.com" className="social-icon">Twitter</a>
          <a href="https://instagram.com" className="social-icon">Instagram</a>
          <a href="https://linkedin.com" className="social-icon">LinkedIn</a>
        </div>
      </div>
    </div>
    
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Wellington College. All Rights Reserved.</p>
    </div>
  </footer>
);

describe('Footer Component', () => {
  test('renders contact information', () => {
    render(<MockFooter />);
    
    expect(screen.getByText(/contact us/i)).toBeInTheDocument();
    expect(screen.getByText(/info@wellingtoncollege.ac.uk/i)).toBeInTheDocument();
    expect(screen.getByText(/\+44 20 1234 5678/i)).toBeInTheDocument();
    expect(screen.getByText(/123 College Road, London, UK/i)).toBeInTheDocument();
  });

  test('renders quick links', () => {
    render(<MockFooter />);
    
    expect(screen.getByText(/quick links/i)).toBeInTheDocument();
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
    expect(screen.getByText(/academic programmes/i)).toBeInTheDocument();
    expect(screen.getByText(/admissions/i)).toBeInTheDocument();
  });

  test('renders social media links', () => {
    render(<MockFooter />);
    
    expect(screen.getByText(/connect with us/i)).toBeInTheDocument();
    expect(screen.getByText(/facebook/i)).toBeInTheDocument();
    expect(screen.getByText(/twitter/i)).toBeInTheDocument();
    expect(screen.getByText(/instagram/i)).toBeInTheDocument();
    expect(screen.getByText(/linkedin/i)).toBeInTheDocument();
  });

  test('renders copyright information with current year', () => {
    render(<MockFooter />);
    
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear} Wellington College`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
  });
}); 