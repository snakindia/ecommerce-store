import React, { Component } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import InquiryNotification from './common/InquiryNotification';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import { Link } from 'react-router-dom';
import Facebook from '../assets/images/facebook.png';
import Linkedin from '../assets/images/linkedin.png';
import Youtube from '../assets/images/youtube.png';
import Pintrest from '../assets/images/pintrest.png';
import Footerlogo from '../assets/images/footer-logo.png';
import FooterCaller from '../assets/images/call-xs.png';
import Chat from '../assets/icon/chat.svg';
import { fetch_dynamic_menus } from '../actions/fetchActions';
import { save_brochures_details } from '../actions/freeBrochuresActions';
import { showToast } from './Notification/notification.actions';
import { TOAST_TYPE } from './Notification/action.constants';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brochureData: {},
      year: new Date().getFullYear(),
    };
  }

  saveHandler(data) {
    data.type = 'Representative';
    this.props.dispatch(save_brochures_details(data));
    //resetForm()
  }

  componentDidMount() {
    showToast(
      'Please click on link sent in your mailbox for verification',
      TOAST_TYPE.SUCCESS
    );
    this.props.dispatch(fetch_dynamic_menus());
  }
  render() {
    this.state.brochureData = this.props.freeBrochuresUserDetail;
    const { navMenuData, brochureData } = this.props;
    const { menuData } = navMenuData;

    const {
      footer_menu_1_title,
      footer_menu_2_title,
      footer_menu_3_title,
      footer_menu_4_title,
      footer_menu_5_title,
      footer_menu_1_items,
      footer_menu_2_items,
      footer_menu_3_items,
      footer_menu_4_items,
      footer_menu_5_items,
      footer_social,
    } = menuData;
    return (
      <div>
        <div class="chat-button">
          <a href="/">
            <img src={Chat} class="mr-2" alt="" width="30" />
          </a>
        </div>
        {this.props.brochureData && this.props.brochureData == true && (
          <InquiryNotification isOpen={this.props.brochureData} />
        )}
        <MDBFooter className="footer">
          <div class="footer-section">
            <div class="container pl-0 pr-0">
              <div class="footer-main pt-5">
                <div class="row flex-column-reverse flex-md-row">
                  <MDBCol md="8">
                    <MDBRow>
                      <MDBCol md="4">
                        <h3 className="title">{footer_menu_1_title}</h3>
                        <ul class="foote-link">
                          {footer_menu_1_items &&
                            footer_menu_1_items.map((item, i) => {
                              return (
                                <li key={i + 'aa'}>
                                  <Link to={item.url}>{item.text}</Link>
                                </li>
                              );
                            })}
                        </ul>
                        <div class="breathing">
                          <h3>{footer_menu_4_title}</h3>
                          <ul class="foote-link">
                            {footer_menu_4_items &&
                              footer_menu_4_items.map((item, i) => {
                                return (
                                  <li key={i + 'bb'}>
                                    <Link to={item.url}>{item.text}</Link>
                                  </li>
                                );
                              })}
                          </ul>
                        </div>
                      </MDBCol>
                      <MDBCol md="4">
                        <h3 className="title">{footer_menu_2_title}</h3>
                        <ul class="foote-link">
                          {footer_menu_2_items &&
                            footer_menu_2_items.map((item, i) => {
                              return (
                                <li key={i + Math.random()}>
                                  <Link to={item.url}>{item.text}</Link>
                                </li>
                              );
                            })}
                        </ul>
                      </MDBCol>
                      <MDBCol md="4">
                        <h3 className="title">{footer_menu_3_title}</h3>
                        <ul class="foote-link">
                          {footer_menu_3_items &&
                            footer_menu_3_items.map((item, i) => {
                              return (
                                <li key={i + 'avf'}>
                                  <Link to={item.url}>{item.text}</Link>
                                </li>
                              );
                            })}
                        </ul>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="mt-4">
                      <MDBCol md="4">
                        <h3 className="title">{footer_menu_5_title}</h3>
                        <ul class="foote-link">
                          {footer_menu_5_items &&
                            footer_menu_5_items.map((item, i) => {
                              return (
                                <li key={i + 'yj'}>
                                  <Link to={item.url}>{item.text}</Link>
                                </li>
                              );
                            })}
                        </ul>
                      </MDBCol>
                      <MDBCol md="4">
                        <h3 className="title">Quick links</h3>
                        <ul class="foote-link">
                          <li>
                            <a href="/">Projects</a>
                          </li>
                          <li>
                            <a href="/">Industries</a>
                          </li>
                          <li>
                            <a href="/">Shop</a>
                          </li>
                          <li>
                            <a href="/">Request a Quote</a>
                          </li>
                        </ul>
                      </MDBCol>
                      <MDBCol md="4"></MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol md="4">
                    <div className="broucher-wrapper">
                      <div className="broucher-inner">
                        <h2 className="bha_heading_2 font-weight-bold mb-3">
                          APPLY FOR REPRESENTATION
                        </h2>
                        <Formik
                          initialValues={{
                            name: '',
                            company: '',
                            email: '',
                            phone: '',
                          }}
                          validate={values => {
                            const errors = {};
                            if (!values.name) {
                              errors.name = 'Name is required';
                            } else if (!/^[a-zA-Z ]*$/i.test(values.name)) {
                              errors.name =
                                'Please enter alphabet characters only';
                            }

                            if (!values.phone) {
                              errors.phone = 'Phone number is required';
                            } else if (
                              !/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i.test(
                                values.phone
                              )
                            ) {
                              errors.phone = 'Please enter valid phone number';
                            }

                            if (!values.company) {
                              errors.company = 'Company name is required';
                            } else if (!/^[a-zA-Z ]*$/i.test(values.company)) {
                              errors.company =
                                'Please enter alphabet characters only';
                            }

                            if (!values.email) {
                              errors.email = 'Email address is required';
                            } else if (
                              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                              )
                            ) {
                              errors.email = 'Invalid email address';
                            }

                            return errors;
                          }}
                          onSubmit={(values, { setSubmitting, resetForm }) => {
                            this.saveHandler(values);
                            //        resetForm()
                          }}
                        >
                          {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                          }) => (
                            <form onSubmit={handleSubmit}>
                              <MDBRow>
                                <MDBCol md="12">
                                  <div class="form-group">
                                    <label>Name *</label>
                                    <input
                                      type="text"
                                      id="defaultFormCardNameEx"
                                      className="form-control"
                                      name="name"
                                      value={values.name}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="Enter Name"
                                    />
                                    <span className="errorMsg">
                                      {errors.name &&
                                        touched.name &&
                                        errors.name}
                                    </span>
                                  </div>
                                </MDBCol>
                              </MDBRow>

                              <MDBRow>
                                <MDBCol lg="12">
                                  <div class="form-group">
                                    <label>Company *</label>
                                    <input
                                      type="text"
                                      id="defaultFormCardNameEx"
                                      className="form-control"
                                      placeholder="Enter Company Name"
                                      name="company"
                                      value={values.company}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                    />
                                    <span className="errorMsg">
                                      {errors.company &&
                                        touched.company &&
                                        errors.company}
                                    </span>
                                  </div>
                                </MDBCol>
                              </MDBRow>

                              <MDBRow>
                                <MDBCol md="12">
                                  <div class="form-group">
                                    <label>Phone *</label>
                                    <input
                                      type="text"
                                      id="defaultFormCardNameEx"
                                      className="form-control"
                                      placeholder="Enter Phone"
                                      value={values.phone}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      name="phone"
                                    />
                                    <span className="errorMsg">
                                      {errors.phone &&
                                        touched.phone &&
                                        errors.phone}
                                    </span>
                                  </div>
                                </MDBCol>
                              </MDBRow>

                              <MDBRow>
                                <MDBCol lg="12">
                                  <div class="form-group">
                                    <label>Email *</label>
                                    <input
                                      type="text"
                                      id="defaultFormCardNameEx"
                                      className="form-control"
                                      name="email"
                                      value={values.email}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="Enter Email Address"
                                    />
                                    <span className="errorMsg">
                                      {errors.email &&
                                        touched.email &&
                                        errors.email}
                                    </span>
                                  </div>
                                </MDBCol>
                              </MDBRow>

                              <div class="mt-2">
                                <button
                                  type="button"
                                  onClick={() => {
                                    handleSubmit();
                                  }}
                                  class="btn bha-btn-primary w-100"
                                >
                                  Apply
                                </button>
                              </div>
                              {this.props.brochureData &&
                                Object.keys(this.props.brochureData).length >
                                  0 &&
                                this.props.brochureData.status == true && (
                                  <div
                                    style={{
                                      color: 'green',
                                      'background-color': '#fff',
                                    }}
                                  >
                                    Data saved successfully
                                  </div>
                                )}
                            </form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </MDBCol>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div class="container pl-0 pr-0">
                <MDBRow>
                  <MDBCol lg="8" style={{ position: 'relative' }}>
                    <img
                      class="img-fluid callerLady"
                      src={FooterCaller}
                      alt=""
                    />
                    <span class="call-us">CALL US: (888) 286-8708</span>
                  </MDBCol>
                  <MDBCol md="4" sm="4" xs="12" className="text-right">
                    <div class="socialLink">
                      <span class="float-left">Follow us:</span>
                      <a href="/">
                        <img src={Facebook} alt="Facebook" />
                      </a>
                      <a href="/">
                        <img src={Linkedin} alt="Linkedin" />
                      </a>
                      <a href="/">
                        <img src={Youtube} alt="Youtube" />
                      </a>
                      <a href="/">
                        <img src={Pintrest} alt="Pintrest" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
            </div>

            <div className="copyright">
              <MDBContainer fluid>
                <div class="container pl-0 pr-0">
                  <MDBRow>
                    <MDBCol md="9" sm="9" xs="12">
                      <p>
                        COPYRIGHT © {this.state.year} Baghouse. The following
                        are trademarks for one or more Baghouse power tools,
                        accessories, anchors and concrete adhesives: The yellow
                        and black color scheme; the the array of pyramids on the
                        handgrip; the kit box configuration; and the array of
                        lozenge-shaped humps on the surface of the tool.
                      </p>
                      <ul class="footer-middle-list">
                        <li>
                          <a href="/">Updated Privacy Policy</a>
                          <span>|</span>
                        </li>
                        <li>
                          <a href="/">Terms of Use</a>
                          <span>|</span>
                        </li>
                        <li>
                          <a href="/">Safety Notices and Recalls</a>
                          <span>|</span>
                        </li>
                        <li>
                          <a href="/">Travel Safety with Cordless Tools</a>
                          <span>|</span>
                        </li>
                        <li>
                          <a href="/">BAGHOUSE Patent Information</a>
                          <span>|</span>
                        </li>
                        <li>
                          <a href="/">Shop Safe</a>
                          <span>|</span>
                        </li>
                      </ul>
                    </MDBCol>
                    <MDBCol
                      md="3"
                      sm="3"
                      xs="12"
                      className="float-right-sm pt-3 pr-4"
                    >
                      <img src={Footerlogo} alt="" width="240" />
                    </MDBCol>
                  </MDBRow>
                </div>
              </MDBContainer>
            </div>
          </div>
        </MDBFooter>
      </div>
    );
  }
}

const mapStateToProps = ({ asyncReducer }) => {
  return {
    navMenuData: asyncReducer,
    brochureData: asyncReducer.freeBrochuresUserDetail,
  };
};
export default connect(mapStateToProps)(Footer);
