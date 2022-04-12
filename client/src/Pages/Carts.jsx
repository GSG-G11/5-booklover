import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import EmptyCart from '../Components/Cart/EmptyCart/EmptyCart'
import Cart from '../Components/Cart/Cart'

const Carts = (props) => {
  const {isBooksPage,cart,detletFromCart} = props
  return (
    <div>
      <Navbar isBooksPage={isBooksPage} />
      { cart.length? <Cart cart={cart} detletFromCart={detletFromCart}/> : <EmptyCart/> }
    </div>
  )
}

export default Carts
