import React, { PureComponent } from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetPasswordAction } from './signUp.actions';
import execValidation from '../../services/validatorService';
import { minLength, isRequired, } from '../../services/validatorService';
import { showToast } from '../Notification/notification.actions';
import { TOAST_TYPE } from '../Notification/action.constants';
import queryString from 'query-string';
const initialValues = {
    password: '',
    confirmpassword: '',
};
class ResetPassword extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            token: null
        }
    }
    componentDidMount() {
        let params = queryString.parse(this.props.location.search);
        if (params && params.token) {
            this.setState({ token: params.token })
        }
    }
    handleSubmit = async (values, { setSubmitting, resetForm }) => {
        const { actions } = this.props;
        setSubmitting(true);
        try {
            const res = await actions.resetPasswordAction({ ...values, token: this.state.token });
            const { status, verified } = res;
            if (status && verified) {
                resetForm();
                actions.showToast(
                    'Password has been changed',
                    TOAST_TYPE.SUCCESS
                );
            } else if (!status && !verified) {
                //resetForm();
                actions.showToast(
                    'Link has been expired',
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
        const e = execValidation({
            password: [
                isRequired('Password is required'),
                minLength(8, 'Password must be 8 characters long'),
                // strongPassWord(
                //   'PASSWORD SHOULD BE A MINIMUM OF 8 CHARACTERS WITH AT LEAST ONE ' +
                //     'CAPITAL LETTER, ONE LOWER CASE LETTER AND ONE NUMBER. PASSWORD ' +
                //     'CANNOT START WITH A NUMBER OR BE THE SAME AS YOUR EMAIL.'
                // ),
            ],
            confirmpassword: [
                (value, formValues) => {
                    return value !== formValues.password
                        ? 'Password does not match with Confirm Password'
                        : null;
                },
            ]
        }, values);
        console.log(e);
        return Object.keys(e) ? e : null;
    };


    render() {
        const { token } = this.state;

        return (
            <div style={{ paddingTop: '100px' }}>
                <div className="content-wrapper pb-0">
                    <section className="content-section w-100" style={{ backgroundImage: 'none' }}>

                        <div className="container pl-0 pr-0 pt-3">
                            <div className="row">
                                <div className="col-lg-12 mb-3 pl-0 pr-0">

                                    <h2 className="bha_heading_2 text-black font-xx mb-3 mt-5 text-center">Reset Password  </h2>
                                </div>
                            </div>
                            {token ?
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

                                            <div className="row">
                                                <div className="offset-4 col-sm-4 col-md-4   pl-0">
                                                    {isSubmitting ? <div>Loading...</div> : null}


                                                    <div className="form-group">
                                                        <input
                                                            type='password'
                                                            className="form-control input-control"
                                                            value={values.password}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            name="password"
                                                            placeholder="New Password"
                                                        />
                                                        <span className="errorMsg">
                                                            {errors.password && touched.password && errors.password}
                                                        </span>
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type='password'
                                                            className="form-control input-control"
                                                            value={values.confirmpassword}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            name="confirmpassword"
                                                            placeholder="Confirm New Password"
                                                        />
                                                        <span className="errorMsg">
                                                            {errors.confirmpassword &&
                                                                touched.confirmpassword &&
                                                                errors.confirmpassword}
                                                        </span>
                                                    </div>
                                                    <div className="form-group" >
                                                        <button
                                                            type="button"
                                                            className="btn bha-btn-primary float-left"
                                                            onClick={handleSubmit}
                                                            name="buttonsubmit"
                                                        >Submit</button>
                                                    </div>


                                                </div>
                                            </div>
                                            <hr />
                                        </Form>
                                    )}
                                </Formik>
                                :
                                <div className="row">
                                <div className="col-lg-12 mb-3 pl-0 pr-0">

                                    <h2 className="bha_heading_2 text-black font-xx mb-3 mt-5 text-center">Reset Password link expired  </h2>
                                </div>
                            </div>
                            }
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
            resetPasswordAction,
            showToast,
        },
        dispatch
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
