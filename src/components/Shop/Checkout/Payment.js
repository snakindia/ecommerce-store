
import { Field, Form, Formik } from 'formik';
import React, { useRef, useState, useEffect } from 'react';
import Error from '../../common/Error'
import Nmi from './Nmi';
function Payment(props) {

    const { data, type, total } = props;
    let methods = [];
    if (data && data.length > 0) {
        methods = data.filter(i => i.enabled)
    }
    const initialFormValue = {
        payment_method: props.payment_method_id ,

    }

    const {  cart, paymentSettings,placeOrder } = props;
    return (
        <Formik
            enableReinitialize
            initialValues={initialFormValue}
            onSubmit={(values, { setSubmitting, resetForm, errors }) => {
                setSubmitting(false);
                console.log('placing order',values);
                props.submit(values)
            }}
            validate={values => {

                const errors = {};
                if (!values.payment_method) errors.payment_method = 'Select a Payment Method';
                return errors;
            }}
        >
            {formikProps => <Form>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-12"  >
                            <div className="row">
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
                                                    onClick={e => props.paymentMethodHandler(method.id)}
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {cart.payment_method_id && cart.payment_method_gateway == 'nmi' && paymentSettings && paymentSettings.TokenKey && <Nmi />}
                     
                    {/* <button type="submit" onClick={placeOrder} className="btn bha-btn-primary float-right" name="buttonsubmit"> Place Order</button>}
                                                            </div> */}
                   
                
                    {/* <div className="form-group mt-3">
                        {!props.hide ? 
                        <button 
                        type="submit"
                         className="btn bha-btn-primary float-right" name="buttonsubmit"> Place Order</button>
                            :
                            null
                        }
                         </div> */}
               

            </Form>
            }
        </Formik >
    )
}

export default Payment;


