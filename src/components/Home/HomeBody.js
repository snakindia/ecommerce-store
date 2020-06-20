import React, { Component } from 'react';
import Client from '../Home/Client';
import ProductsPart from '../Home/ProductsParts';
import FreeBrochures from '../Contact/FreeBrochures';

export default class HomeBody extends Component {
  render() {
    return (
      <div>
        <FreeBrochures />

        <ProductsPart />
        <Client />
      </div>
    )
  }
}
