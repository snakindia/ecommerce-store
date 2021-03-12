import React, { Component } from 'react';
import { MDBModal, MDBModalBody } from 'mdbreact';
import { Form, Formik, Field } from 'formik';
import { Select } from 'antd'
import { connect } from 'react-redux';
import execValidation from '../../services/validatorService';
import { validators } from './validators';
import { TOAST_TYPE } from '../Notification/action.constants';
import Input from '../common/Input';
import Error from '../common/Error';
const { Option } = Select;
const initialValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
  category_id: '',
  category_name: '',
};

class RequestAQuote extends Component {
  handleSubmit = async (values, { setSubmitting }) => {
    console.log({values})
    if (!values.category_name) {
      const { isOpen, toggleModal, subMenuData } = this.props;

      if (subMenuData && Object.keys(subMenuData).length > 0) {
        for (const key of Object.keys(subMenuData)) {
          if (subMenuData[key] && subMenuData[key][0] && subMenuData[key][0].items && subMenuData[key][0].items.length > 0) {
            subMenuData[key][0].items.map(item => {

              if (item._id == values.category_id) {
                values.category_name = item.name;
              }
            })
          }
        }
      }
    }

    const { toggleModal, onSubmit, showToast, url } = this.props;
    setSubmitting(true);
    try {

        const res = await onSubmit({ ...values, type: this.props.isFreeBrochure ? 'Free Brochure' : 'Request a Quote' });
        if (res && res.status) {
            toggleModal();
            showToast("Thank you for sharing this information", TOAST_TYPE.SUCCESS);
            if (typeof res.url != 'undefined' && res.url != '') {
                if (this.props.isFreeBrochure) {
                    window.open(res.url, '_blank');
                }
            }
            else if (url) {
                    window.open(url, '_blank');
            }
        } else if (res && res.status.error) {
            showToast(res.status.error || 'We were unable to process your request at this moment. Please try after some time or call us at (888) 286-8708', TOAST_TYPE.ERROR);
        }
      
    } catch (e) {
      showToast('We were unable to process your request at this moment. Please try after some time or call us at (888) 286-8708', TOAST_TYPE.ERROR);
    } finally {
      setSubmitting(false);
    }
  };

  validateForm = values => {
    console.log({values})
    const e = execValidation(validators, values);
    if (this.props.isFreeBrochure == true) {
      delete e.message;
    }
    return Object.keys(e) ? e : null;
  };
  render() {
    const { isOpen, toggleModal, subMenuData, isFreeBrochure, url } = this.props;
    let categories = [];
    if (subMenuData && Object.keys(subMenuData).length > 0) {
      for (const key of Object.keys(subMenuData)) {
        if (subMenuData[key] && subMenuData[key][0] && subMenuData[key][0].items && subMenuData[key][0].items.length > 0) {
          subMenuData[key][0].items.map(item => {
            categories.push({
              label: item.name,
              value: item._id
            })
          })
        }
      }
    }

    categories = categories.sort((a, b) => {
      if (a.label < b.label) return -1;
      if (a.label > b.label) return 1;
      return 0;
    })
    // console.log({categories});
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
            <h2 className="bha_heading_2 font-weight-bold text-black pb-0 pl-0">
              {isFreeBrochure != true ? "Request For quote" : "Free Brochure"}
            </h2>
            <Formik
              initialValues={initialValues}
              onSubmit={this.handleSubmit}
              validate={this.validateForm}
            >
              {(formik) => (
                <Form>
                  {formik.isSubmitting ? <div>Loading...</div> : null}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mb-1">
                        <label htmlFor="name">Name *</label>
                        <Input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Enter Name"
                          allow="special"
                          length={50}
                          formik={formik}
                        />
                        {/* <span className="errorMsg">
                            {touched.name && errors.name}
                          </span> */}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mb-1">
                        <label htmlFor="phone">Phone *</label>
                        <Input
                          type="text"
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="Enter Phone"
                          allow="numeric"
                          length={10}
                          formik={formik}
                        />
                        {/* <span className="errorMsg">
                            {touched.phone && errors.phone}
                          </span> */}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mb-1">
                        <label htmlFor="email">Email Address *</label>
                        <Input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Enter Email"
                          allow="email"
                          length={50}
                          formik={formik}
                        />
                        {/* <span className="errorMsg">
                            {touched.email && errors.email}
                          </span> */}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-1">
                        <label htmlFor="company">Company Name *</label>
                        <Input
                          type="text"
                          className="form-control"
                          id="company"
                          name="company"
                          placeholder="Enter Company Name"
                          allow="special"
                          length={50}
                          formik={formik}
                        />
                        {/* <span className="errorMsg">
                            {touched.company && errors.company}
                          </span> */}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-1">
                        <label htmlFor="company">Category*</label>
                        <Field
                          as="select"
                          className="form-control select_type"
                          id="category_id"
                          name="category_id"
                          placeholder="Select Category"
                          value={formik.values.category}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        > <option>Select a Category</option>
                          {categories && categories.map(item =>
                            <option
                              key={item.value}
                              value={item.value}
                              title={item.label}

                            >{item.label}</option>)}
                        </Field>

                        {/* <span className="errorMsg">
                            {touched.category_id && errors.category_id}
                          </span> */}
                      </div>
                    </div>
                    {isFreeBrochure != true ?
                      <div className="col-lg-12">
                        <div className="form-group mb-1">
                          <label htmlFor="company" style={{width:'100%'}} >Message *</label>
                          <Field 
                            maxLength="100"
                            component="textarea"
                            rows="2"
                            className="form-control-textarea"
                            id="message"
                            placeholder="Type Message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {/* <span className="errorMsg">
                                    {touched.message && errors.message}
                                  </span> */}
                        </div>
                      </div> : ''
                    }
                  </div>
                  <div className="col-lg-12 pl-0 pr-0">

                    <Error formik={formik} el={['name', 'phone', 'email', 'company', 'category_id', 'message']} />
                  </div>

                  <div className="mt-2">
                    <button
                      type="button"
                      className="btn bha-btn-primary w-100"
                      onClick={formik.handleSubmit}
                    >
                      {isFreeBrochure != true ? 'subscribe' : 'download brochure'}
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

const mSTP = (state) => {
  return {
    subMenuData: state.asyncReducer.subMenuData,
  }
};
const mDTP = dispatch => {
  return {

  }
}

export default connect(mSTP, mDTP)(RequestAQuote);
