import React, { PureComponent } from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUp, getCountries } from './signUp.actions';
import execValidation from '../../services/validatorService';
import { validators } from './validators';
import { showToast } from '../Notification/notification.actions';
import { TOAST_TYPE } from '../Notification/action.constants';

const initialValues = {
  first_name: '',
  last_name: '',
  companyname: '',
  email: '',
  password: '',
  confirmpassword: '',
  phone: '',
  zipcode: '',
  countrytype: '',
  offerupdate: false,
  productnotification: false,
  sproductresearch: false,
};
class SignUpForm extends PureComponent {
  state = {
    showPassword: false,
  };
  async componentDidMount(){
    const { actions } = this.props;
    const res = await actions.getCountries();
    if(res && res.length > 0){
      this.setState({countries:res})
    }
  }
  handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const { actions } = this.props;
    setSubmitting(true);
    try {
      const res = await actions.signUp(values);
      const { isRightToken, status,isCustomerExists } = res;
      console.log({res});
      if (isRightToken && status) {
        //resetForm();
        actions.showToast(
          'Please click on link sent in your mailbox for verification',
          TOAST_TYPE.SUCCESS
        );
      } else if (isRightToken && !status && isCustomerExists) {
        //resetForm();
        actions.showToast(
          'User already registred',
          TOAST_TYPE.ERROR
        );
      } 
      
      else {
        actions.showToast(
          'We are unable to process the request. Please try again later',
          TOAST_TYPE.ERROR
        );
      }
    } catch (e) {
      actions.showToast('We were unable to process your request at this moment. Please try after some time or call us at (888) 286-8708', TOAST_TYPE.ERROR);
    } finally {
      setSubmitting(false);
    }
  };

  validateForm = values => {
    const e = execValidation(validators, values);
    return Object.keys(e) ? e : null;
  };

  inputHandleChange = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  render() {
    const { showPassword,countries } = this.state;
    return (
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
          <Form className="formPadding">
            {isSubmitting ? <div>Loading...</div> : null}
            <div className="row">
              <div className="col-sm-6 col-md-6 pl-0">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-control"
                    name="first_name"
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="First Name"
                  />
                  <span className="errorMsg">
                    {errors.first_name &&
                      touched.first_name &&
                      errors.first_name}
                  </span>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-control"
                    name="last_name"
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Last Name"
                  />
                  <span className="errorMsg">
                    {errors.last_name && touched.last_name && errors.last_name}
                  </span>
                </div>
               
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-control"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Email address"
                  />
                  <span className="errorMsg">
                    {errors.email && touched.email && errors.email}
                  </span>
                </div>
                <div className="form-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control input-control"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    placeholder="Password"
                  />
                  <span className="errorMsg">
                    {errors.password && touched.password && errors.password}
                  </span>
                </div>
                <div className="form-group">
                <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control input-control"
                    value={values.confirmpassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="confirmpassword"
                    placeholder="Confirm Password"
                  />
                  <span className="errorMsg">
                    {errors.confirmpassword &&
                      touched.confirmpassword &&
                      errors.confirmpassword}
                  </span>
                  </div>
              </div>
              <div className="col-sm-6 col-md-6 pr-0 pl-0">
              <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-control"
                    name="companyname"
                    value={values.companyname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Company Name"
                  />
                  <span className="errorMsg">
                    {errors.companyname &&
                      touched.companyname &&
                      errors.companyname}
                  </span>
                </div>
                <div className="form-group">
                  <select
                    className="form-control input-control form-select text-muted"
                    name="countrytype"
                    value={values.countrytype}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ fontSize: '0.875rem' }}
                  >
                    <option value="">Select a country</option>
                    {
                    countries ? countries.map(c=><option key={c.code} value={c.name}>{c.name}</option>):null
                  }
                 
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-control"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="phone"
                    placeholder="Phone Number"
                  />
                  <span className="errorMsg">
                    {errors.phone && touched.phone && errors.phone}
                  </span>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-control"
                    value={values.zipcode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="zipcode"
                    placeholder="Zip Code"
                  />
                  <span className="errorMsg">
                    {errors.zipcode && touched.zipcode && errors.zipcode}
                  </span>
                </div>
                <div className="form-group">
                  

                  <div className="mt-2 text-muted">
                    <input
                      type="checkbox"
                      className="mr-2 mt-2"
                      name="showPassword"
                      value="showPassword"
                      checked={showPassword}
                      onChange={this.inputHandleChange}
                    />
                    <small>Show Password</small>
                  </div>
                  {/* <div className="form-group">
                    <div>
                      <input
                        type="checkbox"
                        name="offerupdate"
                        value={values.offerupdate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="mr-2 mt-3"
                      />
                      I would like to receive updates and offers
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <hr />
            <div className="container-fluid">
              <div className="row">
               <div className="col-sm-6 col-md-6">
                 
                  <div className="form-group">
                    <button
                      type="button"
                      className="btn bha-btn-primary float-left"
                      onClick={handleSubmit}
                      name="buttonsubmit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      signUp,
      showToast,
      getCountries
    },
    dispatch
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
