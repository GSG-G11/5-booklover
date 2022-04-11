import React from 'react'
import BookCard from './BookCard/BookCard';
import './ShowBooks.css';

const ShowBooks = ({ isLogin, handleDisplayAddForm }) => {
  return (
    <section className='books-side'>
      <div className='books-header'>
        <h2 className='sec-title'>Books</h2>
        {isLogin ? (
          <button className='btn filter-btn' onClick={() => handleDisplayAddForm()}>
            <i class="ri-add-line"></i>
            Add Book
          </button>
        ) : null}
      </div>
      <div className='books-grid'>
        <BookCard
          id={1}
          name={'The Diary of a Young Girl'}
          price={14.5}
          category={'History'}
          author={'Anne Frank'}
          imageUrl={
            'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9789352782772_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
          }
          isLogin={isLogin}
        />
        <BookCard
          id={1}
          name={'The Diary of a Young Girl'}
          price={14.5}
          category={'History'}
          author={'Anne Frank'}
          imageUrl={
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1575073611l/1617.jpg'
          }
          isLogin={isLogin}
        />
        <BookCard
          id={1}
          name={'The Diary of a Young Girl'}
          price={14.5}
          category={'History'}
          author={'Anne Frank'}
          imageUrl={
            'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780060935467_p0_v12%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
          }
          isLogin={isLogin}
        />
        <BookCard
          id={1}
          name={'The Diary of a Young Girl'}
          price={14.5}
          category={'History'}
          author={'Anne Frank'}
          imageUrl={
            'https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_FMjpg_UX999_.jpg'
          }
        />
      </div>
    </section>
  );
};

export default ShowBooks