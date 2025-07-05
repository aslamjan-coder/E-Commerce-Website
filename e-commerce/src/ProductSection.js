import React from 'react';
import './ProductSection.css';
import UnifiedProductView from './UnifiedProductView';

import SoftChairs from './electric_kettle.png';
import SofaChair from './electric_kettle.png';
import KitchenDishes from './electric_kettle.png';
import SmartWatches from './electric_kettle.png';
import KitchenMixer from './headphones.png';
import Blenders from './headphones.png';
import HomeAppliance from './headphones.png';
import CoffeeMaker from './headphones.png';
import Cameras from './headphones.png';
import Headphones from './headphones.png';
import GamingSet from './electric_kettle.png';
import LaptopsPC from './electric_kettle.png';
import Smartphones from './electric_kettle.png';
import ElectricKettle from './electric_kettle.png';

import HomeBG from './sofabg.jpg';
import ElectronicsBG from './electronicsbg.jpg';

const ProductSection = ({ viewMode }) => {
  const products = [
    {
      category: "Home and outdoor",
      bg: HomeBG,
      items: [
        { id: "soft-chairs", name: "Soft chairs", price: "From USD 19", img: SoftChairs },
        { id: "sofa-chair", name: "Sofa & chair", price: "From USD 19", img: SofaChair },
        { id: "kitchen-dishes", name: "Kitchen Dishes", price: "From USD 19", img: KitchenDishes },
        { id: "smart-watches-home", name: "Smart Watches", price: "From USD 19", img: SmartWatches },
        { id: "kitchen-mixer", name: "Kitchen mixer", price: "From USD 100", img: KitchenMixer },
        { id: "blenders", name: "Blenders", price: "From USD 39", img: Blenders },
        { id: "home-appliance", name: "Home appliance", price: "From USD 19", img: HomeAppliance },
        { id: "coffee-maker", name: "Coffee maker", price: "From USD 10", img: CoffeeMaker },
      ]
    },
    {
      category: "Consumer electronics and gadgets",
      bg: ElectronicsBG,
      items: [
        { id: "smart-watches-electronics", name: "Smart watches", price: "From USD 19", img: SmartWatches },
        { id: "cameras", name: "Cameras", price: "From USD 89", img: Cameras },
        { id: "headphones-electronics", name: "Headphones", price: "From USD 10", img: Headphones },
        { id: "smart-watches-electronics-2", name: "Smart watches", price: "From USD 19", img: SmartWatches },
        { id: "gaming-set", name: "Gaming set", price: "From USD 35", img: GamingSet },
        { id: "laptops-pc", name: "Laptops & PC", price: "From USD 340", img: LaptopsPC },
        { id: "smartphones", name: "Smartphones", price: "From USD 19", img: Smartphones },
        { id: "electric-kettle", name: "Electric kettle", price: "From USD 240", img: ElectricKettle },
      ]
    }
  ];

  return (
    <div className="product-section-wrapper">
      {products.map((section, index) => {
        const firstRow = section.items.slice(0, 4);
        const secondRow = section.items.slice(4, 8);

        return (
          <div className="product-category-row-grid" key={index}>
            <div
              className="category-box"
              style={{ backgroundImage: `url(${section.bg})` }}
            >
              <h2>{section.category}</h2>
              <button className="source-now-btn">Source now</button>
            </div>

            <div className="two-row-product-grid">
              {[firstRow, secondRow].map((row, rowIndex) => (
                <div className={`product-row ${viewMode}`} key={rowIndex}>
                  {row.map((item) => (
                    <UnifiedProductView
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      img={item.img}
                      price={item.price}
                      viewMode={viewMode}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductSection;
