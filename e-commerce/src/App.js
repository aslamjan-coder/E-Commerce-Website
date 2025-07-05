// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { CartProvider } from './CartContext';

import Header from './Header';
import CategoryBar from './CategoryBar';
import CategorySection from './CategorySection';
import ProductSection from './ProductSection';
import RecommendedSection from './RecommendedSection';
import QuoteSection from './QuoteSection';
import ExtraServicesAndSuppliers from './ExtraServicesAndSuppliers';
import Footer from './Footer';
import ProductDetail from './ProductDetail';
import GridViewPage from './GridViewPage';
import ListViewPage from './ListViewPage';
import CartPage from './CartPage'; // 👈 New import

import './Header.css';
import './Footer.css';
import './App.css';
import './CategoryBar.css';
import './ProductSection.css';
import './QuoteSection.css';
import './RecommendedSection.css';
import './ExtraServicesAndSuppliers.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      {/* View Toggle Buttons */}
      <div className="view-toggle-container">
        <button
          className="view-toggle-btn"
          onClick={() => navigate('/grid-view')}
        >
          🔲 Grid View
        </button>
        <button
          className="view-toggle-btn"
          onClick={() => navigate('/list-view')}
        >
          ☰ List View
        </button>
      </div>

      {/* Homepage Sections */}
      <CategorySection viewMode="grid" />
      <ProductSection viewMode="grid" />
      <RecommendedSection viewMode="grid" />
      <QuoteSection />
      <ExtraServicesAndSuppliers />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header />
          <CategoryBar />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/grid-view" element={<GridViewPage />} />
              <Route path="/list-view" element={<ListViewPage />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} /> {/* 🛒 Cart route */}
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
