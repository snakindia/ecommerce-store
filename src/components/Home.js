import React, { Component } from 'react';
import Client from './Clients/Clients';
import ProductsPart from './Home/ProductsParts';
import OEM from './Home/OEM';
import Banner from './Home/Banner';
import Products from './Home/Products';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <div className="content-wrapper">
          <div className="pagewrap">
            <div className="bgWhite pb-4" >
              <Client />
              <OEM />
              <ProductsPart />
              <Products />
            </div>
          </div>
        </div>
      </div>
    );
  }
}