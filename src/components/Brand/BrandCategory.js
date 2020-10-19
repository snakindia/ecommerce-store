import React, { Component } from 'react';
import Brands from '../../assets/images/brands.jpg';
import BrandCategoryContant from '../Brand/BrandCategoryContant';
export default class BrandCategory extends Component {
  render() {
    return (
      <>
        <div className="banner-container brand-category">
          <div id="carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-item bha_h_50 active">
              <picture>
                <img
                  src={Brands}
                  alt="responsive image"
                  className="d-block img-fluid"
                />
              </picture>
              <div className="caption v_middle">
                <h1 className="bha_heading_1 text-black-dark">
                  Lorem ipsum dollar site amnt
                </h1>
                <h5>
                  Lorem ipsum dollar site amt. Lorem ipsum dollar site amt.Lorem
                  ipsum dollar site amt.
                </h5>
                {/* <!-- <a href="#" className="btn bha-btn-primary mt-4 pl-pr">view details</a> --> */}
              </div>
            </div>
          </div>
        </div>
        <section className="bha_category_head">
          <div className="container-fluid">
            <h2 className="bha_heading_2 z-index font-weight-bold text-black">
              Shop By Brands
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mi
              lacus, sodales euismod dui sed, consectetur faucibus arcu. Proin
              mattis mollis fringilla.
            </p>
          </div>
        </section>
        <BrandCategoryContant />
      </>
    );
  }
}
