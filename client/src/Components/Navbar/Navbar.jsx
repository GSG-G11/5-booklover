import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const { isLogin, searchBook, handleChange, isBooksPage, handleLogin, handleLogout} = props;
  return (
    <div className="nav">
      <div className="logo">
        <Link className="link" to="/">
          <img src={"./logo.svg"} alt="logo" />
          <span>Clevr</span>
        </Link>
      </div>
      <div className="search">
        {isBooksPage && (
          <input
            type="search"
            name="searchBook"
            value={searchBook}
            onChange={handleChange}
            placeholder={"Find Book here..."}
          />
        )}
      </div>
      <div className="">
        {isLogin ? (
          <div>
            <span className="namee-seller">{localStorage.getItem('nameSeller')}</span>
            <button className="logout-Btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="login">
            <button onClick={handleLogin} className="login-Btn">
              Login
            </button>{" "}
            <Link className="link" to="/Cart">
              <i className="ri-shopping-cart-2-line"></i>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
