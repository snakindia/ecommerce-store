import React, { Component } from 'react';
import axios from 'axios';
import { API_URL, API_IMAGE_PATH } from './../../constants/appConstant';
import parseHtml from 'react-html-parser';
import {Link} from 'react-router-dom'
export default class ProductServicesPremiumBrands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: {},
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + '/get_branded_category_list?fields=name,image,description,url,slug, page_url')
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
        <section className="shopping-product mt-0 pb-2">
            <div className="bg-opeque">
                <div className="container-fluid">
                    <h2 className="bha_heading_2 z-index text-blue">Our premium brands</h2>
                </div>
            </div>
            <div className="pagewrap">
                <section className="grid-container mt-4">
                   <div className="container-fluid paddingNo">
                      <div className="row">
                        {Object.keys(brands).length &&
                          brands.map((item, idx) => {
                            return (
                              <div className="col-lg-3 col-sm-6 bha-mb">
                                <Link to={item.page_url}>
                                  <div className="view view-first height-auto column_4">
                                    <img
                                      className="img-fluid"
                                      src={
                                        item.image.length > 0
                                          ? item.image
                                          : API_IMAGE_PATH + 'default/default.jpg'
                                      }
                                      alt="Card image"
                                    />
                                    <div className="brand-label">
                                      {item.name}
                                      
                                    </div>
                                    <div className="mask">
                                      <p>{parseHtml(item.description)}
                                      
                                      {/* <Link to={item.page_url} className="btn bha-btn-primary w-100 mt-2">View Details</Link> */}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
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
