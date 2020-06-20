import React, { Component } from 'react';
import Client from './Home/Client';
import ProductsPart from './Home/ProductsParts';
import OEM from './Home/OEM';
import Banner from './Home/Banner';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <OEM />
        <ProductsPart />
        <Client />
      </div>
    )
  }
}
