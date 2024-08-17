import React from 'react'
import Success from '../../assets/done.png';

import './Cart.css'

function Checkout() {
  return (
    <div className='checkout-container' >
            <img src={Success} alt="" className='checkout-image' />
            <h4>Thanks for Shopping !</h4>
    
    </div>
  )
}

export default Checkout