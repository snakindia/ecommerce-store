import React, { Component } from 'react';

export default class ProductBredcumBar extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6 col-md=6">
              <ol class="cd-breadcrumb custom-separator">
                <li>
                  <a href="home.html">Home</a>
                  <i class="fa fa-angle-right ml-3"></i>
                </li>
                <li>
                  <a href="brands.html">Brands</a>
                  <i class="fa fa-angle-right ml-3"></i>
                </li>
                <li class="current">Products</li>
              </ol>
            </div>
            {/* <!-- <div class="col-sm-6 col-md-6 noOfpro text-right">
          <a href="#myModal" data-toggle="modal" class="bha-btn-secondry">Free Brochures</a>
        </div> --> */}
          </div>
        </div>
      </div>
    );
  }
}
