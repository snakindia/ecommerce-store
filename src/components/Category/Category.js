import React, { Component } from 'react';
import LeftMenu from '../Shop/LeftMenu';
import Banner from '../Shop/Banner';
import CategoryLayout from './CategoryLayout/CategoryLayout';
import Filters from './Filters';

class Category extends Component {
  render() {
    return (
      <div className="content-wrapper topPadding">
        <div className="pagewrap">
          <div className="bgWhite">
            <div className="container-fluid">
              <ol className="breadcrumb breadcrumb-bar pb-0 pt-1 small">
                <li className="breadcrumb-item">
                  <a href="home.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Product/Services</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Dust Collection Equipment</a>
                </li>
                <li className="breadcrumb-item active">Baghouse</li>
              </ol>
            </div>
            <section className="pro-equipment-section">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-3 col-md-3 padding-0 border-right border-bottom">
                    <LeftMenu />
                    <div className="filter-heading">Filters</div>
                    <Filters />
                  </div>
                  <div className="col-sm-9 col-md-9 padding-0">
                    <div className="banner-container-xs mt-0">
                      <Banner />
                    </div>
                    <CategoryLayout />
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-opeque">
              <div className="container-fluid">
                <h2 className="bha_heading_2 z-index text-blue">
                  Companies using our products
                </h2>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
