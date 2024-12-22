import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import './About.css'; // Your styles for About page

const About = () => {
  return (
    <div className="page">
      

      {/* Hero Section */}
      <div className="hero">
        <h1>About Us</h1>
        <p>We are passionate about providing you with the best products!</p>
      </div>

      {/* Content Section */}
      <div className="content">
        <p>Welcome to <strong>Mytaylorzone By Sahiba</strong>, your one-stop shop for chic and trendy fashion. 
          Our mission is to provide high-quality clothing that helps you express your style.
        </p>
        <p>
          From elegant evening wear to casual chic outfits, we’ve got something for everyone.
        </p>
        <p>
          At Mytaylorzone, we believe in delivering quality and excellence in everything we do. We aim to be your go-to destination for everything you need, from the best collections to personalized recommendations.
        </p>
      </div>

     
    </div>
  );
};

export default About;
