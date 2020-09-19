import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from 'mdbreact';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Cart from '../assets/icon/cart.svg';
import Profile from '../assets/icon/profile.svg';
import Globe from '../assets/icon/globe.svg';
import { Formik } from 'formik';
import base64 from 'buffer';
import { setUserSession } from '../utils/Common';
import { API_AJAX_URL, API_URL } from '../constants/appConstant';
import parseHtml from 'react-html-parser';
import { POST } from '../services/httpService';
import GoogleTranslator from './common/GoogleTranslator';

import {
  getAuthToken,
  removeAuthDetails,
  setAuthDetails,
} from '../services/authService';
import { signInUrl } from '../constants/urls';
import { getUserDetail, signOutUser } from '../actions/authActions';
//import CookieHandler from '../utils/cookieHandler.js';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal4: false,
      modal5: false,
      fields: {},
      errors: {},
      loginError: null,
    };
    this.ref =React.createRef(null);
  }

  componentDidMount() {
    this.props.getUserDetail(getAuthToken());
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr;
    this.setState({
      modal5: false,
      modal6: false,
      loginError: null,
      showLanguage:undefined
    });
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  displaySignupContent() {
    const pageDetails = this.props.page_details;
    return (
      <div>
        {pageDetails &&
          Object.keys(pageDetails).length &&
          pageDetails.map(item =>
            item.slug == '/sign-up' ? (
              <small>{parseHtml(item.content)}</small>
            ) : (
              ''
            )
          )}
      </div>
    );
  }

 showLanguage =()=>{
    const {showLanguage} =this.state;
    this.setState({showLanguage:showLanguage ? false :true})
  }

  onFormSubmit = (values, { setSubmitting }) => {
    POST({ url: signInUrl, payload: values })
      .then(response => {
        if (response.data.status && response.data.token) {
          setAuthDetails(response.data.token);
          this.setState({
            modal5: false,
          });
          this.props.getUserDetail(response.data.token);
        } else {
          this.setState({ loginError: 'Something Went Wrong' });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  onSignOut = () => {
    removeAuthDetails();
    this.props.signOutUser();
  };
  
  render() {
    const { authenticated, userDetails } = this.props;
    const { showLanguage} = this.state;
    return (
      <div>
        <div style={{display: showLanguage ? 'block':'none'}}>
        <GoogleTranslator />
        </div>
       
        <div className="headtoppart">
          <div className="topbar">
            <div className="headerwp">
              <div
                className="mobile pt-2 font-weight-bold pl-0"
                style={{ float: 'left' }}
              >
                CALL US: (888) 286-8708
              </div>
              <div className="float-right">
                <ul className="toplink">
                  <li>
                    <a href="/">
                      <img src={Cart} alt="" width="20" />
                      Cart
                    </a>
                  </li>
                  <span>&nbsp;</span>
                  {authenticated ? (
                    <li>
                      {userDetails.full_name}
                      <button onClick={this.onSignOut}>SignOut</button>
                    </li>
                  ) : (
                    <li>
                      <a onClick={this.toggle(5)}>
                        <img src={Profile} alt="" width="20" />
                        login/signup
                      </a>
                    </li>
                  )}
                  
                <span class="mobPipe">&nbsp;</span>
                <li id="CountryOpen"  onClick={this.showLanguage}>
                    <a href="#"><img src={Globe} alt="" width="20" />EN<i class="caret border-0"></i></a>
                </li>
          
                  <span>&nbsp;</span>
                  {/*<li><a color="primary" onClick={this.toggle(4)}><img src={Globe} alt="" width="20" />EN</a></li>
                                    <span>&nbsp;</span>*/}
                  <li>
                    <a onClick={this.toggle(6)}>
                      <i className="fa fa-search mr-2" /> Search
                      <i className="caret border-0" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <MDBModal
          className="logIn"
          isOpen={this.state.modal5}
          toggle={this.toggle(5)}
        >
          <div>
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Email address is required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                if (!values.password) {
                  errors.password = 'Password is required.';
                }

                return errors;
              }}
              onSubmit={this.onFormSubmit}
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
                <form>
                  <div className="row">
                    <div className="col-sm-6 col-md-6 border-right border-secondary">
                      <h4 className="login-heading font-xx">Account Sign In</h4>
                      <div className="form-group mb-2">
                        {/* <!-- <label>Mobile / Email Address</label> --> */}
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          onChange={e => {
                            this.setState({ loginError: null });
                            handleChange(e);
                          }}
                          onBlur={handleBlur}
                          value={values.email}
                          placeholder="Email Address"
                        />
                        <span className="errorMsg">
                          {errors.email && touched.email && errors.email}
                        </span>
                      </div>
                      <div className="form-group pb-0 mb-3">
                        {/* <!-- <label>Password</label> --> */}
                        <input
                          type="password"
                          className="form-control"
                          onChange={e => {
                            this.setState({ loginError: null });
                            handleChange(e);
                          }}
                          onBlur={handleBlur}
                          value={values.password}
                          name="password"
                          placeholder="Password"
                        />
                        <div className="errorMsg">
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </div>
                      </div>
                      <a href="/" className="pwdlink">
                        Forgot Password?
                      </a>
                      <div className="form-group">
                        <span className="errorMsg">
                          {this.state.loginError}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            handleSubmit();
                          }}
                          className="btn bha-btn-primary w-100 mt-3"
                        >
                          Sign in
                        </button>
                        {/* <!-- <span className="float-right mt-4 text-muted"><a className="forgotpwd" href="forgot-pwd.html">Forgot Password?</a></span> --> */}
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <h4 className="login-heading font-xx">WHY JOIN?</h4>
                      {this.displaySignupContent()}
                      <div className="form-group">
                        <a
                          href="/sign-up"
                          className="btn bha-btn-primary w-100 mt-3"
                        >
                          Sign up
                        </a>
                        {/* <!-- <span className="float-right mt-4 text-muted"><a className="forgotpwd" href="forgot-pwd.html">Forgot Password?</a></span> --> */}
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </MDBModal>

        <MDBModal
          className="searchbox"
          isOpen={this.state.modal6}
          toggle={this.toggle(6)}
        >
          <form className="topmenusearch">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="What are you looking for..."
              />
              <div className="input-group-append">
                <button className="btn btn-bha-primary" type="button">
                  <i className="fa fa-search pl-0 pr-2" />
                </button>
              </div>
            </div>
          </form>
        </MDBModal>

        {/* <div className="headtoppart">
  <div className="topbar">
      <div className="headerwp">
          <div className="mobile pt-2 font-weight-bold pl-0" style={{float:'left'}}>
            CALL US: (888) 286-8708
          </div>
          <div className="float-right">
            <a href=""><img src={Cart} alt="" width="20" />Cart</a>
            <span>&nbsp;</span>
            <a href="/" data-toggle="modal"><img src={Profile} alt="" width="20" />login/signup</a>
            <span>&nbsp;</span>
              <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img src={Globe} alt="" width="20" />EN</a>
            
          </div>
      </div>
    </div> 
</div> */}
      </div>
    );
  }
}

const mapStateToProps = ({ asyncReducer, auth }) => {
  return {
    page_details: asyncReducer.page_meta_details,
    authenticated: auth.authenticated,
    userDetails: auth.customer_settings,
  };
};

export default connect(mapStateToProps, { getUserDetail, signOutUser })(TopBar);
