import React, { Component } from 'react';
import Pro01 from '../../assets/images/promo-banner/pro-01.jpg';
import ProSecond from '../../assets/images/promo-banner/pro-02.jpg';
import RBCarousel from 'react-bootstrap-carousel';

class Banner extends Component {
  render() {
      return (
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-container-xs mt-0">
              <RBCarousel
                autoplay={true}
                pauseOnVisibility={true}
                slideshowSpeed={2000}
                version={4}
                className="item-xs"
              >
                <div className="item-xs">
                  <img src={Pro01} alt="" className="img-fluid" />
                  <div className="item-xs-caption">
                    <h1 className="item_heading">Square Chuck Air Filter Cartridge</h1>
                    <p className="item-description-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod didunt ut labore et dolore magna aliqua.</p>
                    <p className="item-price pt-3">from<span className="priceTag">$399</span></p>
                    <a href="#" data-toggle="modal" className="btn bha-btn-primary mt-2">Shop Now</a>
                  </div>
                </div>
  
                <div className="item-xs">
                  <img src={ProSecond} alt="" className="img-fluid" />
                  <div className="item-xs-caption">
                    <h1 className="item_heading">Bin Vent Dust Collector</h1>
                    <p className="item-description-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod didunt ut labore et dolore magna aliqua.</p>
                    <p className="item-price pt-3">from<span className="priceTag">$399</span></p>
                    <a href="#myModal" data-toggle="modal" className="btn bha-btn-primary mt-2">Shop Now</a>
                  </div>
                </div>
  
                <div className="item-xs">
                  <img src={Pro01} alt="" className="img-fluid" />
                  <div className="item-xs-caption">
                    <h1 className="item_heading">Square Chuck Air Filter Cartridge</h1>
                    <p className="item-description-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod didunt ut labore et dolore magna aliqua.</p>
                    <p className="item-price pt-3">from<span className="priceTag">$399</span></p>
                    <a href="#myModal" data-toggle="modal" className="btn bha-btn-primary mt-2">Shop Now</a>
                  </div>
                </div>
  
              </RBCarousel>
            </div>
          </div>
        </div>
      );
  }
}

export default Banner;
