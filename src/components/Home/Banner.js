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

import { API_URL } from '../../constants/appConstant';
import axios from 'axios';
import { fetch_dynamic_menus } from '../../actions/fetchActions';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: false,
    };
  }

  componentDidMount() {
    this.props.dispatch(fetch_dynamic_menus());
  }

  render() {
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
                            href={item.path}
                            className="btn bha-btn-primary mt-4 pl-pr"
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
        
             <div class="bottom-navigation">
          <div class="container">
        
        <Sticky topOffset={280}>
          {({
            style,

          }) => (
            <header style={style} top={280}>
             {
            <div class="row justify-content-center">
              <div class="col-sm-3 col-md-3 shopNow fader">
                <img src={CompanyHoverImage} alt="" class="thumnal-icon" />
                <img src={CompanyImage} alt="" class="thumnal-icon" />
                <Link
                  className="tablink js-scroll-trigger"
                  to="company"
                  spy={true}
                  smooth={true}
                >
                  Companies using our products
                </Link>
              </div>

              <div class="col-sm-3 col-md-3 request-Quote fader pr-0">
                <img src={BrandHoverImage} alt="" class="thumnal-icon" />
                <img src={BrandImage} alt="" class="thumnal-icon" />
                <Link
                  className="tablink js-scroll-trigger"
                  to="brand"
                  spy={true}
                  smooth={true}
                >
                  Premium OEM Brands
                </Link>
              </div>

              <div class="col-sm-3 col-md-3 request-Quote fader pl-0">
                <img src={EquipmentHoverImage} alt="" class="thumnal-icon" />
                <img src={EquipmentImage} alt="" class="thumnal-icon" />
                <Link
                  className="tablink js-scroll-trigger"
                  to="product"
                  spy={true}
                  smooth={true}
                >
                  Products parts & Equipment
                </Link>
              </div>

              <div class="col-sm-3 col-md-3 shopNow fader">
                <img src={BestSellingHoverImage} alt="" class="thumnal-icon" />
                <img src={BestSellingImage} alt="" class="thumnal-icon" />
                <Link
                  className="tablink js-scroll-trigger"
                  to="bestSelling"
                  spy={true}
                  smooth={true}
                >
                  Best Selling Products
                </Link>
              </div>
            </div>
            }
        </header>
          )}
        </Sticky>
       
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
export default connect(mapStateToProps)(Banner);
