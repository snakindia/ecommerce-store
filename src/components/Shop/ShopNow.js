import React, { Component } from 'react';
import { MDBModal, MDBModalBody } from 'mdbreact';

import LeftMenu from "./LeftMenu";
import Banner from "./Banner";
import Client from "./../Home/Client";
import Products from "./../Home/Products";
import TopRatedProducts from "./TopRatedProducts";
import PremiumBrands from "./PremiumBrands";
import HotDeals from "./HotDeals";

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
            <div class="content-wrapper topPadding">
                <div class="pagewrap">
                    <div class="bgWhite padding-bottom">
                        <section class="pro-equipment-section">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-sm-3 col-md-3 padding-0">
                                        <LeftMenu/>
                                    </div>
                                    <div class="col-sm-9 col-md-9 padding-0">
                                        <div class="banner-container-xs mt-0">
                                            <Banner/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <HotDeals/>
                        <Client/>
                        <PremiumBrands/>
                        <Products/>
                        <TopRatedProducts/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopNOw;
