import { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Books from "./Pages/Books";
import Carts from "./Pages/Carts";
import NotFound from "./Pages/NotFound";
import "./App.css";
import "remixicon/fonts/remixicon.css";
import SingleBook from "./Pages/SingleBook";

const seller = localStorage.getItem('nameSeller');
class App extends Component {
  state = {
    isLogin: seller ? true : false,
    nameSeller: '',
    passwordSeller: '',
    name: '',
    price: '',
    description: '',
    author: '',
    imageUrl: '',
    searchBook: '',
    ctgType: 'All Genres',
    minPrice: '',
    maxPrice: '',
    category: 'Arts & Photography',
    displayModal: false,
    displayModalAdd: false,
    isBooksPage: true,
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
    this.setState({ isLogin: true });
    const { nameSeller } = this.state;
    localStorage.setItem('nameSeller', nameSeller);
    this.handleLogin(e);
  };
  handleLogin = (e) => {
    e.preventDefault();
    this.setState({ displayModal: !this.state.displayModal });
  };
  handleLogout = () => {
    this.setState({ isLogin: false });
    localStorage.removeItem('nameSeller');
  };
  handleDisplayAddForm = () => {
    this.setState({ displayModalAdd: !this.state.displayModalAdd });
  };

  addBook = (e) => {
    e.preventDefault();
    const { name, price, author, category, imageUrl, description } = this.state;
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
          displayModalAdd: false,
        });
      })
      .catch((err) => console.log(err));
  };

  addToCart = ({ id, name, price, category, author, imageUrl }) => {
    const { cart } = this.state;
    const dbCart = cart.filter((book) => book.id === id);

    if (dbCart.length > 0) {
      alert('This Book is Already Exist!');
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
    }
  };
  detletFromCart = (id) => {
    const { cart } = this.state;
    const unDeletedBooks = cart.filter((book) => book.id !== id);
    this.setState({ cart: unDeletedBooks });
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
    if (book[0].quantity >= 1) {
      book[0].quantity--;
    } else {
      book[0].quantity = 0;
    }
    this.setState({ cart });
  };
  componentDidUpdate(prevState, prevProps) {
    if (prevState.cart !== this.state.cart) {
      localStorage.setItem('cart', JSON.stringify(this.state.cart));
    }
  }
  render() {
    const {
      isBooksPage,
      cart,
      isLogin,
      nameSeller,
      displayModal,
      displayModalAdd,
      passwordSeller,
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
    } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path='/cart'
            render={(props) => (
              <Carts
                isBooksPage={!isBooksPage}
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
                {...props}
              />
            )}
          />
          <Route
            path='/'
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
