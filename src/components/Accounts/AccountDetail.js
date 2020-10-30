
import React from 'react';
import { connect } from 'react-redux'
import { updateDetail, changePassword } from './store/Actions';
import { Field, Form, Formik } from 'formik';
import Input from '../common/Input'
import Error from '../common/Error'
class AccountDetail extends React.Component {
    componentDidMount() {

    }
    cancelIt = (e) => {
        e.preventDefault();
        const { match: { params: { id } } } = this.props;
        const status_id = '5f9a6bb5d5bf4b236045d17a';
        this.props.cancelOrder({ id, status_id });
    }

    render() {
        const data =this.props.user;
        const initialValues ={
            first_name:data && data.first_name ? data.first_name :"",
            last_name:data && data.last_name ? data.last_name :"",
            full_name:data && data.full_name ? data.full_name :"",
        }
        const initialValues2 ={
            current_password:"",
            password:"",
            password_confirm:"",
        }

        return (
            <div className="tabContainer">
                <div className="tabs">
                    <input type="radio" name="tabs" id="tabone" checked="checked" />
                    <label for="tabone">Account Details</label>
                    <div className="tab">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12 p-0">
                                    <Formik
                                        enableReinitialize
                                        initialValues={initialValues}
                                        onSubmit={(values, { setSubmitting, resetForm, errors }) => {
                                            setSubmitting(false);
                                            this.props.updateDetail(values)
                                        }}
                                        validate={values => {
                                            const errors = {};
                                            if (!values.first_name) errors.first_name = 'First Name is Required';
                                            if (!values.last_name) errors.last_name = 'Last Name is Required';
                                            if (!values.full_name) errors.full_name = 'Display Name  is Required';
                                            return errors;
                                        }}
                                    >
                                        {formikProps => <Form >
                                            <div className="form-row pt-3">
                                                <div className="form-group col-md-6">
                                                    <div className="form-group">
                                                        <Input
                                                            allow="text"
                                                            length={50}
                                                            name="first_name"
                                                            formik={formikProps}
                                                            className="form-control input-control"
                                                            placeholder="First Name" autoComplete="off"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <div className="form-group">
                                                        <Input
                                                            allow="text"
                                                            length={50}
                                                            name="last_name"
                                                            formik={formikProps}
                                                            className="form-control input-control"
                                                            placeholder="Last Name" autoComplete="off"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <Input
                                                    allow="text"
                                                    length={50}
                                                    name="full_name"
                                                    formik={formikProps}
                                                    className="form-control input-control"
                                                    placeholder="Display Name" autoComplete="off"
                                                />


                                                <p className="small" style={{ fontStyle: 'italic' }}>This will be how your name will be displayed in the account section and in reviews</p>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-group">
                                                    <input disbaled={true} 
                                                    disabled={true}
                                                    value={data && data.email ? data.email :''}
                                                    type="text" className="form-control input-control" name="email" placeholder="Email Address" />
                                                </div>
                                            </div>
                                            <Error el={['first_name','last_name','full_name']} formik={formikProps} />
                                            <div className="col-lg-12 pr-0 pl-0 text-sm-right">
                                                <button type="submit" className="btn btn-bha-primary font-weight-bold" >Update</button>
                                            </div>
                                        </Form>
                                        }
                                    </Formik>

                                    <Formik
                                        enableReinitialize
                                        initialValues={initialValues2}
                                        onSubmit={(values, { setSubmitting, resetForm, errors }) => {
                                            setSubmitting(false);
                                            this.props.changePassword(values)
                                        }}
                                        validate={values => {
                                            const errors = {};
                                            if (!values.password) errors.password = 'New Password is Required';
                                            else if (values.password.length <5) errors.password = 'New Password must 6 charactors long';
                                            if (!values.current_password) errors.current_password = 'Old Password is Required';
                                            if (!values.password_confirm) errors.password_confirm = 'Confirm password is required';
                                            else if (values.password_confirm.length <5) errors.password_confirm = 'Confirm Password must 6 charactors long';
                                            if (values.password_confirm && values.password && values.password !=values.password_confirm) errors.password_confirm = 'New Password and Confirm Password not matched';
                                            return errors;
                                        }}
                                    >
                                        {formikProps => <Form >
                                            <div className="row">
                                                <div className="col-lg-12 pt-0">
                                                    <h5 className="pb-2 pt-3">Password Change</h5>
                                                    <div className="form-group">
                                                        <Field type="password" className="form-control input-control" name="current_password" 
                                                        autoComplete="off"
                                                        value={formikProps.values.current_password}
                                                        onChange={e=>{
                                                            formikProps.setFieldTouched('current_password',true);
                                                            formikProps.setFieldValue('current_password',e.target.value)
                                                        }}
                                                        placeholder="Current Password" />
                                                    </div>

                                                    <div className="form-group">
                                                        <Field type="password"autoComplete="off" 
                                                         value={formikProps.values.password}
                                                         onChange={e=>{
                                                             formikProps.setFieldTouched('password',true);
                                                             formikProps.setFieldValue('password',e.target.value)
                                                         }}
                                                        className="form-control input-control" name="password" placeholder="New Password" />
                                                    </div>

                                                    <div className="form-group">
                                                        <Field type="password"autoComplete="off" className="form-control input-control" 
                                                         value={formikProps.values.password_confirm}
                                                         onChange={e=>{
                                                             formikProps.setFieldTouched('password_confirm',true);
                                                             formikProps.setFieldValue('password_confirm',e.target.value)
                                                         }}
                                                        name="password_confirm" placeholder="Confirm Password" />
                                                    </div>
                                                </div>
                                            </div>
                                            <Error el={['current_password','password','password_confirm','same']} formik={formikProps} />
                                            <div className="col-lg-12 pr-0 pl-0 text-sm-right">
                                                <button type="submit" className="btn btn-bha-primary font-weight-bold" >Change Password</button>
                                            </div>
                                        </Form>
                                        }
                                    </Formik>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    loadingCart: state.accounts.loadingCart,
    loading: state.accounts.loading,
    error: state.accounts.error,
    authenticated: state.auth.authenticated,
    user: state.auth.customer_settings,
});
const mapDispatchToProps = dispatch => ({
    updateDetail: (payload) => dispatch(updateDetail(payload)),
    changePassword: (payload) => dispatch(changePassword(payload)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountDetail);