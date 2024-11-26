import React from 'react';
import './midban.css'; // Link to the CSS file for styling
import Siderow from '../smallcomponents/Siderow';
import chef from '../assests/chef.webp'

const Midbanner = () => {
  return (
    <div className="mid-main">
      <h3>Why Our Menus Stand Out</h3>
      <p>
        Crafted with care, our menus are designed to offer exceptional quality,
        variety, and a seamless dining experience.
      </p>

      <div className="mid-sec">
        {/* Left Section - Image */}
        <div className="midsec-left">
          <img
            src={chef}
            alt="Chef"
            className="chef-image"
          />
        </div>

        {/* Right Section - Features */}
        <div className="midsec-right">
         <Siderow/>
         <Siderow/>
         <Siderow/>
         <Siderow/>

        
        </div>
      </div>
    </div>
  );
};

export default Midbanner;
