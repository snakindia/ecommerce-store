import React, { Component } from 'react';
import ProductBredcumBar from '../Product/ProductBredcumBar';
import ProductFilter from '../Product/ProductFilter';
import Clients from './../Clients';
import ProductsPart from '../Home/ProductsParts';

export default class ProductBody extends Component {
  render() {
    return (
      <div>
        <ProductBredcumBar />
        <ProductFilter />
        <Clients />
      </div>
    );
  }
}
