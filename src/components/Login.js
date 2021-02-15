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
       
    }

    onKeyPress =(e)=>{
        
            if(e.which=='13'){
                document.getElementById('loginsubmitbtn').click();
            }
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
                        <form onKeyPress={this.onKeyPress} id="loginformpopup">
                            <div className="d-block">
                               
                                    {/* <h4 className="login-heading font-xx">Account Sign In</h4> */}
                                    <div className="form-group">
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
                                        <div className="errorMsg">
                                            {errors.email && touched.email && errors.email}
                                        </div>
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
                                        <Link to="/forgot-password" className="forgotPwd pwdlink">
                                        Forgot?
                                        </Link>
                                    </div>
                                    {/* <div className="form-group">
                                        <Link to="/forgot-password" className="pwdlink">
                                            Forgot?
                                        </Link>
                                    </div> */}
                                    <div className="Privacy">
                                    By continuing, you agree to Baghouese America's Terms of Use and Privacy Policy.
                                    </div>
                                    <div className="form-group">
                                        <div className="errorMsg">
                                            {this.state.loginError || this.props.loginError}
                                        </div>
                                        <button
                                            type="button"
                                            id="loginsubmitbtn"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                handleSubmit();
                                            }}
                                            className="btn bha-btn-primary w-100"
                                        >
                                            Login
                                        </button>
                                        </div>
                                </div>
                                <div className="loginFooter">
                                        <Link to="/sign-up" className="w-100">
                                            New to Baghouse America? <span>Sign up</span>
                                        </Link>
                                </div>
                        </form>
                    )}
            </Formik>

        );
    }
}

