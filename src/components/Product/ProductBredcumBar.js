import React, { Component } from 'react';

export default class ProductBredcumBar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-md=6">
              <ol className="cd-breadcrumb custom-separator">
                <li>
                  <a href="home.html">Home</a>
                  <i className="fa fa-angle-right ml-3"></i>
                </li>
                <li>
                  <a href="brands.html">Brands</a>
                  <i className="fa fa-angle-right ml-3"></i>
                </li>
                <li className="current">Products</li>
              </ol>
            </div>
            {/* <!-- <div className="col-sm-6 col-md-6 noOfpro text-right">
          <a href="#myModal" data-toggle="modal" className="bha-btn-secondry">Free Brochures</a>
        </div> --> */}
          </div>
        </div>
      </div>
    );
  }
}
