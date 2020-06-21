import React, { Component } from 'react';
import BagHouseImage from '../../assets/images/baghouse.jpg';
import FanImage from '../../assets/images/fan.jpg';
import ValveImage from '../../assets/images/valve.jpg';
import KitImage from '../../assets/images/kit.jpg';
import Image from '../../assets/images/2000X500.jpg';
import Slider from "react-slick";

export default class ProductsPart extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
            <div>
                <section className="header-section">
                    <div className="container-fluid">
                        <h2 className="bha_heading_2 z-index font-weight-bold">Products parts & Equipment</h2>
                    </div>
                </section>
            <section className="pro-equipment-section">
             <div className="productitem slider">
             <Slider {...settings}>
                <div className="product-item-wrapper">
                    <div className="card">
                        <figure className="imghvr-push-up">
                            <img src={BagHouseImage} alt="Card image" />
                            <figcaption className="text-center">
                              <h4>Baghouse</h4>
                              <button type="button" className="btn bha-btn-primary w-100 mt-2">Shop Now!</button>
                            </figcaption>

                            <div className="card-body p-0">
                                <h4 className="card-title">Baghouse</h4>
                            </div>
                         </figure>
                    </div>
                </div>
                <div className="product-item-wrapper">
                  <div className="card">
                    <figure className="imghvr-push-up">
                      <img src={FanImage} alt="Card image" />
                      <figcaption className="text-center">
                          <h4>Fans & Blowers</h4>
                          <button type="button" className="btn bha-btn-primary w-100 mt-2">Shop Now!</button>
                        </figcaption>

                      <div className="card-body p-0">
                        <h4 className="card-title">Fans & Blowers</h4>
                      </div>
                    </figure>
                  </div>
                </div>

                <div className="product-item-wrapper">
                  <div className="card">
                    <figure className="imghvr-push-up">
                      <img src={ValveImage} alt="Card image" />
                        <figcaption className="text-center">
                          <h4>Fans & Blowers</h4>
                          <button type="button" className="btn bha-btn-primary w-100 mt-2">Shop Now!</button>
                        </figcaption>
                      <div className="card-body p-0">
                        <h4 className="card-title">Diaphragm Valves</h4>
                      </div>
                    </figure>
                  </div>
                </div>

                <div className="product-item-wrapper">
                  <div className="card">
                    <figure className="imghvr-push-up">
                      <img src={KitImage} alt="Card image" />
                        <figcaption className="text-center">
                          <h4>Valve Repair Kits</h4>
                          <button type="button" className="btn bha-btn-primary w-100 mt-2">Shop Now!</button>
                        </figcaption>
                      <div className="card-body p-0">
                        <h4 className="card-title">Valve Repair Kits</h4>
                      </div>
                    </figure>
                  </div>
                </div>

                <div className="product-item-wrapper">
                    <div className="card">
                      <figure className="imghvr-push-up">
                        <img src={Image} alt="Card image" />
                        <figcaption className="text-center">
                          <h4>Solenoid Valves</h4>
                          <button type="button" className="btn bha-btn-primary w-100 mt-2">Shop Now!</button>
                        </figcaption>
                        <div className="card-body p-0">
                        <h4 className="card-title">Solenoid Valves</h4>
                        </div>
                      </figure>
                  </div>
                </div>
                </Slider>
              </div>
            </section>
        </div>
    )
  }
}
