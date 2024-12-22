import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const products = [
  { id: 1, name: 'Product 1', price: '$30', image: 'product1.jpg' },
  { id: 2, name: 'Product 2', price: '$50', image: 'product2.jpg' },
  { id: 3, name: 'Product 3', price: '$40', image: 'product3.jpg' },
  { id: 4, name: 'Product 4', price: '$25', image: 'product4.jpg' },
];

const Home = () => {
  return (
    <div className="page">
      

      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to Mytaylorzone</h1>
        <p>Where you find the best products!</p>
        <button className="cta-button">Shop Now</button>
      </div>

      {/* Product Cards Section */}
      <div className="product-section">
        <h2>Our Popular Products</h2>
        <div className="product-cards">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Home;
