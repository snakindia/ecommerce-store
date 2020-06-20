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
        <section class="bha-product-section">
            <div class="tab-container">
                <ul class="tab-inner">
                  <a class="left-control" href=""><i class="fa fa-chevron-left" aria-hidden="true"></i></a>
                  <li><a class="tablink current" href="">Goyen</a></li>
                  <li><a class="tablink" href="">Mecair</a></li>
                  <li><a class="tablink" href="">Asco</a></li>
                  <li><a class="tablink" href="">Donaldson Torit</a></li>
                  <li><a class="tablink" href="">Camfil Farr</a></li>
                  <li><a class="tablink" href="">Taeha</a></li>
                  <li><a class="tablink" href="">Turbo</a></li>
                  <li><a class="tablink" href="">Autel</a></li>
                  <a class="right-control" href=""><i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                </ul>
            </div>
  
            <div class="item-wraper">
              <div class="resp-tabs-container">
                <div id="mis" class="tab-pane active show">
                    <section class="regular slider">
                    <Slider {...settings}>
                      <div class="product-card-wrapper" style={{position:"relative"}}>
                          <em class="product-card__ribbon-wrapper">
                            <span class="product-card__ribbon product-card__ribbon--is-new">New</span>
                          </em> 
                          <div class="product-card hvr-float-shadow">
                            <div class="product-card-inner">

                              <img class="img-fluid" src={Item1Image} alt="" />
                              <div class="product-description">
                                Goyen® K4502 (M2162) Replacement Repair Kit
                              </div>
                              <div class="product-tag">
                                DCS574W1
                              </div>
                            <div class="prod-details-link">
                              <button type="button" class="btn bha-btn-primary w-100">View Details</button>
                            </div>
                          </div>
                        </div>  
                      </div>

                      <div class="product-card-wrapper">
                          <div class="product-card hvr-float-shadow">
                            <div class="product-card-inner">
                              <img class="img-fluid" src={Item2Image} alt="" />
                              <div class="product-description">
                                Goyen® K2003 (M1174) Replacement Repair Kit
                              </div>
                              <div class="product-tag">
                                DCS574W2
                              </div>
                              <div class="prod-details-link">
                                <button type="button" class="btn bha-btn-primary w-100">View Details</button>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div class="product-card-wrapper">
                          <div class="product-card hvr-float-shadow">
                            <div class="product-card-inner">
                              <img class="img-fluid" src={Item3Image} alt="" />
                              <div class="product-description">
                                Replacement Repair Kit for Pentair® Goyen® RCA/CA 25 1" Pulse Valves
                              </div>
                              <div class="product-tag">
                                K2500 (M1183)
                              </div>
                              <div class="prod-details-link">
                                <button type="button" class="btn bha-btn-primary w-100">View Details</button>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div class="product-card-wrapper" style={{position:"relative"}}>
                          <em class="product-card__ribbon-wrapper">
                            <span class="product-card__ribbon product-card__ribbon--is-new">New</span>
                          </em>  
                          <div class="product-card hvr-float-shadow">
                            <div class="product-card-inner">
                              <img class="img-fluid" src={Item4Image} alt="" />
                              <div class="product-description">
                                Goyen® K4502 (M2162) Replacement Repair Kit
                              </div>
                              <div class="product-tag">
                                DCS574W1
                              </div>
                              <div class="prod-details-link">
                                <button type="button" class="btn bha-btn-primary w-100">View Details</button>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div class="product-card-wrapper">
                          <div class="product-card hvr-float-shadow">
                            <div class="product-card-inner">
                              <img class="img-fluid" src={GoyenOriginalImage} alt="" />
                              <div class="product-description">
                                Goyen® K4502 (M2162) Replacement Repair Kit
                              </div>
                              <div class="product-tag">
                                DCS574W1
                              </div>
                              <div class="prod-details-link">
                                <button type="button" class="btn bha-btn-primary w-100">View Details</button>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div class="product-card-wrapper">
                          <div class="product-card hvr-float-shadow">
                            <div class="product-card-inner">
                              <img class="img-fluid" src={Item1Image} alt="" />
                              <div class="product-description">
                                Goyen® K4502 (M2162) Replacement Repair Kit
                              </div>
                              <div class="product-tag">
                                DCS574W1
                              </div>
                              <div class="prod-details-link">
                                <button type="button" class="btn bha-btn-primary w-100">View Details</button>
                              </div>
                            </div>
                          </div>
                      </div>
                      </Slider>
                    </section>
                </div> 
              </div>
              <div class="container text-center">
                <a href="" class="btn bha-btn-primary z-index view-all">View All</a>
              </div>
            </div>
            </section>
        </div>
    )
  }
}
