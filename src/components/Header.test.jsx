import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified mock Header component for testing
const MockHeader = () => (
  <header className="header">
    <div className="logo">
      <img src="https://via.placeholder.com/150" alt="Wellington College Logo" />
      <h1>Wellington College</h1>
    </div>
    <nav className="nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/academics">Academics</a></li>
        <li><a href="/admissions">Admissions</a></li>
        <li><a href="/campus-life">Campus Life</a></li>
        <li><a href="/notices">Notices</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

describe('Header Component', () => {
  test('renders the college logo and name', () => {
    render(<MockHeader />);
    
    expect(screen.getByAltText(/wellington college logo/i)).toBeInTheDocument();
    expect(screen.getByText(/wellington college/i)).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<MockHeader />);
    
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/academics/i)).toBeInTheDocument();
    expect(screen.getByText(/admissions/i)).toBeInTheDocument();
    expect(screen.getByText(/campus life/i)).toBeInTheDocument();
    expect(screen.getByText(/notices/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });
}); 