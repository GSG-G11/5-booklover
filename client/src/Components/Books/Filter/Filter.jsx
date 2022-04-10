import React from 'react'
import './Filter.css'

const Filter = ({ categories, ctgType, minPrice, maxPrice, handleChange }) => {
  return (
    <form className='filter-form'>
      <h2 className='form-title'>Filter</h2>
      <div className='categories filter-ctg'>
        <h3 className='filter-type'>Categories</h3>
        {categories.map((ctg, index) => (
          <label className='single-category' key={index}>
            <input
              type='radio'
              name='ctgType'
              value={ctg}
              checked={ctgType === ctg}
              onChange={(e) => handleChange(e)}
            />
            {ctg}
          </label>
        ))}
      </div>
      <div className='price filter-ctg'>
        <h3 className='filter-type'>Price Range</h3>
        <div className='min-price single-price'>
          <label htmlFor='MinPrice'>Min Price</label>
          <input
            type='range'
            name='minPrice'
            id='min'
            min={0}
            max={200}
            step={10}
            value={minPrice}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='max-price single-price'>
          <label htmlFor='MaxPrice'>Max Price</label>
          <input
            type='range'
            name='maxPrice'
            id='min'
            min={0}
            max={200}
            step={10}
            value={maxPrice}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
    </form>
  );
};

export default Filter