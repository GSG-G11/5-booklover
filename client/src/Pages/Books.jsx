import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Login from "../Components/Login/Login";
import AddBook from "../Components/AddBook/AddBook";
import MainBooks from '../Components/Books/MainBooks';
import Subscribe from '../Components/Subscribe/Subscribe';
import Swal from "sweetalert2";
import Footer from "../Components/Footer/Footer";
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
    currentPage: 1,
    postsPerPage: 9,
  };

  deleteBook(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You are going to delete this book!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
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
          .then((res) => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: res.message,
              showConfirmButton: false,
              timer: 1500
            })
          })
          .catch((err) => console.log(err));
      }
    })
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
      currentPage,
      postsPerPage,
    } = this.state;
    const {
      books,
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
      addBook,
      errorLogin,
      errorAddBook,
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
          errorLogin={errorLogin}
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
          errorAddBook={errorAddBook}
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
        <Footer />
      </>
    );
  }
}

export default Books;
