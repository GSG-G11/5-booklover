import React from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'
import Summary from './Summary/Summary'
import Table from './Table/Table'

const Cart = (props) => {
  const {cartBooks} = props
  return (
    <div className='container'>
        <Table fakeDate={cartBooks}/>
        <div className='wrap'>
        <Link to='/' className='continue-shop'>Continue Shop</Link>
        </div>
        
        <Summary/> 
    </div>
  )
}

export default Cart
