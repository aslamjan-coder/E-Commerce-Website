// UnifiedProductView.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import './UnifiedProductView.css';

const UnifiedProductView = ({ id, name, title, img, price, discount, viewMode }) => {
  const { dispatch } = useCart();

  const finalTitle = title || name;

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD',
      payload: {
        id,
        name: finalTitle,
        img,
        price,
        quantity: 1, // Optional: track quantity
      },
    });
  };

  return (
    <div className={`product-card ${viewMode === 'list' ? 'list' : ''}`}>
      <Link to={`/product/${id}`} className="product-info">
        <img src={img} alt={finalTitle} />
        <h3>{finalTitle}</h3>
        <p className="product-price">{price}</p>
        {discount && <span className="discount">{discount}</span>}
      </Link>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        🛒 Add to Cart
      </button>
    </div>
  );
};

export default UnifiedProductView;
