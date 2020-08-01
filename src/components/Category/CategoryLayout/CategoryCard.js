import React from 'react';
import cartIcon from '../../../assets/icon/cart_black.svg';
import compareIcon from '../../../assets/icon/compare.svg';
import Rating from '../../common/Rating';

const CategoryCard = ({ product, openQuickView }) => {
  const imgSrc = (product.images[0] || {}).url;
  return (
    <div className="col-sm-6 col-md-6 col-lg-3 border-bottom">
      <div className="hot-deals-item-wrapper">
        <div className="portfolio-hover">
          <div className="portfolio-hover-content">
            <a href="javascript:void(0);" className="like-button hover-btn">
              <i className="fa fa-heart-o not-liked bouncy" />
              <i className="fa fa-heart is-liked bouncy" />
              <span className="like-overlay" />
            </a>
            <div className="callToAction-xxs">
              <p>
                <a
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    openQuickView(product);
                  }}
                  className="quick-view"
                >
                  Quick View
                </a>
                <a href="product-details.html" className="quick-view">
                  View Details
                </a>
              </p>
            </div>
          </div>
        </div>
        <a href="#">
          <i className="fa fa-heart-o wishList" />
        </a>
        <div className="item-pro-inner">
          <a href="#">
            <img className="img-fluid" src={imgSrc} alt="" />
            <div className="product-description">{product.name}</div>
            <div className="pro_Price text-center">
              <p className=" currecny">
                <span className="strike">${product.regular_price}</span>
                <span className="sp-price">${product.price}</span>
              </p>
            </div>
            <div className="text-center">
              <Rating ratings={2} />
            </div>
            <div className="d-block float-left w-100">
              <a href="#" className="svg-icon">
                <img className="mr-1 ml-2" src={cartIcon} alt="" />
                Add to Cart
              </a>
              <a href="#" className="svg-icon">
                <img className="mr-2 ml-1" src={compareIcon} alt="" />
                Compare
              </a>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
