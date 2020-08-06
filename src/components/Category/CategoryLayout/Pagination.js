import React, { Fragment } from 'react';

const PAGE_SET = 4;
const PAGE_DIR = {
  PREVIOUS_PAGE: 'PREVIOUS_PAGE',
  NEXT_PAGE: 'NEXT_PAGE',
};
const Pagination = ({ totalRecords, size, currentPage = 1, changePage }) => {
  const totalPages =
    parseInt(totalRecords / size) + Boolean(totalRecords % size);

  const handleChangePage = e => {
    e.preventDefault();
    e.persist();
    const { dataset } = e.target;
    let pageValue;
    if (dataset.dir === PAGE_DIR.PREVIOUS_PAGE) {
      pageValue = currentPage > 1 ? currentPage - 1 : 1;
    } else if (dataset.dir === PAGE_DIR.NEXT_PAGE) {
      pageValue = currentPage < totalPages ? currentPage + 1 : totalPages;
    } else {
      pageValue = +dataset.value;
    }
    changePage(pageValue);
  };

  const getPages = () => {
    let renderingPages = [];
    if (currentPage + (PAGE_SET - 1) <= totalPages) {
      renderingPages = [
        currentPage,
        currentPage + 1,
        totalPages - 1,
        totalPages,
      ];
    } else {
      let incIndex = totalPages - currentPage;
      let decIndex = PAGE_SET - 1 - incIndex;
      for (let i = 1; i <= incIndex; i++) {
        renderingPages.push(currentPage + i);
      }
      // debugger;
      if (decIndex >= 0) {
        for (let i = 0; i <= decIndex; i++) {
          renderingPages.unshift(currentPage - i);
        }
      }
    }
    renderingPages = renderingPages.filter(v => v > 0);
    renderingPages = Array.from(new Set(renderingPages));

    return renderingPages.map((page, index) => {
      let element;
      element = (
        <li
          key={page}
          className={`page-item ${page === currentPage ? 'active' : ''}`}
        >
          <a
            className="page-link"
            href="#"
            onClick={handleChangePage}
            data-value={page}
          >
            {page}
          </a>
        </li>
      );
      if (
        index === 1 &&
        page + 1 !== renderingPages[index + 1] &&
        renderingPages.length > 3
      ) {
        element = (
          <Fragment key={page}>
            {element}
            <li className="page-item">...</li>
          </Fragment>
        );
      }
      return element;
    });
  };

  return (
    <ul className="pagination">
      <li className={`page-item ${currentPage > 1 ? '' : 'disabled'}`}>
        <a
          className="page-link"
          href="#"
          data-dir={PAGE_DIR.PREVIOUS_PAGE}
          onClick={handleChangePage}
        >
          <i className="fa fa-angle-left" data-dir={PAGE_DIR.PREVIOUS_PAGE} />
        </a>
      </li>
      {getPages()}
      <li className={`page-item ${currentPage < totalPages ? '' : 'disabled'}`}>
        <a
          className="page-link"
          href="#"
          data-dir={PAGE_DIR.NEXT_PAGE}
          onClick={handleChangePage}
        >
          <i className="fa fa-angle-right" data-dir={PAGE_DIR.NEXT_PAGE} />
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
