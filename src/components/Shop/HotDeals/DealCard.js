import React from 'react';
import cartIcon from '../../../assets/icon/cart_black.svg';
import compareIcon from '../../../assets/icon/compare.svg';

const DealCard = ({ dealData, openQuickDeal }) => {
  return (
    <div
      className="hot-deals-item-wrapper deals-border-right"
      style={{ display: 'inline-block', height: '100%' }}
    >
      <div className="portfolio-hover">
        <div className="portfolio-hover-content">
          <a href="#" tabIndex="0">
            <i className="fa fa-heart-o wishList-hover" />
          </a>
          <div className="callToAction-xs">
            <p>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  openQuickDeal(dealData.detail);
                }}
                className="quick-view"
                tabIndex="0"
              >
                Quick View
              </a>
              <a href="#" className="quick-view" tabIndex="0">
                View Details
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="card d-block" style={{ boxShadow: 'none' }}>
        <a href="#" tabIndex="0">
          <i className="fa fa-heart-o wishList" />
        </a>
        <div className="hot-tag">
          <div className="innertag">Hot</div>
          <div className="discount">{dealData.discount}%</div>
        </div>
        <div className="card-description">
          <h6>RCA-3D2 Replacement</h6>
          <div className="pro_Price">
            <p className=" currecny">
              <span className="strike">${dealData.price}</span>
              <span className="sp-price">${dealData.specialPrice}</span>
            </p>
          </div>
        </div>
        <div className="card-item">
          <img src={dealData.imgSrc} alt="" className="img-fluid" />
        </div>
        <div className="d-block float-left w-100 pl-3">
          <a href="#" className="svg-icon" tabIndex="0">
            <img
              className="mr-2"
              src={cartIcon}
              alt=""
              style={{ display: 'inline-block' }}
            />
            Add to Cart
          </a>
          <a href="#" className="svg-icon" tabIndex="0">
            <img
              className="mr-2 ml-4"
              src={compareIcon}
              alt=""
              style={{ display: 'inline-block' }}
            />
            Compare
          </a>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
