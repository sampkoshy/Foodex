import React from 'react';
import './smcard.css';
import plate from '../assests/plate.png'

const Smcard = () => {
    return (
        <div className='sm-main'>
            <div className='smimg-img'>
            <img className='sm-img' src={plate} alt="Dish" />

            </div>
         
            <div className='sm-content'>
                <div className='sm-txt'>
                    <h3>Margherita Pizza</h3>
                    <h4>$10.99</h4>
                </div>
                <p>Classic pizza topped with fresh tomatoes, mozzarella, and basil.</p>
            </div>
        </div>
    );
};

export default Smcard;
