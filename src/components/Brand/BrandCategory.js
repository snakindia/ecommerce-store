import React, { Component } from 'react'
import Brands from '../../assets/images/brands.jpg'
import BrandCategoryContant from '../Brand/BrandCategoryContant'
export default class BrandCategory extends Component {
  render() {
    return (
      <>
<div class="banner-container brand-category">
        <div id="carousel" class="carousel slide" data-ride="carousel">

        <div class="carousel-item bha_h_50 active">
            <picture>
                <img src={Brands} alt="responsive image" class="d-block img-fluid" />
              </picture>
            <div class="caption v_middle">
                <h1 class="bha_heading_1 text-black-dark">Lorem ipsum dollar site amnt</h1>
                <h5>Lorem ipsum dollar site amt. Lorem ipsum dollar site amt.Lorem ipsum dollar site amt.</h5>
                {/* <!-- <a href="#" class="btn bha-btn-primary mt-4 pl-pr">view details</a> --> */}
            </div>
        </div>
      </div>
    </div>
    <section class="bha_category_head">
  <div class="container-fluid">
    <h2 class="bha_heading_2 z-index font-weight-bold text-black">Shop By Brands</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mi lacus, sodales euismod dui sed, consectetur faucibus arcu. Proin mattis mollis fringilla.</p>
  </div>
</section>
<BrandCategoryContant />
    </>
    )
  }
}
