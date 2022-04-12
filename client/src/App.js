import { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Books from "./Pages/Books";
import Carts from "./Pages/Carts";
import NotFound from "./Pages/NotFound";
import "./App.css";
import "remixicon/fonts/remixicon.css";
import SingleBook from "./Pages/SingleBook";

class App extends Component {
  state = {
    isBooksPage: true,
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  };
  addToCart = ({ id, name, price, category, author, imageUrl, quantity }) => {
    const { cart } = this.state;
    const dbCart = cart.filter((book) => book.id === id);

    if (dbCart.length > 0) {
      alert("This Book is Already Exist!");
    } else {
      this.setState((prevState) => {
        return {
          cart: [
            ...prevState.cart,
            { id, name, price, category, author, imageUrl, quantity:1,date:Date.now() },
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
    book[0].quantity ++
    this.setState({cart})
  };
  decrementQuantity = (id) => {
    const { cart } = this.state;
    const book = cart.filter((book) => book.id === id);
    if(book[0].quantity >= 1) {
      book[0].quantity --
    }else {
      book[0].quantity = 0
    }
    this.setState({cart})
  };
  componentDidUpdate(prevState, prevProps) {
    if (prevState.cart !== this.state.cart) {
      localStorage.setItem("cart", JSON.stringify(this.state.cart));
    }
  }
  render() {
    const { isBooksPage, cart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/cart"
            render={(props) => (
              <Carts
                isBooksPage={!isBooksPage}
                cart={cart}
                detletFromCart={this.detletFromCart}
                incrementQuantity= {this.incrementQuantity}
                decrementQuantity={this.decrementQuantity}
              />
            )}
          />
          <Route path="/notfound" component={NotFound} />
          <Route path="/book/:id" render={(props) => (<SingleBook addToCart={this.addToCart} {...props} />)} />
          <Route
            path="/"
            render={(props) => (
              <Books isBooksPage={isBooksPage} addToCart={this.addToCart} />
            )}
            exact
          />
          <Redirect to="/notfound" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
