import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import EmptyCart from "../Components/Cart/EmptyCart/EmptyCart";
import Cart from "../Components/Cart/Cart";
import Subscribe from "../Components/Subscribe/Subscribe"
import Footer from "../Components/Footer/Footer";

const Carts = (props) => {
  const {
    // isBooksPage,
    cart,
    detletFromCart,
    incrementQuantity,
    decrementQuantity,
    isCartPage,
  } = props;
  return (
    <div>
      <Navbar isCartPage={isCartPage} />
      {cart.length ? (
        <Cart
          cart={cart}
          detletFromCart={detletFromCart}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      ) : (
        <EmptyCart />
      )}
      <Subscribe/>
      <Footer/>
    </div>

  );
};

export default Carts;
