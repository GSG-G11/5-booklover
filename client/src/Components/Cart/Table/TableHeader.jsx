import React from 'react'

const TableHeader = () => {
  return (
    <div className='table-header'>
      <span className='item-header'>Item</span>
      <span>Quantity</span>
      <span>Price</span>
      <span>Total Price</span>
      <span className='action'></span>
    </div>
  )
}

export default TableHeader
