import React, { useState } from 'react';
//import './Filters.css';

const Filters = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleFilter = () => {
    onFilter({ category, price });
  };

  return (
    <div className="filters">
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="">All Categories</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kids">Kids</option>
      </select>
      <select onChange={(e) => setPrice(e.target.value)} value={price}>
        <option value="">Price</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default Filters;
