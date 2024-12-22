import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import './Cart.css'; // Your styles for Cart page

const Cart = () => {
  return (
    <div className="page">
     

      {/* Hero Section */}
      <div className="hero">
        <h1>Your Cart</h1>
        <p>Review your items and proceed to checkout!</p>
      </div>

      {/* Cart Items */}
      <div className="cart-items">
        {/* Example cart item */}
        <div className="cart-item">
          <img src="product-image.jpg" alt="Product 1" />
          <h3>Product Name</h3>
          <p>$49.99</p>
          <button>Remove</button>
        </div>
        {/* Add more cart items here */}
      </div>

      {/* Cart Summary */}
      <div className="cart-summary">
        <p>Total: $149.97</p>
        <button>Proceed to Checkout</button>
      </div>

     
    </div>
  );
};

export default Cart;
