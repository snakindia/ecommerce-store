import React from 'react';
import { connect } from 'react-redux';
import htmlParse from 'html-react-parser';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
//import FreeBrochure from '../../components/common/FreeBrochure';
import team from '../../assets/images/team.jpg';
import picOne from '../../assets/images/pexels-photo.png';
import picTwo from '../../assets/images/img-profile.png';
import picThree from '../../assets/images/pexels-photo.jpeg';
import teamIcon from '../../assets/icon/teamwork.svg';
import performanceIcon from '../../assets/icon/performance.svg';
import communityIcon from '../../assets/icon/community.svg';
import respectIcon from '../../assets/icon/respect.svg';
import handShakeIcon from '../../assets/icon/handshake.svg';
import innovationIcon from '../../assets/icon/innovation.svg';
import leaderIcon from '../../assets/icon/leader.svg';
import aboutBanner from '../../assets/images/DSC_7731.jpg';
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
                  abousUsObj.map((item, idx) => {
                    if (this.state.activeTabID == '') {
                      this.state.activeTabID = item.id;
                    }
                    return (
                      <li>
                        <Link
                          activeClass={
                            this.state.activeTabID == item.id ? 'current' : ''
                          }
                          to={idx}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onClick={e => this.setActiveClass(item.id, e)}
                          className={
                            this.state.activeTabID == item.id
                              ? 'tablink js-scroll-trigger current'
                              : 'tablink js-scroll-trigger'
                          }
                        >
                          {item.meta_title}
                        </Link>
                      </li>
                    );
                  })}

                <li>
                  <Link
                    activeClass=""
                    to="values"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={e => this.setActiveClass('values', e)}
                    className={
                      this.state.activeTabID == 'values'
                        ? 'tablink js-scroll-trigger current'
                        : 'tablink js-scroll-trigger'
                    }
                  >
                    Our Values
                  </Link>
                </li>
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
            <picture>
              <img
                src={team}
                alt="responsive image"
                class="d-block img-fluid"
              />
            </picture>
            {/*
                        <Sticky topOffset={525}>
                            {({ style }) => (
                                <div style={{zIndex:"999", ...style }} >

                                </div>
                            )}
                        </Sticky>*/}
            {this.drawMenu()}
          </div>
        </section>
        <div class="content-wrapper pb-0">
          <div class="pagewrap">
            <div class="bgWhite">
              {abousUsObj &&
                Object.keys(abousUsObj).length &&
                abousUsObj.map((item, idx) => {
                  if (idx == 0) {
                    return (
                      <div>
                        <section
                          class="pro-equipment-section pagewrap-inner"
                          style={{ background: '#f6f6f6' }}
                          id={idx}
                        >
                          <div class="container-fluid">
                            <div class="row">
                              <h4 class="heading-h4" id="message">
                                {item.meta_title}
                              </h4>
                              <div class="col-sm-9 col-md-9 pl-0" style={{textAlign:'left'}}>
                                {htmlParse(item.content)}
                              </div>

                              <div class="col-sm-3 col-md-3 pl-0 pr-0">
                                <img
                                  class="img-fluid border-frame"
                                  src={picOne}
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
                                className="tablink js-scroll-trigger"
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
                                {item.meta_title}
                              </h4>
                              <div id="profile" class="float-left w-100">
                                &nbsp;
                              </div>
                              <div class="col-sm-9 col-md-9 pl-0">
                                {htmlParse(item.content)}
                              </div>
                              <div class="col-sm-3 col-md-3 pl-0 pr-2">
                                <img
                                  class="img-fluid border-frame"
                                  src={picTwo}
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
                                className="tablink js-scroll-trigger"
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
                                {item.meta_title}
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
                                {htmlParse(item.content)}
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
                                className="tablink js-scroll-trigger"
                                to="values"
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
                })}

              <section
                class="pro-equipment-section pb-4 pagewrap-inner"
                id="values"
              >
                <div class="container-fluid pl-0 pr-0">
                  <div className="row">
                    <h4 class="heading-h4 pt-5 pb-1 pl-3 pr-3">Our Values</h4>
                    <div id="Values" class="float-left w-100">
                      &nbsp;
                    </div>
                    <div class="col-sm-4 col-md-4 mb-5">
                      <h6>
                        <img
                          src={handShakeIcon}
                          alt=""
                          width={50}
                          className="mr-3"
                        />
                        Integrity
                      </h6>
                      <p className="pr-4 block-ellipsis">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </div>
                    <div class="col-sm-4 col-md-4 mb-5">
                      <h6>
                        <img
                          src={respectIcon}
                          alt=""
                          width={50}
                          className="mr-3"
                        />
                        Respect for People
                      </h6>
                      <p className="pr-4 block-ellipsis">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </div>
                    <div class="col-sm-4 col-md-4 mb-5">
                      <h6>
                        <img
                          src={teamIcon}
                          alt=""
                          width={50}
                          className="mr-3"
                        />
                        Teamwork
                      </h6>
                      <p className="pr-4 block-ellipsis">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </div>
                    <div class="col-sm-4 col-md-4 mb-5">
                      <h6>
                        <img
                          src={performanceIcon}
                          alt=""
                          width={50}
                          className="mr-3"
                        />
                        Performance
                      </h6>
                      <p className="pr-4 block-ellipsis">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </div>
                    <div class="col-sm-4 col-md-4">
                      <h6>
                        <img
                          src={performanceIcon}
                          alt=""
                          width={50}
                          className="mr-3"
                        />
                        Quality
                      </h6>
                      <p className="pr-4 block-ellipsis">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </div>
                   
                    <div class="col-sm-4 col-md-4">
                      <h6>
                        <img
                          src={innovationIcon}
                          alt=""
                          width={50}
                          className="mr-3"
                        />
                        Inovation
                      </h6>
                      <p className="pr-4 block-ellipsis">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </div>
					 <div class="col-sm-4 col-md-4">
                      <h6>
                        <img
                          src={communityIcon}
                          alt=""
                          width={50}
                          className="mr-3"
                        />
                        Community
                      </h6>
                      <p className="pr-4 block-ellipsis">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </div>
                    <div class="col-sm-4 col-md-4">
                      <h6>
                        <img
                          src={leaderIcon}
                          alt=""
                          width={50}
                          className="mr-3"
                        />
                        Leadership
                      </h6>
                      <p className="pr-4 block-ellipsis">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
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
