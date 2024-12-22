import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Mytaylorzone</h1>
      <ul>
        <li>
          <Link to="/">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/shop">
            <i className="fas fa-store"></i> Shop
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="fas fa-info-circle"></i> About
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i> Cart
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <i className="fas fa-envelope"></i> Contact
          </Link>
        </li>
        {/* Adding Login Link */}
        <li>
          <Link to="/login">
            <i className="fas fa-sign-in-alt"></i> Login
          </Link>
        </li>
        {/* Adding User Icon */}
        <li>
          <Link to="/profile">
            <i className="fas fa-user"></i> Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
