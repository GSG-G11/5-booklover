import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Cart from '../Components/Cart/Cart'

const Carts = (props) => {
  const {isBooksPage} = props
  const fakeDate =[]
  return (
    <div>
      <Navbar isBooksPage={isBooksPage} />
      <Cart fakeDate={fakeDate}/>  
    </div>
  )
}

export default Carts
