import React from 'react'
import './Table.css'
import TableHeader from './TableHeader'
import TableItem from './TableItem'

const Table = (props) => {
  const {cart,detletFromCart} = props
  return (
    <div>
      <TableHeader/>
      {cart.map((item)=>{return <TableItem item={item} key={item.id} detletFromCart={detletFromCart}/>})}
    </div>
  )
}

export default Table