import React from 'react'
import Filter from './Filter/Filter'
import './MainBooks.css'
import ShowBooks from './ShowBooks/ShowBooks'

const MainBooks = ({categories, ctgType, handleChange, minPrice, maxPrice, isLogin}) => {
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
            <ShowBooks isLogin={isLogin} />
          </div>
        </div>
  )
}

export default MainBooks