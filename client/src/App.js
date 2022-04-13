import { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Books from "./Pages/Books";
import Carts from "./Pages/Carts";
import NotFound from "./Pages/NotFound";
import SingleBook from './Pages/SingleBook';
import Home from './Pages/Home';

import './App.css';
import 'remixicon/fonts/remixicon.css';
import Swal from 'sweetalert2';

const seller = localStorage.getItem('nameSeller');
class App extends Component {
  state = {
    isLogin: seller ? true : false,
    nameSeller: '',
    passwordSeller: '',
    errorLogin: '',
    name: '',
    price: '',
    description: '',
    author: '',
    imageUrl: '',
    category: 'Arts & Photography',
    editMode: false,
    id: 0,
    searchBook: '',
    errorAddBook: '',
    ctgType: 'All Genres',
    minPrice: '',
    maxPrice: '',
    displayModal: false,
    displayModalAdd: false,
    isBooksPage: true,
    isCartPage: false,
    books: [],
    cart: localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [],
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleLoginSeller = (e) => {
    e.preventDefault();
    const { nameSeller, passwordSeller } = this.state;
    if (nameSeller === '' || passwordSeller === '') {
      this.setState({ errorLogin: 'All Fields Required!' });
    } else {
      this.setState({ isLogin: true, errorLogin: '' });
      localStorage.setItem('nameSeller', nameSeller);
      this.handleLogin(e);
    }
  };
  handleLogin = (e) => {
    e.preventDefault();
    this.setState({
      displayModal: !this.state.displayModal,
      nameSeller: '',
      passwordSeller: '',
      errorLogin: '',
    });
  };
  handleLogout = () => {
    this.setState({ isLogin: false });
    localStorage.removeItem('nameSeller');
  };
  handleDisplayAddForm = () => {
    this.setState({
      displayModalAdd: !this.state.displayModalAdd,
      errorAddBook: '',
      editMode: false,
      name: '',
      price: '',
      description: '',
      author: '',
      imageUrl: '',
      category: 'Arts & Photography',
    });
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

  editBook = (
    e,
    { name, description, price, category, author, imageUrl, id }
  ) => {
    e.preventDefault();
    // console.log({name, description, price, category, author, imageUrl, id});
    this.handleDisplayAddForm();
    this.setState((prevState) => {
      return {
        name,
        description,
        price,
        category,
        author,
        imageUrl,
        id,
        editMode: true,
      };
    });
  };

  addBook = (e) => {
    e.preventDefault();
    const {
      name,
      price,
      author,
      category,
      imageUrl,
      description,
      editMode,
      id,
    } = this.state;
    if (
      name === '' ||
      price === '' ||
      author === '' ||
      imageUrl === '' ||
      description === ''
    ) {
      this.setState({ errorAddBook: 'All Fields Required!' });
    } else {
      if (editMode) {
        fetch(`/api/v1/book/${id}`, {
          method: 'PUT',
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
            id,
          }),
        })
          .then((data) => data.json())
          .then((res) => {
            console.log(res);
            this.setState({
              name: '',
              price: '',
              author: '',
              category: 'Arts & Photography',
              imageUrl: '',
              description: '',
              displayModalAdd: false,
              errorAddBook: '',
              editMode: false,
            });
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: res.message,
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((err) => console.log(err));
      } else {
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
            console.log(res);
            this.setState({
              name: '',
              price: '',
              author: '',
              category: 'Arts & Photography',
              imageUrl: '',
              description: '',
              displayModalAdd: false,
              errorAddBook: '',
            });
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: res.message,
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((err) => console.log(err));
      }
    }
  };

  addToCart = ({ id, name, price, category, author, imageUrl }) => {
    const { cart } = this.state;
    const dbCart = cart.filter((book) => book.id === id);

    if (dbCart.length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'This Book is Already Exist!',
      });
    } else {
      this.setState((prevState) => {
        return {
          cart: [
            ...prevState.cart,
            {
              id,
              name,
              price,
              category,
              author,
              imageUrl,
              quantity: 1,
              date: Date.now(),
            },
          ],
        };
      });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Book Add To Cart Successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  detletFromCart = (id) => {
    const { cart } = this.state;
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are going to delete this book!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const unDeletedBooks = cart.filter((book) => book.id !== id);
        this.setState({ cart: unDeletedBooks });
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Book Deleted Successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  incrementQuantity = (id) => {
    const { cart } = this.state;
    const book = cart.filter((book) => book.id === id);
    book[0].quantity++;
    this.setState({ cart });
  };
  decrementQuantity = (id) => {
    const { cart } = this.state;
    const book = cart.filter((book) => book.id === id);
    if (book[0].quantity >= 2) {
      book[0].quantity--;
    } else {
      book[0].quantity = 1;
    }
    this.setState({ cart });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.cart !== this.state.cart) {
      localStorage.setItem('cart', JSON.stringify(this.state.cart));
    }
    if (prevState.books !== this.state.books) {
      this.getBooks();
    }
  }
  componentDidMount() {
    this.getBooks();
  }

  render() {
    const {
      isBooksPage,
      isCartPage,
      cart,
      isLogin,
      nameSeller,
      passwordSeller,
      errorLogin,
      displayModal,
      displayModalAdd,
      name,
      price,
      description,
      author,
      imageUrl,
      searchBook,
      ctgType,
      minPrice,
      maxPrice,
      category,
      errorAddBook,
      books,
      editMode,
    } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path='/cart'
            render={(props) => (
              <Carts
                isBooksPage={!isBooksPage}
                isCartPage={!isCartPage}
                cart={cart}
                detletFromCart={this.detletFromCart}
                incrementQuantity={this.incrementQuantity}
                decrementQuantity={this.decrementQuantity}
              />
            )}
          />
          <Route path='/notfound' component={NotFound} />
          <Route
            path='/book/:id'
            render={(props) => (
              <SingleBook
                addToCart={this.addToCart}
                isLogin={isLogin}
                nameSeller={nameSeller}
                handleLogout={this.handleLogout}
                handleLoginSeller={this.handleLoginSeller}
                handleLogin={this.handleLogin}
                displayModal={displayModal}
                handleChange={this.handleChange}
                passwordSeller={passwordSeller}
                isBooksPage={!isBooksPage}
                errorLogin={errorLogin}
                cart={cart}
                books={books}
                {...props}
              />
            )}
          />
          <Route
            path='/books'
            render={(props) => (
              <Books
                isBooksPage={isBooksPage}
                isLogin={isLogin}
                nameSeller={nameSeller}
                handleLoginSeller={this.handleLoginSeller}
                addToCart={this.addToCart}
                handleLogin={this.handleLogin}
                handleLogout={this.handleLogout}
                handleDisplayAddForm={this.handleDisplayAddForm}
                displayModal={displayModal}
                displayModalAdd={displayModalAdd}
                handleChange={this.handleChange}
                passwordSeller={passwordSeller}
                name={name}
                price={price}
                description={description}
                author={author}
                imageUrl={imageUrl}
                searchBook={searchBook}
                ctgType={ctgType}
                minPrice={minPrice}
                maxPrice={maxPrice}
                category={category}
                addBook={this.addBook}
                errorLogin={errorLogin}
                errorAddBook={errorAddBook}
                books={books}
                getBooks={this.getBooks}
                editMode={editMode}
                editBook={this.editBook}
                cart={cart}
              />
            )}
          />
          <Route
            path='/'
            render={(props) => (
              <Home
              isBooksPage={!isBooksPage}
              isCartPage={isCartPage}
              cart={cart}
              isLogin={isLogin}
              nameSeller={nameSeller}
              displayModal={displayModal}
              passwordSeller={passwordSeller}
              handleLoginSeller={this.handleLoginSeller}
              errorLogin={errorLogin}
              handleChange={this.handleChange}
              handleLogin={this.handleLogin}
              handleLogout={this.handleLogout}
              />
            )}
            exact
          />
          <Redirect to='/notfound' />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
