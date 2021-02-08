
import { Field, Form, Formik } from 'formik';
import React, {useEffect} from 'react';
function ShippingMethod(props) {

    const { data, type, total, shippingMethods,pannelstep } = props;
    let methods = [];
    if (data && data.length > 0) {
        methods = data.filter(i => i.enabled)
    }
   
   
    const initialFormValue = {
        shipping_method: props.shipping_method_id,

    }
    const continueM=()=>{
        
        if (shippingMethods && shippingMethods.length ==1) {
            console.log({shippingMethods});
            console.log('submitting shipping_method',shippingMethods[0].id)
            props.shippingMethodHandler({shipping_method:shippingMethods[0].id})
        }
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
                                                    defaultChecked ={shippingMethods.length ==1 ? true: false}
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
                                     {/* <button className="bha-btn-primary" onClick={continueM}>Continue</button> */}
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


