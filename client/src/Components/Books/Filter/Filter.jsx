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
      
    </form>
  );
};

export default Filter