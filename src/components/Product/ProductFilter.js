import React, { Component } from 'react'
import ProductFilterCategory from '../Product/ProductFilterCategory'
import ProductFilterCategoryDetails from '../Product/ProductFilterCategoryDetails'

export default class ProductFilter extends Component {
  render() {
    return (
<div class="container-fluid">
    <div class="row">
      <div class="col-lg-3 col-md-6">
        <ProductFilterCategory />
      </div>
      <div class="col-sm-9 col-md-9">
      <ProductFilterCategoryDetails />
      </div>
    </div>
    </div>
        )
  }
}
