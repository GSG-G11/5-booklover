import React from 'react'
import './Summary.css'

const Summary = () => {
  return (
    <div className='summary'>
      <div className='shopping-summary'>
        <h3>Shopping Summary</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <span>Have a coupon code?</span>
        <div className='param-code'>
          <input type="text" placeholder='Enter param code here' />
          <button><i className="ri-arrow-right-line"></i></button>
        </div>
      </div>
      <div className='buy'>
        <div className='subtotal'>
          <span>Subtotal</span>
          <span>$80</span>
        </div>
        <div className='tax'>
          <span>Tax</span>
          <span>$80</span>
        </div>
        <hr />
        <div className='total'>
          <span>Total</span>
          <span>$80</span>
        </div>
        <button className='checkout-btn'>CHECKOUT</button>
        <span className='confirm'>Confirm Shopping</span>
      </div>

    </div>
  )
}

export default Summary