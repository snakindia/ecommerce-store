import React, { Component } from 'react';
import Client from './Home/Client';
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
          <Client />
          <OEM />
          <ProductsPart />
          <Products />
        </div>
      </div>
    );
  }
}
