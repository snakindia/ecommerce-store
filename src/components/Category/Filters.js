import React from 'react';

const Filters = () => {
  return (
    <div id="accordion" className="myaccordion">
      <div className="border-0">
        <div className="panel-heading" role="tab" id="headingThree">
          <h4 className="panel-title">
            <a
              role="button"
              data-toggle="collapse"
              data-parent="#accordion"
              href="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              Short By Parts
            </a>
          </h4>
        </div>
        <div
          id="collapseThree"
          className="collapse show"
          aria-labelledby="headingThree"
          data-parent="#accordion"
        >
          <div className="card-body card-body margin-top p-0">
            <ul className="inner-list">
              <li>
                <a href="brands-02.html">
                  Valves & Repairs Kits
                  <span className="badge badge-light float-right">230</span>
                </a>
              </li>
              <li>
                <a href="brands-02.html">
                  Solinoid Valves
                  <span className="badge badge-light float-right">230</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="filter-heading border-bottom pt-1 pb-0">
        <div className="pb-2">Price Range</div>
        <div className="slider-box">
          <div id="price-range" className="slider" />
          <input className="input-text" type="text" id="priceRange" readOnly />
        </div>
      </div>
      <div className="featured-product">
        <h6>Featured Products</h6>
        <div className="location">
          <img className="bha-flag" src="images/product/img3.jpg" alt="" />
          <div className="description-xxs">
            Goyen® Pentair® CA25T000 Replacement Repair Kit
          </div>
          <div className="star-rating mb-0">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <i className="fa fa-star" />
              </li>
              <li className="list-inline-item">
                <i className="fa fa-star" />
              </li>
              <li className="list-inline-item">
                <i className="fa fa-star" />
              </li>
              <li className="list-inline-item">
                <i className="fa fa-star" />
              </li>
              <li className="list-inline-item">
                <i className="fa fa-star-o" />
              </li>
            </ul>
          </div>
          <div className="pro_Price p-0">
            <p className=" currecny">
              <span className="strike">$91.08</span>
              <span className="sp-price">$75.90</span>
            </p>
          </div>
        </div>

        <div className="location">
          <img className="bha-flag" src="images/product/img1.jpg" alt="" />
          <div className="description-xxs">RCA 3D2 Replacements</div>
          <div className="star-rating mb-0">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <i className="fa fa-star" />
              </li>
              <li className="list-inline-item">
                <i className="fa fa-star" />
              </li>
              <li className="list-inline-item">
                <i className="fa fa-star" />
              </li>
              <li className="list-inline-item">
                <i className="fa fa-star" />
              </li>
              <li className="list-inline-item">
                <i className="fa fa-star-o" />
              </li>
            </ul>
          </div>
          <div className="pro_Price p-0">
            <p className=" currecny">
              <span className="strike">$91.08</span>
              <span className="sp-price">$75.90</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
