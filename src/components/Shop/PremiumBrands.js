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
    let { brands } = this.state;
    const {limit} =this.props;
    brands = brands && brands.length > 0 && limit ? brands.slice(0,limit):brands;
    var settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };

    return (
        <div>
            <section className="bg-opeque">
                <div className="container-fluid">
                    <h2 className="bha_heading_2 z-index text-blue">Shop by premium brands</h2>
                </div>
            </section>
            <section className="pro-equipment-section mt-0">
                <div className="container-fluid padding-0">
                  <div className="row">
                    {Object.keys(brands).length &&
                      brands.map((item, idx) => {
                        return (
                          <div className="col-lg-3 col-sm-6 col-md-6 bha-mb" key={`PremiumBrands${idx}`}>
                            <a href="#">
                              <div
                                className="view view-first"
                                style={{ height: '250px' }}
                              >
                                <img
                                  className="img-fluid"
                                  src={
                                    item.image.length > 0
                                      ? item.image
                                      : API_IMAGE_PATH + 'default/default.jpg'
                                  }
                                  alt="Card image"
                                />
                                <div className="brand-label">{item.name}</div>
                                <div className="mask">
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
