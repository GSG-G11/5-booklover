import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import BookDetails from '../Components/BookDetails/BookDetails'
const SingleBook = (props) => {
const {id} =props.match.params
  return (
    <div>
      <Navbar/>
      <BookDetails id={id} />
    </div>
  )
}

export default SingleBook
