import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import BookDetails from '../Components/BookDetails/BookDetails'
import Subscribe from "../Components/Subscribe/Subscribe"
const SingleBook = (props) => {
const {id} =props.match.params
  return (
    <div>
      <Navbar/>
      <BookDetails id={id} />
      <Subscribe/>
    </div>
  )
}

export default SingleBook
