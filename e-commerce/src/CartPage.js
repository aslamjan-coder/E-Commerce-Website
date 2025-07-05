// CartPage.js
import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom'; // ✅ import navigate
import './CartPage.css';

const CartPage = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate(); // ✅ initialize navigate

  const parsePrice = (str) => parseFloat(str.replace(/[^\d.]/g, '')) || 0;

  const subtotal = cart.reduce((acc, item) => acc + parsePrice(item.price) * item.quantity, 0);
  const discount = subtotal > 500 ? 50 : 0;
  const tax = subtotal * 0.01;
  const total = subtotal - discount + tax;

  return (
    <div className="cart-page">
      <h2>🛒 My Cart ({cart.length})</h2>

      {/* ✅ Go Back to Shop Button */}
      <button
        className="go-back-btn"
        onClick={() => navigate('/')}
        style={{
          marginBottom: '20px',
          padding: '10px 16px',
          backgroundColor: '#0d6efd',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px'
        }}
      >
        🛍️ Go Back to Shop
      </button>

      <div className="cart-content">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div className="cart-info">
                <h4>{item.name}</h4>
                <p>{item.price}</p>
                <div className="cart-actions">
                  <button onClick={() => dispatch({ type: 'DECREMENT', payload: item.id })}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch({ type: 'INCREMENT', payload: item.id })}>+</button>
                  <button onClick={() => dispatch({ type: 'REMOVE', payload: item.id })}>❌ Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Summary</h3>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Discount: -${discount.toFixed(2)}</p>
          <p>Tax: +${tax.toFixed(2)}</p>
          <h2>Total: ${total.toFixed(2)}</h2>
          <button className="checkout-btn">✅ Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
