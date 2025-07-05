// CategoryBar.js
import React from 'react';
import './CategoryBar.css';
import { FaBars } from 'react-icons/fa'; // Keep this for the sidebar icon
import flagImg from './DE@2x.png'; // replace with your actual path
import arrowDownImg from './Vector.png'; // replace with your actual path

const CategoryBar = () => {
  return (
    <div className="category-bar">
      <div className="category-left">
        <div className="category-item">
          <FaBars />
          <span>All category</span>
        </div>
        <span className="category-item">Hot offers</span>
        <span className="category-item">Gift boxes</span>
        <span className="category-item">Projects</span>
        <span className="category-item">Menu item</span>
        <span className="category-item help">
          Help
          <img src={arrowDownImg} alt="dropdown" className="dropdown-icon" />
        </span>
      </div>
      <div className="category-right">
        <div className="language">
          English, USD
          <img src={arrowDownImg} alt="dropdown" className="dropdown-icon" />
        </div>
        <div className="ship-to">
          Ship to
          <img src={flagImg} alt="flag" className="flag-icon" />
          <img src={arrowDownImg} alt="dropdown" className="dropdown-icon" />
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;