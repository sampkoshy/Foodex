import React from 'react'
import './banner.css'


const Banner = () => {
  return (
    <>
      
      <div className="ban-main">

        <div className="ban-txt">
          <h2>Stay Updated with Our Latest Offers</h2>
          <h3>
            Subscribe to our newsletter and be the first to know about exclusive deals,
            new menu items, and special promotions.
          </h3>
        </div>
        <div className="ban-in">
          <input type="email" className="ban-inp" placeholder="Type email address" />
          <button className="ban-btn">Subscribe</button>
        </div>
      </div>




    </>
  )
}

export default Banner