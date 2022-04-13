import React from 'react'
import Filter from './Filter/Filter'
import './MainBooks.css'
import ShowBooks from './ShowBooks/ShowBooks'


const MainBooks = ({
  categories,
  handleChange,
  searchBook,
  ctgType,
  minPrice,
  maxPrice,
  isLogin,
  handleDisplayAddForm,
  books,
  deleteBook,
  currentPage,
  postsPerPage,
  addToCart,
  paginate,
  incPage,
  decPage,
  editBook,
}) => {
  return (
    <div className='container'>
      <div className='row'>
        <aside className='side-bar'>
          <Filter
            categories={categories}
            ctgType={ctgType}
            handleChange={handleChange}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
        </aside>
        <ShowBooks
          isLogin={isLogin}
          handleDisplayAddForm={handleDisplayAddForm}
          books={books}
          deleteBook={deleteBook}
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          paginate={paginate}
          incPage={incPage}
          decPage={decPage}
          searchBook={searchBook}
          ctgType={ctgType}
          minPrice={minPrice}
          maxPrice={maxPrice}
          addToCart={addToCart}
          editBook={editBook}
        />
      </div>
    </div>
  );
};

export default MainBooks