import React from "react";
import "./CategorySection.css";
import banner from "./Banner-board.png";
import smartwatch from "./8.png";
import laptop from "./8.png";
import gopro from "./8.png";
import headphones from "./8.png";
import canon from "./8.png";
import UnifiedProductView from "./UnifiedProductView";

const CategorySection = ({ viewMode }) => {
  const categories = [
    "Automobiles", "Clothes and wear", "Home interiors",
    "Computer and tech", "Tools, equipments", "Sports and outdoor",
    "Animal and pets", "Machinery tools", "More category"
  ];

  const offers = [
    { id: "smart-watches-1", name: "Smart watches", img: smartwatch, price: "From USD 49", discount: "-25%" },
    { id: "laptops-2", name: "Laptops", img: laptop, price: "From USD 599", discount: "-15%" },
    { id: "gopro-cameras-3", name: "GoPro cameras", img: gopro, price: "From USD 299", discount: "-40%" },
    { id: "headphones-4", name: "Headphones", img: headphones, price: "From USD 35", discount: "-25%" },
    { id: "canon-cameras-5", name: "Canon cameras", img: canon, price: "From USD 350", discount: "-25%" }
  ];

  return (
    <div className="category-section-wrapper">
      <div className="top-section">
        <div className="left-sidebar">
          {categories.map((cat, idx) => (
            <div key={idx} className={`sidebar-item ${idx === 0 ? "active" : ""}`}>
              {cat}
            </div>
          ))}
        </div>

        <div className="center-banner">
          <div className="banner-text">
            <p>Latest trending</p>
            <h2>Electronic items</h2>
            <button>Learn more</button>
          </div>
          <img src={banner} alt="Banner" className="banner-img" />
        </div>

        <div className="right-panel">
          <div className="user-card">
            <p>Hi, user</p>
            <p>Let’s get started</p>
            <button className="btn-blue">Join now</button>
            <button className="btn-light">Log in</button>
          </div>
          <div className="promo-box orange">Get US $10 off with a new supplier</div>
          <div className="promo-box teal">Send quotes with supplier preferences</div>
        </div>
      </div>

      <div className="bottom-deals">
        <div className="deals-left">
          <p className="deals-title">Deals and offers</p>
          <p className="deals-sub">Hygiene equipments</p>
          <div className="deal-timer">
            <div><strong>04</strong><span>Days</span></div>
            <div><strong>13</strong><span>Hour</span></div>
            <div><strong>34</strong><span>Min</span></div>
            <div><strong>56</strong><span>Sec</span></div>
          </div>
        </div>

        <div className={`deal-items-vertical ${viewMode}`}>
          {offers.map((item, idx) => (
            <UnifiedProductView
              key={idx}
              id={item.id}
              name={item.name}
              img={item.img}
              price={item.price}
              discount={item.discount}
              viewMode={viewMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
