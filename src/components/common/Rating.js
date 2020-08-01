import React from 'react';

const Rating = ({ ratings }) => {
  const _ratings = new Array(5).fill(1, 0, ratings).fill(0, ratings);
  return (
    <div className="star-rating">
      <ul className="list-inline">
        {_ratings.map((i, index) => (
          <li key={index} className="list-inline-item">
            <i className={`fa fa-star${i ? '' : '-o'}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Rating);
