import React from 'react'
import Footer from '../Components/Footer/Footer';
import Login from '../Components/Login/Login';
import Navbar from '../Components/Navbar/Navbar';
import Subscribe from '../Components/Subscribe/Subscribe';
import Features from "../Components/Features/Features";

const Home = ({
  isBooksPage,
  isCartPage,
  cart,
  isLogin,
  handleChange,
  handleLogin,
  handleLogout,
  nameSeller,
  displayModal,
  passwordSeller,
  handleLoginSeller,
  errorLogin
}) => {
  return (
    <div>
      <Navbar
        isBooksPage={isBooksPage}
        isCartPage={isCartPage}
        cart={cart}
        isLogin={isLogin}
        handleChange={handleChange}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        nameSeller={nameSeller}
        displayModal={displayModal}
      />
      <Login
        displayModal={displayModal}
        nameSeller={nameSeller}
        handleChange={handleChange}
        handleLogin={handleLogin}
        passwordSeller={passwordSeller}
        handleLoginSeller={handleLoginSeller}
        errorLogin={errorLogin}
      />
      <Features/>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home
