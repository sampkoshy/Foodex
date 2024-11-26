import React from 'react'
import './siderow.css'
import dish from '../assests/dish.webp'

const Siderow = () => {
  return (
    <div className="feature">
        <div className='sideimg'>
        <img src={dish} alt="Customizable Options" />
        </div>
   
    <div>
      <h4>Customizable Options</h4>
      <p>
        Relish the healthy and flavorful Mediterranean diet, with fresh
        seafood, hummus, falafel, and vibrant salads.
      </p>
    </div>
  </div>
  )
}

export default Siderow