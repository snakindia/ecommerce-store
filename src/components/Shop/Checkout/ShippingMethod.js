
import { Field, Form, Formik } from 'formik';
import React from 'react';
function ShippingMethod(props) {

    const { data, type, total, shippingMethods } = props;
    let methods = [];
    if (data && data.length > 0) {
        methods = data.filter(i => i.enabled)
    }
    const initialFormValue = {
        shipping_method: props.shipping_method_id,

    }


    return (
        <Formik
            enableReinitialize
            initialValues={initialFormValue}
            onSubmit={(values, { setSubmitting, resetForm, errors }) => {
                setSubmitting(false);
                props.submit(values)
            }}
            validate={values => {

                const errors = {};
               
                if (!values.shipping_method) errors.shipping_method = 'Select a Shipping Method';
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
                                                {shipping.name} {shipping.price > 0 ? ` ($${shipping.price})`:''}
                                            </div>

                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
            }
        </Formik >
    )
}

export default ShippingMethod;


