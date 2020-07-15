import React, { Component, useEffect } from 'react'
import { Formik } from 'formik';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {API_AJAX_URL} from '../../constants/appConstant'

export default class SignupSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            fields  : {},
            errors  : {},
            show: true
        }
    }
    
    
    render() {
        return (
                
            <section className="content-section" style={{backgroundImage:'none'}}   >
            {
                this.state.show ? 
            <div className="container-fluid pt-3" id="message">
              <div className="row">
                <div className="col-lg-12 mb-3 pl-0 pr-0">
                  <h2 className="bha_heading_2 text-black font-xx mb-3">Create Your Account</h2>
                  <h2 className="bha_heading_2 text-black font-xx mb-3 mt-5">NEW TO BAGHOUSE AMERICA? CREATE AN ACCOUNT BELOW</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 mb-5 pl-0">
                  <div className="benefits-of-registering float-left w-100">
                    <div className="row">
                      <div className="col-sm-9 col-md-9">
                        <h2 className="bha_heading_2 text-black font-xx mb-3">Benifits of Registering</h2>
                        <ul>
                          <li>Quick and easy access to manuals, parts and documentation</li>
                          <li>View related accessories and products to your registered tools</li>
                          <li>Easily rate and review your DEWALT products
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-3 col-md-3 mt-4">
                        <a href="/" data-toggle="modal" className="btn bha-btn-primary" name="buttonsubmit">Already Have an Account? Login</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Formik
                initialValues={{ first_name: '', last_name: '', companyname: '', email: '', password: '', confirmpassword: '', phone: '', zipcode: '', countrytype: '', offerupdate: false, productnotification: false, sproductresearch:false }}
                validate={values => {
                  const errors = {};
                  if (!values.first_name) {
                    errors.first_name = 'First Name is required';
                  } else if (
                    !/^[a-zA-Z ]*$/i.test(values.first_name)
                  ) {
                    errors.first_name = 'Please enter alphabet characters only';
                  }

                  if (!values.last_name) {
                    errors.last_name = 'Last Name is required';
                  } else if (
                    !/^[a-zA-Z ]*$/i.test(values.last_name)
                  ) {
                    errors.last_name = 'Please enter alphabet characters only';
                  }

                  if (!values.phone) {
                    errors.phone = 'Phone Number is required';
                  } else if (
                    !/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i.test(values.phone)
                  ) {
                    errors.phone = 'Please enter valid phone number';
                  }

                  if (!values.companyname) {
                    errors.companyname = 'Company Name is required';
                  } else if (
                    !/^[a-zA-Z ]*$/i.test(values.companyname)
                  ) {
                    errors.companyname = 'Please enter alphabet characters only';
                  }


                  if (!values.email) {
                    errors.email = 'Email Id is required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }

                  if (!values.password) {
                    errors.password = 'Password is required';
                  } else if (values.password.length < 8){
                    errors.password = 'Password must be 8 characters long'
                  } else if (
                    !/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/i.test(values.password)
                  ) {
                    errors.password = 'PASSWORD SHOULD BE A MINIMUM OF 8 CHARACTERS WITH AT LEAST ONE CAPITAL LETTER, ONE LOWER CASE LETTER AND ONE NUMBER. PASSWORD CANNOT START WITH A NUMBER OR BE THE SAME AS YOUR EMAIL.';
                  }


                  if (values.password!==values.confirmpassword ) {
                    errors.confirmpassword = 'Password does not match with Confirm Password';
                  }


                  if (!values.zipcode) {
                    errors.zipcode = 'Zip Code is required';
                  } else if (
                    !/^[0-9]{6}$/i.test(values.zipcode)
                  ) {
                    errors.zipcode = 'Please enter number only';
                  }

                  return errors;
                }
              }
                     onSubmit={(values, { resetForm, props }) => {
        console.log(values)
        
        axios.post(API_AJAX_URL + '/register', values)
        .then(function (response) {
          console.log(response)
          if(response.data.isRightToken===true && response.data.status===true){
            alert("Data is update sucessfully" )
//            resetForm({values:''});
            return <Redirect from="/sign-up" to="/home.html" />   
          }
        })
        .catch(function (error) {
          console.log(error);
        });
        
        
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 1));
        //   setSubmitting(false);
        // }, 400);
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
                }) => (<form method="post">
                       <div className="row">
                  <div className="col-sm-6 col-md-6 pl-0">
                        <div class="form-group">

                          <input type="text" className="form-control input-control" name="first_name" value={values.first_name} onChange={handleChange}
                      onBlur={handleBlur}  placeholder="First Name" />
                          <span className="errorMsg">{errors.first_name && touched.first_name && errors.first_name}</span> 
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control input-control" name="last_name" value={values.last_name} onChange={handleChange}
                      onBlur={handleBlur} placeholder="Last Name" />
                          <span className="errorMsg">{errors.last_name && touched.last_name && errors.last_name}</span> 
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control input-control"  name="companyname" value={values.companyname} onChange={handleChange}
                      onBlur={handleBlur} placeholder="Company Name" />
                          <span className="errorMsg">{errors.companyname && touched.companyname && errors.companyname}</span> 
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control input-control" name="email" value={values.email} onChange={handleChange}
                      onBlur={handleBlur} placeholder="Email address" />
                          <span className="errorMsg">{errors.email && touched.email && errors.email}</span> 
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control input-control" value={values.password} onChange={handleChange}
                      onBlur={handleBlur} name="password" placeholder="Password" />
                          <span className="errorMsg">{errors.password && touched.password && errors.password}</span> 
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 pr-0">
                    <div className="form-group">
                          <select className="form-control input-control form-select text-muted" name="countrytype" value={values.countrytype} onChange={handleChange}
                      onBlur={handleBlur} style={{fonntSize: '0.875rem'}}>
                            <option>United State</option>
                            <option>India</option>
                            <option>China</option>
                            <option>banglore</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control input-control"  value={values.phone} onChange={handleChange}
                      onBlur={handleBlur} name="phone" placeholder="Phone Number" />
                      <span className="errorMsg">{errors.phone && touched.phone && errors.phone}</span> 
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control input-control" value={values.zipcode} onChange={handleChange}
                      onBlur={handleBlur} name="zipcode" placeholder="Zip Code" />
                          <span className="errorMsg">{errors.zipcode && touched.zipcode && errors.zipcode}</span> 
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control input-control" value={values.confirmpassword} onChange={handleChange}
                      onBlur={handleBlur} name="confirmpassword" placeholder="Confirm Password" />
                          <span className="errorMsg">{errors.confirmpassword && touched.confirmpassword && errors.confirmpassword}</span> 

                          <div className="mt-2 text-muted"><input type="checkbox" className="mr-2 mt-2" /><small>Show Password</small>
                          </div>
                          <div class="form-group">
                          <div><input type="checkbox" name="offerupdate" value={values.offerupdate} onChange={handleChange}
                      onBlur={handleBlur} class="mr-2 mt-3" />I would like to receive updates and offers</div>
                      </div>
                        </div>
                    </div>
                  </div>
                  <hr />
            <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 col-md-6 pl-0">
                <p><small><input type="checkbox" name="productnotification" value={values.productnotification} onChange={handleChange}
                      onBlur={handleBlur} className="mr-3" />I WOULD LIKE TO RECEIVE INFORMATION ABOUT DEWALT PRODUCTS AND PROMOTIONS BY EMAIL</small></p>
                <p className="text-muted"><small>By signing up you agree to receive emails from BAGHOUSE AMERICA with news, special offers, promotions and other information. You can unsubscribe at any time. See Updated <a href="/" className="font-weight-bold text">Privacy Policy</a> or Contact Us at <a href="mailto:support.baghouseamrica@gmail.com" className="font-weight-bold">support.baghouseamrica@gmail.com</a> or 2415 East Camelback Road, Ste. 700, Phoenix, Arizona 85016, for more information.</small></p>
              </div>
              <div className="col-sm-6 col-md-6">
                <p><small><input type="checkbox" name="sproductresearch" value={values.sproductresearch} onChange={handleChange}
                      onBlur={handleBlur} className="mr-3" />SIGN UP TO PARTICIPATE IN DEWALT PRODUCT RESEARCH</small></p>
                 <div className="form-group">
                  <button type="button" className="btn bha-btn-primary float-left"  onClick={() =>{handleSubmit()}} name="buttonsubmit">Submit</button>
                </div>
              </div>
            </div>
          </div>

                </form>)}
                        </Formik>
            </div>
  
            : 
            <div style={{color:'green'}}>
                 Mail has been sent to your email address. Please click on the link provided in mail for verification
            </div>
        }
    </section>
    )
  }
}
