import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Login from "../Components/Login/Login";
import AddBook from "../Components/AddBook/AddBook";
import MainBooks from '../Components/Books/MainBooks';
const seller = localStorage.getItem('nameSeller');
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
    isLogin: seller ? true : false,
    searchBook: '',
    displayModal: false,
    nameSeller: '',
    passwordSeller: '',
    displayModalAdd: false,
    name: '',
    price: '',
    description: '',
    author: '',
    imageUrl: '',
    category: 'Arts & Photography',
    ctgType: 'All Genres',
    minPrice: '',
    maxPrice: '',
    books: []
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleLogin = () => {
    this.setState({ displayModal: !this.state.displayModal });
  };
  handleLoginSeller = (e) => {
    e.preventDefault();
    this.setState({ isLogin: true });
    const { nameSeller } = this.state;
    localStorage.setItem('nameSeller', nameSeller);
    this.handleLogin();
  };
  handleLogout = () => {
    this.setState({ isLogin: false });
    localStorage.removeItem('nameSeller');
  };
  handleDisplayAddForm = () => {
    this.setState({ displayModalAdd: !this.state.displayModalAdd });
  };

  getBooks = () => {
    fetch("/api/v1/books/show")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => this.setState({ books: data.data }))
      .catch((err) => this.setState({ err: err }));
  }

  componentDidMount() {
    this.getBooks();
  }

  componentDidUpdate(prevState, prevProps) {
    if(prevState.books !== this.state.books){
      this.getBooks();
    }
  }

  addBook = (e) => {
    e.preventDefault();
    const {name, price, author, category, imageUrl, description} = this.state;
    fetch('/api/v1/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        price,
        author,
        category,
        imageUrl,
        description,
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        this.setState({
          name: '',
          price: '',
          author: '',
          category: 'Arts & Photography',
          imageUrl: '',
          description: '',
          displayModalAdd: false
        });
      })
      .catch((err) => console.log(err));
  };

  deleteBook(e) {
    const id = e.target.dataset.id;
    fetch(`/api/v1/book/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id
      })
    })
    .then(data => data.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
  };

  render() {
    const {
      isLogin,
      searchBook,
      displayModal,
      nameSeller,
      passwordSeller,
      displayModalAdd,
      name,
      price,
      author,
      category,
      imageUrl,
      description,
      ctgType,
      minPrice,
      maxPrice,
      books
    } = this.state;
    const { isBooksPage } = this.props;
    return (
      <>
        <Navbar
          isLogin={isLogin}
          isBooksPage={isBooksPage}
          searchBook={searchBook}
          handleChange={this.handleChange}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
        />
        <Login
          displayModal={displayModal}
          nameSeller={nameSeller}
          passwordSeller={passwordSeller}
          handleChange={this.handleChange}
          handleLogin={this.handleLogin}
          handleLoginSeller={this.handleLoginSeller}
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
          handleChange={this.handleChange}
          handleDisplayAddForm={this.handleDisplayAddForm}
          addBook={this.addBook}
        />
        <MainBooks
          categories={categories}
          ctgType={ctgType}
          handleChange={this.handleChange}
          minPrice={minPrice}
          maxPrice={maxPrice}
          isLogin={isLogin}
          handleDisplayAddForm={this.handleDisplayAddForm}
          books={books}
          deleteBook={this.deleteBook}
        />
      </>
    );
  }
}

export default Books;
