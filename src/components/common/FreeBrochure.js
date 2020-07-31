import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './../../assets/css/freebrochure.css';
import { Formik } from 'formik';
import { Sticky } from 'react-sticky';
import { save_brochures_details } from '../../actions/freeBrochuresActions';

class FreeBrochure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  saveHandler(data) {
    this.props.dispatch(save_brochures_details(data));
    //resetForm()
  }

  render() {
    this.state.data = this.props.freeBrochuresUserDetail;

    return (
      <div className="form-outer float-left" id="brochureForm">
        <div className="container-fluid">
          <Formik
            initialValues={{ name: '', company: '', email: '', phone: '' }}
            validate={values => {
              const errors = {};
              if (!values.name) {
                errors.name = 'Name is required';
              } else if (!/^[a-zA-Z ]*$/i.test(values.name)) {
                errors.name = 'Please enter alphabet characters only';
              }

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
              } else if (!/^[a-zA-Z ]*$/i.test(values.company)) {
                errors.company = 'Please enter alphabet characters only';
              }

              if (!values.email) {
                errors.email = 'Email address is required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              this.saveHandler(values);
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
                <div className="row custom-gutter">
                  <div className="col-lg-2 col-sm-6 col-md-4 mt-4">
                    <h2 className="bha_heading_2">Free Brochures</h2>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-md-4">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Name"
                      />
                      <span className="errorMsg">
                        {errors.name && touched.name && errors.name}
                      </span>
                    </div>
                  </div>

                  <div className="col-lg-2 col-sm-6 col-md-4">
                    <div className="form-group">
                      <label htmlFor="phone">Phone *</label>
                      <input
                        type="text"
                        className="form-control"
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

                  <div className="col-lg-2 col-sm-6 col-md-4">
                    <div className="form-group">
                      <label htmlFor="emailaddress">Email Address *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Email"
                      />
                      <span className="errorMsg">
                        {errors.email && touched.email && errors.email}
                      </span>
                    </div>
                  </div>

                  <div className="col-lg-2 col-sm-6 col-md-4">
                    <div className="form-group">
                      <label htmlFor="company">Company Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="company"
                        value={values.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Company Name"
                      />
                      <span className="errorMsg">
                        {errors.company && touched.company && errors.company}
                      </span>
                    </div>
                  </div>

                  <div className="col-lg-2 col-sm-6 col-md-4 mt-4">
                    <button type="submit" className="btn bha-btn-primary w-100">
                      Subscribe
                    </button>
                  </div>
                  {this.state.data &&
                    Object.keys(this.state.data).length > 0 &&
                    this.state.data.status == true && (
                      <div
                        style={{ color: 'green', 'background-color': '#fff' }}
                      >
                        Data saved successfully
                      </div>
                    )}
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ asyncReducer }) => {
  return {
    freeBrochuresUserDetail: asyncReducer.freeBrochuresUserDetail,
  };
};
export default connect(mapStateToProps)(FreeBrochure);
