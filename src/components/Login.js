import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal4: false,
            modal5: false,
            fields: {},
            errors: {},
            loginError: null,
        };
        this.ref = React.createRef(null);
    }
    render() {
        return (
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Email address is required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = 'Password is required.';
                    }

                    return errors;
                }}
                onSubmit={this.props.onFormSubmit}
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
                        <form>
                            <div className="row">
                                <div className="col-sm-6 col-md-6 border-right border-secondary">
                                    <h4 className="login-heading font-xx">Account Sign In</h4>
                                    <div className="form-group mb-2">
                                        {/* <!-- <label>Mobile / Email Address</label> --> */}
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            onChange={e => {
                                                this.setState({ loginError: null });
                                                handleChange(e);
                                            }}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            placeholder="Email Address"
                                        />
                                        <span className="errorMsg">
                                            {errors.email && touched.email && errors.email}
                                        </span>
                                    </div>
                                    <div className="form-group pb-0 mb-3">
                                        {/* <!-- <label>Password</label> --> */}
                                        <input
                                            type="password"
                                            className="form-control"
                                            onChange={e => {
                                                this.setState({ loginError: null });
                                                handleChange(e);
                                            }}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            name="password"
                                            placeholder="Password"
                                        />
                                        <div className="errorMsg">
                                            {errors.password &&
                                                touched.password &&
                                                errors.password}
                                        </div>
                                    </div>
                                    <a href="/" className="pwdlink">
                                        Forgot Password?
                                    </a>
                                    <div className="form-group">
                                        <span className="errorMsg">
                                            {this.state.loginError || this.props.loginError}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                handleSubmit();
                                            }}
                                            className="btn bha-btn-primary w-100 mt-3"
                                        >
                                            Sign in
                                        </button>
                                        {/* <!-- <span className="float-right mt-4 text-muted"><a className="forgotpwd" href="forgot-pwd.html">Forgot Password?</a></span> --> */}
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6">
                                    <h4 className="login-heading font-xx">WHY JOIN?</h4>
                                    {/* {this.props.displaySignupContent()} */}
                                    <div className="form-group">
                                        <a
                                            href="/sign-up"
                                            className="btn bha-btn-primary w-100 mt-3"
                                        >
                                            Sign up
              </a>
                                        {/* <!-- <span className="float-right mt-4 text-muted"><a className="forgotpwd" href="forgot-pwd.html">Forgot Password?</a></span> --> */}
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
            </Formik>

        );
    }
}

