import React, { Component } from 'react';

export default class ProductFilterCategory extends Component {
  render() {
    return (
      <div className="category-filter mb-4">
        <div className="category-inner">
          <h6 className="brand_head">Shop By Brand</h6>
        </div>
        <div id="brand">
          <div className="BrdInner">
            <ul className="inner-list">
              <li>
                <a href="brands-02.html">
                  Goyen
                  <span className="badge badge-light float-right">230</span>
                </a>
              </li>
              <li>
                <a href="brands-02.html">
                  Mecair
                  <span className="badge badge-light float-right">230</span>
                </a>
              </li>
              <li>
                <a href="brands-02.html">
                  Asco
                  <span className="badge badge-light float-right">230</span>
                </a>
              </li>
              <li>
                <a href="brands-02.html">
                  Donaldson Torit
                  <span className="badge badge-light float-right">230</span>
                </a>
              </li>
              <li>
                <a href="brands-02.html">
                  Camfil Farr
                  <span className="badge badge-light float-right">230</span>
                </a>
              </li>
              <li>
                <a href="brands-02.html">
                  Taeha
                  <span className="badge badge-light float-right">230</span>
                </a>
              </li>
              <li>
                <a href="brands-02.html">
                  Turbo
                  <span className="badge badge-light float-right">230</span>
                </a>
              </li>
              <li>
                <a href="brands-02.html">
                  Autel
                  <span className="badge badge-light float-right">230</span>
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- <div className="btn_more"><a href=""><span>+</span>Show All</a></div>
--> */}
        </div>

        <div id="price-range">
          <div className="BrdInner">
            <div className="BRND_N">Short By Price</div>

            <div className="list">
              <a href="/tags/creative,clean#content">
                <label>
                  <input type="checkbox" className="AnchorList" value="on" />
                  <span>$50-$199.99</span>
                </label>
              </a>
            </div>
            <div className="list">
              <a href="/tags/creative,clean#content">
                <label>
                  <input type="checkbox" className="AnchorList" value="on" />
                  <span>$200-$499.99</span>
                </label>
              </a>
            </div>
            <div className="list">
              <a href="/tags/creative,clean#content">
                <label>
                  <input type="checkbox" className="AnchorList" value="on" />
                  <span>$500-$999.99</span>
                </label>
              </a>
            </div>
          </div>
          {/* <!-- <div className="btn_more"><a href="#"><span>+</span>Show All</a></div> --> */}
        </div>
      </div>
    );
  }
}
