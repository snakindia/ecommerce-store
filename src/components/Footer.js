import React, { Component } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import InquiryNotification from './common/InquiryNotification';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import messages from '../utils/messages';
import Input from './common/Input';
import Error from './common/Error';
import { Link } from 'react-router-dom';
import Facebook from '../assets/images/facebook.png';
import Linkedin from '../assets/images/linkedin.png';
import Twitter from '../assets/images/twitter.png';
import Pintrest from '../assets/images/pintrest.png';
import Footerlogo from '../assets/images/footer-logo.png';
import FooterCaller from '../assets/images/call-xs.png';
import Chat from '../assets/icon/chat.svg';
import { fetch_dynamic_menus } from '../actions/fetchActions';
import { save_brochures_details,flushData } from '../actions/freeBrochuresActions';
import { showToast } from './Notification/notification.actions';
import { TOAST_TYPE } from './Notification/action.constants';
import Loader from './Loader/Loader'

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
    this.props.saveBrochuresDetails(data);
  }

  componentDidMount() {
    this.props.fetch_dynamic_menus();
  }

  render() {
    this.state.brochureData = this.props.freeBrochuresUserDetail;
    const { navMenuData, brochureData ,contactFormType} = this.props;
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
        footer_social
    } = menuData;
    if(contactFormType == 'footer' && brochureData===true){
      this.props.showToast(messages.footer, TOAST_TYPE.SUCCESS);
      this.props.flushData()
    } else if (contactFormType == 'footer' && brochureData ===false) {
      this.props.showToast(messages.footerError, TOAST_TYPE.ERROR);
      this.props.flushData()
    }
    return (
      <div>
        {this.props.loading  ? <Loader />:null}
        <div className="chat-button">
          <a href="/">
            <img src={Chat} className="mr-2" alt="" width="30" />
          </a>
        </div>
        <MDBFooter className="footer" id="footer">
          <div className="footer-section">
            <div className="pagewrap">
              <div className="footer-main pt-5">
                <div className="row flex-column-reverse flex-md-row pl-0">
                  <MDBCol md="8">
                    <MDBRow>
                      <MDBCol md="4">
                        <h3 className="title">{footer_menu_1_title}</h3>
                        <ul className="foote-link">
                          {footer_menu_1_items &&
                            footer_menu_1_items.map((item, i) => {
                              return (
                                <li key={i + 'aa'}>
                                  <Link to={item.url}>{item.text}</Link>
                                </li>
                              );
                            })}
                        </ul>
                        <div className="breathing">
                          <h3 className="title">{footer_menu_4_title}</h3>
                          <ul className="foote-link">
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
                        <ul className="foote-link">
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
                        <ul className="foote-link">
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
                        <ul className="foote-link">
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
                            }
                            //  else if (!/^[a-zA-Z ]*$/i.test(values.name)) {
                            //   errors.name =
                            //     'Please enter alphabet characters only';
                            // }

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
                            }
                            //  else if (!/^[a-zA-Z ]*$/i.test(values.company)) {
                            //   errors.company =
                            //     'Please enter alphabet characters only';
                            // }

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
                            setSubmitting(true);
                            
                            this.saveHandler({...values,contactFormType:'footer'} );
                            resetForm()
                            //this.props.showToast("Thanks you for filling out your information! We are thrilling to hear from you. Our inbox can't wait to get your messages, so talk to us any time you like. Cheers!", TOAST_TYPE.SUCCESS);
                            //this.props.showToast(messages.footer, TOAST_TYPE.SUCCESS);
                           
                           
                            // if(this.props.brochureData && this.props.brochureData.status==true){
                            //   resetForm()
                            // }
                           
                          }}
                        >
                          {(formik) => (
                              <form onSubmit={formik.handleSubmit}>
                                <MDBRow>
                                  <MDBCol md="12">
                                    <div className="form-group">
                                      <label>Name *</label>
                                      <Input
                                        allow="special"
                                        length={50}
                                        formik={formik}
                                        type="text"
                                        id="defaultFormCardNameEx"
                                        className="form-control"
                                        name="name"
                                        placeholder="Enter Name"
                                        
                                      />
                                      {/* <span className="errorMsg">
                                        {errors.name &&
                                          touched.name &&
                                          errors.name}
                                      </span> */}
                                    </div>
                                  </MDBCol>
                                </MDBRow>

                                <MDBRow>
                                  <MDBCol lg="12">
                                    <div className="form-group">
                                      <label>Company *</label>
                                      <Input
                                        allow="special"
                                        length={50}
                                        type="text"
                                        id="defaultFormCardNameEx"
                                        className="form-control"
                                        placeholder="Enter Company Name"
                                        name="company"
                                       
                                        formik={formik}
                                      />
                                      {/* <span className="errorMsg">
                                        {errors.company &&
                                          touched.company &&
                                          errors.company}
                                      </span> */}
                                    </div>
                                  </MDBCol>
                                </MDBRow>

                                <MDBRow>
                                  <MDBCol md="12">
                                    <div className="form-group">
                                      <label>Phone *</label>
                                      <Input
                                      allow="numeric"
                                      length={10}
                                        type="text"
                                        id="defaultFormCardNameEx"
                                        className="form-control"
                                        placeholder="Enter Phone"
                                        
                                        name="phone"
                                        formik={formik}
                                      />
                                      {/* <span className="errorMsg">
                                        {errors.phone &&
                                          touched.phone &&
                                          errors.phone}
                                      </span> */}
                                    </div>
                                  </MDBCol>
                                </MDBRow>

                                <MDBRow>
                                  <MDBCol lg="12">
                                    <div className="form-group">
                                      <label>Email *</label>
                                      <Input
                                      allow="email"
                                      length={50}
                                        type="text"
                                        id="defaultFormCardNameEx"
                                        className="form-control"
                                        name="email"
                                        
                                        formik={formik}
                                        placeholder="Enter Email Address"
                                      />
                                      {/* <span className="errorMsg">
                                        {errors.email &&
                                          touched.email &&
                                          errors.email}
                                      </span> */}
                                    </div>
                                  </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                  <MDBCol lg="12">
                                      <Error formik={formik} el={['name','company','phone','email']} />
                                   </MDBCol>
                                </MDBRow>

                                <div className="mt-2">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      formik.handleSubmit();
                                    }}
                                    className="btn bha-btn-primary w-100"
                                  >
                                    Apply
                                </button>
                                </div>
                                {/* {this.props.brochureData &&
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
                                  )} */}
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
              <div className="pagewrap">
              <div className="container-fluid pl-0 pr-0">
                <MDBRow>
                  <MDBCol sm="7" md="7" className="pl-0 pr-0" style={{ position: 'relative' }}>
                    <img
                      className="img-fluid avtar"
                      src={FooterCaller}
                      alt=""
                    />
                    <span className="call-us">CALL US: (888) 286-8708</span>
                  </MDBCol>
                  <MDBCol md="5" sm="5" xs="12">
                    <div className="socialLink">
                    <span>Follow us:</span>
                    {
                        footer_social && Object.keys(footer_social).length > 0 &&
                        footer_social.map((item, idx) => { 
                            if (item.type == 'facebook') {
                                return (
                                    <a target="_blank" href={item.url} key={`${item.url}${idx}`}>
                                        <img src={Facebook} alt="Facebook" />
                                    </a>
                                )
                            }
                            
                            if (item.type == 'twitter') {
                                return (
                                    <a target="_blank" href={item.url} key={`${item.url}${idx}`}>
                                        <img src={Twitter} alt="Facebook" />
                                    </a>
                                )
                            }
                            
                            if (item.type == 'Linkedln') {
                                return (
                                    <a target="_blank" href={item.url} key={`${item.url}${idx}`}>
                                        <img  src={Linkedin} alt="Facebook" />
                                    </a>
                                )
                            }
                            
                            
                            
                        })
                                                    
                    }
                  
                    </div>
                  </MDBCol>
                </MDBRow>
                </div>
              </div>
            </div>

            <div className="copyright">
              <div className="pagewrap">
                <MDBContainer fluid>
                  
                    <MDBRow>
                      <MDBCol md="9" sm="9" xs="12" className="pl-0">
                        <p>
                          COPYRIGHT © {this.state.year} Baghouse. The following
                        are trademarks for one or more Baghouse power tools,
                        accessories, anchors and concrete adhesives.
                      </p>
                        <ul className="footer-middle-list">
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
                        className="text-sm-right pl-0 pr-0"
                      >
                        <img className="img-fluid" src={Footerlogo} alt="" />
                      </MDBCol>
                    </MDBRow>
                  
                </MDBContainer>
              </div>
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
    contactFormType: asyncReducer.contactFormType,
    brochureData: asyncReducer.freeBrochuresUserDetail,
    loading: asyncReducer.freeBrochuresUserDetailLoading
  };
};

const mapDispatchToProps = {
  saveBrochuresDetails: data => save_brochures_details(data),
  showToast: data => showToast(data),
  flushData:()=> flushData(),
  fetch_dynamic_menus: fetch_dynamic_menus,
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
