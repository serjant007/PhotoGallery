import React from 'react';
import { SpaContext } from '../../context/SpaContext';
import './pagination.css';

const Pagination = () => {
  const { cardsPerPage, totalCards, paginate, currentPage } = React.useContext(SpaContext);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pager">
        {pageNumbers.map((number) => (
          <li key={number} className="pager__item">
            <a
              onClick={() => paginate(number)}
              className={currentPage === number ? 'pager__link pager__link-active' : 'pager__link'}
              href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
