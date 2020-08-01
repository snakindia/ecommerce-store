import React from 'react';

const Pagination = () => {
  return (
    <ul className="pagination">
      <li className="page-item disabled">
        <a className="page-link" href="#" tabIndex="-1">
          <i className="fa fa-angle-left" />
        </a>
      </li>
      <li className="page-item active">
        <a className="page-link" href="#">
          1
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          2 <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="page-item">...</li>
      <li className="page-item">
        <a className="page-link" href="#">
          200
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          201
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          <i className="fa fa-angle-right" />
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
