import React from 'react';
import './EmptyBook.css';

import empty from './empty.svg'

const EmptyBooks = () => {
  return (
    <div className="empty-books">
      <img src={empty} alt="Empty Books" />
      <h3 className="title">No Books Found!</h3>
    </div>
  );
};

export default EmptyBooks;
