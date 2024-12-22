import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} /> {/* Ensure 'product.image' is correct */}
      <h2>{product.name}</h2>
      <p>{product.description}</p> {/* Update this based on the properties of the product */}
      <span>{product.price}</span> {/* Price display */}
    </div>
  );
};

export default ProductCard;
