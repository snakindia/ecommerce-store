import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Cart from '../assets/icon/cart.svg';
import Profile from '../assets/icon/profile.svg';
import Globe from '../assets/icon/globe.svg';
import { Formik } from 'formik';
class TopBar extends Component {
  constructor(props){
    super(props);
    this.state={
    modal4: false,
    modal5: false,
    fields: {},
    errors: {},
 
  }
  // this.handleChange = this.handleChange.bind(this);
  // this.submitLoginForm = this.submitLoginForm.bind(this);

  

  }


  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  
 
  // handleChange(e) {
  //   let fields = this.state.fields;
  //   fields[e.target.name] = e.target.value;
  //   this.setState({
  //     fields
  //   });
  
  // }
  
  
  // submitLoginForm(e) {
  //   if (this.validateForm()) {
  //       let fields = {};
  //       fields["email"] = "";
  //       fields["password"] = "";
  //       this.setState({fields:fields});
  //       alert("Login Sucess Fully");
  //   }
  // //  e.preventDefault();
  
  // }
  
  // validateForm() {
  //   let fields = this.state.fields;
  //   let errors = {};
  //   let formIsValid = true;
  
  //   if (!fields["email"]) {
  //     formIsValid = false;
  //     errors["email"] = "EMAIL ADDRESS IS REQUIRED.";
  //   }
  
  //   if (typeof fields["email"] !== "undefined") {
  //     //regular expression for email validation
  //     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  //     if (!pattern.test(fields["email"])) {
  //       formIsValid = false;
  //       errors["email"] = "*Please enter valid email-ID.";
  //     }
  //   }


  //   if (!fields["password"]) {
  //     formIsValid = false;
  //     errors["password"] = "PASSWORD IS REQUIRED.";
  //   }

  //   if (typeof fields["password"] !== "undefined") {
  //     if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
  //       formIsValid = false;
  //       errors["password"] = "*Please enter secure and strong password.";
  //     }
  //   }
  //   this.setState({
  //     errors: errors
  //   });
  //   return formIsValid;
  
  
  //   }
  

    
render() {
  const validations = {
    email: ["required", "email"],
    password: ["required", "min:3", "max:15"],
   }
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
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Required';
        } else if (
          /!^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/i.test(values.password)
        ) {
          errors.password = 'Invalid email address';
        }
  
        return errors;
      }
    }
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 1));
          setSubmitting(false);
        }, 400);
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