import React from 'react';
import cartIcon from '../../../assets/icon/cart_black.svg';
import compareIcon from '../../../assets/icon/compare.svg';
import Image from '../../common/Image';

const DealCard = ({ dealData, openQuickDeal, addToCompare, comparedDeals}) => {
  let priceDiff = dealData.regular_price - dealData.sale_price;
  let discount = parseFloat((priceDiff * 100) / dealData.regular_price).toFixed(
    2
  );
  const imgSrc = (dealData.images[0] || {}).url;
  const compare = (e, data) => {
    e.preventDefault();
    addToCompare(dealData);
  }

  const isCompared = (id) => {
    let existingData = comparedDeals.find(item=> item.id === id);
    if(existingData) {
      return true;
    } else {
      return false;
    }
  }

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
                  openQuickDeal(dealData);
                }}
                className="quick-view"
                // tabIndex="0"
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
          <div className="discount">-{discount}%</div>
        </div>
        <div className="card-description">
          <h6>{dealData.name}</h6>
          <div className="pro_Price">
            <p className=" currecny">
              <span className="strike">${dealData.regular_price}</span>
              <span className="sp-price">${dealData.sale_price}</span>
            </p>
          </div>
        </div>
        <div className="card-item">
          <Image src={imgSrc} alt="" className="img-fluid" />
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
          <a
            href="#!"
            className={
              isCompared(dealData.id)
                ? 'svg-icon compare-link link-active'
                : 'svg-icon svg-icon compare-link'
            }
            tabIndex="0"
            onClick={e => compare(e, dealData)}
          >
            {/*<img*/}
            {/*  className="mr-2 ml-4"*/}
            {/*  src={compareIcon}*/}
            {/*  alt=""*/}
            {/*  style={{ display: 'inline-block' }}*/}
            {/*/>*/}
            <i className="fa fa-random mr-2 ml-2" area-hidden="true" />
            Compare
          </a>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
