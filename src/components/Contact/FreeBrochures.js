import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export default class FreeBrochures extends Component {
  render() {
    return (
      <div className="form-outer float-left">
        <MDBContainer fluid>
          <form>
            <MDBRow className="custom-gutter">
              <MDBCol md="4" sm="6" lg="2" className="mt4">
                <h2 className="bha_heading_2">Free Brochures</h2>
              </MDBCol>
              <MDBCol md="4" sm="6" lg="2">
                <div className="form-group">
                  <label for="name">Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                  />
                </div>
              </MDBCol>
              <MDBCol md="4" sm="6" lg="2">
                <div className="form-group">
                  <label for="phone">Phone *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Phone"
                  />
                </div>
              </MDBCol>
              <MDBCol md="4" sm="6" lg="2">
                <div className="form-group">
                  <label for="emailaddress">Email Address *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
              </MDBCol>
              <MDBCol md="4" sm="6" lg="2">
                <div className="form-group">
                  <label for="companyname">Company Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Company Name"
                  />
                </div>
              </MDBCol>
              <MDBCol md="4" sm="6" lg="2" className="mt-4">
                <button type="submit" className="btn bha-btn-primary w-100">
                  Subscribe
                </button>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBContainer>
      </div>
    );
  }
}
