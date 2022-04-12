import React from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'
import Summary from './Summary/Summary'
import Table from './Table/Table'

const Cart = (props) => {
  const {cart,detletFromCart,incrementQuantity} = props
  return (
    <div className='container'>
        <Table cart={cart} detletFromCart={detletFromCart} incrementQuantity={incrementQuantity}/>
        <div className='wrap'>
        <Link to='/' className='continue-shop'>Continue Shop</Link>
        </div>
        
        <Summary/> 
    </div>
  )
}

export default Cart
