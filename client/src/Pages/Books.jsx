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
    searchBook: '',
    ctgType: 'All Genres',
    minPrice: '',
    maxPrice: '',
    books: [],
    currentPage :1,
    postsPerPage:9,
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
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
    if(prevState.cart !== this.state.cart){
      localStorage.setItem('cart', JSON.stringify(this.state.cart))
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

  deleteBook(id) {
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

  addToCart = ({id, name, price, category, author, imageUrl}) => {
    const {cart} = this.state;
    const dbCart = cart.filter(book => book.id === id);

    if(dbCart.length > 0){
      alert('This Book is Already Exist!')
    } else{
      this.setState((prevState) => {
        return {cart: [...prevState.cart, {id, name, price, category, author, imageUrl}]}
      })
    }
    
  }

  // Change page
  paginate = pageNumber => this.setState({currentPage : pageNumber});

  render() {
    const {
      isLogin,
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
      searchBook,
      ctgType,
      minPrice,
      maxPrice,
      books,
      currentPage,
      postsPerPage
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
          searchBook={searchBook}
          ctgType={ctgType}
          minPrice={minPrice}
          maxPrice={maxPrice}
          handleChange={this.handleChange}
          isLogin={isLogin}
          handleDisplayAddForm={this.handleDisplayAddForm}
          books={books}
          deleteBook={this.deleteBook}
          currentPage={ currentPage}
          postsPerPage={ postsPerPage}
          paginate={this.paginate}
          addToCart={this.addToCart}
        />
      </>
    );
  }
}

export default Books;
