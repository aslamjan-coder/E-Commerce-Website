// Header.js
import React from "react";
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faUser,
  faMessage,
  faBox,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom"; // ⬅️ Correctly imported
import logo from './logo-colored.png';

const Header = () => {
  return (
    <header className="header-container">
      {/* Top Navigation with Search Bar */}
      <div className="top-nav">
        {/* Logo */}
        <div className="logo-container">
          <Link to="/" className="brand-logo">
            <img src={logo} alt="Company Logo" className="logo" />
          </Link>
        </div>
        
        {/* Search Bar */}
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
          />
          
          <div className="category-dropdown">
            <span>All category</span>
            <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
          </div>
          
          <button className="search-button">
            Search
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/profile" className="nav-item">
            <FontAwesomeIcon icon={faUser} className="nav-icon" />
            <span className="nav-text">Profile</span>
          </Link>
          <Link to="/messages" className="nav-item">
            <FontAwesomeIcon icon={faMessage} className="nav-icon" />
            <span className="nav-text">Message</span>
          </Link>
          <Link to="/orders" className="nav-item">
            <FontAwesomeIcon icon={faBox} className="nav-icon" />
            <span className="nav-text">Orders</span>
          </Link>
          <Link to="/cart" className="nav-item"> {/* ✅ FIXED: real routing */}
            <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
            <span className="nav-text">My Cart</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
