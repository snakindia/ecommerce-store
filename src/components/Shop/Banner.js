import React, { Component } from 'react';
import Pro01 from '../../assets/images/promo-banner/banner-small01.jpg';
import ProSecond from '../../assets/images/promo-banner/banner-small02.jpg';
import ProThird from '../../assets/images/promo-banner/banner-small03.jpg';
import ProFourth from '../../assets/images/promo-banner/banner-small04.jpg';
import imgSmallOne from '../../assets/images/promo-banner/600X5001.jpg';
import imgSmallTwo from '../../assets/images/promo-banner/600X5002.jpg';
import imgSmallThree from '../../assets/images/promo-banner/600X5003.jpg';
import RBCarousel from 'react-bootstrap-carousel';
import {Link} from 'react-router-dom'
class Banner extends Component {
  render() {
      return (
        <div className="row" 
        className="banner-div"
        style={{minWidth:'100%'}}
        // style={{width:'100%'}}
        >
          <div className="col-md-12 col-lg-12 pl-0 pr-0"> 
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
                    <h1 className="item_heading small">DUST COLLECTION EQUIPMENT</h1>
                    <p className="item-description-xs">
                     Development, licensing and deployment of Baghouse Products to meet quality standards, emission’s requirements, and improve overall operation and capital costs associated with a plant.
                    </p>
                    <Link to="/dust-collector/portable" data-toggle="modal" className="btn bha-btn-primary btnLight mt-4">Read More</Link>
                  </div>
                </div>
  
                <div className="item-xs">
                  <img src={ProSecond} alt="" className="img-fluid mobileHide" />
                  <img src={imgSmallTwo} alt="" className="img-fluid mobileImg" />
                  <div className="banner-item-xs-caption z-index">
                    <h1 className="item_heading">Dust Collector Auxiliaries & Parts</h1>
                    <p className="item-description-xs">
                     Development, licensing and deployment of Baghouse Products to meet quality standards, emission’s requirements, and improve overall operation and capital costs associated with a plant.
                    </p>
                    <Link to="/pulsevalve" data-toggle="modal" className="btn bha-btn-primary btnLight mt-4">Read More</Link>
                  </div>
                </div>
  
                <div className="item-xs">
                  <img src={ProThird} alt="" className="img-fluid mobileHide" />
                  <img src={imgSmallThree} alt="" className="img-fluid mobileImg" />
                  <div className="banner-item-xs-caption z-index">
                    <h1 className="item_heading">Brands & Replacements</h1>
                    <p className="item-description-xs">
                     Development, licensing and deployment of Baghouse Products to meet quality standards, emission’s requirements, and improve overall operation and capital costs associated with a plant.
                    </p>
                    <Link to="/mecair" data-toggle="modal" className="btn bha-btn-primary btnLight mt-4">Read More</Link>
                  </div>
                </div>

                <div className="item-xs">
                  <img src={ProFourth} alt="" className="img-fluid mobileHide" />
                  <img src={imgSmallThree} alt="" className="img-fluid mobileImg" />
                  <div className="banner-item-xs-caption z-index">
                    <h1 className="item_heading">Companies using our products</h1>
                    <p className="item-description-xs">
                     Development, licensing and deployment of Baghouse Products to meet quality standards, emission’s requirements, and improve overall operation and capital costs associated with a plant.
                    </p>
                    <Link to="/mecair" data-toggle="modal" className="btn bha-btn-primary btnLight mt-4">Read More</Link>
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
