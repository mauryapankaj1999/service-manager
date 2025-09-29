import React, { useState, useEffect } from 'react';
import RangeSliderInput from 'react-range-slider-input';
import './PriceRangeModal.css';

const PriceRangeModal = ({ isOpen, onClose, onApply, currentRange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [range, setRange] = useState([0, 5000]);

  useEffect(() => {
    if (isOpen) {
      // Set initial range based on current filter
      if (currentRange === 'Under ₹2000') {
        setRange([0, 2000]);
        setMinPrice(0);
        setMaxPrice(2000);
      } else if (currentRange === '₹2000 - ₹3000') {
        setRange([2000, 3000]);
        setMinPrice(2000);
        setMaxPrice(3000);
      } else if (currentRange === 'Above ₹3000') {
        setRange([3000, 5000]);
        setMinPrice(3000);
        setMaxPrice(5000);
      } else {
        setRange([0, 5000]);
        setMinPrice(0);
        setMaxPrice(5000);
      }
    }
  }, [isOpen, currentRange]);

  const handleRangeChange = (newRange) => {
    setRange(newRange);
    setMinPrice(newRange[0]);
    setMaxPrice(newRange[1]);
  };

  const handleApply = () => {
    if (range[0] === 0 && range[1] === 5000) {
      onApply('All');
    } else if (range[0] === 0 && range[1] < 2000) {
      onApply('Under ₹2000');
    } else if (range[0] >= 2000 && range[1] <= 3000) {
      onApply('₹2000 - ₹3000');
    } else if (range[0] > 3000) {
      onApply('Above ₹3000');
    } else {
      // Custom range
      onApply(`₹${range[0]} - ₹${range[1]}`);
    }
    onClose();
  };

  const handleClear = () => {
    setRange([0, 5000]);
    setMinPrice(0);
    setMaxPrice(5000);
    onApply('All');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="price-range-modal-overlay" onClick={onClose}>
      <div className="price-range-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Select Price Range</h3>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        
        <div className="modal-content">
          <div className="range-slider-container">
            <div className="slider-labels">
              <span className="slider-value left-value">₹{minPrice}</span>
              <span className="slider-value right-value">₹{maxPrice}</span>
            </div>
            <RangeSliderInput
              min={0}
              max={5000}
              step={100}
              value={range}
              onInput={handleRangeChange}
              className="range-slider"
            />
          </div>
          
          <div className="preset-ranges">
            <h4>Quick Select:</h4>
            <div className="preset-buttons">
              <button 
                className={`preset-btn ${range[0] === 0 && range[1] === 5000 ? 'active' : ''}`}
                onClick={() => handleRangeChange([0, 5000])}
              >
                All Prices
              </button>
              <button 
                className={`preset-btn ${range[0] === 0 && range[1] < 2000 ? 'active' : ''}`}
                onClick={() => handleRangeChange([0, 2000])}
              >
                Under ₹2000
              </button>
              <button 
                className={`preset-btn ${range[0] >= 2000 && range[1] <= 3000 ? 'active' : ''}`}
                onClick={() => handleRangeChange([2000, 3000])}
              >
                ₹2000 - ₹3000
              </button>
              <button 
                className={`preset-btn ${range[0] > 3000 ? 'active' : ''}`}
                onClick={() => handleRangeChange([3000, 5000])}
              >
                Above ₹3000
              </button>
            </div>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={handleClear}>
            Clear
          </button>
          <button className="btn btn-primary" onClick={handleApply}>
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeModal;
