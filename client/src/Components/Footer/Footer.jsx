import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "./logo.svg";

const Footer = () => {
  return (
    <>
      <div className='footer '>
        <div className='container clevr'>
          <div className='logo-social'>
            <div className='logo-footer'>
              <Link className='link' to='/'>
                <img src={logo} alt='logo' />
                <span>Clevr</span>
              </Link>
              <p>
                Clevr is a online bookstore website who sells all genres of
                books from around the world. Find your book here now
              </p>
              <h4>Follow Us</h4>
              <div className='social'>
                <button>
                  <i className='ri-facebook-fill'></i>
                </button>
                <button>
                  <i className='ri-youtube-line'></i>
                </button>
                <button>
                  <i className='ri-twitter-fill'></i>
                </button>
                <button>
                  <i className='ri-linkedin-box-fill'></i>
                </button>
                <button>
                  <i className='ri-instagram-line'></i>
                </button>
              </div>
            </div>
          </div>
          <div className='properites'>
            <h4>Quich links</h4>
            <span className='f-link'>About us</span>
            <span className='f-link'>Contact us</span>
            <span className='f-link'>Products</span>
            <span className='f-link'>Login</span>
            <span className='f-link'>Sign Up</span>
          </div>
          <div className='properites'>
            <h4>Customer Area</h4>
            <span className='f-link'>My Account</span>
            <span className='f-link'>Orders</span>
            <span className='f-link'>Tracking List</span>
            <span className='f-link'>Terms</span>
            <span className='f-link'>Privacy Policy</span>
            <span className='f-link'>FAQ</span>
          </div>
          <div className='properites'>
            <h4>Don’t miss the newest books</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </p>
            <div className='subscribe-footer'>
              <input type='text' placeholder='Type your email here' />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='footer-reserved'>
        <div className='container reserved'>
          <p>CLEVR - © 2022 All Rights Reserved</p>
          <p>
            Made with ❤️ by{' '}
            <a
              href='https://github.com/GSG-G11/5-booklover'
              target='_blank'
              className="link"
              rel='noreferrer'>
              Team5
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
