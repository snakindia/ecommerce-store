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
import { save_brochures_details } from '../../actions/freeBrochuresActions';
import RequestAQuote from './../RequestAQuote/RequestAQuote';
import { showToast } from './../Notification/notification.actions';
import scrollToEl from '../../utils/scrollToEl'

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
        autoplay: true,
        affix:false,
        isQuoteModalOpen: false
    };
  }

  
    
    scrollTo=(e, el)=> {
      e.preventDefault()
      scrollToEl(el, -105, 1000)
       
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
        <div className="banner-container" style={{"position":"relative"}}>
          <div id="carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
              <RBCarousel
                autoplay={this.state.autoplay}
                pauseOnVisibility={true}
                slideshowSpeed={5000}
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
          <div class='bottom-navigation affixed'>
           
          <div className="container">
        
            <div className="row justify-content-center">
              <div className="col-sm-3 col-md-3 shopNow fader" >
                <img src={CompanyHoverImage} alt="" className="thumnal-icon" />
                <img src={CompanyImage} alt="" className="thumnal-icon" />
                <Link
                    className="tablink js-scroll-trigger"
                    // spy={true}
                    // smooth={true}
                    // to="company"
                    onClick={e=>this.scrollTo(e,'#company')}
                >
                  Companies using our products
                </Link>
              </div>

              <div className="col-sm-3 col-md-3 request-Quote fader pr-0" 
              //onClick={this.scrollToBrandsEle}
              >
                <img src={BrandHoverImage} alt="" className="thumnal-icon" />
                <img src={BrandImage} alt="" className="thumnal-icon" />
                <Link
                  // to="brand"
                  className="tablink js-scroll-trigger"
                  onClick={e=>this.scrollTo(e,'#brand')}
                >
                  Premium OEM & Brands
                </Link>
              </div>

              <div className="col-sm-3 col-md-3 request-Quote fader pl-3">
                <img src={EquipmentHoverImage} alt="" className="thumnal-icon" />
                <img src={EquipmentImage} alt="" className="thumnal-icon" />
                <Link
                    className="tablink js-scroll-trigger"
                    // spy={true}
                    // smooth={true}
                    // to="product"
                    onClick={e=>this.scrollTo(e,'#product')}
                >
                  Products parts & Equipment
                </Link>
              </div>

              {/*<div className="col-sm-3 col-md-3 shopNow fader"  >
                <img src={BestSellingHoverImage} alt="" className="thumnal-icon" />
                <img src={BestSellingImage} alt="" className="thumnal-icon" />
                <Link
                    className="tablink js-scroll-trigger"
                    // spy={true}
                    // smooth={true}
                    // to="bestSelling"
                    onClick={e=>this.scrollTo(e,'#bestSelling')}
                >
                  Best Selling Products
                </Link>
              </div>*/}
              
              <RequestAQuote
                    toggleModal={this.toggleQuoteModal}
                    isOpen={this.state.isQuoteModalOpen}
                    onSubmit={this.props.saveBrochuresDetails}
                    showToast={this.props.showToast}
                    isFreeBrochure={true}
            />
            </div>
           
            </div>
        </div>
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
