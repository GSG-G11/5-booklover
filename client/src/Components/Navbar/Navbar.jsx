import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = (props) => {
   const {islogin, searchBook, handleChange,isBooksPage} = props

  return (
    <div className='nav'>
      <div className='logo'>
        <Link  className='link' to="/"><img src={"./logo.svg"} alt="logo"  />
        <span>Clevr</span></Link>
      </div>
      <div className='search'> 
        {isBooksPage && <input type="search" name="searchBook" value={searchBook} onChange= {handleChange} placeholder={"Find Book here..."}  />}
      </div>
      <div className=''>
        {islogin? <div><button>Logout</button></div>: <div className='login'><button>Login</button> <Link className='link' to="/Cart"><i className="ri-shopping-cart-2-fill"></i></Link></div>}
      </div>
    </div>
  )
}

export default Navbar