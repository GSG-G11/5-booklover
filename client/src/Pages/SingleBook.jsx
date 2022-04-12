import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import BookDetails from '../Components/BookDetails/BookDetails'
import Subscribe from "../Components/Subscribe/Subscribe"
const SingleBook = (props) => {
const {id} =props.match.params
const {addToCart} = props;
  return (
    <div>
      <Navbar/>
      <BookDetails id={id} addToCart={addToCart} />
      <Subscribe/>
    </div>
  )
}

export default SingleBook
