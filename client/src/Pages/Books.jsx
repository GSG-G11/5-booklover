import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Login from "../Components/Login/Login";
import AddBook from "../Components/AddBook/AddBook";
import MainBooks from '../Components/Books/MainBooks';
import Subscribe from '../Components/Subscribe/Subscribe';
const categories = [
  'All Genres',
  'Arts & Photography',
  'Biographies & Memory',
  'Children’s Book',
  'Cookbook & Food',
  'History',
  'Literature & Fiction',
  'Romance',
  'Sicfi & Fantasy',
  'Teen & Young Adult',
];
class Books extends Component {
  state = {
    books: [],
    currentPage: 1,
    postsPerPage: 9,
  };
  
  getBooks = () => {
    fetch('/api/v1/books/show')
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => this.setState({ books: data.data }))
      .catch((err) => this.setState({ err: err }));
  };

  componentDidMount() {
    this.getBooks();
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.books !== this.state.books) {
      this.getBooks();
    }
  }

  deleteBook(id) {
    fetch(`/api/v1/book/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((data) => data.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  // Change page
  paginate = (pageNumber) => this.setState({ currentPage: pageNumber });

  incPage = (lastPage) => {
    const { currentPage } = this.state;
    if (currentPage === lastPage) {
      return false;
    } else {
      this.setState((prevState) => {
        return { currentPage: prevState.currentPage + 1 };
      });
    }
  };

  decPage = (firstPage) => {
    const { currentPage } = this.state;
    if (currentPage === firstPage) {
      return false;
    } else {
      this.setState((prevState) => {
        return { currentPage: prevState.currentPage - 1 };
      });
    }
  };

  render() {
    const {
      books,
      currentPage,
      postsPerPage,
    } = this.state;
    const {
      passwordSeller,
      name,
      price,
      author,
      category,
      imageUrl,
      description,
      searchBook,
      ctgType,
      minPrice,
      maxPrice,
      isBooksPage,
      addToCart,
      isLogin,
      handleLogin,
      handleLoginSeller,
      handleLogout,
      handleDisplayAddForm,
      displayModal,
      nameSeller,
      displayModalAdd,
      handleChange,
      addBook
    } = this.props;
    return (
      <>
        <Navbar
          isLogin={isLogin}
          isBooksPage={isBooksPage}
          searchBook={searchBook}
          handleChange={handleChange}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
        />
        <Login
          displayModal={displayModal}
          nameSeller={nameSeller}
          passwordSeller={passwordSeller}
          handleChange={handleChange}
          handleLogin={handleLogin}
          handleLoginSeller={handleLoginSeller}
        />
        <AddBook
          categories={categories}
          displayModalAdd={displayModalAdd}
          name={name}
          price={price}
          author={author}
          category={category}
          imageUrl={imageUrl}
          description={description}
          handleChange={handleChange}
          handleDisplayAddForm={handleDisplayAddForm}
          addBook={addBook}
        />
        <MainBooks
          categories={categories}
          searchBook={searchBook}
          ctgType={ctgType}
          minPrice={minPrice}
          maxPrice={maxPrice}
          handleChange={handleChange}
          isLogin={isLogin}
          handleDisplayAddForm={handleDisplayAddForm}
          books={books}
          deleteBook={this.deleteBook}
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          paginate={this.paginate}
          incPage={this.incPage}
          decPage={this.decPage}
          addToCart={addToCart}
        />
        <Subscribe />
      </>
    );
  }
}

export default Books;
