import React, { Component } from 'react';
import { MDBModal, MDBModalBody } from 'mdbreact';
import { Form, Formik, Field } from 'formik';
import { Select } from 'antd'
import { connect } from 'react-redux';
import execValidation from '../../../services/validatorService';
import { validators } from '../../RequestAQuote/validators';
import { TOAST_TYPE } from '../../Notification/action.constants';
import Input from '../../common/Input';
import Error from '../../common/Error';
const { Option } = Select;

export default class Quote extends Component {
  handleSubmit = async (values, { setSubmitting }) => {
    
    
    //console.log('submitting---------------');
  
    const { toggleModal, onSubmit, showToast } = this.props;
    setSubmitting(true);
    try {

        const res = await onSubmit({ ...values, type: 'Free Brochure' });
        console.log('-------------------------------');
        console.log({res});
        this.props.toggleModal()
        if (res && res.status) {
            showToast("Thank you for sharing this information", TOAST_TYPE.SUCCESS);
            if (typeof res.url != 'undefined' && res.url != '') {
              console.log('2222',res.url);
                    window.open(res.url, '_blank');
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
    const e = execValidation(validators, values);
    if (this.props.isFreeBrochure == true) {
      delete e.message;
    }
    if(e){
      delete e.message
    }
    
    return Object.keys(e) ? e : null;
  };
  render() {
    const { isOpen, toggleModal,subMenuData,cat_id, cat_name} = this.props;
    
    const initialValues = {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      category_id: cat_id,
      category_name:cat_name,
    };
    
    
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
            Download Brochure
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
                        
                      </div>
                    </div>
                      {/* <div className="col-lg-12">
                        <div className="form-group mb-1">
                          <label htmlFor="company" style={{width:'100%'}}>Message *</label>
                          <Field
                            style={{width:'100%'}}
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
                         
                        </div>
                      </div>  */}
                  </div>
                  <div className="col-lg-12">

                    <Error formik={formik} el={['name', 'phone', 'email', 'company']} />
                  </div>

                  <div className="mt-2">
                    <button
                      type="button"
                      className="btn bha-btn-primary w-100"
                      onClick={formik.handleSubmit}
                    > Download
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