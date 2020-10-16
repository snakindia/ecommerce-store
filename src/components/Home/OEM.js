import React, { Component } from 'react';
import axios from 'axios';
import { API_URL, API_IMAGE_PATH } from './../../constants/appConstant';
import Slider from 'react-slick';

export default class OEM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: {},
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + '/get_branded_category_list?fields=name,image,slug')
      .then(res => {
        this.setState({ brands: res.data });
      });
  }

  drawData() {
    const { brands } = this.state;

    return (
      <div>
        {Object.keys(brands).length &&
          brands.map((item, idx) => {
            return (
              <div className="product-item-wrapper">
                <div className="card">
                  <figure className="imghvr-shutter-in-out-vert">
                    <img
                      src={
                        item.image.length > 0
                          ? item.image
                          : API_IMAGE_PATH + 'default/default.jpg'
                      }
                      alt="Card image"
                    />
                    <figcaption className="text-center">
                      <h4>{item.name}</h4>
                      <button
                        type="button"
                        className="btn bha-btn-primary w-100 mt-2"
                      >
                        Shop Now!
                      </button>
                    </figcaption>

                    <div className="card-body p-0">
                      <h4 className="card-title">{item.name}</h4>
                    </div>
                  </figure>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
  render() {
    const { brands } = this.state;
    var settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
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
    return (
      <div>
        <section className="pb-4 bg-opeque" id="brand">
          <div className="container-fluid">
            <h2 className="bha_heading_2 z-index text-blue">Premium OEM Brands</h2>
          </div>
        </section>

        <section className="pro-equipment-section">
          <div className="container pl-0 pr-0">
            <div className="productitem slider">
              <Slider {...settings}>
                {Object.keys(brands).length &&
                  brands.map((item, idx) => {
                    return (
                      <div className="product-item-wrapper">
                        <div className="card">
                          <figure className="imghvr-shutter-in-out-vert">
                            <img
                              src={
                                item.image.length > 0
                                  ? item.image
                                  : API_IMAGE_PATH + 'default/default.jpg'
                              }
                              alt="Card image"
                            />
                            <figcaption className="text-center">
                              <h4>{item.name}</h4>
                             
                              <a href={item.page_url} className="btn bha-btn-primary w-100 mt-2">View Details</a>
                            </figcaption>

                            <div className="card-body p-0">
                              <h4 className="card-title">{item.name}</h4>
                            </div>
                          </figure>
                        </div>
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
