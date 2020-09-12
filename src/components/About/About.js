import React from 'react';
import { connect } from 'react-redux';
import htmlParse from 'html-react-parser';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

import { get_about_us_details } from '../../actions/pageActions';
import { Sticky } from 'react-sticky';

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
                          style={{ background: '#f6f6f6' }}
                          id={idx}
                        >
                          <div class="container-fluid p-4">
                            <div class="row">
                              <h4 class="heading-h4" id="message">
                                {item.title}
                              </h4>
                              <div class="col-sm-9 col-md-9 pl-0">
                                {htmlParse(item.description)}
                              </div>

                              <div class="col-sm-3 col-md-3 pl-0 pr-0">
                                <img
                                  class="img-fluid border-frame"
                                  src={item.url}
                                  alt=""
                                />
                                <div class="img-caption">
                                    <div class="bha-name">Lorem ipsum dolor sit amet</div>
                                    <div class="bha-designation">Chief Executive Officer</div>
                                </div>
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
                                to="1"
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
                          class="pro-equipment-section pagewrap-inner"
                          id={idx}
                        >
                          <div class="container-fluid">
                            <div class="row">
                              <h4 class="heading-h4 pt-5 pb-0">
                                {item.title}
                              </h4>
                              <div id="profile" class="float-left w-100">
                                &nbsp;
                              </div>
                              <div class="col-sm-9 col-md-9 pl-0">
                                {htmlParse(item.description)}
                              </div>
                              <div class="col-sm-3 col-md-3 pl-0 pr-2">
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
                                to="2"
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
                          class="mission-section pagewrap-inner"
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

                        <section class="pro-equipment-section pagewrap-inner mission-text pb-4">
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
                                to="3"
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
                          <section
                            class="pro-equipment-section pb-4 pagewrap-inner"
                            id="3"
                          >
                            <div>
                                <img src={item.url} alt="" class="d-block bha_h_100" style={{position: "relative"}} />
                            </div>
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
