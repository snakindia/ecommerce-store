import React, { Component } from 'react';
import { MDBModal, MDBModalBody } from 'mdbreact';
import { Form, Formik } from 'formik';
import execValidation from '../../services/validatorService';
import { validators } from './validators';

const initialValues = {
  name: '',
  companyName: '',
  email: '',
  phone: '',
};

class RequestAQuote extends Component {
  handleSubmit = async (values, { setSubmitting }) => {
    const { toggleModal, onSubmit } = this.props;
    setSubmitting(true);
    try {
      const res = await onSubmit(values);
      console.log('response is', res);
      toggleModal();
    } finally {
      setSubmitting(false);
    }
  };

  validateForm = values => {
    const e = execValidation(validators, values);
    return Object.keys(e) ? e : null;
  };
  render() {
    const { isOpen, toggleModal } = this.props;
    return (
      <MDBModal isOpen={isOpen} toggle={toggleModal} centered>
        <MDBModalBody>
          <div
            className="loginInner animated fadeIn"
            style={{ position: 'relative' }}
          >
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={toggleModal}
            >
              <span aria-hidden="true">×</span>
            </button>
            <h2 className="bha_heading_2 font-weight-bold text-black">
              Free Brochures
            </h2>
            <Formik
              initialValues={initialValues}
              onSubmit={this.handleSubmit}
              validate={this.validateForm}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form>
                  {isSubmitting ? <div>Loading...</div> : null}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mb-1">
                        <label htmlFor="name">Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter Name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <span className="errorMsg">
                          {touched.name && errors.name}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mb-1">
                        <label htmlFor="phone">Phone *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder="Enter Phone"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <span className="errorMsg">
                          {touched.phone && errors.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mb-1">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Enter Email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <span className="errorMsg">
                          {touched.email && errors.email}
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-1">
                        <label htmlFor="companyName">Company Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="companyName"
                          placeholder="Enter Company Name"
                          value={values.companyName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <span className="errorMsg">
                          {touched.companyName && errors.companyName}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <button
                      type="button"
                      className="btn bha-btn-primary w-100"
                      onClick={handleSubmit}
                    >
                      subscribe
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </MDBModalBody>
      </MDBModal>
    );
  }
}

export default RequestAQuote;
