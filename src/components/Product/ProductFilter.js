import React, { Component } from 'react';
import ProductFilterCategory from '../Product/ProductFilterCategory';
import ProductFilterCategoryDetails from '../Product/ProductFilterCategoryDetails';

export default class ProductFilter extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <ProductFilterCategory />
          </div>
          <div className="col-sm-9 col-md-9">
            <ProductFilterCategoryDetails />
          </div>
        </div>
      </div>
    );
  }
}
