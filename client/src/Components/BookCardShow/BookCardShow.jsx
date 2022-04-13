import React from 'react';
import { Link } from 'react-router-dom';

import './BookCardShow.css'

const BookCardShow = ({id, name, imageUrl}) => {
    console.log({id, name, imageUrl});
  return (
    <div className="book-show" title={name}>
        <img src={imageUrl} alt={name} />
        <div className="overlay">
            <Link to={`/book/${id}`} className='btn link'>
                <i className="ri-search-line"></i>
            </Link>
        </div>
    </div>
  )
}

export default BookCardShow