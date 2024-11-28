import React from 'react';
import './section.css';
import FoodCard from './FoodCard';

const Section = () => {





  return (
    <div className="sec-main">
      <h1>Our Top Meals</h1>
      <p>Explore a wide range of delicious meals available for every time of day and every craving.</p>
      <div className="sec-2">
        <ul className="sec-link">
          <li className="sec-item">All</li>
          <li className="sec-item">Dinner</li>
          <li className="sec-item">Breakfast</li>
          <li className="sec-item">Lunch</li>
        </ul>
        <button className="sec-bt">Explore More Menus</button>
      </div>
      <div className="food-card-div">
    <FoodCard />
    
   
  </div>
    </div>
  );
};

export default Section;
