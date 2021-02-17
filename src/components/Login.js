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
                            <div className="row">
                               
                                    <h4 className="login-heading font-xx">Account Sign In</h4>
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
                                    <div className="form-group">
                                    <Link to="/forgot-password" className="pwdlink">
                                        Forgot Password?
                                    </Link>
                                    </div>
                                    <div className="form-group">
                                        <span className="errorMsg">
                                            {this.state.loginError || this.props.loginError}
                                        </span>
                                        <button
                                            type="button"
                                            id="loginsubmitbtn"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                handleSubmit();
                                            }}
                                            className="btn bha-btn-primary w-100 mt-3"
                                        >
                                            Sign in
                                        </button>
                                        </div>
                                </div>
                                <div className="row">
                                    <div className="form-group">
                                        <Link to="/sign-up" className="btn bha-btn-primary w-100 mt-3" >    Sign up</Link>
                                    </div>
                                </div>
                        </form>
                    )}
            </Formik>

        );
    }
}

