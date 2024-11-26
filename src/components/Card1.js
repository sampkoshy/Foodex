import React from 'react'
import './card1.css'
import plate from '../assests/plate.png'

const Card1 = () => {
  return (

    <div className="promo-section">
      <div className="promo-text">
        <h2 className="promo-offer">Grab More, Spend Less!</h2>
        <h1 className="promo-title">Fuel Your Best Self with Every Bite</h1>
        <p className="promo-description">
          Discover the power of wholesome foods that fuel your journey toward a healthier, vibrant you.
        </p>
        <div className="promo-button-container">
          <button className="order-button">
         Order Now
          </button>
          <span className="discount-text">10-50% OFF</span>
        </div>
      </div>
      <div className="promo-image">
        <img
          src={plate}
          alt="Vegetable Pot"
        />
      </div>
    </div>
  

  )
}

export default Card1