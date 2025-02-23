import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          Little Break 
        </Link>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link to="/location" onClick={() => setIsMenuOpen(false)}>Location</Link>
        <Link to="/photos" onClick={() => setIsMenuOpen(false)}>Photos</Link>
        <Link to="/menu" onClick={() => setIsMenuOpen(false)}>Menu</Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
