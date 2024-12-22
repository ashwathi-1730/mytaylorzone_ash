import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Ensure this path is correct

const Shop = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the backend or local data source
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('YOUR_BACKEND_URL/products'); // Replace with your backend URL
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="shop-page">
      <h1>Shop</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} /> // Render Product Cards
          ))
        ) : (
          <p>No products available</p> // Display message if no products available
        )}
      </div>
    </div>
  );
};

export default Shop;
