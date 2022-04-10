import React from 'react'
import Navbar from '../Components/Navbar/Navbar';

const Cart = (props) => {
  const {isBooksPage} = props
  return (
    <div>
      <Navbar isBooksPage={isBooksPage} />
      <h1>Hello from cart</h1>
    </div>
  )
}

export default Cart
