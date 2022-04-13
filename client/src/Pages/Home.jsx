import React from 'react'
import Footer from '../Components/Footer/Footer';
import Login from '../Components/Login/Login';
import Navbar from '../Components/Navbar/Navbar';
import Subscribe from '../Components/Subscribe/Subscribe';
<<<<<<< HEAD
import Banner from '../Components/Banner/Banner';
=======
import Trending from '../Components/Trending/Trending';
import Features from "../Components/Features/Features";
>>>>>>> e3498f5a3b28ab0bee2dc43044b32fb476c97b82

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
  errorLogin,
  books
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
      <Banner />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home
