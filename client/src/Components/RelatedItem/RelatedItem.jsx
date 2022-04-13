import React from 'react'
import BookCardShow from '../BookCardShow/BookCardShow'

import './RelatedItem.css'

const RelatedItem = ({imageUrl, name, id, category, author}) => {
  return (
    <div className="related-item">
        <div className="item-image">
            <BookCardShow imageUrl={imageUrl} name={name} id={id} />
        </div>
        
    </div>
  )
}

export default RelatedItem