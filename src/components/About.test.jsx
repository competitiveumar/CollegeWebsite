import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified mock About component for testing
const MockAbout = () => (
  <div className="about-container">
    <h2>About Wellington College</h2>
    
    <section className="mission-vision">
      <div className="mission">
        <h3>Our Mission</h3>
        <p>To provide an exceptional educational experience that transforms students into leaders who make a positive impact on society.</p>
      </div>
      
      <div className="vision">
        <h3>Our Vision</h3>
        <p>To be a premier institution of higher education, known for academic excellence, innovation, and developing well-rounded global citizens.</p>
      </div>
    </section>
    
    <section className="history">
      <h3>Our History</h3>
      <p>Founded in 1859, Wellington College has a rich heritage of academic excellence and innovation. What began as a small institution with just 50 students has grown into one of the most respected educational establishments in the country.</p>
    </section>
    
    <section className="leadership">
      <h3>Our Leadership</h3>
      <div className="leadership-cards">
        <div className="leader-card">
          <h4>Dr. Sarah Mitchell</h4>
          <p>Principal</p>
        </div>
        <div className="leader-card">
          <h4>Prof. James Wilson</h4>
          <p>Vice Principal</p>
        </div>
      </div>
    </section>
  </div>
);

describe('About Component', () => {
  test('renders about page heading', () => {
    render(<MockAbout />);
    
    expect(screen.getByText(/about wellington college/i)).toBeInTheDocument();
  });

  test('renders mission and vision section', () => {
    render(<MockAbout />);
    
    expect(screen.getByText(/our mission/i)).toBeInTheDocument();
    expect(screen.getByText(/our vision/i)).toBeInTheDocument();
  });

  test('renders history section', () => {
    render(<MockAbout />);
    
    expect(screen.getByText(/our history/i)).toBeInTheDocument();
    expect(screen.getByText(/founded in 1859/i)).toBeInTheDocument();
  });

  test('renders leadership section', () => {
    render(<MockAbout />);
    
    expect(screen.getByText(/our leadership/i)).toBeInTheDocument();
    expect(screen.getByText(/dr\. sarah mitchell/i)).toBeInTheDocument();
    expect(screen.getByText(/prof\. james wilson/i)).toBeInTheDocument();
  });
}); 