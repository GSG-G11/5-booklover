import React from 'react'
import { Link } from "react-router-dom";
import './BookCard.css'

const BookCard = ({
  id,
  name,
  price,
  category,
  author,
  imageUrl,
  isLogin,
  deleteBook,
  addToCart,
}) => {
  return (
    <div className='single-book' title={name}>
      <div className='book-img'>
        <img src={imageUrl} alt={name} />
        <div className='overlay'>
          <Link className='btn search-link' to={`/book/${id}`}>
            <i className='ri-search-line'></i>
          </Link>
          {isLogin ? (
            <>
              <button className='btn edit-btn'>
                <i className='ri-pencil-line'></i>
              </button>
              <button className='btn delete-btn' onClick={() => deleteBook(id)}>
                <i className='ri-delete-bin-line'></i>
              </button>
            </>
          ) : (
            <button className='btn cart-btn' onClick={() => addToCart({id, name, price, category, author, imageUrl, quantity: 1})}>
              <i className='ri-shopping-cart-2-line'></i>
            </button>
          )}
        </div>
      </div>
      <div className='book-info'>
        <h4 className='book-category'>{category}</h4>
        <h3 className='book-name'>
          {name.length > 30
            ? name.split('').slice(1, 27).join('') + '...'
            : name}
        </h3>
        <h5 className='book-author'>{author}</h5>
        <h6 className='book-price'>${price.toFixed(2)}</h6>
      </div>
    </div>
  );
};

export default BookCard