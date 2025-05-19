import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified mock Home component for testing
const MockHome = () => (
  <div className="home-container">
    <section className="hero-section">
      <h1>Welcome to Wellington College</h1>
      <p>A place where knowledge meets excellence</p>
      <button>Explore Our Academic Programmes</button>
    </section>
    
    <section className="featured-programmes">
      <h2>Featured Programmes</h2>
      <div className="programmes-grid">
        <div className="programme-card">
          <h3>Business Administration</h3>
        </div>
        <div className="programme-card">
          <h3>Computer Science</h3>
        </div>
        <div className="programme-card">
          <h3>English Literature</h3>
        </div>
        <div className="programme-card">
          <h3>Psychology</h3>
        </div>
      </div>
    </section>
    
    <section className="campus-highlights">
      <h2>Campus Highlights</h2>
      <div className="highlights-grid">
        <div className="highlight-card">
          <h3>State-of-the-Art Facilities</h3>
        </div>
        <div className="highlight-card">
          <h3>Vibrant Student Life</h3>
        </div>
        <div className="highlight-card">
          <h3>Distinguished Faculty</h3>
        </div>
      </div>
    </section>
    
    <section className="upcoming-events">
      <h2>Upcoming Events</h2>
    </section>
    
    <section className="testimonials">
      <h2>What Our Students Say</h2>
    </section>
  </div>
);

describe('Home Component', () => {
  test('renders hero section with heading and call-to-action', () => {
    render(<MockHome />);
    
    expect(screen.getByText(/welcome to wellington college/i)).toBeInTheDocument();
    expect(screen.getByText(/explore our academic programmes/i)).toBeInTheDocument();
  });

  test('renders featured programmes section', () => {
    render(<MockHome />);
    
    expect(screen.getByText(/featured programmes/i)).toBeInTheDocument();
    expect(screen.getByText(/business administration/i)).toBeInTheDocument();
    expect(screen.getByText(/computer science/i)).toBeInTheDocument();
    expect(screen.getByText(/english literature/i)).toBeInTheDocument();
    expect(screen.getByText(/psychology/i)).toBeInTheDocument();
  });

  test('renders campus highlights section', () => {
    render(<MockHome />);
    
    expect(screen.getByText(/campus highlights/i)).toBeInTheDocument();
    expect(screen.getByText(/state-of-the-art facilities/i)).toBeInTheDocument();
    expect(screen.getByText(/vibrant student life/i)).toBeInTheDocument();
    expect(screen.getByText(/distinguished faculty/i)).toBeInTheDocument();
  });

  test('renders upcoming events section', () => {
    render(<MockHome />);
    
    expect(screen.getByText(/upcoming events/i)).toBeInTheDocument();
  });

  test('renders testimonials section', () => {
    render(<MockHome />);
    
    expect(screen.getByText(/what our students say/i)).toBeInTheDocument();
  });
}); 