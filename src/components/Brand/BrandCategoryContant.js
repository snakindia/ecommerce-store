import React, { Component } from 'react';
import Item1 from '../../assets/images/thumbnail-img/item1.jpg';
import Item2 from '../../assets/images/thumbnail-img/item2.jpg';
import Item3 from '../../assets/images/thumbnail-img/item3.jpg';
import Item4 from '../../assets/images/thumbnail-img/item4.jpg';
import Item5 from '../../assets/images/thumbnail-img/item5.jpg';
import Item6 from '../../assets/images/thumbnail-img/item6.jpg';
export default class BrandCategoryContant extends Component {
  render() {
    return (
      <section className="content-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div className="page_link_item">
                  <img src={Item1} alt="" className="image" />
                  <div className="overlay">Goyan</div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div className="page_link_item">
                  <img src={Item2} alt="" className="image" />
                  <div className="overlay">Mecair</div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div className="page_link_item">
                  <img src={Item3} alt="" className="image" />
                  <div className="overlay">Asco</div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div className="page_link_item">
                  <img src={Item4} alt="" className="image" />
                  <div className="overlay">Donaldson Torit</div>
                </div>
              </a>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div className="page_link_item">
                  <img src={Item5} alt="" className="image" />
                  <div className="overlay">Mecair</div>
                </div>
              </a>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div className="page_link_item">
                  <img src={Item6} alt="" className="image" />
                  <div className="overlay">Goyan</div>
                </div>
              </a>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div className="page_link_item">
                  <img src={Item4} alt="" className="image" />
                  <div className="overlay">Donaldson Torit</div>
                </div>
              </a>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3">
              <a href="#">
                <div className="page_link_item">
                  <img src={Item3} alt="" className="image" />
                  <div className="overlay">Asco</div>
                </div>
              </a>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div className="page_link_item">
                  <img src={Item1} alt="" className="image" />
                  <div className="overlay">Goyan</div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div className="page_link_item">
                  <img src={Item2} alt="" className="image" />
                  <div className="overlay">Mecair</div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div className="page_link_item">
                  <img src={Item3} alt="" className="image" />
                  <div className="overlay">Asco</div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div className="page_link_item">
                  <img src={Item4} alt="" className="image" />
                  <div className="overlay">Donaldson Torit</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
