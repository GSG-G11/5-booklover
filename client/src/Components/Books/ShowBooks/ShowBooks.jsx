import EmptyBooks from "../EmptyBooks/EmptyBooks";
import BookCard from "./BookCard/BookCard";
import "./ShowBooks.css";
// { isLogin }
const ShowBooks = ({ isLogin, handleDisplayAddForm, books, deleteBook }) => {
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
      {books.length > 0 ? (
        <div className='books-grid'>
          {books.map(({ id, name, price, category, author, imageurl }) => {
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
              />
            );
          })}
        </div>
      ) : (
        <EmptyBooks />
      )}
    </section>
  );
};

export default ShowBooks;
