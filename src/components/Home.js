import React, { Component } from 'react';
import Client from './Home/Client';
import ProductsPart from './Home/ProductsParts';
import OEM from './Home/OEM';
import Banner from './Home/Banner';
import Products from './Home/Products';
import FreeBrochure from './common/FreeBrochure'
export default class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <FreeBrochure />
        {/* <OEM /> */}
        <Products />
        <ProductsPart />
        <Client />
      </div>
    )
  }
}
