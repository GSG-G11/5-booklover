import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import EmptyCart from '../Components/Cart/EmptyCart/EmptyCart'
import Cart from '../Components/Cart/Cart'

const Carts = (props) => {
  const {isBooksPage} = props
  const cartBooks = JSON.parse(localStorage.getItem('cart'))

  return (
    <div>
      <Navbar isBooksPage={isBooksPage} />
      { cartBooks? <Cart cartBooks={cartBooks}/> : <EmptyCart/> }
    </div>
  )
}

export default Carts
