import React, { Component } from 'react';
import { MDBModal, MDBModalBody } from 'mdbreact';

import LeftMenu from './LeftMenu';
import Banner from './Banner';
import Client from './../Home/Client';
import Products from './../Home/Products';
import TopRatedProducts from './TopRatedProducts';
import PremiumBrands from './PremiumBrands';
import HotDeals from './HotDeals';

const initialValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
};

class ShopNOw extends Component {

  render() {
    return (
      <div className="content-wrapper topPadding">
        <div className="pagewrap">
          <div className="bgWhite padding-bottom">
            <section className="pro-equipment-section">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-3 col-md-3 padding-0">
                    <LeftMenu />
                  </div>
                  <div className="col-sm-9 col-md-9 padding-0">
                    <div className="banner-container-xs mt-0">
                      <Banner />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <HotDeals />
            <Client />
            <PremiumBrands />
            <Products />
            <TopRatedProducts />
          </div>
        </div>
      </div>
    );
  }
}

export default ShopNOw;
