import React, { Component } from "react";
import BookCard from "./BookCard/BookCard";
import "./ShowBooks.css";
// { isLogin }
class ShowBooks extends Component {
  state = {
    books: [],
    err: "",
  };
  componentDidMount() {
    fetch("/api/v1/books/show")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => this.setState({ books: data.data }))
      .catch((err) => this.setState({ err: err }));
  }

  render() {
    const { isLogin, handleDisplayAddForm } = this.props;
    const {books}=this.state
    return (
      <section className="books-side">
        <div className="books-header">
          <h2 className="sec-title">Books</h2>
          {isLogin ? (
            <button
              className="btn filter-btn"
              onClick={() => handleDisplayAddForm()}
            >
              <i class="ri-add-line"></i>
              Add Book
            </button>
          ) : null}
        </div>
        <div className="books-grid">
          {books.map(({id,name,price,category,author,imageurl})=>{
   return <BookCard
   id={id}
   name={name}
   price={price}
   category={category}
   author={author}
   imageUrl={
    imageurl
   }
   isLogin={isLogin} key={id}
 />
          })}
        </div>
      </section>
    )
  }
}

export default ShowBooks;
