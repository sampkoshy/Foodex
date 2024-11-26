import React from 'react'
import './banside.css'
import dish from '../assests/dish.webp'

const Banside = ({side}) => {
  return (
    <div className={side == "left" ? "cuisine-card":"row-rev"} >
          <div className='cuisine-txt'>
            <h3>Mexican</h3>
            <p>Enjoy bold, zesty flavors with tacos,<br/> burritos, and other Mexican delights <br/>packed with spices and fresh ingredients.</p></div>
            <img src={dish} alt="Mexican cuisine" className='cuisine-img' />
          </div>
  )
}

export default Banside