
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom'
import React, { useRef, useState, useEffect } from 'react';
import Input from '../../common/Input'
import Error from '../../common/Error'
import {Select} from 'antd';
import countries from './countries';
const {Option}= Select;
function Address(props) {
    
    const { data, type } = props;
    const initialFormValue = {
        first_name: data && data.first_name ? data.first_name : '',
        last_name: data && data.last_name ? data.last_name : '',
        phone: data && data.phone ? data.phone : '',
        address1: data && data.address1 ? data.address1 : '',
        address2: data && data.address2 ? data.address2 : '',
        city: data && data.city ? data.city : '',
        state: data && data.state ? data.state : '',
        postal_code: data && data.postal_code ? data.postal_code : '',
        country: data && data.country ? data.country : '',
        company: data && data.company ? data.company : '',
        same: data && data.same ? data.same : '',
        full_name: data && data.first_name && data.last_name ? data.first_name + ' '+ data.last_name : '',
    }

    const onSelect =(cc)=>{
        
    }
    return (
        <Formik
            enableReinitialize
            initialValues={initialFormValue}
            onSubmit={(values, { setSubmitting, resetForm, errors }) => {
                setSubmitting(false);
                props.submit(values, type)
            }}
            validate={values => {

                const errors = {};

                if (!values.first_name) errors.first_name = 'First Name is Required';
                if (!values.last_name) errors.last_name = 'Last Name is Required';
                if (!values.phone) errors.phone = 'Phone  is Required';

                if (!values.address1) errors.address1 = 'Address is Required';
                // if (!values.address2) errors.address ='First Name is Required';
                if (!values.city) errors.city = 'City is Required';
                if (!values.state) errors.state = 'State/Province is Required';
                if (!values.postal_code) errors.postal_code = 'Postal Code is Required';
                // if (!values.country) errors.country = 'Country is Required';
                console.log({errors});
                return errors;
            }}
        >
            {formikProps => <Form id="msform" className="step4">

                <div className="col-lg-12 pl-0 pr-0" >

                    <div className="form-group">
                        <label className="text-small">First Name *</label>
                        <Input
                            allow="text"
                            length={50}
                            name="first_name"
                            formik={formikProps}
                            className="form-control input-control"
                            placeholder="Enter First Name"
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-small">Last Name *</label>
                        <Input
                            allow="text"
                            length={50}
                            name="last_name"
                            formik={formikProps}
                            className="form-control input-control"
                            placeholder="Enter Last Name"
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-small">Address *</label>
                        <Input
                            allow="special"
                            length={200}
                            name="address1"
                            formik={formikProps}
                            className="form-control input-control"
                            placeholder="Address"
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-small">Apartment/Suite/Building(Optional)</label>
                        <Input
                            allow="special"
                            length={100}
                            name="address2"
                            formik={formikProps}
                            className="form-control input-control"
                            placeholder="Apartment/Suite/Building"
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-small">Company Name(Optional)</label>
                        <Input
                            allow="text"
                            length={100}
                            name="company"
                            formik={formikProps}
                            className="form-control input-control"
                            placeholder="Company Name"
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-small">City</label>
                        <Input
                            allow="text"
                            length={100}
                            name="city"
                            formik={formikProps}
                            className="form-control input-control"
                            placeholder="City"
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-small">State/Province(Optional)</label>
                        <Input
                            allow="text"
                            length={100}
                            name="state"
                            formik={formikProps}
                            className="form-control input-control"
                            placeholder="State/Province(Optional)"
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-small">Country</label>
                        <Select
                        style={{width:'100%'}}
                        defaultValue={formikProps.values.country}
                        onSelect={country=>{formikProps.setFieldTouched('country',true); formikProps.setFieldValue('country',country)}}
                        >
                            {countries && countries.length > 0 && countries.map(country=>
                            <Option value={country.name} key={country.name}>{country.name}</Option>
                                )}
                        </Select>
                    </div>
                    <div className="form-group">
                        <label className="text-small">Postal Code</label>
                        <Input
                            allow="numeric"
                            length={6}
                            name="postal_code"
                            formik={formikProps}
                            className="form-control input-control"
                            placeholder="Postal Code"
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-small">Phone Number</label>
                        <Input
                            length={10}
                            allow="numeric"
                            name="phone"
                            formik={formikProps}
                            className="form-control input-control"
                            placeholder="Phone Number"
                        />
                    </div>

                    {type == 'shipping' ? <div className="form-group">
                        
                            <small className="sm-pad-all">
                            <Field
                                name="same"
                                className="mr-3"
                                type="checkbox"
                            />
                             My billing address is the same as my shipping address.
                            </small>
                            <button type="submit" className="btn bha-btn-primary float-right mt-2 mr-0" name="buttonsubmit">Submit</button>
                    </div> :null }
                    {/*<div className="form-group mt-3">
                        <button type="submit" className="btn bha-btn-primary float-right" name="buttonsubmit">Submit</button>
                            </div>*/}
                </div>
            </Form>
            }
        </Formik >
    )
}

export default Address;


