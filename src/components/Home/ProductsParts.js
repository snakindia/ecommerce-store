import React, { Component } from 'react';
import BagHouseImage from '../../assets/images/baghouse.jpg';
import FanImage from '../../assets/images/fan.jpg';
import ValveImage from '../../assets/images/valve.jpg';
import KitImage from '../../assets/images/kit.jpg';
import Image from '../../assets/images/2000X500.jpg';

export default class Client extends Component {
  render() {
    return (
            <div>
                <section class="header-section">
                    <div class="container-fluid">
                        <h2 class="bha_heading_2 z-index font-weight-bold">Products parts & Equipment</h2>
                    </div>
                </section>
            <section class="pro-equipment-section">
             <div class="productitem slider">
                <div class="product-item-wrapper">
                    <div class="card">
                        <figure class="imghvr-push-up">
                            <img src={BagHouseImage} alt="Card image" />
                            <figcaption class="text-center">
                              <h4>Baghouse</h4>
                              <button type="button" class="btn bha-btn-primary w-100 mt-2">Shop Now!</button>
                            </figcaption>

                            <div class="card-body p-0">
                                <h4 class="card-title">Baghouse</h4>
                            </div>
                         </figure>
                    </div>
                </div>
                <div class="product-item-wrapper">
                  <div class="card">
                    <figure class="imghvr-push-up">
                      <img src={FanImage} alt="Card image" />
                      <figcaption class="text-center">
                          <h4>Fans & Blowers</h4>
                          <button type="button" class="btn bha-btn-primary w-100 mt-2">Shop Now!</button>
                        </figcaption>

                      <div class="card-body p-0">
                        <h4 class="card-title">Fans & Blowers</h4>
                      </div>
                    </figure>
                  </div>
                </div>

                <div class="product-item-wrapper">
                  <div class="card">
                    <figure class="imghvr-push-up">
                      <img src={ValveImage} alt="Card image" />
                        <figcaption class="text-center">
                          <h4>Fans & Blowers</h4>
                          <button type="button" class="btn bha-btn-primary w-100 mt-2">Shop Now!</button>
                        </figcaption>
                      <div class="card-body p-0">
                        <h4 class="card-title">Diaphragm Valves</h4>
                      </div>
                    </figure>
                  </div>
                </div>

                <div class="product-item-wrapper">
                  <div class="card">
                    <figure class="imghvr-push-up">
                      <img src={KitImage} alt="Card image" />
                        <figcaption class="text-center">
                          <h4>Valve Repair Kits</h4>
                          <button type="button" class="btn bha-btn-primary w-100 mt-2">Shop Now!</button>
                        </figcaption>
                      <div class="card-body p-0">
                        <h4 class="card-title">Valve Repair Kits</h4>
                      </div>
                    </figure>
                  </div>
                </div>

                <div class="product-item-wrapper">
                    <div class="card">
                      <figure class="imghvr-push-up">
                        <img src={Image} alt="Card image" />
                        <figcaption class="text-center">
                          <h4>Solenoid Valves</h4>
                          <button type="button" class="btn bha-btn-primary w-100 mt-2">Shop Now!</button>
                        </figcaption>
                        <div class="card-body p-0">
                        <h4 class="card-title">Solenoid Valves</h4>
                        </div>
                      </figure>
                  </div>
                </div>
              </div>
            </section>
        </div>
    )
  }
}
