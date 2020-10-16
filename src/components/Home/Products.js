import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';
import { API_URL, API_IMAGE_PATH } from './../../constants/appConstant';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {},
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + '/getBestSellingProducts?fields=name,images,sku')
      .then(res => {
        this.setState({ products: res.data });
      });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const { products } = this.state;
    return (
      <div style={{"display":"none"}}>
        <section className="bg-opeque pb-4" id="bestSelling">
          <div className="container-fluid">
            <h2 className="bha_heading_2 z-index text-blue">
              Best Selling Products
            </h2>
          </div>
        </section>
        <section className="pro-equipment-section">
          <div className="container pl-0 pr-0">
            <div className="productitem slider">
              <div className="product-card-wrapper outer-wrpper">
                <Slider {...settings}>
                  {products &&
                    Object.keys(products).length &&
                    products.map((item, idx) => {
                      return (
                        <div className="product-card hvr-float-shadow">
                          <div className="item-pro-inner">
                            <a href="http://sales.baghouseamerica.com/" target="_blank">
                              <img
                                className="img-fluid"
                                src={
                                  item.images.length > 0
                                    ? item.images[0].url
                                    : API_IMAGE_PATH + 'default/default.jpg'
                                }
                                alt=""
                                
                              />
                              <div className="product-description">{item.name}</div>
                              <div className="product-tag">{item.sku}</div>
                            </a>
                            <a
                              href="http://sales.baghouseamerica.com/"
                              target="_blank"
                              className="btn bha-btn-primary w-100 float-left mt-4">
                              View Details
                            </a>
                          </div>
                        </div>
                      );
                    })}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
