import React, { Component } from 'react';
import Clients from './Clients';
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
          <Clients />
          <OEM />
          <ProductsPart />
          <Products />
        </div>
      </div>
    );
  }
}
