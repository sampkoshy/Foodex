import React from 'react';
import './footer.css'; // Make sure to include this CSS file

const Footer = () => {
  return (
    <div className="foot-main">
      <div className="foot-brand">
        <h2>FoodEx</h2>
        <p>
          We are dedicated to delivering the best food from top restaurants straight to your doorstep, 24/7. With easy ordering and fast delivery, we're here to satisfy your cravings anytime.
        </p>
      </div>
      <div className="foot-links">
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Dish Categories</li>
            <li>Special Offers</li>
            <li>Shop</li>
            <li>Tips & Tricks </li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3>Need Help?</h3>
          <ul>
            <li>FAQs</li>
            <li>Customer Support</li>
            <li>Order Tracking</li>
            <li>Delivery Information</li>
            <li>Payment Methods</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3>Stay Connected</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
