import React, { useState } from 'react';
import '../assets/css/PriceFilter.css';

function PriceFilter({ onSort, onRangeFilter }) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilterClick = () => {
    onRangeFilter(minPrice, maxPrice);
  };

  return (
    <div className="price-filter bg-light p-3 mb-3 rounded">
      <strong>Lọc theo giá: </strong>
      <button
        className="btn btn-sm btn-outline-secondary mx-1"
        onClick={() => onSort('asc')}
      >
        Giá từ thấp đến cao
      </button>
      <button
        className="btn btn-sm btn-outline-secondary mx-1"
        onClick={() => onSort('desc')}
      >
        Giá từ cao đến thấp
      </button>

      <div className="d-flex align-items-center mt-3">
        <input
          type="number"
          className="form-control form-control-sm me-2"
          placeholder="Giá từ"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <span> - </span>
        <input
          type="number"
          className="form-control form-control-sm ms-2 me-2"
          placeholder="Giá đến"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button className="btn btn-sm btn-primary" onClick={handleFilterClick}>
          Lọc
        </button>
      </div>
    </div>
  );
}

export default PriceFilter;
