import React from 'react';
import { useParams, Link } from 'react-router-dom';
import allProducts from './allProduct';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = allProducts.find(p => p.id === productId);

  if (!product) {
    return <div className="not-found">Product not found.</div>;
  }

  // 🔥 Related products logic
  const relatedProducts = allProducts
    .filter(p => p.id !== productId)
    .slice(0, 4); // you can change number later if needed

  return (
    <div className="product-detail-page">

      {/* 👇 Your Original Layout — untouched */}
      <div className="product-detail-container">
        <div className="product-image-section">
          <img src={product.img} alt={product.name} />
        </div>
        <div className="product-info-section">
          <h2>{product.name}</h2>
          <p className="product-price">{product.price}</p>
          <p><strong>Material:</strong> Plastic material</p>
          <p><strong>Design:</strong> Modern design</p>
          <p><strong>Type:</strong> Electronic item</p>
          <p><strong>Customization:</strong> Custom logo & design packaging</p>
          <p><strong>Protection:</strong> Refund policy</p>
          <p><strong>Warranty:</strong> 2 years full warranty</p>
          <button className="buy-now-btn">Send Inquiry</button>
        </div>
      </div>

      {/* 🔗 Related Products Section */}
      <div className="related-products-section">
        <h3>You May Also Like</h3>
        <div className="related-products-grid">
          {relatedProducts.map(item => (
            <Link to={`/product/${item.id}`} key={item.id} className="related-product-card">
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
