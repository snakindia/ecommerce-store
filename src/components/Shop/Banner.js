import React, { Component } from 'react';
import Pro01 from '../../assets/images/promo-banner/banner-small01.jpg';
import ProSecond from '../../assets/images/promo-banner/banner-small02.jpg';
import ProThird from '../../assets/images/promo-banner/banner-small03.jpg';
import imgSmallOne from '../../assets/images/promo-banner/600X5001.jpg';
import imgSmallTwo from '../../assets/images/promo-banner/600X5002.jpg';
import imgSmallThree from '../../assets/images/promo-banner/600X5003.jpg';
import RBCarousel from 'react-bootstrap-carousel';

class Banner extends Component {
  render() {
      return (
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-container-small mt-0">
              <RBCarousel
                autoplay={true}
                pauseOnVisibility={true}
                slideshowSpeed={6000}
                version={4}
                className="item-xs"
              >
                <div className="item-xs">
                  <img src={Pro01} alt="" className="img-fluid mobileHide" />
                  <img src={imgSmallOne} alt="" className="img-fluid mobileImg" />
                  <div className="banner-item-xs-caption z-index">
                    {/* <h1 className="item_heading text-white">Dust Collection Equipment</h1> */}
                    <h1 className="item_heading small">Square Chuck Air Filter Cartridge</h1>
                    <p className="item-description-xs">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod didunt ut labore et dolore magna aliqua.
                    </p>
                    <a href="#" data-toggle="modal" className="btn bha-btn-primary btnLight mt-4">Read More</a>
                  </div>
                </div>
  
                <div className="item-xs">
                  <img src={ProSecond} alt="" className="img-fluid mobileHide" />
                  <img src={imgSmallTwo} alt="" className="img-fluid mobileImg" />
                  <div className="banner-item-xs-caption z-index">
                    <h1 className="item_heading">Dust Collector Auxiliaries & Parts</h1>
                    <p className="item-description-xs">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod didunt ut labore et dolore magna aliqua.
                    </p>
                    <a href="#myModal" data-toggle="modal" className="btn bha-btn-primary btnLight mt-4">Read More</a>
                  </div>
                </div>
  
                <div className="item-xs">
                  <img src={ProThird} alt="" className="img-fluid mobileHide" />
                  <img src={imgSmallThree} alt="" className="img-fluid mobileImg" />
                  <div className="banner-item-xs-caption z-index">
                    <h1 className="item_heading">Brands & Replacements</h1>
                    <p className="item-description-xs">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod didunt ut labore et dolore magna aliqua.
                    </p>
                    <a href="#myModal" data-toggle="modal" className="btn bha-btn-primary btnLight mt-4">Read More</a>
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
