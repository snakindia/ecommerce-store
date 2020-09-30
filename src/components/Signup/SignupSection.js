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
      <section className="content-section w-100" style={{ backgroundImage: 'none' }}>
        {this.state.show ? (
          <div className="container pl-0 pr-0 pt-3">
            <div className="row">
              <div className="col-lg-12 mb-3 pl-0 pr-0">
                <h2 className="bha_heading_2 text-black font-xx mb-3 text-center">
                  Create Your Account
                </h2>
                <h2 className="bha_heading_2 text-black font-xx mb-3 mt-5 text-center">
                  NEW TO BAGHOUSE AMERICA? CREATE AN ACCOUNT BELOW
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 mb-5 pl-0 pr-0">
                <div className="benefits-of-registering float-left w-100">
                  <div className="row">
                    <div className="col-sm-8 col-md-8">
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
                    <div className="col-sm-4 col-md-4 mt-4">
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
