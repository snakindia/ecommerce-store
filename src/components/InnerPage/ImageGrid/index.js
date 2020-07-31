import React from 'react';
import Grid from './Grid';

const ImageGrid = props => {
  const { imageGrid } = props;
  return (
    <section className="pro-equipment-section mt-5">
      <div className="container pl-0 pr-0">
        <div className="row">
          {imageGrid.map(item => (
            <Grid key={item.title} grid={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
