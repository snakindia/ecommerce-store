import React from 'react';
import { connect } from 'react-redux';
import htmlParse from 'html-react-parser';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

import { get_about_us_details } from '../../actions/pageActions';
import { Sticky } from 'react-sticky';
var scrollToElement = require('scroll-to-element');

class About extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            activeTabID: '',
            curerentTabClass: 'tablink js-scroll-trigger current',
        };
    }

    componentDidMount() {
        this.props.dispatch(get_about_us_details());
    }

    setActiveClass = id => {
        this.setState({
            activeTabID: id,
        });
        this.drawMenu();
    };
  
    scrollToEle(val, offsetVal) {
        scrollToElement('.' + val, {
            offset: - offsetVal,
            duration: 1500
        });
    }
    

  drawMenu() {
    const { abousUsDetails } = this.props;
    let abousUsObj = abousUsDetails.abousUsDetails;
    return (
      <div class="pagewrap bha-tab">
        <div class="container-fluid pl-0 pr-0">
          <div class="row">
            <div class="col-lg-12">
              <ul className="tab-menu">
                {abousUsObj &&
                  Object.keys(abousUsObj).length &&
                  abousUsObj[0].contents.map((item, idx) => {
                    if (this.state.activeTabID == '') {
                      this.state.activeTabID = item.title;
                    }
                    return (
                      <li>
                        <Link
                          activeClass={
                            this.state.activeTabID == item.title ? 'current' : ''
                          }
                          to={idx}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onClick={e => this.setActiveClass(item.title, e)}
                          className={
                            this.state.activeTabID == item.title
                              ? 'tablink js-scroll-trigger current'
                              : 'tablink js-scroll-trigger'
                          }
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { abousUsDetails } = this.props;
    let abousUsObj = abousUsDetails.abousUsDetails;
    return (
      <div>
                <section class="banner-container" style={{ position: 'relative' }}>
                  <div class="banner-about">
                    {abousUsObj && Object.keys(abousUsObj).length > 0 ?
                        
                    <picture>
                      <img
                        src={abousUsObj[0].banner_image}
                        alt="responsive image"
                        class="d-block img-fluid"
                      />
                      <div class="caption"><h1>{abousUsObj[0].banner_title}</h1></div>
                    </picture> : ''
                    }
                    {this.drawMenu()}
                  </div>
                </section>
            
        <div class="content-wrapper pb-0">
          <div class="pagewrap">
            <div class="bgWhite">
              {abousUsObj &&
                Object.keys(abousUsObj).length &&
                abousUsObj[0].contents.map((item, idx) => {
                  if (idx == 0) {
                    return (
                      <div>
                        <section
                          class="pro-equipment-section pagewrap-inner"
                          style={{ background: '#f6f6f6', padding: '0 2rem' }}
                          id={idx}
                        >
                          <div class="container-fluid pt-4 pb-5">
                            <div class="row">
                              <h4 class="heading-h4" id="message">
                                {item.title}
                              </h4>
                              <div class="col-sm-9 col-md-9 pl-0 pr-5">
                                {htmlParse(item.description)}
                              </div>

                              <div class="col-sm-3 col-md-3 pl-0 pr-0">
                                <img
                                  class="img-fluid border-frame"
                                  src={item.url}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </section>
                        <div
                          class="container-fluid w-100 float-left"
                          style={{
                            background: 'rgba(167,14,21,0.4)',
                            height: '1px',
                          }}
                        >
                          <div class="row">
                            <div class="col-lg-12 text-center">
                              <Link
                                className="js-scroll-trigger"
                                onClick={() => this.scrollToEle('ethics', 85)}
                                spy={true}
                                smooth={true}
                              >
                                <i class="fa fa-angle-down text-white seperator"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  if (idx == 1) {
                    return (
                      <div>
                        <section
                          class="pro-equipment-section pagewrap-inner ethics"
                          id={idx}
                        >
                          <div class="container-fluid pb-5">
                            <div class="row">
                              <h4 class="heading-h4 pt-5 pb-0">
                                {item.title}
                              </h4>
                              <div class="float-left w-100">
                                &nbsp;
                              </div>
                              <div class="col-sm-9 col-md-9 pl-0 pr-5">
                                {htmlParse(item.description)}
                              </div>
                              <div class="col-sm-3 col-md-3 pl-0 pr-0">
                                <img
                                  class="img-fluid border-frame"
                                  src={item.url}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </section>
                        <div
                          class="container-fluid w-100 float-left"
                          style={{
                            background: 'rgba(167,14,21,0.4)',
                            height: '1px',
                          }}
                        >
                          <div class="row">
                            <div class="col-lg-12 text-center">
                              <Link
                                className="js-scroll-trigger"
                                onClick={() => this.scrollToEle('mission',85)}
                                spy={true}
                                smooth={true}
                              >
                                <i class="fa fa-angle-down text-white seperator"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  if (idx == 2) {
                    return (
                      <div>
                        <section
                          class="mission-section pagewrap-inner mission"
                          id={idx}
                        >
                          <div class="container-fluid">
                            <div class="row">
                              <h4
                                class="heading-h4 pt-5 pb-0 text-white"
                                id="mission"
                              >
                                {item.title}
                              </h4>
                              <div id="mvsection" class="float-left w-100">
                                &nbsp;
                              </div>
                            </div>
                          </div>
                        </section>

                        <section class="pro-equipment-section pagewrap-inner mission-text pb-5">
                          <div class="container-fluid">
                            <div class="row">
                              <div class="col-lg-12 pl-0">
                                {htmlParse(item.description)}
                              </div>
                            </div>
                          </div>
                        </section>
                        <div
                          class="container-fluid w-100 float-left"
                          style={{
                            background: 'rgba(167,14,21,0.4)',
                            height: '1px',
                          }}
                        >
                          <div class="row">
                            <div class="col-lg-12 text-center">
                              <Link
                                className="js-scroll-trigger"
                                onClick={() => this.scrollToEle('location', 115)}
                                spy={true}
                                smooth={true}
                              >
                                <i class="fa fa-angle-down text-white seperator"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  
                    if (idx == 3) {
                        return (
                          <section class="pro-equipment-section padding-0 pagewrap-inner location"
                            id="3">
                            <div class="container-fluid">
                              <div class="row">
                                <h4 class="heading-h4 p-4 mt-4 text-center">Our Location</h4>
                              </div>
                              <div class="row">
                                <div class="col-lg-12" style={{"padding":"0 2rem 1rem"}}>
                                    <p class="text-left" style={{"font-size":"1rem"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                              </div>
                            </div>

                            <img src={item.url} alt="" class="d-block bha_h_100"  />
                          </section>
                        );
                      }
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ asyncReducer }) => {
  return {
    abousUsDetails: asyncReducer,
    activeTabID: '',
  };
};
export default connect(mapStateToProps)(About);
