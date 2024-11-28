import React, { useState } from 'react';
import './nav.css'; // Link your custom CSS file

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">FoodEx</div>
      
      <div className="search-bar" >
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
        <input type="text" placeholder="Search dishes" />
      </div>
      
    
      <div className='side-stack'>
      <button className="hamburger-icon" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className='nav-s'>
      <ul className={`nav-links ${isMenuOpen ? 'show-menu' : ''}`}>
        
        <li className="nav-item">Home</li>
        <li className="nav-item">Dish Categories</li>
        <li className="nav-item">Shop</li>
        <li className="nav-item">More</li>
      </ul>
      <div className="nav-icons">
        <i className="fas fa-heart"></i>
        <i className="fas fa-shopping-bag"></i>
        <button className="login-button">Log In</button>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
