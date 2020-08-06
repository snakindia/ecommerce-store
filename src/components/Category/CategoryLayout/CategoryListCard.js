import React from 'react';
import cartIcon from '../../../assets/icon/cart_black.svg';
import compareIcon from '../../../assets/icon/compare.svg';
import Rating from '../../common/Rating';
import { DEFAULT_IMG_URL } from '../../../constants/urls';

const CategoryListCard = ({ product, openQuickView }) => {
  const imgSrc = (product.images[0] || {}).url || DEFAULT_IMG_URL;
  return (
    <li className="list-group-item">
      <div className="media flex-column flex-lg-row p-3">
        <a href="#">
          <i className="fa fa-heart-o wishList" />
        </a>
        <div className="portfolio-hover">
          <div className="portfolio-hover-content">
            <div className="callToAction-list">
              <p>
                <a
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    openQuickView(product);
                  }}
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
        <img
          src={imgSrc}
          alt="Generic placeholder image"
          width="200"
          className="order-1 order-lg-1 mr-lg-4"
        />

        <div className="media-body order-2 order-lg-1">
          <h6 className="mt-0 mb-2">{product.name}</h6>
          <p className="text-muted mb-0">{product.description}</p>
          <div className="d-flex align-items-center justify-content-left mt-1">
            <Rating ratings={2} />
          </div>
          <div className="pro_Price p-0">
            <p className=" currecny">
              {product.on_sale && (
                <span className="strike">${product.regular_price}</span>
              )}
              <span className="sp-price">${product.price}</span>
            </p>
          </div>
          <div className="d-block float-left w-100">
            <a href="#" className="svg-icon">
              <img className="mr-2" src={cartIcon} width="20" alt="" />
              Add to Cart
            </a>
            <a href="#" className="svg-icon">
              <img className="mr-2 ml-4" src={compareIcon} width="20" alt="" />
              Compare
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CategoryListCard;
