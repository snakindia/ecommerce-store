import React, { Component } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from 'mdbreact';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import Arizona from '../../assets/images/Arizona.png';
import Florida from '../../assets/images/Florida.png';
import Brazil from '../../assets/images/Brazil.png';
import Israel from '../../assets/images/Israel.jpg';
import SouthAfrica from '../../assets/images/South Africa.jpg';
import item2 from '../../assets/images/thumbnail-img/item2.png';
import { save_brochures_details } from '../../actions/freeBrochuresActions';
import Input from '../common/Input';
import Error from '../common/Error';
class ContentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: '1',
      modal14: false,
      isVerified: false,
    };
    //this.handleSubscribe = this.handleSubscribe.bind(this);
//    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
  }
  toggle = tab => () => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };

//  recaptchaLoaded() {}

  // handleSubscribe(){
  //   if(this.state.isVerified){
  //     alert("You have successfully subscribe")
  //   }
  //   alert("Please verify that you are a human")
  // }

  render() {
    return (
      <div>
        <section className="content-wrapper pb-0">
          <div className="pagewrap">
            <div className="bgWhite">
              <div className="container pt-5">
                <div className="row">
                  <div className="col-sm-9 col-md-9 mb-5 pr-4">
                    <h2 className="bha_heading_2 text-black font-xx mb-3">
                      BAGHOUSE AMERICA
                    </h2>
                    <div className="row no-gutters">
                      <div className="col-md-3 mb-3">
                        <ul
                          className="nav nav-pills flex-column"
                          id="myTab"
                          role="tablist"
                        >
                          <li className="nav-item">
                            {/* <a className="nav-link active" id="home-tab" data-toggle="tab" href="#tab_1" role="tab" aria-controls="home" aria-selected="true">United States</a> */}
                            <MDBNavLink
                              link
                              to="#"
                              active={this.state.activeItem === '1'}
                              onClick={this.toggle('1')}
                              role="tab"
                            >
                              United States
                            </MDBNavLink>
                          </li>
                          <li className="nav-item">
                            {/* <a className="nav-link" id="profile-tab" data-toggle="tab" href="#tab_2" role="tab" aria-controls="profile" aria-selected="false">South America</a> */}
                            <MDBNavLink
                              link
                              to="#"
                              active={this.state.activeItem === '2'}
                              onClick={this.toggle('2')}
                              role="tab"
                            >
                              South America
                            </MDBNavLink>
                          </li>
                          <li className="nav-item">
                            {/* <a className="nav-link" id="contact-tab" data-toggle="tab" href="#tab_3" role="tab" aria-controls="contact" aria-selected="false">Israel</a> */}
                            <MDBNavLink
                              link
                              to="#"
                              active={this.state.activeItem === '3'}
                              onClick={this.toggle('3')}
                              role="tab"
                            >
                              Israel
                            </MDBNavLink>
                          </li>
                          <li className="nav-item">
                            {/* <a className="nav-link" id="contact-tab" data-toggle="tab" href="#tab_4" role="tab" aria-controls="contact" aria-selected="false">South Africa</a> */}
                            <MDBNavLink
                              link
                              to="#"
                              active={this.state.activeItem === '4'}
                              onClick={this.toggle('4')}
                              role="tab"
                            >
                              South Africa
                            </MDBNavLink>
                          </li>
                        </ul>
                        <div className="bha-left">
                          <img className="img-fluid" src={item2} alt="" />
                          <div className="bha-left-head">
                            CONTACT US FOR THE BEST DUST COLLECTOR SUPPLIES
                          </div>
                        </div>
                      </div>

                      {/* <!-- /.col-md-4 -->  */}
                      <div className="col-md-9">
                        <MDBTabContent
                          className="tab-content"
                          activeItem={this.state.activeItem}
                        >
                          <MDBTabPane
                            tabId="1"
                            role="tabpanel"
                            className="tab-pane fade show"
                          >
                            <div id="bhaLocation"></div>
                            <div className="row">
                              <div className="col-sm-6 mb-4">
                                <div className="text-left">
                                  <div className="location float-left">
                                    <h5 className="location_head">Arizona</h5>
                                    <div className="text-small">
                                      2415 East Camelback Road, Ste. 700,
                                      Phoenix, Arizona, P.O. Box: 6887,
                                      Goodyear, Arizona 85338, United States
                                    </div>
                                  </div>
                                  <div className="mt-4 float-left">
                                    <i className="fa fa-phone bha-icon mr-1"></i>
                                    <span className="font-weight-bold phone-font-size">
                                      (888) 739 1794
                                    </span>
                                    <i
                                      className="fa fa-fax bha-icon mr-2 ml-1"
                                      aria-hidden="true"
                                    ></i>
                                    <span className="font-weight-bold phone-font-size">
                                      (800) 632 1533
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 mb-4">
                                <div className="text-left">
                                  <div className="location float-left">
                                    <h5 className="location_head">Florida</h5>
                                    <div className="text-small">
                                      International Sales Office, North, South,
                                      &amp; Central America, 801 Brickell
                                      Avenue, Suite 900, Miami, Florida, 33131,
                                      United States
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-4 float-left">
                                  <i className="fa fa-phone bha-icon mr-3"></i>
                                  <span className="font-weight-bold phone-font-size">
                                    +1.786.422.5225
                                  </span>
                                </div>
                              </div>
                            </div>
                            <hr />
                            <div className="col-lg-12 pl-0 text-small">
                              We are here to make sure you get an industrial
                              dust collector that will fulfill your needs.
                              That’s what makes us the best dust collector
                              source in the world. Whether you need dust
                              collector filter bags, valves, or a whole new
                              system, we are the answer. Get in touch to start a
                              conversation today!
                            </div>

                            <div className="row ">
                              <div className="col-md-6 col-100">
                                <div className="mt-4 float-left">
                                  <i className="fa fa-envelope bha-icon mr-3"></i>
                                  <span className="font-weight-normal phone-font-size email-font-size">
                                    <a href="mailto:info@baghouseamerica.com">
                                      Info@baghouseamerica.com
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-6 col-100">
                                <div className="mt-4 float-left">
                                  <i className="fa fa-envelope bha-icon mr-3"></i>
                                  <span className="font-weight-normal email-font-size">
                                    <a href="mailto:sales@baghouseamerica.com">
                                      Sales@baghouseamerica.com
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-6 col-100">
                                <div className="mt-4 float-left">
                                  <i className="fa fa-envelope bha-icon mr-3"></i>
                                  <span className="font-weight-normal email-font-size">
                                    <a href="purchasing@baghouseamerica.com">
                                      Purchasing@baghouseamerica.com
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-6 col-100">
                                <div className="mt-4 float-left">
                                  <i className="fa fa-envelope bha-icon mr-3"></i>
                                  <span className="font-weight-normal email-font-size">
                                    <a href="hr@baghouseamerica.com">
                                      Hr@baghouseamerica.com
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-6 col-100">
                                <div className="mt-4 float-left">
                                  <i className="fa fa-envelope bha-icon mr-3"></i>
                                  <span className="font-weight-normal email-font-size">
                                    <a href="finance@baghouseamerica.com">
                                      Finance@baghouseamerica.com
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </MDBTabPane>

                          <MDBTabPane
                            tabId="2"
                            role="tabpanel"
                            className="tab-pane fade show"
                          >
                            <div className="row">
                              <div className="col-sm-6 mb-4">
                                <div className="text-left">
                                  <div className="location float-left">
                                    <h5 className="location_head">Brazil</h5>
                                    <div className="text-small">
                                      Edifício Candelária Corporate , Rua
                                      Candelária, 65, #1600, Rio de Janeiro,
                                      \n Brazil
                                    </div>
                                  </div>
                                  <div className="mt-4 float-left">
                                    <i className="fa fa-phone bha-icon mr-1"></i>
                                    <span className="font-weight-bold phone-font-size">
                                      +552139587260
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr />
                            <div className="col-lg-12 pl-0 text-small">
                              We are here to make sure you get an industrial
                              dust collector that will fulfill your needs.
                              That’s what makes us the best dust collector
                              source in the world. Whether you need dust
                              collector filter bags, valves, or a whole new
                              system, we are the answer. Get in touch to start a
                              conversation today!
                            </div>

                            <div className="row">
                              <div className="col-md-6 col-100">
                                <div className="mt-4 float-left">
                                  <i className="fa fa-envelope bha-icon mr-3"></i>
                                  <span className="font-weight-normal email-font-size">
                                    <a href="mailto:info@baghouseamerica.com">
                                      Info@baghouseamerica.com
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-6 col-100">
                                <div className="mt-4 float-left">
                                  <i className="fa fa-envelope bha-icon mr-3"></i>
                                  <span className="font-weight-normal email-font-size">
                                    <a href="mailto:sales@baghouseamerica.com">
                                      Sales@baghouseamerica.com
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-6 col-100">
                                <div className="mt-4 float-left">
                                  <i className="fa fa-envelope bha-icon mr-3"></i>
                                  <span className="font-weight-normal email-font-size">
                                    <a href="purchasing@baghouseamerica.com">
                                      Purchasing@baghouseamerica.com
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-6 col-100">
                                <div className="mt-4 float-left">
                                  <i className="fa fa-envelope bha-icon mr-3"></i>
                                  <span className="font-weight-normal email-font-size">
                                    <a href="hr@baghouseamerica.com">
                                      Hr@baghouseamerica.com
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-6 col-100">
                                <div className="mt-4 float-left">
                                  <i className="fa fa-envelope bha-icon mr-3"></i>
                                  <span className="font-weight-normal email-font-size">
                                    <a href="finance@baghouseamerica.com">
                                      Finance@baghouseamerica.com
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </MDBTabPane>
                          <MDBTabPane
                            tabId="3"
                            role="tabpanel"
                            className="tab-pane fade show"
                          >
                            <div className="row">
                              <div className="col-sm-6 mb-4">
                                <div className="text-left">
                                  <div className="location float-left">
                                    <h5 className="location_head">
                                      Eurasia &amp; Oceania
                                    </h5>
                                    <div className="text-small">
                                      International Sales Office - 12 Abba
                                      Hillel Street, Suite 1600, 52136
                                      Ramat-Gan, Tel-Aviv, Israel
                                    </div>
                                  </div>
                                  <div className="mt-4 float-left">
                                    <i className="fa fa-envelope bha-icon mr-3"></i>
                                    <span className="font-weight-bold phone-font-size">
                                      sales@baghouseamerica.com
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <hr />
                            <div className="col-lg-12 pl-0 text-small">
                              We are here to make sure you get an industrial
                              dust collector that will fulfill your needs.
                              That’s what makes us the best dust collector
                              source in the world. Whether you need dust
                              collector filter bags, valves, or a whole new
                              system, we are the answer. Get in touch to start a
                              conversation today!
                            </div>

                            <div className="row">
                              <div className="col-md-6 col-100">
                                <div className="mt-4 float-left">
                                  <i className="fa fa-envelope bha-icon mr-3"></i>
                                  <span className="font-weight-normal email-font-size">
                                    <a href="mailto:info@baghouseamerica.com">
                                      Info@baghouseamerica.com
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-6 col-100">
                                <div className="mt-4 float-left">
                                  <i className="fa fa-envelope bha-icon mr-3"></i>
                                  <span className="font-weight-normal email-font-size">
                                    <a href="mailto:sales@baghouseamerica.com">
                                      Sales@baghouseamerica.com
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-6 col-100">
                                <div className="mt-4 float-left">
                                  <i className="fa fa-envelope bha-icon mr-3"></i>
                                  <span className="font-weight-normal email-font-size">
                                    <a href="purchasing@baghouseamerica.com">
                                      Purchasing@baghouseamerica.com
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-6 col-100">
                                <div className="mt-4 float-left">
                                  <i className="fa fa-envelope bha-icon mr-3"></i>
                                  <span className="font-weight-normal email-font-size">
                                    <a href="hr@baghouseamerica.com">
                                      Hr@baghouseamerica.com
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-6 col-100">
                                <div className="mt-4 float-left">
                                  <i className="fa fa-envelope bha-icon mr-3"></i>
                                  <span className="font-weight-normal email-font-size">
                                    <a href="finance@baghouseamerica.com">
                                      Finance@baghouseamerica.com
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </MDBTabPane>
                          <MDBTabPane
                            tabId="4"
                            role="tabpanel"
                            className="tab-pane fade show"
                          >
                            <div className="row">
                              <div className="col-sm-6 mb-4">
                                <div className="text-left">
                                  <div className="location float-left">
                                    <h5 className="location_head">Johannesburg</h5>
                                    <div className="text-small">
                                      Africa- Block B &amp; Block C,
                                      Metropolitan Park, 8 Hillside Road, Suite
                                      1000 Parktown, Johannesburg, 2196, South
                                      Africa
                                    </div>
                                  </div>
                                  <div className="mt-4 float-left">
                                    <i className="fa fa-phone bha-icon mr-3"></i>
                                    <span className="font-weight-bold phone-font-size">
                                      +27105008604
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr />
                            <div className="col-lg-12 pl-0 text-small">
                              We are here to make sure you get an industrial
                              dust collector that will fulfill your needs.
                              That’s what makes us the best dust collector
                              source in the world. Whether you need dust
                              collector filter bags, valves, or a whole new
                              system, we are the answer. Get in touch to start a
                              conversation today!
                            </div>
                            <div className="row">
                              <div className="col-md-6 col-100">
                                <div className="mt-4 float-left">
                                  <i className="fa fa-envelope bha-icon mr-3"></i>
                                  <span className="font-weight-normal email-font-size">
                                    <a href="mailto:info@baghouseamerica.com">
                                      Info@baghouseamerica.com
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-6 col-100">
                                <div className="mt-4 float-left">
                                  <i className="fa fa-envelope bha-icon mr-3"></i>
                                  <span className="font-weight-normal email-font-size">
                                    <a href="mailto:sales@baghouseamerica.com">
                                      Sales@baghouseamerica.com
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-6 col-100">
                                <div className="mt-4 float-left">
                                  <i className="fa fa-envelope bha-icon mr-3"></i>
                                  <span className="font-weight-normal email-font-size">
                                    <a href="purchasing@baghouseamerica.com">
                                      Purchasing@baghouseamerica.com
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-6 col-100">
                                <div className="mt-4 float-left">
                                  <i className="fa fa-envelope bha-icon mr-3"></i>
                                  <span className="font-weight-normal email-font-size">
                                    <a href="hr@baghouseamerica.com">
                                      Hr@baghouseamerica.com
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-6 col-100">
                                <div className="mt-4 float-left">
                                  <i className="fa fa-envelope bha-icon mr-3"></i>
                                  <span className="font-weight-normal email-font-size">
                                    <a href="finance@baghouseamerica.com">
                                      Finance@baghouseamerica.com
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </MDBTabPane>
                        </MDBTabContent>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-3 col-lg-3 pl-0 pr-0 userContactForm">
                    <Formik
                      initialValues={{
                        name: '',
                        message: '',
                        email: '',
                        phone: ''
                      }}
                      validate={values => {
                        const errors = {};
                        if (!values.name) {
                          errors.name = 'Full Name is required';
                        }
                        //  else if (!/^[a-zA-Z ]*$/i.test(values.name)) {
                        //   errors.name = 'Please enter alphabet characters only';
                        // }

                        if (!values.phone) {
                          errors.phone = 'Phone Number is required';
                        }
                        //  else if (
                        //   !/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i.test(
                        //     values.phone
                        //   )
                        // ) {
                        //   errors.phone = 'Please enter valid Phone Number';
                        // }

                        if (!values.message) {
                          errors.message = 'Message is required';
                        }
                        //  else if (values.message.length > 200) {
                        //   errors.message =
                        //     'Message is not more 200 characters than long';
                        // }
                        //  else if (!/^[a-zA-Z ]*$/i.test(values.message)) {
                        //   errors.message =
                        //     'Please enter alphabet characters only';
                        // }

                        if (!values.email) {
                          errors.email = 'Email Address is required';
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
                        Object.assign(values, { type: 'Contact' });
                        this.props.dispatch(save_brochures_details(values));
                        resetForm()
                      }}
                    >
                      {(formik) => (
                        <form>
                          <div className="row">
                            <div className="col-lg-12">
                              <h2 className="bha_heading_2 text-black font-xx mb-3">
                                Contact Us
                              </h2>
                            </div>

                            <div className="col-lg-12 contact-us-form">
                              <div className="form-group">
                                <label className="text-small">Full Name *</label>
                                <Input
                                  type="text"
                                  className="form-control input-control"
                                  name="name"
                                  allow="special"
                                                        length={50}
                                                        formik={formik}
                                  placeholder="Enter Name"
                                />
                                {/* <span className="errorMsg">
                                  {errors.name && touched.name && errors.name}
                                </span> */}
                              </div>
                              <div className="form-group">
                                <label className="text-small">
                                  Email Address *
                                </label>
                                <Input
                                  type="text"
                                  className="form-control input-control"
                                  name="email"
                                  allow="email"
                                  length={50}
                                  formik={formik}
                                  placeholder="Enter Email Address"
                                />
                                {/* <span className="errorMsg">
                                  {errors.email &&
                                    touched.email &&
                                    errors.email}
                                </span> */}
                              </div>
                              <div className="form-group">
                                <label className="text-small">Phone *</label>
                                <Input
                                  type="text"
                                  className="form-control input-control"
                                  allow="numeric"
                                    length={10}
                                    formik={formik}
                                  name="phone"
                                  placeholder="Enter Phone Number"
                                />
                                {/* <span className="errorMsg">
                                  {errors.phone &&
                                    touched.phone &&
                                    errors.phone}
                                </span> */}
                              </div>
                              <div className="form-group">
                                <label className="text-small">Message</label>
                                <Input
                                  type="textarea"
                                  className="form-control input-control"
                                  name="message"
                                  allow="special"
                                    length={200}
                                    formik={formik}
                                  placeholder="Enter Message Here..."
                                />
                                {/* <span className="errorMsg">
                                  {errors.message &&
                                    touched.message &&
                                    errors.message}
                                </span> */}
                              </div>
                              <div className="form-group">
                                  <Error 
                                  formik={formik} 
                                  el={['name','email','phone','message' ]}
                                   />
                              </div>     
                              {this.props.saveRecordStatus == true && (
                                <div
                                  style={{
                                    color: 'green',
                                    'background-color': '#fff',
                                  }}
                                >
                                  Data saved successfully
                                </div>
                              )}

                              {this.props.saveRecordStatus == false && (
                                <div
                                  style={{
                                    color: 'red',
                                    'background-color': '#fff',
                                  }}
                                >
                                  Error while saving data. Please try again
                                  later
                                </div>
                              )}
                              <div className="form-group mt-3">
                                <button
                                  type="button"
                                  onClick={() => {
                                    formik.handleSubmit();
                                  }}
                                  className="btn bha-btn-primary float-right"
                                  name="buttonsubmit"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ asyncReducer }) => {
  return {
    saveRecordStatus: asyncReducer.freeBrochuresUserDetail,
  };
};
export default connect(mapStateToProps)(ContentSection);
