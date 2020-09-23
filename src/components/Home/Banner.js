import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, animateScroll as scroll } from 'react-scroll';
import PexelPhotoImage from '../../assets/images/pexels-photo.png';
import Image from '../../assets/images/2000X500.jpg';
import FiveImage from '../../assets/images/1400X500-2.jpg';

import CompanyHoverImage from '../../assets/images/company-hover.png';
import CompanyImage from '../../assets/images/company.png';
import BrandHoverImage from '../../assets/images/brand-hover.png';
import BrandImage from '../../assets/images/brand.png';
import EquipmentHoverImage from '../../assets/images/equipment-hover.png';
import EquipmentImage from '../../assets/images/equipment.png';
import BestSellingHoverImage from '../../assets/images/best-selling-hover.png';
import BestSellingImage from '../../assets/images/best-selling.png';

import RBCarousel from 'react-bootstrap-carousel';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import { Sticky } from 'react-sticky';
import { Affix } from 'antd';
import { API_URL } from '../../constants/appConstant';
import axios from 'axios';
import { fetch_dynamic_menus } from '../../actions/fetchActions';
import { save_brochures_details } from '../../actions/freeBrochuresActions';
import RequestAQuote from './../RequestAQuote/RequestAQuote';
import { showToast } from './../Notification/notification.actions';
var scrollToElement = require('scroll-to-element');

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
        autoplay: false,
        affix:false,
        isQuoteModalOpen: false
    };
  }

    componentDidMount() {
        fetch_dynamic_menus();
    }
  
    scrollToCompanyEle() {
        scrollToElement('#company', {
            offset: -195,
            duration: 1500
        });
    }
    
    scrollToBrandsEle() {
        scrollToElement('#brand', {
            offset: -195,
            duration: 1500
        });
    }
    
    scrollToProductEle() {
        scrollToElement('#product', {
            offset: -195,
            duration: 1500
        });
    }
    
    scrollToBestSellingEle() {
        scrollToElement('#bestSelling', {
            offset: -195,
            duration: 1500
        });
    }
    
//    triggerRequestAQuoteButton() {
//        document.getElementById("requestAQuote").click();
//    }
    
    toggleQuoteModal = () => {
        const { isQuoteModalOpen } = this.state;
        this.setState({ isQuoteModalOpen: !isQuoteModalOpen });
    };

  render() {
    const {affix} =this.state
    this.slider = React.createRef();
    const { navMenuData } = this.props;
    const { menuData } = navMenuData;
    const { home_slider } = menuData;
    const style = {
        top:100
    }
    
    return (
      <div>
        <div className="banner-container">
          <div id="carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
              <RBCarousel
                autoplay={this.state.autoplay}
                pauseOnVisibility={true}
                slideshowSpeed={2000}
                version={4}
              >
                {home_slider &&
                  home_slider.map((item, i) => {
                    return (
                      <div key={i + 'aa'}>
                        <picture>
                          <img
                            src={item.image}
                            alt="responsive image"
                            className="d-block img-fluid"
                          />
                        </picture>
                        <div className="caption">
                          <h1 className="bha_heading_1">{item.description}</h1>
                          <a
                            href="#"
                            className="btn bha-btn-primary mt-4 pl-pr"
                            onClick={this.toggleQuoteModal}
                          >
                            FREE BROCHURES
                          </a>
                        </div>
                      </div>
                    );
                  })}
              </RBCarousel>
            </div>
          </div>
        </div>
        
             <div class='bottom-navigation affixed'>
             <Affix 
             offsetTop={144} 
             onChange={e=>this.setState({affix:e})}
             >
          <div class="container" id={affix ? 'affixed':''}>
        
        {/* <Sticky topOffset={280}>
          {({
            style,

          }) => ( */}
         
            <header style={style} top={280}>
             {
            <div class="row justify-content-center">
              <div class="col-sm-3 col-md-3 shopNow fader">
                <img src={CompanyHoverImage} alt="" class="thumnal-icon" />
                <img src={CompanyImage} alt="" class="thumnal-icon" />
                <Link
                    className="tablink js-scroll-trigger"
                    spy={true}
                    smooth={true}
                    onClick={this.scrollToCompanyEle}
                >
                  Companies using our products
                </Link>
              </div>

              <div class="col-sm-3 col-md-3 request-Quote fader pr-0">
                <img src={BrandHoverImage} alt="" class="thumnal-icon" />
                <img src={BrandImage} alt="" class="thumnal-icon" />
                <Link
                  className="tablink js-scroll-trigger"
                  spy={true}
                    smooth={true}
                  onClick={this.scrollToBrandsEle}
                >
                  Premium OEM Brands
                </Link>
              </div>

              <div class="col-sm-3 col-md-3 request-Quote fader pl-0">
                <img src={EquipmentHoverImage} alt="" class="thumnal-icon" />
                <img src={EquipmentImage} alt="" class="thumnal-icon" />
                <Link
                    className="tablink js-scroll-trigger"
                    spy={true}
                    smooth={true}
                    onClick={this.scrollToProductEle}
                >
                  Products parts & Equipment
                </Link>
              </div>

              <div class="col-sm-3 col-md-3 shopNow fader">
                <img src={BestSellingHoverImage} alt="" class="thumnal-icon" />
                <img src={BestSellingImage} alt="" class="thumnal-icon" />
                <Link
                    className="tablink js-scroll-trigger"
                    spy={true}
                    smooth={true}
                    onClick={this.scrollToBestSellingEle}
                >
                  Best Selling Products
                </Link>
              </div>
              
              <RequestAQuote
                    toggleModal={this.toggleQuoteModal}
                    isOpen={this.state.isQuoteModalOpen}
                    onSubmit={this.props.saveBrochuresDetails}
                    showToast={this.props.showToast}
                    isFreeBrochure={true}
            />
            </div>
            }
        </header>
        
          {/* )}
        </Sticky> */}
       
            </div>
            </Affix>
        </div>
          
      </div>
    );
  }
}

const mapStateToProps = ({ asyncReducer }) => {
    return {
        navMenuData: asyncReducer,
    };
};

const mapDispatchToProps = {
    saveBrochuresDetails: save_brochures_details,
    showToast
};
export default connect(mapStateToProps, mapDispatchToProps)(Banner);
