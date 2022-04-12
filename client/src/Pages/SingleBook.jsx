import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import BookDetails from '../Components/BookDetails/BookDetails'
import Subscribe from "../Components/Subscribe/Subscribe"
import Login from '../Components/Login/Login';
const SingleBook = (props) => {
  const { id } = props.match.params;
  const {
    addToCart,
    isLogin,
    nameSeller,
    handleLogout,
    displayModal,
    passwordSeller,
    handleChange,
    handleLogin,
    handleLoginSeller,
    isBooksPage,
  } = props;
  return (
    <div>
      <Navbar
        isLogin={isLogin}
        nameSeller={nameSeller}
        handleLogout={handleLogout}
        handleChange={handleChange}
        handleLogin={handleLogin}
        isBooksPage={isBooksPage}
      />
      <Login
        displayModal={displayModal}
        nameSeller={nameSeller}
        passwordSeller={passwordSeller}
        handleChange={handleChange}
        handleLogin={handleLogin}
        handleLoginSeller={handleLoginSeller}
      />
      <BookDetails isLogin={isLogin} id={id} addToCart={addToCart} />
      <Subscribe />
    </div>
  );
};

export default SingleBook
