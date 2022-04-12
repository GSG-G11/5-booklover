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
  paginate
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
          currentPage = {currentPage}
          postsPerPage= {postsPerPage}
          paginate= {  paginate}
          searchBook={searchBook}
          ctgType={ctgType}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
           
      </div>
    </div>
  );
};

export default MainBooks