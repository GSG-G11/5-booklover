import React from 'react'
import BookCardShow from '../BookCardShow/BookCardShow'

import './RelatedItem.css'

const RelatedItem = ({imageUrl, name, id, category, author}) => {
  return (
    <div className="related-item">
        <div className="item-image">
            <BookCardShow imageUrl={imageUrl} name={name} id={id} />
        </div>
        <div className="related-info">
            <h3 className="category">{category}</h3>
            <h2 className="name">{name.length > 22 ? name.split('').splice(0, 18).join('') + '...' : name}</h2>
            <h4 className="author">{author}</h4>
        </div>
    </div>
  )
}

export default RelatedItem