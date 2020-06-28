import React,{useEffect} from 'react';
import './freebrochure.css'
import { Formik } from 'formik';
import { Sticky } from 'react-sticky';

 const FreeBrochure = () => {

     return (
        
     
                     <div className="form-outer float-left" id="brochureForm">
        <div className="container-fluid">
        <Formik
      initialValues={{ fname: '', companyname: '', email: '',  phone: '' }}
      validate={values => {
        const errors = {};
        if (!values.fname) {
          errors.fname = 'Name is required';
        } else if (
          !/^[a-zA-Z ]*$/i.test(values.fname)
        ) {
          errors.fname = 'Please enter alphabet characters only';
        }

        
        if (!values.phone) {
          errors.phone = 'Phone number is required';
        } else if (
          !/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i.test(values.phone)
        ) {
          errors.phone = 'Please enter valid phone number';
        }

        if (!values.companyname) {
          errors.companyname = 'Company name is required';
        } else if (
          !/^[a-zA-Z ]*$/i.test(values.companyname)
        ) {
          errors.companyname = 'Please enter alphabet characters only';
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
        alert("Free Brochures Sucessfully")
        resetForm()
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
      }) => (<form onSubmit={handleSubmit}>
            <div className="row custom-gutter">
              <div className="col-lg-2 col-sm-6 col-md-4 mt-4"><h2 className="bha_heading_2">Free Brochures</h2></div>
              <div className="col-lg-2 col-sm-6 col-md-4">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" className="form-control" name="fname" value={values.fname} onChange={handleChange}
            onBlur={handleBlur} placeholder="Enter Name" />
            <span className="errorMsg">{errors.fname && touched.fname && errors.fname}</span>

                </div>
              </div>
              <div className="col-lg-2 col-sm-6 col-md-4">
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input type="text" className="form-control" value={values.phone} onChange={handleChange}
            onBlur={handleBlur} name="phone" placeholder="Enter Phone" />
                  <span className="errorMsg">{errors.phone && touched.phone && errors.phone}</span>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 col-md-4">
                <div className="form-group">
                  <label htmlFor="emailaddress">Email Address *</label>
                  <input type="text" className="form-control" name="email" value={values.email} onChange={handleChange}
            onBlur={handleBlur} placeholder="Enter Email" />
                    <span className="errorMsg">{errors.email && touched.email && errors.email}</span> 
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 col-md-4">
                <div className="form-group">
                  <label htmlFor="companyname">Company Name *</label>
                  <input type="text" className="form-control" name="companyname" value={values.companyname} onChange={handleChange}
            onBlur={handleBlur} placeholder="Enter Company Name" />
                        <span className="errorMsg">{errors.companyname && touched.companyname && errors.companyname}</span> 

                </div>
              </div>
              <div className="col-lg-2 col-sm-6 col-md-4 mt-4"><button type="submit"  className="btn bha-btn-primary w-100">Subscribe</button></div>
            </div>
          </form>)}
    </Formik>

        </div>
        </div>  
    
     
     )

}

export default FreeBrochure