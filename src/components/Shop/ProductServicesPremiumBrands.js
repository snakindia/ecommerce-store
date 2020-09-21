import React, { Component } from 'react';
import axios from 'axios';
import { API_URL, API_IMAGE_PATH } from './../../constants/appConstant';
import parseHtml from 'react-html-parser';

export default class ProductServicesPremiumBrands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: {},
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + '/get_branded_category_list?fields=name,image,description')
      .then(res => {
        this.setState({ brands: res.data });
      });
  }

  render() {
    const { brands } = this.state;

    var settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
    };

    return (
        <section class="shopping-product mt-0 pb-2">
            <div class="bg-opeque">
                <div class="container-fluid">
                    <h2 class="bha_heading_2 z-index text-blue">Shop by premium brands</h2>
                </div>
            </div>
            <div class="pagewrap">
                <section class="grid-container mt-4">
                   <div class="container-fluid pl-0 pr-0">
                      <div class="row">
                        {Object.keys(brands).length &&
                          brands.map((item, idx) => {
                            return (
                              <div class="col-sm-3 col-md-3 bha-mb">
                                <a href="#">
                                  <div class="view view-first height-auto column_4">
                                    <img
                                      class="img-fluid"
                                      src={
                                        item.image.length > 0
                                          ? item.image
                                          : API_IMAGE_PATH + 'default/default.jpg'
                                      }
                                      alt="Card image"
                                    />
                                    <div class="brand-label">{item.name}</div>
                                    <div class="mask">
                                      <p>{parseHtml(item.description)}</p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                </section>
            </div>
        </section>
    );
  }
}
