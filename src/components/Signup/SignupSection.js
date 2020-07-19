import React, { Component } from 'react';
import SignUpForm from './SignUpForm';

export default class SignupSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      show: true,
    };
  }

  render() {
    return (
      <section className="content-section" style={{ backgroundImage: 'none' }}>
        {this.state.show ? (
          <div className="container-fluid pt-3" id="message">
            <div className="row">
              <div className="col-lg-12 mb-3 pl-0 pr-0">
                <h2 className="bha_heading_2 text-black font-xx mb-3">
                  Create Your Account
                </h2>
                <h2 className="bha_heading_2 text-black font-xx mb-3 mt-5">
                  NEW TO BAGHOUSE AMERICA? CREATE AN ACCOUNT BELOW
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 mb-5 pl-0">
                <div className="benefits-of-registering float-left w-100">
                  <div className="row">
                    <div className="col-sm-9 col-md-9">
                      <h2 className="bha_heading_2 text-black font-xx mb-3">
                        Benifits of Registering
                      </h2>
                      <ul>
                        <li>
                          Quick and easy access to manuals, parts and
                          documentation
                        </li>
                        <li>
                          View related accessories and products to your
                          registered tools
                        </li>
                        <li>Easily rate and review your BAGHOUSE products</li>
                      </ul>
                    </div>
                    <div className="col-sm-3 col-md-3 mt-4">
                      <a
                        href="/"
                        data-toggle="modal"
                        className="btn bha-btn-primary"
                        name="buttonsubmit"
                      >
                        Already Have an Account? Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SignUpForm {...this.props} />
          </div>
        ) : (
          <div style={{ color: 'green' }}>
            Mail has been sent to your email address. Please click on the link
            provided in mail for verification
          </div>
        )}
      </section>
    );
  }
}
