import React from 'react';
import Image from '../common/Image';

const CompareImages = ({ data, handleCloseClick }) => {
  const isClose = data.length > 2;
  return (
    <thead className="bg-secondary">
      <tr>
        <td className="align-middle" />
        {data.map(deal => {
          const imgSrc = deal.images[0];
          return (
            <td key={deal.id} className="p-0">
              <div className="comparison-item border">
                {isClose ? (
                  <span
                    className="remove-item"
                    onClick={() => handleCloseClick(deal.id)}
                  >
                    <i className="fa fa-close" />
                  </span>
                ) : null}
                <a className="comparison-item-thumb" href="shop-single.html">
                  <Image src={imgSrc} alt="" />
                </a>
              </div>
            </td>
          );
        })}
      </tr>
    </thead>
  );
};

export default CompareImages;
