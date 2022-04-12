import React from 'react';
import './Pagination.css'

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate, incPage, decPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='nav-pagination'>
      <ul className='pagination'>
        {pageNumbers.length>1?
        <>
        <li className='page-item prev'>
          <button className='page-link' onClick={() => decPage(pageNumbers[0])}>
            <i className="ri-arrow-left-s-line"></i>
          </button>
        </li>
        {
          pageNumbers.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : null}`}>
                <button onClick={() => paginate(number)} className='page-link'>{number}</button>
            </li>
          ))
        }
        <li className='page-item next'>
          <button className='page-link' onClick={() => incPage(pageNumbers[pageNumbers.length-1])}>
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </li>
        </>
        : null}
      </ul>
    </nav>
  );
};

export default Pagination;