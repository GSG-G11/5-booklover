import React from 'react'
import { Link } from "react-router-dom";
import empty from './emptyCart.png'
import './EmptyCart.css'

const EmptyCart = () => {
  return (
    <div className='empty-cart'>
      <img src={empty} alt="emptyCart" className='empty-pic' />
      <p>Empty Cart click next Button to Browser Books adn add to cart</p>
      <Link to='/' className='browser-books'>Browser Books</Link>
    </div>
  )
}

export default EmptyCart