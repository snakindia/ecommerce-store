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
      <section class="content-section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div class="page_link_item">
                  <img src={Item1} alt="" class="image" />
                  <div class="overlay">Goyan</div>
                </div>
              </a>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div class="page_link_item">
                  <img src={Item2} alt="" class="image" />
                  <div class="overlay">Mecair</div>
                </div>
              </a>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div class="page_link_item">
                  <img src={Item3} alt="" class="image" />
                  <div class="overlay">Asco</div>
                </div>
              </a>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div class="page_link_item">
                  <img src={Item4} alt="" class="image" />
                  <div class="overlay">Donaldson Torit</div>
                </div>
              </a>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div class="page_link_item">
                  <img src={Item5} alt="" class="image" />
                  <div class="overlay">Mecair</div>
                </div>
              </a>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div class="page_link_item">
                  <img src={Item6} alt="" class="image" />
                  <div class="overlay">Goyan</div>
                </div>
              </a>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div class="page_link_item">
                  <img src={Item4} alt="" class="image" />
                  <div class="overlay">Donaldson Torit</div>
                </div>
              </a>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-3">
              <a href="#">
                <div class="page_link_item">
                  <img src={Item3} alt="" class="image" />
                  <div class="overlay">Asco</div>
                </div>
              </a>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div class="page_link_item">
                  <img src={Item1} alt="" class="image" />
                  <div class="overlay">Goyan</div>
                </div>
              </a>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div class="page_link_item">
                  <img src={Item2} alt="" class="image" />
                  <div class="overlay">Mecair</div>
                </div>
              </a>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div class="page_link_item">
                  <img src={Item3} alt="" class="image" />
                  <div class="overlay">Asco</div>
                </div>
              </a>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <a href="product.html">
                <div class="page_link_item">
                  <img src={Item4} alt="" class="image" />
                  <div class="overlay">Donaldson Torit</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
