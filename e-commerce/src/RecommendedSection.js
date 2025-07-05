import React from 'react';
import './RecommendedSection.css';
import UnifiedProductView from './UnifiedProductView';

import Img1 from './s2.png';
import Img2 from './s2.png';
import Img3 from './s2.png';
import Img4 from './s2.png';
import Img5 from './s2.png';
import Img6 from './s2.png';
import Img7 from './s2.png';
import Img8 from './s2.png';
import Img9 from './s2.png';
import Img10 from './s2.png';

const products = [
  { id: "recommended-tshirt-1", img: Img1, price: 'From USD 15', title: 'T-shirt with multiple colors' },
  { id: "recommended-tshirt-2", img: Img2, price: 'From USD 20', title: 'T-shirt with multiple colors' },
  { id: "recommended-tshirt-3", img: Img3, price: 'From USD 18', title: 'T-shirt with multiple colors' },
  { id: "recommended-tshirt-4", img: Img4, price: 'From USD 25', title: 'T-shirt with multiple colors' },
  { id: "recommended-tshirt-5", img: Img5, price: 'From USD 22', title: 'T-shirt with multiple colors' },
  { id: "recommended-tshirt-6", img: Img6, price: 'From USD 17', title: 'T-shirt with multiple colors' },
  { id: "recommended-tshirt-7", img: Img7, price: 'From USD 21', title: 'T-shirt with multiple colors' },
  { id: "recommended-tshirt-8", img: Img8, price: 'From USD 19', title: 'T-shirt with multiple colors' },
  { id: "recommended-tshirt-9", img: Img9, price: 'From USD 24', title: 'T-shirt with multiple colors' },
  { id: "recommended-tshirt-10", img: Img10, price: 'From USD 23', title: 'T-shirt with multiple colors' },
];

const RecommendedSection = ({ viewMode }) => {
  return (
    <section className="recommended-section">
      <h2 className="recommended-title">Recommended Items</h2>
      <div className={`recommended-grid ${viewMode}`}>
        {products.map((item) => (
          <UnifiedProductView
            key={item.id}
            id={item.id}
            img={item.img}
            price={item.price}
            title={item.title}
            viewMode={viewMode}
          />
        ))}
      </div>
    </section>
  );
};

export default RecommendedSection;
