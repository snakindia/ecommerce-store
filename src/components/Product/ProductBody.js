import React, { Component } from 'react';
import ProductBredcumBar from '../Product/ProductBredcumBar'
import ProductFilter from '../Product/ProductFilter';
import Client from '../Home/Client';
import ProductsPart from '../Home/ProductsParts';


export default class ProductBody extends Component {
  render() {
    return (
      <div>
        <ProductBredcumBar />
        <ProductFilter />
        <Client />

      </div>
    )
  }
}
