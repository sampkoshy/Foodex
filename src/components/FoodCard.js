import React from 'react'
import plate from '../assests/plate.png'
import './food.css'

const FoodCard = () => {
  return (
    <div className="food-card12">
      <div className="food-card-image">
        <img
          src={plate}
          alt="Grilled Chicken"
        />
        <div className="food-card-icons">
          <i className="fas fa-heart"></i>
          <i className="fas fa-shopping-bag"></i>
        </div>
      </div>
      <div className="food-card-content">
        <div className="food-card-header">
          <h3>Grilled Chicken</h3>
          <span className="food-card-price">$12.99</span>
        </div>
        <p className="food-card-description">
          Freshly grilled chicken served on a bed of crisp greens with a light vinaigrette.
        </p>
      </div>
    </div>
  )
}

export default FoodCard