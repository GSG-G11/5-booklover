import React from 'react';
import './Pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='nav-pagination'>
      <ul className='pagination'>
        {pageNumbers.length>1?  pageNumbers.map(number => (
          <li key={number} className='page-item'>
              <button onClick={() => paginate(number)} className='page-link'>{number}</button>
              
          </li>
        )):null}
      </ul>
    </nav>
  );
};

export default Pagination;