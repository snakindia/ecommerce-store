import React, { Component } from 'react'

export default class SignupSection extends Component {
constructor(props){
  super(props);
  this.state = {
    fields: {},
    errors: {}
  }

  this.handleChange = this.handleChange.bind(this);
  this.submitsignupForm = this.submitsignupForm.bind(this);
}

handleChange(e) {
  let fields = this.state.fields;
  fields[e.target.name] = e.target.value;
  this.setState({
    fields
  });

}


submitsignupForm(e) {
  e.preventDefault();
  if (this.validateForm()) {
      let fields = {};
      fields["fname"] = "";
      fields["lname"] = "";
      fields["email"] = "";
      fields["phone"] = "";
      fields["zip"] = "";
      fields["password"] = "";
      fields["cpassword"] = "";
      this.setState({fields:fields});
      alert("Form submitted");
  }

}

validateForm() {
  let fields = this.state.fields;
  let errors = {};
  let formIsValid = true;
  if (!fields["fname"]) {
    formIsValid = false;
    errors["fname"] = "*Please enter your username.";
  }

  if (typeof fields["fname"] !== "undefined") {
    if (!fields["fname"].match(/^[a-zA-Z ]*$/)) {
      formIsValid = false;
      errors["fname"] = "*Please enter alphabet characters only.";
    }
  }
  if (!fields["lname"]) {
    formIsValid = false;
    errors["lname"] = "*Please enter your username.";
  }

  if (typeof fields["lname"] !== "undefined") {
    if (!fields["lname"].match(/^[a-zA-Z ]*$/)) {
      formIsValid = false;
      errors["lname"] = "*Please enter alphabet characters only.";
    }
  }
  

  }


  render() {
    return (
      <section class="content-section" style={{backgroundImage:'none'}}>
  <div class="container-fluid pt-3" id="message">
    <div class="row">
      <div class="col-lg-12 mb-3 pl-0 pr-0">
        <h2 class="bha_heading_2 text-black font-xx mb-3">Create Your Account</h2>
        <h2 class="bha_heading_2 text-black font-xx mb-3 mt-5">NEW TO BAGHOUSE AMERICA? CREATE AN ACCOUNT BELOW</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 mb-5 pl-0">
        <div class="benefits-of-registering float-left w-100">
          <div class="row">
            <div class="col-sm-9 col-md-9">
              <h2 class="bha_heading_2 text-black font-xx mb-3">Benifits of Registering</h2>
              <ul>
                <li>Quick and easy access to manuals, parts and documentation</li>
                <li>View related accessories and products to your registered tools</li>
                <li>Easily rate and review your DEWALT products
                </li>
              </ul>
            </div>
            <div class="col-sm-3 col-md-3 mt-4">
              <a href="/" data-toggle="modal" class="btn bha-btn-primary" name="buttonsubmit">Already Have an Account? Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <form method="post"  name="signupForm" >
             <div class="row">
        <div class="col-sm-6 col-md-6 pl-0">
              <div class="form-group">
        
                <input type="text" class="form-control input-control" name="fname" value={this.state.fields.fname} onChange={this.handleChange}  placeholder="First Name" />
                <div className="errorMsg">{this.state.errors.fname}</div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control input-control" name="email" value={this.state.fields.email} onChange={this.handleChange} placeholder="Email address" />
              </div>
              <div class="form-group">
                <select class="form-control input-control form-select text-muted" style={{fonntSize: '0.875rem'}}>
                  <option>United State</option>
                  <option>United State</option>
                  <option>United State</option>
                  <option>United State</option>
                </select>
              </div>
              <div class="form-group">
                <input type="text" class="form-control input-control" value={this.state.fields.password} onChange={this.handleChange} name="password" placeholder="Password" />
              </div>
          </div>
          <div class="col-sm-6 col-md-6 pr-0">
            <div class="form-group">
                <input type="text" class="form-control input-control" name="lname" value={this.state.fields.lname} onChange={this.handleChange} placeholder="Last Name" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control input-control" value={this.state.fields.phone} onChange={this.handleChange} name="phone" placeholder="Phone Number" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control input-control" value={this.state.fields.zipcode} onChange={this.handleChange} name="zipcode" placeholder="Zip Code" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control input-control" value={this.state.fields.cpassword} onChange={this.handleChange} name="cpassword" placeholder="Confirm Password" />
                <div class="mt-2 text-muted"><input type="checkbox" class="mr-2 mt-2" /><small>Show Password</small>
                </div>
              </div>
          </div>
        </div>
        <hr />
  <div class="container-fluid">
  <div class="row">
    <div class="col-sm-6 col-md-6 pl-0">
      <p><small><input type="checkbox" class="mr-3" />I WOULD LIKE TO RECEIVE INFORMATION ABOUT DEWALT PRODUCTS AND PROMOTIONS BY EMAIL</small></p>
      <p class="text-muted"><small>By signing up you agree to receive emails from BAGHOUSE AMERICA with news, special offers, promotions and other information. You can unsubscribe at any time. See Updated <a href="/" class="font-weight-bold text">Privacy Policy</a> or Contact Us at <a href="mailto:support.baghouseamrica@gmail.com" class="font-weight-bold">support.baghouseamrica@gmail.com</a> or 2415 East Camelback Road, Ste. 700, Phoenix, Arizona 85016, for more information.</small></p>
    </div>
    <div class="col-sm-6 col-md-6">
      <p><small><input type="checkbox" class="mr-3" />SIGN UP TO PARTICIPATE IN DEWALT PRODUCT RESEARCH</small></p>
       <div class="form-group">
        <button type="button" class="btn bha-btn-primary float-left" onClick={this.submitsignupForm} name="buttonsubmit">Submit</button>
      </div>
    </div>
  </div>
</div>

      </form>
  </div>
  
  </section>

    )
  }
}
