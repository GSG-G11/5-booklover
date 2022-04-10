import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Login from "../Components/Login/Login";
import AddBook from "../Components/AddBook/AddBook";
import Filter from "../Components/Books/Filter/Filter";
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
    displayModalAdd: false,
    name: "",
    price: "",
    description: "",
    author: "",
    imageUrl: "",
    category: "All Genres",
    ctgType: "All Genres",
    minPrice: '',
    maxPrice: ''
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
    localStorage.setItem("nameSeller", nameSeller);
    this.handleLogin();
  };
  handleLogout = () => {
    this.setState({ isLogin: false });
    localStorage.removeItem("nameSeller");
  };
  handleDisplayAddForm = () => {
    this.setState({ displayModalAdd: !this.state.displayModalAdd });
  }

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
      maxPrice
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
          handleDisplayAddForm= {this.handleDisplayAddForm}
        />
        <div className="container">
          <div className="row">
            <aside className="side-bar">
              <Filter
                categories={categories}
                ctgType={ctgType}
                handleChange={this.handleChange}
                minPrice={minPrice}
                maxPrice={maxPrice}
              />
            </aside>
            <div className="books-side">

            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Books;
