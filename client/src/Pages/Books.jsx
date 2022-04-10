import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Login from "../Components/Login/Login";
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
    searchBook: "",
    displayModal: false,
    nameSeller: "",
    passwordSeller: "",

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
    localStorage.setItem('nameSeller',nameSeller)
    this.handleLogin()
  }
  handleLogout = () => {
    this.setState({ isLogin: false });
    localStorage.removeItem('nameSeller')
  }


  render() {
    const { isLogin, searchBook, displayModal, nameSeller, passwordSeller } =
      this.state;
    const { isBooksPage } = this.props;
    return (
      <>
        <Navbar
          isLogin={isLogin}
          isBooksPage={isBooksPage}
          searchBook={searchBook}
          handleChange={this.handleChange}
          handleLogin = {this.handleLogin}
          handleLogout = {this.handleLogout}
        />
        <Login
          displayModal={displayModal}
          nameSeller={nameSeller}
          passwordSeller={passwordSeller}
          handleChange={this.handleChange}
          handleLogin={this.handleLogin}
          handleLoginSeller={this.handleLoginSeller}
        />
      </>
    );
  }
}

export default Books;
