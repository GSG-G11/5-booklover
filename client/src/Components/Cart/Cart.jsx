import React from 'react'
import EmptyCart from './EmptyCart/EmptyCart'
import './Cart.css'

const Cart = (props) => {
    const {fakeDate} = props
  return (
    <div className='wrap-cart'>
       {fakeDate.length? true :<EmptyCart/>}
    </div>
  )
}

export default Cart
