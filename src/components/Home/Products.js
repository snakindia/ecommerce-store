import React, { Component } from 'react';
import Item1Image from '../../assets/images/product/item1.jpg';
import Item2Image from '../../assets/images/product/item2.jpg';
import Item3Image from '../../assets/images/product/item3.jpg';
import Item4Image from '../../assets/images/product/item4.jpg';
import GoyenOriginalImage from '../../assets/images/product/Goyen-Original.jpg';

export default class Products extends Component {
  render() {
      <div>
        <section class="bha-product-section">

            <div class="item-wraper">
              <div class="resp-tabs-container">
                <div id="mis" class="tab-pane active show">
                    <section class="regular slider">
                      <div class="product-card-wrapper" style="position: relative;">
                        <a href="#">
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
                            </a>
                            <div class="prod-details-link">
                              <button type="button" class="btn bha-btn-primary w-100">View Details</button>
                            </div>
                          </div>
                        </div>  
                      </div>

                      <div class="product-card-wrapper">
                        <a href="#"> 
                          <div class="product-card hvr-float-shadow">
                            <div class="product-card-inner">
                              <img class="img-fluid" src={Item2Image} alt="" />
                              <div class="product-description">
                                Goyen® K2003 (M1174) Replacement Repair Kit
                              </div>
                              <div class="product-tag">
                                DCS574W2
                              </div>
                             </a>
                              <div class="prod-details-link">
                                <button type="button" class="btn bha-btn-primary w-100">View Details</button>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div class="product-card-wrapper">
                        <a href="#">
                          <div class="product-card hvr-float-shadow">
                            <div class="product-card-inner">
                              <img class="img-fluid" src={Item3Image} alt="" />
                              <div class="product-description">
                                Replacement Repair Kit for Pentair® Goyen® RCA/CA 25 1" Pulse Valves
                              </div>
                              <div class="product-tag">
                                K2500 (M1183)
                              </div>
                            </a>
                              <div class="prod-details-link">
                                <button type="button" class="btn bha-btn-primary w-100">View Details</button>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div class="product-card-wrapper" style="position: relative;">
                        <a href="#">
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
                              </a>
                              <div class="prod-details-link">
                                <button type="button" class="btn bha-btn-primary w-100">View Details</button>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div class="product-card-wrapper">
                        <a href="#"> 
                          <div class="product-card hvr-float-shadow">
                            <div class="product-card-inner">
                              <img class="img-fluid" src={GoyenOriginalImage} alt="" />
                              <div class="product-description">
                                Goyen® K4502 (M2162) Replacement Repair Kit
                              </div>
                              <div class="product-tag">
                                DCS574W1
                              </div>
                              </a>
                              <div class="prod-details-link">
                                <button type="button" class="btn bha-btn-primary w-100">View Details</button>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div class="product-card-wrapper">
                        <a href="#"> 
                          <div class="product-card hvr-float-shadow">
                            <div class="product-card-inner">
                              <img class="img-fluid" src={Item1Image} alt="" />
                              <div class="product-description">
                                Goyen® K4502 (M2162) Replacement Repair Kit
                              </div>
                              <div class="product-tag">
                                DCS574W1
                              </div>
                              </a>
                              <div class="prod-details-link">
                                <button type="button" class="btn bha-btn-primary w-100">View Details</button>
                              </div>
                            </div>
                          </div>
                      </div>

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
