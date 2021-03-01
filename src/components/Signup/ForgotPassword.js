import React, { PureComponent } from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetPassword, forgotPasswordAction} from './signUp.actions';
import execValidation from '../../services/validatorService';
import { email, isRequired,} from '../../services/validatorService';
import { showToast } from '../Notification/notification.actions';
import { TOAST_TYPE } from '../Notification/action.constants';

const initialValues = {
    email: '',
};
class ForgotPassword extends PureComponent {

    handleSubmit = async (values, { setSubmitting, resetForm }) => {
        const { actions } = this.props;
        setSubmitting(true);
        try {
            const res = await actions.forgotPasswordAction(values);
            const { status,error} = res;
            if (status) {
                resetForm();
                actions.showToast(
                    'Please click on link sent in your mailbox for verification',
                    TOAST_TYPE.SUCCESS
                );
            } else if ( !status && error) {
                //resetForm();
                actions.showToast(
                    'User not exist',
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
        const e = execValidation({email: [isRequired('Email Id is required'), email()],}, values);
        console.log(e);
        return Object.keys(e) ? e : null;
    };


    render() {
        
        return (
            <div style={{ padding: '100px 0' }}>
                <div className="content-wrapper pb-0"  style={{ backgroundImage: 'none' }}>
                    <section className="content-section w-100" style={{ backgroundImage: 'none' }}>
                        <div className="container pl-0 pr-0 pt-5 pb-5">
                            <div className="row">
                                <div className="col-lg-12 mb-3 pl-0 pr-0">
                                    <h2 className="bha_heading_2 text-black font-xx mb-3 mt-5 text-center">Forget Password ? </h2>
                                </div>
                            </div>
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
                                        <div className="row justify-content-center align-items-center h-100">
                                            <div className="col-sm-6 col-md-6 col-lg-4 pl-0">
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
                                                <div className="form-group text-center" >
                                                    <button
                                                        type="button"
                                                        className="btn bha-btn-primary pwd-btn"
                                                        onClick={handleSubmit}
                                                        name="buttonsubmit"
                                                    >Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <hr /> */}
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </section>
                </div>
            </div>

        );
    }
}

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
        {
            forgotPasswordAction,
            showToast,
        },
        dispatch
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
