import React from 'react'
import Filter from './Filter/Filter'
import './MainBooks.css'

const MainBooks = ({categories, ctgType, handleChange, minPrice, maxPrice}) => {
  return (
    <div className="container">
          <div className="row">
            <aside className="side-bar">
              <Filter
                categories={categories}
                ctgType={ctgType}
                handleChange={handleChange}
                minPrice={minPrice}
                maxPrice={maxPrice}
              />
            </aside>
            <div className="books-side">

            </div>
          </div>
        </div>
  )
}

export default MainBooks