import React from 'react';
import { connect } from 'react-redux';
import htmlParse from 'html-react-parser';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

import { get_about_us_details } from '../../actions/pageActions';
import { Sticky } from 'react-sticky';
import scrollToEl from '../../utils/scrollToEl'

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

    setActiveClass = (id,e, el) => {
      e.preventDefault();
      const arr= ['','ethics','mission','location'];
      if(el !==0){
        scrollToEl('.' + arr[el], -110,500)
      }
      
        this.setState({
            activeTabID: id,
        });
        this.drawMenu();
    };
  
    scrollToEle(e,val, offsetVal) {
      e.preventDefault();
      scrollToEl('.' + val, offsetVal, 500)
    }
    

  drawMenu() {
    const { abousUsDetails } = this.props;
    let abousUsObj = abousUsDetails.abousUsDetails;
    return (
      <div className="pagewrap bha-tab">
        <div className="container-fluid pl-0 pr-0">
          <div className="row">
            <div className="col-lg-12">
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
                          // to={idx}
                          // spy={true}
                          // smooth={true}
                          offset={-70}
                          duration={500}
                          onClick={e => this.setActiveClass(item.title, e,idx)}
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
                <section className="banner-container" style={{ position: 'relative' }}>
                  <div className="banner-about">
                    {abousUsObj && Object.keys(abousUsObj).length > 0 ?
                        
                    <picture>
                      <img
                        src={abousUsObj[0].banner_image}
                        alt="responsive image"
                        className="d-block img-fluid"
                      />
                      <div className="caption"><h1>{abousUsObj[0].banner_title}</h1></div>
                    </picture> : ''
                    }
                    {this.drawMenu()}
                  </div>
                </section>
            
        <div className="content-wrapper pb-0">
          <div className="pagewrap">
            <div className="bgWhite">
              {abousUsObj &&
                Object.keys(abousUsObj).length &&
                abousUsObj[0].contents.map((item, idx) => {
                  if (idx == 0) {
                    return (
                      <div>
                        <section
                          className="pro-equipment-section pagewrap-inner"
                          style={{ background: '#f6f6f6', padding: '0 2rem' }}
                          id={idx}
                        >
                          <div className="container-fluid pt-4 pb-5">
                            <div className="row">
                              <h4 className="heading-h4" id="message">
                                {item.title}
                              </h4>
                              <div className="col-sm-9 col-md-9 pl-0 paddingR-3">
                                {htmlParse(item.description)}
                              </div>

                              <div className="col-sm-3 col-md-3 pl-0 pr-0">
                                <img
                                  className="img-fluid border-frame"
                                  src={item.url}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </section>
                        <div
                          className="container-fluid w-100 float-left"
                          style={{
                            background: 'rgba(167,14,21,0.4)',
                            height: '1px',
                          }}
                        >
                          <div className="row">
                            <div className="col-lg-12 text-center horz-division">
                              <Link
                                className="js-scroll-trigger"
                                onClick={(e) => this.scrollToEle(e,'ethics', -110)}
                                // spy={true}
                                // smooth={true}
                              >
                                <i className="fa fa-angle-down text-white seperator"></i>
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
                          className="pro-equipment-section pagewrap-inner ethics"
                          id={idx}
                        >
                          <div className="container-fluid pb-5">
                            <div className="row">
                              <h4 className="heading-h4 pt-5 pb-0">
                                {item.title}
                              </h4>
                              <div className="float-left w-100">
                                &nbsp;
                              </div>
                              <div className="col-sm-9 col-md-9 pl-0 paddingR-3">
                                {htmlParse(item.description)}
                              </div>
                              <div className="col-sm-3 col-md-3 pl-0 pr-0">
                                <img
                                  className="img-fluid border-frame"
                                  src={item.url}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </section>
                        <div
                          className="container-fluid w-100 float-left"
                          style={{
                            background: 'rgba(167,14,21,0.4)',
                            height: '1px',
                          }}
                        >
                          <div className="row">
                            <div className="col-lg-12 text-center horz-division">
                              <Link
                                className="js-scroll-trigger"
                                onClick={(e) => this.scrollToEle(e,'mission',-110)}
                                // spy={true}
                                // smooth={true}
                              >
                                <i className="fa fa-angle-down text-white seperator"></i>
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
                          className="mission-section pagewrap-inner mission"
                          id={idx}
                        >
                          <div className="container-fluid">
                            <div className="row">
                              <h4
                                className="heading-h4 pt-5 pb-0 text-white"
                                id="mission"
                              >
                                {item.title}
                              </h4>
                              <div id="mvsection" className="float-left w-100">
                                &nbsp;
                              </div>
                            </div>
                          </div>
                        </section>

                        <section className="pro-equipment-section pagewrap-inner mission-text pb-5">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-lg-12 pl-0">
                                {htmlParse(item.description)}
                              </div>
                            </div>
                          </div>
                        </section>
                        <div
                          className="container-fluid w-100 float-left"
                          style={{
                            background: 'rgba(167,14,21,0.4)',
                            height: '1px',
                          }}
                        >
                          <div className="row">
                            <div className="col-lg-12 text-center horz-division">
                              <Link
                                className="js-scroll-trigger"
                                onClick={(e) => this.scrollToEle(e,'location', -110)}
                                // spy={true}
                                // smooth={true}
                              >
                                <i className="fa fa-angle-down text-white seperator"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  
                    if (idx == 3) {
                        return (
                          <section className="pro-equipment-section padding-0 pagewrap-inner location"
                            id="3">
                            <div className="container-fluid">
                              <div className="row">
                                <h4 className="heading-h4 p-4 mt-4 text-center">Our Location</h4>
                              </div>
                              <div className="row">
                                <div className="col-lg-12" style={{"padding":"0 2rem 1rem"}}>
                                    <p className="text-left" style={{"font-size":"1rem"}}> {htmlParse(item.description)}</p>
                                </div>
                              </div>
                            </div>

                            <img src={item.url} alt="" className="d-block bha_h_100"  />
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
