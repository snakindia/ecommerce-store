import React from 'react';

const Grid = props => {
  const { image, title, content } = props.grid;

  return (
    <div className="col-sm-4 col-md-4">
      <a href="#">
        <div className="view view-first">
          <img src={image} alt="" className="img-fluid" />
          <div className="mask">
            <h2>{title}</h2>
            <p>{content}</p>
            {/*<a href="#" class="info">Read More</a>*/}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Grid;
