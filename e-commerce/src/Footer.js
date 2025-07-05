// Footer.js
import React from 'react';
import './Footer.css';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import appStore from './market-button.png';
import playStore from './Group.png';
import brandLogo from './logo-colored.png';
import usFlag from './US@2x.png';
import upArrow from './Vector2.png';

const Footer = () => {
  return (
    <>
      {/* Newsletter Section */}
      <div className="newsletter">
        <h3>Subscribe on our newsletter</h3>
        <p>Get daily news on upcoming offers from many suppliers all over the world</p>
        <div className="newsletter-input-wrapper">
          <div className="input-icon">
            <span role="img" aria-label="email">📧</span>
          </div>
          <input type="email" placeholder="Email" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={brandLogo} alt="Brand Logo" className="footer-brand-logo" />
            <p>Best information about the company goes here but now lorem ipsum is</p>
            <div className="social-icons">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedinIn} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h4>About</h4>
              <ul>
                <li>About Us</li>
                <li>Find store</li>
                <li>Categories</li>
                <li>Blogs</li>
              </ul>
            </div>
            <div>
              <h4>Partnership</h4>
              <ul>
                <li>About Us</li>
                <li>Find store</li>
                <li>Categories</li>
                <li>Blogs</li>
              </ul>
            </div>
            <div>
              <h4>Information</h4>
              <ul>
                <li>Help Center</li>
                <li>Money Refund</li>
                <li>Shipping</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div>
              <h4>For users</h4>
              <ul>
                <li>Login</li>
                <li>Register</li>
                <li>Settings</li>
                <li>My Orders</li>
              </ul>
            </div>
          </div>

          <div className="footer-app">
            <h4>Get app</h4>
            <img src={appStore} alt="App Store" />
            <img src={playStore} alt="Google Play" />
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2023 Ecommerce.</p>
          <div className="language-select">
            <img src={usFlag} alt="US Flag" className="footer-flag-icon" />
            English
            <img src={upArrow} alt="Arrow Icon" className="footer-arrow-icon" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
