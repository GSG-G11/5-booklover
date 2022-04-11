import React from 'react'
import './Table.css'
import TableHeader from './TableHeader'
import TableItem from './TableItem'

const Table = (props) => {
  const {fakeDate} = props
  return (
    <div>
      <TableHeader/>
      {fakeDate.map((item)=>{return <TableItem item={item} key={item.id}/>})}
    </div>
  )
}

export default Table