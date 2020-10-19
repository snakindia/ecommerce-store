import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
export default class PopupFormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitfreeBrochuresForm = this.submitfreeBrochuresForm.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }

  submitfreeBrochuresForm(e) {
    //    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields['username'] = '';
      fields['emailid'] = '';
      fields['mobileno'] = '';
      fields['companyname'] = '';
      this.setState({ fields: fields });
      alert('Form submitted');
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields['username']) {
      formIsValid = false;
      errors['username'] = '*Please enter your username.';
    }

    if (typeof fields['username'] !== 'undefined') {
      if (!fields['username'].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors['username'] = '*Please enter alphabet characters only.';
      }
    }

    if (!fields['emailid']) {
      formIsValid = false;
      errors['emailid'] = '*Please enter your email-ID.';
    }

    if (typeof fields['emailid'] !== 'undefined') {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields['emailid'])) {
        formIsValid = false;
        errors['emailid'] = '*Please enter valid email-ID.';
      }
    }

    if (!fields['mobileno']) {
      formIsValid = false;
      errors['mobileno'] = '*Please enter your mobile no.';
    }

    if (typeof fields['mobileno'] !== 'undefined') {
      if (!fields['mobileno'].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors['mobileno'] = '*Please enter valid mobile no.';
      }
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }

  render() {
    return (
      <div className="broucher-wrapper">
        <div className="broucher-inner">
          <h2 className="bha_heading_2">Free Brochures</h2>
          <p className="mt-3">
            Sign up to receive the lates infor on new Baghouse products, special
            offers and more.
          </p>
          <form>
            <MDBRow>
              <MDBCol md="6">
                <div className="form-group">
                  <label htmlFor="" className="white-text font-weight-bold">
                    Name*
                  </label>
                  <input
                    type="text"
                    id="defaultFormCardNameEx"
                    name="username"
                    value={this.state.fields.username}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="errorMsg">{this.state.errors.username}</div>
              </MDBCol>
              <MDBCol md="6">
                <div className="form-group">
                  <label htmlFor="" className="white-text font-weight-bold">
                    Phone*
                  </label>
                  <input
                    type="text"
                    id="defaultFormCardNameEx"
                    className="form-control"
                    placeholder="Enter Name"
                    name="mobileno"
                    value={this.state.fields.mobileno}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="errorMsg">{this.state.errors.mobileno}</div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol lg="12">
                <div className="form-group">
                  <label htmlFor="" className="white-text font-weight-bold">
                    Email Address *
                  </label>
                  <input
                    type="text"
                    id="defaultFormCardNameEx"
                    className="form-control"
                    placeholder="Enter Email"
                    name="emailid"
                    value={this.state.fields.emailid}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="errorMsg">{this.state.errors.emailid}</div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol lg="12">
                <div className="form-group">
                  <label htmlFor="" className="white-text font-weight-bold">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="defaultFormCardNameEx"
                    className="form-control"
                    placeholder="Enter Company Name"
                    name="companyname"
                    value={this.state.fields.companyname}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="errorMsg">{this.state.errors.companyname}</div>
                {/* <div className="chat-button pulse"><a href="/"><img src={Chat} className="mr-2" alt="" width="30" />Live Chat</a></div> */}
              </MDBCol>
            </MDBRow>
            <p className="mt-3">
              By signing up you agre to receive emails from Bhaghouse with new,
              special offers, promotions and other information. You can
              unsubscribe at any time. See Updated Privacy Policy or Contact Us
              at support.bhaghouse@gamil.com.
            </p>
            <div className="mt-5">
              <button type="button" className="btn bha-btn-primary w-100">
                subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
