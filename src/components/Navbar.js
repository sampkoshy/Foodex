
import React from 'react';
import './nav.css'; // Link your custom CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">FoodEx</div>
      
      <div className="search-bar">
  <button className="search-button">
    <i className="fas fa-search"></i>
  </button>
  <input type="text" placeholder="Search dishes" />
</div>
      <ul className="nav-links">
        <li className="nav-item ">Home</li>
        <li className="nav-item">Dish Categories</li>
        <li className="nav-item">Shop</li>
        <li className="nav-item">More</li>
      </ul>
      <div className="nav-icons">
        <i className="fas fa-heart"></i>
        <i className="fas fa-shopping-bag"></i>
        <button className="login-button">Log In</button>
      </div>
    </nav>
  );
}

export default Navbar;
