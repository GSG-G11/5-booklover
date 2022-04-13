import React from 'react'
import './Summary.css'

const Summary = ({cart}) => {
  const prices = cart.map(book => book.price * book.quantity);
  const subtotal = prices.reduce((acc, crr) => acc + crr, 0)
  const tax = 1.05;
  
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
          <span>${subtotal}</span>
        </div>
        <div className='tax'>
          <span>Tax</span>
          <span>% {tax}</span>
        </div>
        <hr />
        <div className='total'>
          <span>Total</span>
          <span>${subtotal * tax}</span>
        </div>
        <button className='checkout-btn'>CHECKOUT</button>
        <span className='confirm'>Confirm Shopping</span>
      </div>

    </div>
  )
}

export default Summary