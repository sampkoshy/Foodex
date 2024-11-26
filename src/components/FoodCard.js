import React, { useEffect, useState } from 'react';
import './food.css';

const FoodCard = () => {
  const [menu, setMenu] = useState([]);

  // Function to fetch menu data
  async function getAllTheMenus() {
    const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
    try {
      let response = await fetch(API_URL);
      let data = await response.json();
      
      setMenu(data.meals || []);
// Set the meals array to state
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  }

  // useEffect to call fetch function
  useEffect(() => {
    getAllTheMenus();
  }, []);
  // console.log("menu",menu)

  return (
    <div className="food-card-container" >
      {menu && menu.length > 0 ? (
        menu.map((item) => (
          <div className="food-card12" key={item.idMeal}>
          
            <div className="food-card-image">
              <img src={item.strMealThumb} alt={item.strMeal} />
              <div className="food-card-icons">
                <i className="fas fa-heart"></i>
                <i className="fas fa-shopping-bag"></i>
              </div>
            </div>
            <div className="food-card-content">
              <div className="food-card-header">
                <h3>{item.strMeal}</h3>
                <span className="food-card-price">$12.99</span>
              </div>
              <p className="food-card-description">
                {item.strInstructions.slice(0, 100)}...
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FoodCard;
