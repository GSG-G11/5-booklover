import EmptyBooks from "../EmptyBooks/EmptyBooks";
import BookCard from "./BookCard/BookCard";
import "./ShowBooks.css";
import Pagination from "../../Pagination/Pagination";

const ShowBooks = ({
  isLogin,
  handleDisplayAddForm,
  books,
  deleteBook,
  searchBook,
  ctgType,
  minPrice,
  maxPrice,
  currentPage,
  postsPerPage,
  addToCart,
  paginate,
  incPage,
  decPage,
}) => {
  let result = books.filter(
    (book) =>
      (ctgType === 'All Genres' || book.category === ctgType) &&
      (minPrice === '' || book.price >= minPrice) &&
      (maxPrice === '' || book.price <= maxPrice) &&
      (searchBook === '' || book.name.toLowerCase().includes(searchBook.toLowerCase()))
  );

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentbooks = result.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <section className='books-side'>
      <div className='books-header'>
        <h2 className='sec-title'>Books</h2>
        {isLogin ? (
          <button
            className='btn filter-btn'
            onClick={() => handleDisplayAddForm()}>
            <i className='ri-add-line'></i>
            Add Book
          </button>
        ) : null}
      </div>
      {currentbooks.length > 0 ? (
        <div className='books-grid'>
          {currentbooks.map(({ id, name, price, category, author, imageurl }) => {
            return (
              <BookCard
                id={id}
                name={name}
                price={price}
                category={category}
                author={author}
                imageUrl={imageurl}
                isLogin={isLogin}
                key={id}
                deleteBook={deleteBook}
                addToCart={addToCart}
              />
            );
          })}
        </div>
      ) : (
        <EmptyBooks />
      )}
      {}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={result.length}
        currentPage={currentPage}
        paginate={paginate}
        incPage={incPage}
        decPage={decPage}
      />
    </section>
    
  );
};

export default ShowBooks;
