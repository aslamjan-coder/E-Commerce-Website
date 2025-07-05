// QuoteSection.js
import React from 'react';
import './QuoteSection.css';
import quoteBg from './bbg.jpg'; // Replace with your actual bg image path

const QuoteSection = () => {
  return (
    <div
      className="quote-section"
      style={{ backgroundImage: `url(${quoteBg})` }}
    >
      <div className="quote-overlay">
        <div className="quote-left">
          <h2>An easy way to send requests to all the suppliers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at facilisis.</p>
        </div>

        <div className="quote-form-box">
          <h3>Send Quote to suppliers</h3>
          <input type="text" placeholder="What item do you need?" />
          <textarea placeholder="Type more details"></textarea>
          <div className="quantity-row">
            <input type="number" placeholder="Quantity" />
          </div>
          <button className="send-inquiry-btn">Send Inquiry</button>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
