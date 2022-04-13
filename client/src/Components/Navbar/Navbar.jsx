import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from './logo.svg'

const Navbar = (props) => {
  const {
    isLogin,
    searchBook,
    handleChange,
    isBooksPage,
    isCartPage,
    handleLogin,
    handleLogout,
    cart,
  } = props;
  return (
    <nav className='nav'>
      <div className='logo'>
        <Link className='link' to='/'>
          <img src={logo} alt='logo' />
          <span>Clevr</span>
        </Link>
      </div>
      <div className='search'>
        {isBooksPage && (
          <>
            <input
              type='search'
              name='searchBook'
              value={searchBook}
              onChange={handleChange}
              placeholder={'Find Book here...'}
            />
            <span className='ri-search-line icon'></span>
          </>
        )}
      </div>
      <div className=''>
        {isLogin ? (
          <div className='auth'>
            <span className='namee-seller'>
              Hi {localStorage.getItem('nameSeller')}
            </span>
            <button className='logout-Btn' onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className='login'>
            {isCartPage ? null : (
              <button onClick={handleLogin} className='login-Btn'>
                Login
              </button>
            ) }
            <Link className='link cart-btn' to='/Cart'>
              <i className='ri-shopping-cart-2-line'></i>
              {
                cart.length ?  <span className="num">{cart.length > 9 ? '+9' : cart.length}</span> : null
              }
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
