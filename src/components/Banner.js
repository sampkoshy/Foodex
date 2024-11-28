import React from 'react';
import './banner.css';


const Banner = () => {
  return (
    <div className="banner-background">
      <div className="banner-content">
        <h2>Stay Updated with Our Latest Offers</h2>
        <p>
          Subscribe to our newsletter and be the first to know about exclusive deals,
          new menu items, and special promotions.
        </p>
        <div className="banner-subscription">
          <input type="email" placeholder="Type email address" className="banner-input" />
          <button className="banner-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

