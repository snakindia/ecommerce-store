import React, { Component } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from 'mdbreact';
import { Formik } from 'formik';

class ModalPage extends Component {
  state = {
    modal14: false,
  };

  toggle = nr => () => {
    let modalNumber = 'modal' + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    return (
      <MDBContainer>
        <div class="chat-button free-signup signup-fixed">
          <a
            onClick={this.toggle(14)}
            data-toggle="modal"
            style={{ fontsize: '1rem !important', color: '#fff !important' }}
          >
            Free Brochures
          </a>
        </div>

        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <div class="loginInner container-login animated fadeIn">
            <button type="button" class="close" onClick={this.toggle(14)}>
              <span aria-hidden="true">×</span>
            </button>
            <h2 class="bha_heading_2 font-weight-bold text-black">
              Free Brochures
            </h2>

            <MDBModalBody>
              <Formik
                initialValues={{
                  fname: '',
                  companyname: '',
                  email: '',
                  phone: '',
                }}
                validate={values => {
                  const errors = {};
                  if (!values.fname) {
                    errors.fname = 'First Name is required';
                  } else if (!/^[a-zA-Z ]*$/i.test(values.fname)) {
                    errors.fname = 'Please enter alphabet characters only';
                  }

                  if (!values.phone) {
                    errors.phone = 'Phone Number is required';
                  } else if (
                    !/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i.test(
                      values.phone
                    )
                  ) {
                    errors.phone = 'Please enter valid phone number';
                  }

                  if (!values.companyname) {
                    errors.companyname = 'Company Name is required';
                  } else if (!/^[a-zA-Z ]*$/i.test(values.companyname)) {
                    errors.companyname =
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
                onSubmit={(values, { setSubmitting }) => {
                  alert('Signup Sucessfully');
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
                    <p class="mt-3">
                      Sign up to receive the lates infor on new Baghouse
                      products, special offers and more.
                    </p>
                    <div class="row">
                      <div class="col-sm-6 col-md-6">
                        <div class="form-group mb-1">
                          <label for="">Name *</label>
                          <input
                            type="text"
                            class="form-control"
                            id=""
                            name="fname"
                            value={values.fname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter Name"
                          />
                          <span className="errorMsg">
                            {errors.fname && touched.fname && errors.fname}
                          </span>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-6">
                        <div class="form-group mb-1">
                          <label for="">Phone *</label>
                          <input
                            type="text"
                            class="form-control"
                            id=""
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="phone"
                            placeholder="Enter Phone"
                          />
                          <span className="errorMsg">
                            {errors.phone && touched.phone && errors.phone}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group mb-1">
                          <label for="">Email Address *</label>
                          <input
                            type="text"
                            class="form-control"
                            id=""
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter Email Address"
                          />
                          <span className="errorMsg">
                            {errors.email && touched.email && errors.email}
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="form-group mb-1">
                          <label for="">Company Name *</label>
                          <input
                            type="text"
                            class="form-control"
                            id=""
                            name="companyname"
                            value={values.companyname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter Company Name"
                          />
                          <span className="errorMsg">
                            {errors.companyname &&
                              touched.companyname &&
                              errors.companyname}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* <!--                 <small>
                  By signing up you agre to receive emails from Bhaghouse
                  with new, special offers, promotions and other information.
                  You can unsubscribe at any time. See Updated Privacy 
                  Policy or Contact Us at support.bhaghouse@gamil.com.
                </small> --> */}
                    <div class="mt-2 free-brocher">
                      <button
                        type="button"
                        onClick={() => {
                          handleSubmit();
                        }}
                        class="btn bha-btn-primary w-100"
                      >
                        subscribe
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </MDBModalBody>
          </div>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
