import React from "react";
import "./foodsection.css";
import Smcard from "./Smcard";

const FoodSection = () => {
  return (
    <div className="foodsec-main">
      <h2>Explore Our Delectable Menus</h2>
      <p>
        Indulge in a curated selection of dishes that celebrate flavor and
        freshness, perfect for every craving.
      </p>
      <div className="foodsec-cards">
        <Smcard />
        <Smcard />
        <Smcard />
        <Smcard />
        <Smcard />
        <Smcard />
      </div>
      <button className="foodsec-btn">expole more menu</button>
    </div>
  );
};

export default FoodSection;
