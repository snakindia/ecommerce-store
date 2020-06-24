import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Cart from '../assets/icon/cart.svg';
import Profile from '../assets/icon/profile.svg';
import Globe from '../assets/icon/globe.svg';
import { Formik } from 'formik';
import axios from 'axios';
import base64 from 'buffer';
//import utf8 from 'utf8'
import { setUserSession } from '../utils/Common';
//import CookieHandler from '../utils/cookieHandler.js';

class TopBar extends Component {
    constructor(props) {
        super(props);
            this.state = {
            modal4: false,
            modal5: false,
            fields: {},
            errors: {},
        }
  }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState ({
            [modalNumber]: !this.state[modalNumber]
        });
    }
    
    render() {
        return (
            <div>
                <div class="headtoppart">
                    <div class="topbar">
                      <div class="headerwp">
                          <div class="mobile pt-2 font-weight-bold pl-0" style={{float:'left'}}>
                                CALL US: (888) 286-8708
                          </div>
                          <div class="float-right">
                            <ul class="toplink">
                              <li><a href="/"><img src={Cart} alt="" width="20" />Cart</a></li>
                              <span>&nbsp;</span>
                              <li>
                                <a  onClick={this.toggle(5)}><img src={Profile} alt="" width="20" />login/signup</a>
                              </li>
                              <span>&nbsp;</span>
                              <li><a color="primary" onClick={this.toggle(4)}><img src={Globe} alt="" width="20" />EN</a>
                </li>
                            </ul>
                          </div>
                          </div>
                    </div>
            </div>


          <MDBModal className="logIn" isOpen={this.state.modal5} toggle={this.toggle(5)}>
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
      }
    }
      onSubmit={(values, { setSubmitting }) => {

        console.log(values.email)
        axios.post('http://127.0.0.1:3001/ajax/login', values)
        .then(function (response) {
            response = Buffer.from(response.data, 'base64').toString('ascii');
            response = JSON.parse(response);
 
            if (typeof response.token != 'undefined' && response.token != '') {
                alert('Login Success!!');
            } else {
                alert('Login Fail');
            }
        })
        .catch(function (error) {
            console.log(error);
        });
       
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
      }) => (<form>
                <div className="row">
                  <div className="col-sm-6 col-md-6 border-right border-secondary">
                    <h4 className="login-heading font-xx">Account Sign In</h4>
                    <div className="form-group mb-2">
                    {/* <!-- <label>Mobile / Email Address</label> --> */}
                    <input type="text" className="form-control" name="email" onChange={handleChange}
            onBlur={handleBlur}
            value={values.email} placeholder="Email Address" />
                    <span className="errorMsg">{errors.email && touched.email && errors.email}</span>
                    </div>
                    <div className="form-group pb-0 mb-3">
                      {/* <!-- <label>Password</label> --> */}
                      <input type="password" className="form-control"  onChange={handleChange}
            onBlur={handleBlur}
            value={values.password} name="password" placeholder="Password" />
                       <div className="errorMsg">{errors.password && touched.password && errors.password}</div> 
                    </div>  
                    <a href="/" className="pwdlink">Forgot Password?</a>
                    <div className="form-group">
                      <button type="button" onClick={() =>{handleSubmit()}}  className="btn bha-btn-primary w-100 mt-3">Sign in</button>
                      {/* <!-- <span className="float-right mt-4 text-muted"><a className="forgotpwd" href="forgot-pwd.html">Forgot Password?</a></span> --> */}
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <h4 className="login-heading font-xx">WHY JOIN?</h4>
<small>Join Baghouseamerica to register your tools and help protect your investment, rate and review products you love, receive special offers and learn about the newest equipments and accessories</small>                    
                    <div className="form-group">
                      <a href="/sign-up" className="btn bha-btn-primary w-100 mt-3">Sign up</a>
                      {/* <!-- <span className="float-right mt-4 text-muted"><a className="forgotpwd" href="forgot-pwd.html">Forgot Password?</a></span> --> */}
                    </div>
                  </div>
                </div>
              </form>
              )}
              </Formik>
          </div>
      </MDBModal>
      <MDBModal  className="country" isOpen={this.state.modal4} toggle={this.toggle(4)}  fullHeight position="top">
      <div>
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-2">
                    <ul className="bha-contry-list">
                      <li><a href="">United States</a></li>
                      <li><a href="">Argentina</a></li>
                      <li><a href="">Australia</a></li>
                      <li><a href="">België/Belgique</a></li>
                      <li><a href="">Brasil</a></li>
                      <li><a href="">CANADA</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-2">
                    <ul className="bha-contry-list">
                      <li><a href="">United States</a></li>
                      <li><a href="">Argentina</a></li>
                      <li><a href="">Australia</a></li>
                      <li><a href="">België/Belgique</a></li>
                      <li><a href="">Brasil</a></li>
                      <li><a href="">CANADA</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-2">
                    <ul className="bha-contry-list">
                      <li><a href="">United States</a></li>
                      <li><a href="">Argentina</a></li>
                      <li><a href="">Australia</a></li>
                      <li><a href="">België/Belgique</a></li>
                      <li><a href="">Brasil</a></li>
                      <li><a href="">CANADA</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-2">
                    <ul className="bha-contry-list">
                      <li><a href="">United States</a></li>
                      <li><a href="">Argentina</a></li>
                      <li><a href="">Australia</a></li>
                      <li><a href="">België/Belgique</a></li>
                      <li><a href="">Brasil</a></li>
                      <li><a href="">CANADA</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-2">
                    <ul className="bha-contry-list">
                      <li><a href="">United States</a></li>
                      <li><a href="">Argentina</a></li>
                      <li><a href="">Australia</a></li>
                      <li><a href="">België/Belgique</a></li>
                      <li><a href="">Brasil</a></li>
                      <li><a href="">CANADA</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-2">
                    <ul className="bha-contry-list">
                      <li><a href="">United States</a></li>
                      <li><a href="">Argentina</a></li>
                      <li><a href="">Australia</a></li>
                      <li><a href="">België/Belgique</a></li>
                      <li><a href="">Brasil</a></li>
                      <li><a href="">CANADA</a></li>
                    </ul>
                  </div>
                </div>
          </div>

      </MDBModal>

    {/* <div class="headtoppart">
  <div class="topbar">
      <div class="headerwp">
          <div class="mobile pt-2 font-weight-bold pl-0" style={{float:'left'}}>
            CALL US: (888) 286-8708
          </div>
          <div class="float-right">
            <a href=""><img src={Cart} alt="" width="20" />Cart</a>
            <span>&nbsp;</span>
            <a href="/" data-toggle="modal"><img src={Profile} alt="" width="20" />login/signup</a>
            <span>&nbsp;</span>
              <a href="/" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img src={Globe} alt="" width="20" />EN</a>
            
          </div>
      </div>
    </div> 
</div> */}

    </div>
    );
  }
}

export default TopBar;