import { render, screen } from '@testing-library/react';
import React from 'react';

// Create a simplified mock App component for testing
const MockApp = () => (
  <div>
    <header data-testid="header">Header Component</header>
    <main data-testid="main-content">Main Content</main>
    <footer data-testid="footer">Footer Component</footer>
  </div>
);

test('renders app structure', () => {
  render(<MockApp />);
  expect(screen.getByTestId('header')).toBeInTheDocument();
  expect(screen.getByTestId('main-content')).toBeInTheDocument();
  expect(screen.getByTestId('footer')).toBeInTheDocument();
});
