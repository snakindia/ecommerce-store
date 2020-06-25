import React, { Component } from 'react';
import Item1Image from '../../assets/images/product/item1.jpg';
import Item2Image from '../../assets/images/product/item2.jpg';
import Item3Image from '../../assets/images/product/item3.jpg';
import Item4Image from '../../assets/images/product/item4.jpg';
import GoyenOriginalImage from '../../assets/images/product/Goyen-Original.jpg';
import Slider from "react-slick";

export default class Products extends Component {
  render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4
    };
      return (
      <div>
        <section className="bha-product-section">
            <div className="tab-container">
                <ul className="tab-inner">
                  <a className="left-control" href=""><i className="fa fa-chevron-left" aria-hidden="true"></i></a>
                  <li><a className="tablink current" href="">Goyen</a></li>
                  <li><a className="tablink" href="">Mecair</a></li>
                  <li><a className="tablink" href="">Asco</a></li>
                  <li><a className="tablink" href="">Donaldson Torit</a></li>
                  <li><a className="tablink" href="">Camfil Farr</a></li>
                  <li><a className="tablink" href="">Taeha</a></li>
                  <li><a className="tablink" href="">Turbo</a></li>
                  <li><a className="tablink" href="">Autel</a></li>
                  <a className="right-control" href=""><i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                  <div class="brands-head">
    Brands</div>
                </ul>
            </div>
  
            <div className="item-wraper">
              <div className="resp-tabs-container">
                <div id="mis" className="tab-pane active show">
                    <section className="regular slider">
                    <Slider {...settings}>
                      <div className="product-card-wrapper" style={{position:"relative"}}>
                          <em className="product-card__ribbon-wrapper">
                            <span className="product-card__ribbon product-card__ribbon--is-new">New</span>
                          </em> 
                          <div className="product-card hvr-float-shadow">
                            <div className="product-card-inner">

                              <img className="img-fluid" src={Item1Image} alt="" />
                              <div className="product-description">
                                Goyen® K4502 (M2162) Replacement Repair Kit
                              </div>
                              <div className="product-tag">
                                DCS574W1
                              </div>
                            <div className="prod-details-link">
                              <button type="button" className="btn bha-btn-primary w-100">View Details</button>
                            </div>
                          </div>
                        </div>  
                      </div>

                      <div className="product-card-wrapper">
                          <div className="product-card hvr-float-shadow">
                            <div className="product-card-inner">
                              <img className="img-fluid" src={Item2Image} alt="" />
                              <div className="product-description">
                                Goyen® K2003 (M1174) Replacement Repair Kit
                              </div>
                              <div className="product-tag">
                                DCS574W2
                              </div>
                              <div className="prod-details-link">
                                <button type="button" className="btn bha-btn-primary w-100">View Details</button>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div className="product-card-wrapper">
                          <div className="product-card hvr-float-shadow">
                            <div className="product-card-inner">
                              <img className="img-fluid" src={Item3Image} alt="" />
                              <div className="product-description">
                                Replacement Repair Kit for Pentair® Goyen® RCA/CA 25 1" Pulse Valves
                              </div>
                              <div className="product-tag">
                                K2500 (M1183)
                              </div>
                              <div className="prod-details-link">
                                <button type="button" className="btn bha-btn-primary w-100">View Details</button>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div className="product-card-wrapper" style={{position:"relative"}}>
                          <em className="product-card__ribbon-wrapper">
                            <span className="product-card__ribbon product-card__ribbon--is-new">New</span>
                          </em>  
                          <div className="product-card hvr-float-shadow">
                            <div className="product-card-inner">
                              <img className="img-fluid" src={Item4Image} alt="" />
                              <div className="product-description">
                                Goyen® K4502 (M2162) Replacement Repair Kit
                              </div>
                              <div className="product-tag">
                                DCS574W1
                              </div>
                              <div className="prod-details-link">
                                <button type="button" className="btn bha-btn-primary w-100">View Details</button>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div className="product-card-wrapper">
                          <div className="product-card hvr-float-shadow">
                            <div className="product-card-inner">
                              <img className="img-fluid" src={GoyenOriginalImage} alt="" />
                              <div className="product-description">
                                Goyen® K4502 (M2162) Replacement Repair Kit
                              </div>
                              <div className="product-tag">
                                DCS574W1
                              </div>
                              <div className="prod-details-link">
                                <button type="button" className="btn bha-btn-primary w-100">View Details</button>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div className="product-card-wrapper">
                          <div className="product-card hvr-float-shadow">
                            <div className="product-card-inner">
                              <img className="img-fluid" src={Item1Image} alt="" />
                              <div className="product-description">
                                Goyen® K4502 (M2162) Replacement Repair Kit
                              </div>
                              <div className="product-tag">
                                DCS574W1
                              </div>
                              <div className="prod-details-link">
                                <button type="button" className="btn bha-btn-primary w-100">View Details</button>
                              </div>
                            </div>
                          </div>
                      </div>
                      </Slider>
                    </section>
                </div> 
              </div>
              <div className="container text-center">
                <a href="" className="btn bha-btn-primary z-index view-all">View All</a>
              </div>
            </div>
            </section>
        </div>
    )
  }
}
