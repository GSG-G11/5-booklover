import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import EmptyCart from '../Components/Cart/EmptyCart/EmptyCart'
import Cart from '../Components/Cart/Cart'

const Carts = (props) => {
  const {isBooksPage} = props
  const fakeDate =[]
  return (
    <div>
      <Navbar isBooksPage={isBooksPage} />
      { fakeDate.length? <Cart fakeDate={fakeDate}/> :<EmptyCart/> }
    </div>
  )
}

export default Carts
