import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" onClick={closeMenu}>
          <img 
            src="https://img.freepik.com/free-vector/flat-design-college-logo-template_23-2149664329.jpg" 
            alt="College Logo" 
            className="logo"
          />
        </Link>
        <h1>Wellington College</h1>
      </div>
      
      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/academics" onClick={closeMenu}>Academics</Link></li>
          <li><Link to="/admissions" onClick={closeMenu}>Admissions</Link></li>
          <li><Link to="/campus-life" onClick={closeMenu}>Campus Life</Link></li>
          <li><Link to="/notices" onClick={closeMenu}>Notices</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 