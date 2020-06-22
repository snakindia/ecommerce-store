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
  if (this.validateForm()) {
      let fields = {};
      fields["fname"] = "";
      fields["lname"] = "";
      fields["companyname"] = "";
      fields["email"] = "";
      fields["phone"] = "";
      fields["zipcode"] = "";
      fields["password"] = "";
      fields["confirmpassword"] = "";
      this.setState({fields:fields});
      alert("Form submitted");
  }
//   var url ="http://127.0.0.1:3001/ajax/{{bha-instance}}/authorize"
// fetch(url,{
//   method:'post',
//   headers: {
//     'Accept': 'application/json',
//     'content-Type': 'application/json' 
//   },
//   body: JSON.stringify({
//     fields:this.state.fields
//   })
// }).then((Response) => Response.json())
//   .then((Result) =>{
//     if(Result.status)
//   })


//  e.preventDefault();

}

validateForm() {
  let fields = this.state.fields;
  let errors = {};
  let formIsValid = true;
  if (!fields["fname"]) {
    errors["fname"] = "FIRST NAME IS REQUIRED.";
  }

  if (typeof fields["fname"] !== "undefined") {
    if (!fields["fname"].match(/^[a-zA-Z ]*$/)) {
      formIsValid = false;
      errors["fname"] = "*Please enter alphabet characters only.";
    }
  }
  if (!fields["lname"]) {
    formIsValid = false;
    errors["lname"] = "LAST NAME IS REQUIRED.";
  }

  if (typeof fields["lname"] !== "undefined") {
    if (!fields["lname"].match(/^[a-zA-Z ]*$/)) {
      formIsValid = false;
      errors["lname"] = "*Please enter alphabet characters only.";
    }
  }
  if (!fields["companyname"]) {
    formIsValid = false;
    errors["companyname"] = "Company NAME IS REQUIRED.";
  }

  if (typeof fields["companyname"] !== "undefined") {
    if (!fields["companyname"].match(/^[a-zA-Z0-9 ]*$/)) {
      formIsValid = false;
      errors["companyname"] = "*Please enter alphabet characters only.";
    }
  }


  if (!fields["email"]) {
    formIsValid = false;
    errors["email"] = "EMAIL ADDRESS IS REQUIRED.";
  }

  if (typeof fields["email"] !== "undefined") {
    //regular expression for email validation
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(fields["email"])) {
      formIsValid = false;
      errors["email"] = "*Please enter valid email-ID.";
    }
  }




  if (!fields["zipcode"]) {
    formIsValid = false;
    errors["zipcode"] = "POSTAL/ZIP IS REQUIRED.";
  }

  if (typeof fields["zipcode"] !== "undefined") {
    if (!fields["zipcode"].match(/^[0-9]{6}$/)) {
      formIsValid = false;
      errors["zipcode"] = "*Please enter valid zipcode.";
    }
  }


  if (!fields["password"]) {
    formIsValid = false;
    errors["password"] = "PASSWORD IS REQUIRED.";
  }

  if (!fields["confirmpassword"]) {
    formIsValid = false;
    errors["confirmpassword"] = "PLEASE CONFIRM YOUR PASSWORD.";
  }

  if (typeof fields["password"] !== "undefined" && typeof fields["confirmpassword"] !== "undefined") {
      
    if (fields["password"] != fields["confirmpassword"]) {
      formIsValid = false;
      errors["password"] = "PASSWORDS DO NOT MATCH.";
    }
  }



  this.setState({
    errors: errors
  });
  return formIsValid;


  }


  render() {
    return (
      <section className="content-section" style={{backgroundImage:'none'}}>
  <div className="container-fluid pt-3" id="message">
    <div className="row">
      <div className="col-lg-12 mb-3 pl-0 pr-0">
        <h2 className="bha_heading_2 text-black font-xx mb-3">Create Your Account</h2>
        <h2 className="bha_heading_2 text-black font-xx mb-3 mt-5">NEW TO BAGHOUSE AMERICA? CREATE AN ACCOUNT BELOW</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 mb-5 pl-0">
        <div className="benefits-of-registering float-left w-100">
          <div className="row">
            <div className="col-sm-9 col-md-9">
              <h2 className="bha_heading_2 text-black font-xx mb-3">Benifits of Registering</h2>
              <ul>
                <li>Quick and easy access to manuals, parts and documentation</li>
                <li>View related accessories and products to your registered tools</li>
                <li>Easily rate and review your DEWALT products
                </li>
              </ul>
            </div>
            <div className="col-sm-3 col-md-3 mt-4">
              <a href="/" data-toggle="modal" className="btn bha-btn-primary" name="buttonsubmit">Already Have an Account? Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <form method="post">
             <div className="row">
        <div className="col-sm-6 col-md-6 pl-0">
              <div class="form-group">
        
                <input type="text" className="form-control input-control" name="fname" value={this.state.fields.fname} onChange={this.handleChange}  placeholder="First Name" />
                <span className="errorMsg">{this.state.errors.fname}</span>
              </div>
              <div className="form-group">
                <input type="text" className="form-control input-control" name="lname" value={this.state.fields.lname} onChange={this.handleChange} placeholder="Last Name" />
                <span className="errorMsg">{this.state.errors.lname}</span>
              </div>
              <div class="form-group">
                <input type="text" class="form-control input-control"  name="lname" value={this.state.fields.companyname} onChange={this.handleChange} placeholder="Company Name" />
                <span className="errorMsg">{this.state.errors.companyname}</span>
              </div>
              <div className="form-group">
                <input type="text" className="form-control input-control" name="email" value={this.state.fields.email} onChange={this.handleChange} placeholder="Email address" />
                <span className="errorMsg">{this.state.errors.email}</span>
              </div>
              <div className="form-group">
                <input type="text" className="form-control input-control" value={this.state.fields.password} onChange={this.handleChange} name="password" placeholder="Password" />
                <span className="errorMsg">{this.state.errors.password}</span>
              </div>
          </div>
          <div className="col-sm-6 col-md-6 pr-0">
          <div className="form-group">
                <select className="form-control input-control form-select text-muted" style={{fonntSize: '0.875rem'}}>
                  <option>United State</option>
                  <option>United State</option>
                  <option>United State</option>
                  <option>United State</option>
                </select>
              </div>
              <div className="form-group">
                <input type="text" className="form-control input-control" value={this.state.fields.phone} onChange={this.handleChange} name="phone" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control input-control" value={this.state.fields.zipcode} onChange={this.handleChange} name="zipcode" placeholder="Zip Code" />
                <span className="errorMsg">{this.state.errors.zipcode}</span>
              </div>
              <div className="form-group">
                <input type="text" className="form-control input-control" value={this.state.fields.confirmpassword} onChange={this.handleChange} name="confirmpassword" placeholder="Confirm Password" />
                <span className="errorMsg">{this.state.errors.confirmpassword}</span>

                <div className="mt-2 text-muted"><input type="checkbox" className="mr-2 mt-2" /><small>Show Password</small>
                </div>
                <div class="form-group">
                <div><input type="checkbox" class="mr-2 mt-3" />I would like to receive updates and offers</div>
            </div>
              </div>
          </div>
        </div>
        <hr />
  <div className="container-fluid">
  <div className="row">
    <div className="col-sm-6 col-md-6 pl-0">
      <p><small><input type="checkbox" className="mr-3" />I WOULD LIKE TO RECEIVE INFORMATION ABOUT DEWALT PRODUCTS AND PROMOTIONS BY EMAIL</small></p>
      <p className="text-muted"><small>By signing up you agree to receive emails from BAGHOUSE AMERICA with news, special offers, promotions and other information. You can unsubscribe at any time. See Updated <a href="/" className="font-weight-bold text">Privacy Policy</a> or Contact Us at <a href="mailto:support.baghouseamrica@gmail.com" className="font-weight-bold">support.baghouseamrica@gmail.com</a> or 2415 East Camelback Road, Ste. 700, Phoenix, Arizona 85016, for more information.</small></p>
    </div>
    <div className="col-sm-6 col-md-6">
      <p><small><input type="checkbox" className="mr-3" />SIGN UP TO PARTICIPATE IN DEWALT PRODUCT RESEARCH</small></p>
       <div className="form-group">
        <button type="button" className="btn bha-btn-primary float-left" onClick={() =>{this.submitsignupForm()}} name="buttonsubmit">Submit</button>
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
