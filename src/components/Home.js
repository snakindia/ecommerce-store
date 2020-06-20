import React, { Component } from 'react';
import Client from './Home/Client';
import ProductsPart from './Home/ProductsParts';

export default class Home extends Component {
  render() {
    return (
      <div>
        <ProductsPart />
        <Client />
      </div>
    )
  }
}
