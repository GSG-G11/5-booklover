import React from 'react';
import BookCardShow from '../BookCardShow/BookCardShow';
import { Link } from 'react-router-dom';
import './Trending.css';

const Trending = ({ books }) => {
  const trending = books.slice(0, 7);
  console.log(books);
  return (
    <section className='trending-sec'>
      <div className='container'>
        <div className='title-sec'>
          <h3 className='sec-title'>Trending this week</h3>
          <p className='sec-desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className='books-grid-show'>
          {trending.map((book) => (
            <div className='single-book' key={book.id}>
              <BookCardShow
                name={book.name}
                imageUrl={book.imageurl}
                id={book.id}
              />
            </div>
          ))}
        </div>
        <div className='btns-div'>
          <Link to='/books' className='btn link'>
            view more
            <i className='ri-arrow-right-line'></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Trending;
