import React, { Component } from 'react';
import axios from 'axios';
import { API_URL, API_IMAGE_PATH } from './../../constants/appConstant';
import parseHtml from 'react-html-parser';

export default class PremiumBrands extends Component {
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
      autoplay: true,
      autoplaySpeed: 5000,
    };

    return (
        <div>
            <section class="bg-opeque">
                <div class="container-fluid">
                    <h2 class="bha_heading_2 z-index text-blue">Shop by premium brands</h2>
                </div>
            </section>
            <section class="pro-equipment-section mt-4">
                <div class="container padding-0">
                  <div class="row">
                    {Object.keys(brands).length &&
                      brands.map((item, idx) => {
                        return (
                          <div class="col-sm-4 col-md-4 bha-mb">
                            <a href="#">
                              <div
                                class="view view-first"
                                style={{ height: '250px' }}
                              >
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
    );
  }
}
