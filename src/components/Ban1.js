import React from 'react';
import './ban1.css'; // Create a CSS file for styling this component

const Ban1 = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1>Flat 20% Off on All Orders!</h1>
        <p>
          Looking for something delicious at a great price? Search and discover
          limited-time deals, discounts, and exclusive offers near you.
        </p>
        <button className="order-button">Order Now</button>
      </div>
    </div>
  );
};

export default Ban1;
