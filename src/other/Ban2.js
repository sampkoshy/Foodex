import React from "react";
import "./ban2.css"; // Make sure to create a corresponding CSS file
import Banside from "../smallcomponents/Banside";
import chef from "../assests/chef.webp";

const Ban2 = () => {
  return (
    <div className="ban2-container">
      <h2 className="ban2-title">Explore International Cuisines</h2>
      <p className="ban2-subtitle">
        Discover a world of flavors with dishes from top cuisines around the
        globe, freshly prepared and delivered to your door.
      </p>
      <div className="ban2-content">
        <div className="ban2-left">
          <Banside side={"left"} />
          <Banside side={"left"} />
          <Banside side={"left"} />
        </div>
        <div className="ban2-mid">
          <img src={chef} />
        </div>
        <div className="ban2-right">
          <Banside />
          <Banside />
          <Banside />
        </div>
      </div>
    </div>
  );
};

export default Ban2;
