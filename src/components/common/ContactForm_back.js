import React, { Component } from 'react';
import { Field, Formik } from 'formik';
import { connect } from 'react-redux';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import { save_brochures_details } from '../../actions/freeBrochuresActions';
import { TOAST_TYPE } from '../Notification/action.constants';
import { showToast } from './../Notification/notification.actions';
import messages from '../../utils/messages';
import Input from '../common/Input';
class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleModal: true
        };
    }

    saveHandler(data) {
        data.type = 'Representative';
        this.props.saveBrochuresDetails(data);
    }

    render() {
        const initialValues = {
            name: '',
            company: '',
            email: '',
            phone: '',
            country: this.props.countryName ? this.props.countryName : '',
            description: '',
        }

        return (

            <div id="representus-contact" className="broucher-bg pattern pattern1">

                <div className="broucher-inner pt-3 pb-3">

                    <div className="">
                        <div className="">
                            <h2 className="apply_representation_heading font-weight-bold text-black" >
                                APPLY FOR REPRESENTATION
                        </h2>
                            <Formik
                                enableReinitialize
                                initialValues={initialValues}
                                validate={values => {
                                    const errors = {};
                                    if (!values.name) {
                                        errors.name = 'Name is required';
                                    }
                                    // else if (!/^[a-zA-Z ]*$/i.test(values.name)) {
                                    //     errors.name =
                                    //         'Please enter alphabet characters only';
                                    // }

                                    if (!values.phone) {
                                        errors.phone = 'Phone number is required';
                                    } else if (
                                        !/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i.test(
                                            values.phone
                                        )
                                    ) {
                                        errors.phone = 'Please enter valid phone number';
                                    }

                                    if (!values.company) {
                                        errors.company = 'Company name is required';
                                    }
                                    // else if (!/^[a-zA-Z ]*$/i.test(values.company)) {
                                    //     errors.company =
                                    //         'Please enter alphabet characters only';
                                    // }
                                    if (!values.country) {
                                        errors.country = 'Country name is required';
                                    } else if (!/^[a-zA-Z ]*$/i.test(values.country)) {
                                        errors.country =
                                            'Please enter alphabet characters only';
                                    }
                                    if (!values.description) {
                                        errors.description = 'Description is required';
                                    } else if (!/^[a-zA-Z ]*$/i.test(values.description)) {
                                        errors.description =
                                            'Please enter alphabet characters only';
                                    }

                                    if (!values.email) {
                                        errors.email = 'Email address is required';
                                    } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                            values.email
                                        )
                                    ) {
                                        errors.email = 'Invalid email address';
                                    }

                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting, resetForm }) => {
                                    this.saveHandler(values);
                                    //this.props.showToast("Thanks you for filling out your information! We are thrilling to hear from you. Our inbox can't wait to get your messages, so talk to us any time you like. Cheers!", TOAST_TYPE.SUCCESS);
                                    this.props.showToast(messages.footer, TOAST_TYPE.SUCCESS);
                                    resetForm()
                                }}
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
                                        <form onSubmit={handleSubmit}>
                                            <MDBRow toggle="true" >
                                                <MDBCol md="12">
                                                    <div className="form-group">
                                                        <label className="mb-0">Name *</label>
                                                        <Input
                                                            allow="spc"
                                                            type="text"
                                                            id="defaultFormCardNameEx"
                                                            className="form-control"
                                                            name="name"
                                                            value={values.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="Enter Name"
                                                        />
                                                        <span className="errorMsg">
                                                            {errors.name &&
                                                                touched.name &&
                                                                errors.name}
                                                        </span>
                                                    </div>
                                                </MDBCol>
                                            </MDBRow>

                                            <MDBRow>
                                                <MDBCol lg="12">
                                                    <div className="form-group">
                                                        <label className="mb-0">Company *</label>
                                                        <Input
                                                            allow="spc"
                                                            type="text"
                                                            id="defaultFormCardNameEx"
                                                            className="form-control"
                                                            placeholder="Enter Company Name"
                                                            name="company"
                                                            value={values.company}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        <span className="errorMsg">
                                                            {errors.company &&
                                                                touched.company &&
                                                                errors.company}
                                                        </span>
                                                    </div>
                                                </MDBCol>
                                            </MDBRow>

                                            <MDBRow>
                                                <MDBCol md="12">
                                                    <div className="form-group">
                                                        <label className="mb-0">Phone *</label>
                                                        <input
                                                            type="text"
                                                            id="defaultFormCardNameEx"
                                                            className="form-control"
                                                            placeholder="Enter Phone"
                                                            value={values.phone}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            name="phone"
                                                        />
                                                        <span className="errorMsg">
                                                            {errors.phone &&
                                                                touched.phone &&
                                                                errors.phone}
                                                        </span>
                                                    </div>
                                                </MDBCol>
                                            </MDBRow>

                                            <MDBRow>
                                                <MDBCol lg="12">
                                                    <div className="form-group">
                                                        <label className="mb-0">Email *</label>
                                                        <input
                                                            type="text"
                                                            id="defaultFormCardNameEx"
                                                            className="form-control"
                                                            name="email"
                                                            value={values.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="Enter Email Address"
                                                        />
                                                        <span className="errorMsg">
                                                            {errors.email &&
                                                                touched.email &&
                                                                errors.email}
                                                        </span>
                                                    </div>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol lg="12">
                                                    <div className="form-group">
                                                        <label className="mb-0">Country *</label>
                                                        <input
                                                            type="text"
                                                            id="defaultFormCardNameEx"
                                                            className="form-control"
                                                            name="country"
                                                            value={values.country}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="Enter Country name"
                                                        />
                                                        <span className="errorMsg">
                                                            {errors.country &&
                                                                touched.country &&
                                                                errors.country}
                                                        </span>
                                                    </div>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol lg="12">
                                                    <div className="form-group">
                                                        <label className="mb-0">Description *</label>
                                                        <Field
                                                            component="textarea"
                                                            rows="2"
                                                            maxLength="100"
                                                            id="description"
                                                            className="form-control-textarea"
                                                            name="description"
                                                            value={values.description}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="Enter Description"
                                                        />
                                                        <span className="errorMsg">
                                                            {errors.description &&
                                                                touched.description &&
                                                                errors.description}
                                                        </span>
                                                    </div>
                                                </MDBCol>
                                            </MDBRow>

                                            <div className="mt-2">
                                                <button
                                                    type="button"
                                                    onClick={handleSubmit}
                                                    className="btn bha-btn-primary w-100"
                                                >
                                                    Apply
                                </button>
                                            </div>
                                            {this.props.brochureData &&
                                                Object.keys(this.props.brochureData).length >
                                                0 &&
                                                this.props.brochureData.status == true && (
                                                    <div
                                                        style={{
                                                            color: 'green',
                                                            'background-color': '#fff',
                                                        }}
                                                    >
                                                        Data saved successfully
                                                    </div>
                                                )}
                                        </form>
                                    )}
                            </Formik>
                        </div>
                    </div>

                </div>
            </div>

        )

    }
}
const mSTP = ({ news }) => {
    return {
        brochureData: news.freeBrochuresUserDetail,
    }
};

const mapDispatchToProps = {
    saveBrochuresDetails: data => save_brochures_details(data),
    showToast,
};

export default connect(mSTP, mapDispatchToProps)(ContactForm);
