
import { Field, Form, Formik } from 'formik';
import React, { useRef, useState, useEffect } from 'react';
import Error from '../../common/Error'
function Payment(props) {

    const { data, type, total, shippingMethods } = props;
    let methods = [];
    if (data && data.length > 0) {
        methods = data.filter(i => i.enabled)
    }
    const initialFormValue = {
        payment_method: '',
        shipping_method: '',

    }


    return (
        <Formik
            enableReinitialize
            initialValues={initialFormValue}
            onSubmit={(values, { setSubmitting, resetForm, errors }) => {
                setSubmitting(false);
                console.log('submitting')
                props.submit(values)
            }}
            validate={values => {

                const errors = {};
                if (!values.payment_method) errors.payment_method = 'Select a Payment Method';
                if (!values.shipping_method) errors.shipping_method = 'Select a Shipping Method';
                console.log({ errors })
                return errors;
            }}
        >
            {formikProps => <Form>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-12"  >
                            <div className="row">
                                <div className="col-sm-12 col-md-12">
                                    {shippingMethods && shippingMethods.length > 0 && shippingMethods.map(shipping =>
                                        <div className="form-group">
                                            <div>
                                                <Field
                                                    type="radio"
                                                    className="mr-2 mt-3"
                                                    name="shipping_method"
                                                    value={shipping.id}
                                                    id={shipping.id}
                                                    onClick={e=>props.shippingMethodHandler(shipping.id)}
                                                />
                                                {shipping.name}
                                            </div>

                                        </div>
                                    )}
                                </div>

                                <div className="col-sm-12 col-md-12">
                                    {methods && methods.length > 0 && methods.map(method =>
                                        <div className="form-group">
                                            <div>
                                                <Field
                                                    type="radio"
                                                    className="mr-2 mt-3"
                                                    name="payment_method"
                                                    value={method.id}
                                                    id={method.id}
                                                    onClick={e=>props.paymentMethodHandler(method.id)}
                                                />
                                                {method.name}
                                            </div>

                                        </div>
                                    )}


                                    <p className="mt-3">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#">privacy policy.</a></p>
                                </div>
                                <Error formik={formikProps} name="method" el={['method']} />
                                <div className="col-sm-12 col-md-12 mt-3">
                                    <h5>${total}</h5>
                                    <div className="form-group mt-3 mb-3">
                                        <button
                                            type="submit"
                                            className="btn bha-btn-primary margin-left-mobile15 w-100 text-center"
                                        >
                                            Place Order
                                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group mt-3">
                    <button type="submit" className="btn bha-btn-primary float-right" name="buttonsubmit">Submit</button>
                </div>

            </Form>
            }
        </Formik >
    )
}

export default Payment;


