import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
    <div className="hero-image">
      <div className="hero-text">
        <h1 className="homeTitle">Welcome to Clevr</h1>
        <p className="homeDescription">
        Clevr is a online bookstore website who sells all genres of books from around the world. Find your book here now.
        </p>
        <Link to="/books" className="homeBtn">
          Browse Books
          <i className="ri-arrow-right-line"></i>
        </Link>
      </div>
    </div>
  </>
  )
}

export default Banner