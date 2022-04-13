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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris
        </p>
        <Link to="/books" className="homeBtn">
          Browse Books
        </Link>
      </div>
    </div>
  </>
  )
}

export default Banner