import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";
import FreeBrochurespop from './FreeBrochurespop';
import { Formik } from 'formik';
import Recaptcha from 'react-recaptcha';
import Arizona from '../../assets/images/Arizona.png'
import Florida from '../../assets/images/Florida.png'
import Brazil from '../../assets/images/Brazil.png'
import Israel from '../../assets/images/Israel.jpg'
import SouthAfrica from '../../assets/images/South Africa.jpg'
import Captcha from '../../assets/images/captcha.jpg';
import item2 from '../../assets/images/thumbnail-img/item2.png'
export default class ContentSection extends Component {
  constructor(props){
    super(props)
  this.state = {
    activeItem: "1",
    modal14: false,
    isVerified: false,
  }
 //this.handleSubscribe = this.handleSubscribe.bind(this);
 this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
}
  toggle = tab => () => {
    if (this.state.activeItem !== tab) {
    this.setState({
      activeItem: tab
    });
    }
  }

  recaptchaLoaded(){
    console.log("Captcha successfuly lodaded")
  }

// handleSubscribe(){
//   if(this.state.isVerified){
//     alert("You have successfully subscribe")
//   }
//   alert("Please verify that you are a human")
// }

  render() {
    return (
      <div>
<section class="content-section">
  <div class="container-fluid pt-3">
    <div class="row">
      <FreeBrochurespop />
      
      <div class="col-sm-8 col-md-8 mb-3 pl-0 pr-5">
      <h2 class="bha_heading_2 text-black font-xx mb-3">BAGHOUSE AMERICA</h2>
      <div class="row no-gutters">
        <div class="col-md-3 mb-3">
          <ul class="nav nav-pills flex-column" id="myTab" role="tablist">
            <li class="nav-item">
              {/* <a class="nav-link active" id="home-tab" data-toggle="tab" href="#tab_1" role="tab" aria-controls="home" aria-selected="true">United States</a> */}
              <MDBNavLink
              link
              to="#"
              active={this.state.activeItem === "1"}
              onClick={this.toggle("1")}
              role="tab"
            >
              United States
            </MDBNavLink>

            </li>
            <li class="nav-item">
              {/* <a class="nav-link" id="profile-tab" data-toggle="tab" href="#tab_2" role="tab" aria-controls="profile" aria-selected="false">South America</a> */}
              <MDBNavLink
              link
              to="#"
              active={this.state.activeItem === "2"}
              onClick={this.toggle("2")}
              role="tab"
            >
              South America
            </MDBNavLink>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" id="contact-tab" data-toggle="tab" href="#tab_3" role="tab" aria-controls="contact" aria-selected="false">Israel</a> */}
              <MDBNavLink
              link
              to="#"
              active={this.state.activeItem === "3"}
              onClick={this.toggle("3")}
              role="tab"
            >
              Israel
            </MDBNavLink>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" id="contact-tab" data-toggle="tab" href="#tab_4" role="tab" aria-controls="contact" aria-selected="false">South Africa</a> */}
              <MDBNavLink
              link
              to="#"
              active={this.state.activeItem === "4"}
              onClick={this.toggle("4")}
              role="tab"
            >
              South Africa
            </MDBNavLink>
            </li>
          </ul>
          <div class="bha-left"><img class="img-fluid" src={item2} alt="" />
            <div class="bha-left-head">CONTACT US FOR THE BEST DUST COLLECTOR SUPPLIES</div>
          </div>
        </div>

        {/* <!-- /.col-md-4 -->  */}
        <div class="col-md-9">
          <MDBTabContent class="tab-content" activeItem={this.state.activeItem}>
          <MDBTabPane tabId="1" role="tabpanel" className="tab-pane fade show"><div id="bhaLocation"></div>
          <div class="row">
                <div class="col-sm-6 mb-4 border-right">
                  <div class="text-left">
                  <div class="location float-left">
                    <h5 class="location_head">Arizona</h5>
                    <div>2415 East Camelback Road,
                    Ste. 700, Phoenix, Arizona,
                    P.O. Box: 6887, Goodyear, Arizona 85338, United States</div>
                    </div>
                    <div class="mt-4 float-left">
                    <i class="fa fa-phone bha-icon mr-1"></i>
                    <span class="font-weight-bold" style={{fontsize:'0.850'}}>(888) 739 1794</span>
                    <i class="fa fa-fax bha-icon mr-2 ml-1" aria-hidden="true"></i>
                    <span class="font-weight-bold" style={{fontsize:'0.850'}}>(800) 632 1533</span>
                    </div>
                  </div>
                    </div>
                    <div class="col-sm-6 mb-4">
      
                    <div class="text-left">
                    <div class="location float-left">
                    <h5 class="location_head">Florida</h5>
                    <div>International Sales Office,
            North, South, &amp; Central America,
            801 Brickell Avenue, Suite 900, Miami, Florida, 33131, United States</div>
                    </div>
                    </div>
                    <div class="mt-4 float-left">
                      <i class="fa fa-phone bha-icon mr-3"></i>
                      <span class="font-weight-bold" style={{fontsize:'0.850'}}>+1.786.422.5225</span>
                    </div>


                        </div>
                        <div className="row">
                        <div className="col-md-12"> 
                        <hr className="mr-2" />
                       <div class="col-lg-12">We are here to make sure you get an industrial dust collector that will fulfill your needs. That’s what makes us the best dust collector source in the world. Whether you need dust collector filter bags, valves, or a whole new system, we are the answer. Get in touch to start a conversation today!</div>
</div> 

                        </div>

                       <div class="row ">
                <div class="col-md-6">
                  <div class="mt-4 ml-3 float-left">
                      <i class="fa fa-envelope bha-icon mr-3"></i>
                      <span class="font-weight-normal" style={{fontsize:'0.9rem'}}><a href="mailto:info@baghouseamerica.com">Info@baghouseamerica.com</a></span>
                    </div>
                </div>
                <div class="col-md-6">
                  <div class="mt-4 float-left">
                      <i class="fa fa-envelope bha-icon mr-3"></i>
                      <span class="font-weight-normal" style={{fontsize:'0.9rem'}}><a href="mailto:sales@baghouseamerica.com">Sales@baghouseamerica.com</a></span>
                    </div>
                </div>
                <div class="col-md-6">
                  <div class="mt-4 ml-3 float-left">
                      <i class="fa fa-envelope bha-icon mr-3"></i>
                      <span class="font-weight-normal" style={{fontsize:'0.9rem'}}><a href="purchasing@baghouseamerica.com">Purchasing@baghouseamerica.com</a></span>
                    </div>
                </div>
                <div class="col-md-6">
                  <div class="mt-4 float-left">
                      <i class="fa fa-envelope bha-icon mr-3"></i>
                      <span class="font-weight-normal" style={{fontsize:'0.9rem'}}><a href="hr@baghouseamerica.com">Hr@baghouseamerica.com</a></span>
                    </div>
                </div>
                <div class="col-md-6">
                  <div class="mt-4 ml-3 float-left">
                      <i class="fa fa-envelope bha-icon mr-3"></i>
                      <span class="font-weight-normal" style={{fontsize:'0.9rem'}}><a href="finance@baghouseamerica.com">Finance@baghouseamerica.com</a></span>
                    </div>
                </div>
              </div>

                    </div>

          </MDBTabPane>
          
          <MDBTabPane tabId="2" role="tabpanel" className="tab-pane fade show">
          <div class="row">
                <div class="col-sm-6 mb-4">
                  <div class="text-left">
                  <div class="location float-left">
                    <h5 class="location_head">Brazil</h5>
                    <div>Edifício Candelária Corporate ,
            Rua Candelária, 65, #1600, Rio de Janeiro, Brazil</div>
                    </div>
                    <div class="mt-4 float-left">
                    <i class="fa fa-phone bha-icon mr-3"></i>
                    <span class="font-weight-bold" style={{fontsize:'0.850'}}>+552139587260</span>
                    </div>
                  </div>
                    </div>
              
                    <div className="row">
                        <div className="col-md-12"> 
                        <hr className="mr-2" />
                       <div class="col-lg-12">We are here to make sure you get an industrial dust collector that will fulfill your needs. That’s what makes us the best dust collector source in the world. Whether you need dust collector filter bags, valves, or a whole new system, we are the answer. Get in touch to start a conversation today!</div>
</div> 

                        </div>
                       <div class="row">
                <div class="col-md-6">
                  <div class="mt-4 ml-3 float-left">
                      <i class="fa fa-envelope bha-icon mr-3"></i>
                      <span class="font-weight-normal" style={{fontsize:'0.9rem'}}><a href="mailto:info@baghouseamerica.com">Info@baghouseamerica.com</a></span>
                    </div>
                </div>
                <div class="col-md-6">
                  <div class="mt-4 float-left">
                      <i class="fa fa-envelope bha-icon mr-3"></i>
                      <span class="font-weight-normal" style={{fontsize:'0.9rem'}}><a href="mailto:sales@baghouseamerica.com">Sales@baghouseamerica.com</a></span>
                    </div>
                </div>
                <div class="col-md-6">
                  <div class="mt-4 ml-3 float-left">
                      <i class="fa fa-envelope bha-icon mr-3"></i>
                      <span class="font-weight-normal" style={{fontsize:'0.9rem'}}><a href="purchasing@baghouseamerica.com">Purchasing@baghouseamerica.com</a></span>
                    </div>
                </div>
                <div class="col-md-6">
                  <div class="mt-4 float-left">
                      <i class="fa fa-envelope bha-icon mr-3"></i>
                      <span class="font-weight-normal" style={{fontsize:'0.9rem'}}><a href="hr@baghouseamerica.com">Hr@baghouseamerica.com</a></span>
                    </div>
                </div>
                <div class="col-md-6">
                  <div class="mt-4 ml-3 float-left">
                      <i class="fa fa-envelope bha-icon mr-3"></i>
                      <span class="font-weight-normal" style={{fontsize:'0.9rem'}}><a href="finance@baghouseamerica.com">Finance@baghouseamerica.com</a></span>
                    </div>
                </div>
              </div>

                    </div>
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel" className="tab-pane fade show">
          <div class="row">
                <div class="col-sm-6 mb-4">
                  <div class="text-left">
                  <div class="location float-left">
                    <h5 class="location_head">Eurasia &amp; Oceania</h5>
                    <div>International Sales Office -
            12 Abba Hillel Street, Suite 1600, 52136 Ramat-Gan, Tel-Aviv, Israel</div>
                    </div>
                    <div class="mt-4 float-left">
                    <i class="fa fa-envelope bha-icon mr-3"></i>
                    <span class="font-weight-bold" style={{fontsize:'0.850'}}>sales@baghouseamerica.com</span>
                    </div>
                  </div>
                    </div>
              
                    <div className="row">
                        <div className="col-md-12"> 
                        <hr className="mr-2" />
                       <div class="col-lg-12">We are here to make sure you get an industrial dust collector that will fulfill your needs. That’s what makes us the best dust collector source in the world. Whether you need dust collector filter bags, valves, or a whole new system, we are the answer. Get in touch to start a conversation today!</div>
</div> 

                        </div>
                       <div class="row">
                <div class="col-md-6">
                  <div class="mt-4 ml-3 float-left">
                      <i class="fa fa-envelope bha-icon mr-3"></i>
                      <span class="font-weight-normal" style={{fontsize:'0.9rem'}}><a href="mailto:info@baghouseamerica.com">Info@baghouseamerica.com</a></span>
                    </div>
                </div>
                <div class="col-md-6">
                  <div class="mt-4 float-left">
                      <i class="fa fa-envelope bha-icon mr-3"></i>
                      <span class="font-weight-normal" style={{fontsize:'0.9rem'}}><a href="mailto:sales@baghouseamerica.com">Sales@baghouseamerica.com</a></span>
                    </div>
                </div>
                <div class="col-md-6">
                  <div class="mt-4 ml-3 float-left">
                      <i class="fa fa-envelope bha-icon mr-3"></i>
                      <span class="font-weight-normal" style={{fontsize:'0.9rem'}}><a href="purchasing@baghouseamerica.com">Purchasing@baghouseamerica.com</a></span>
                    </div>
                </div>
                <div class="col-md-6">
                  <div class="mt-4 float-left">
                      <i class="fa fa-envelope bha-icon mr-3"></i>
                      <span class="font-weight-normal" style={{fontsize:'0.9rem'}}><a href="hr@baghouseamerica.com">Hr@baghouseamerica.com</a></span>
                    </div>
                </div>
                <div class="col-md-6">
                  <div class="mt-4 ml-3 float-left">
                      <i class="fa fa-envelope bha-icon mr-3"></i>
                      <span class="font-weight-normal" style={{fontsize:'0.9rem'}}><a href="finance@baghouseamerica.com">Finance@baghouseamerica.com</a></span>
                    </div>
                </div>
              </div>

                    </div>
          </MDBTabPane>
          <MDBTabPane tabId="4" role="tabpanel" className="tab-pane fade show">
          <div class="row">
                <div class="col-sm-6 mb-4">
                  <div class="text-left">
                  <div class="location float-left">
                    <h5 class="location_head">Johannesburg</h5>
                    <div>Africa- Block B &amp; Block C, Metropolitan Park, 8 Hillside Road, Suite 1000
            Parktown, Johannesburg, 2196, South Africa</div>
                    </div>
                    <div class="mt-4 float-left">
                    <i class="fa fa-phone bha-icon mr-3"></i>
                    <span class="font-weight-bold" style={{fontsize:'0.850'}}>+27105008604</span>
                    </div>
                  </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12"> 
                        <hr className="mr-2" />
                       <div class="col-lg-12">We are here to make sure you get an industrial dust collector that will fulfill your needs. That’s what makes us the best dust collector source in the world. Whether you need dust collector filter bags, valves, or a whole new system, we are the answer. Get in touch to start a conversation today!</div>
</div> 

                        </div>
                       <div class="row">
                <div class="col-md-6">
                  <div class="mt-4 ml-3 float-left">
                      <i class="fa fa-envelope bha-icon mr-3"></i>
                      <span class="font-weight-normal" style={{fontsize:'0.9rem'}}><a href="mailto:info@baghouseamerica.com">Info@baghouseamerica.com</a></span>
                    </div>
                </div>
                <div class="col-md-6">
                  <div class="mt-4 float-left">
                      <i class="fa fa-envelope bha-icon mr-3"></i>
                      <span class="font-weight-normal" style={{fontsize:'0.9rem'}}><a href="mailto:sales@baghouseamerica.com">Sales@baghouseamerica.com</a></span>
                    </div>
                </div>
                <div class="col-md-6">
                  <div class="mt-4 ml-3 float-left">
                      <i class="fa fa-envelope bha-icon mr-3"></i>
                      <span class="font-weight-normal" style={{fontsize:'0.9rem'}}><a href="purchasing@baghouseamerica.com">Purchasing@baghouseamerica.com</a></span>
                    </div>
                </div>
                <div class="col-md-6">
                  <div class="mt-4 float-left">
                      <i class="fa fa-envelope bha-icon mr-3"></i>
                      <span class="font-weight-normal" style={{fontsize:'0.9rem'}}><a href="hr@baghouseamerica.com">Hr@baghouseamerica.com</a></span>
                    </div>
                </div>
                <div class="col-md-6">
                  <div class="mt-4 ml-3 float-left">
                      <i class="fa fa-envelope bha-icon mr-3"></i>
                      <span class="font-weight-normal" style={{fontsize:'0.9rem'}}><a href="finance@baghouseamerica.com">Finance@baghouseamerica.com</a></span>
                    </div>
                </div>
              </div>

                    </div>
          </MDBTabPane>



         
          
          </MDBTabContent>
        </div>
      </div>
      </div>
    <div class="col-sm-4 col-md-4 pl-0 pr-0">
    <Formik
      initialValues={{ fname: '', message: '', email: '',  phone: '', recaptcha: false }}
      validate={values => {
        const errors = {};
        if (!values.fname) {
          errors.fname = 'First Name is required';
        } else if (
          !/^[a-zA-Z ]*$/i.test(values.fname)
        ) {
          errors.fname = 'Please enter alphabet characters only';
        }

        
        if (!values.phone) {
          errors.phone = 'Phone Number is required';
        } else if (
          !/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i.test(values.phone)
        ) {
          errors.phone = 'Please enter valid phone number';
        }

        if (!values.message) {
          errors.message = 'Message is required';
        } else if (
          !/^[a-zA-Z ]*$/i.test(values.message)
        ) {
          errors.message = 'Please enter alphabet characters only';
        }


        if (!values.email) {
          errors.email = 'Email address is required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if(values.recaptcha){
          errors.recaptcha = 'You have successfully subscribe';
            }else if(values.recaptcha){
              errors.recaptcha = 'Please verify that you are a human';
          }


        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        alert("Free Brochures Sucessfully")
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
      }) => (<form>
        <div class="row">
          <div class="col-lg-12">
            <h2 class="bha_heading_2 text-black font-xx mb-3">Contact Us</h2>
          </div>

          <div class="col-lg-12">
            <div class="form-group">
              <label>First Name, Surname *</label>
              <input type="text" class="form-control input-control" name="fname" value={values.fname} onChange={handleChange}
            onBlur={handleBlur} placeholder="Enter Name/Surname" />
           <span className="errorMsg">{errors.fname && touched.fname && errors.fname}</span>

            </div>
            <div class="form-group">
              <label>Email Address *</label>
              <input type="text" class="form-control input-control" name="email" value={values.email} onChange={handleChange}
            onBlur={handleBlur} placeholder="Enter Email address" />
            <span className="errorMsg">{errors.email && touched.email && errors.email}</span>
            </div>
            <div class="form-group">
              <label>Phone *</label>
              <input type="text" class="form-control input-control" value={values.phone} onChange={handleChange}
            onBlur={handleBlur} name="phone" placeholder="Enter Phone Number" />
            <span className="errorMsg">{errors.phone && touched.phone && errors.phone}</span>
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea type="text" class="form-control input-control" name="message" value={values.message} onChange={handleChange}
            onBlur={handleBlur} placeholder="Enter message here..."></textarea>
            <span className="errorMsg">{errors.message && touched.message && errors.message}</span>
            </div>

            <div class="form-group">
            <label>Captcha</label>
            <Recaptcha
                sitekey="6Lf_rakZAAAAAEDNJKxqF3XnpU5HfeKZOtI4WFbf"
                render="explicit"
                onloadCallback={this.recaptchaLoaded}
                name="recaptcha" 
                value={values.recaptcha} 
                onChange={handleChange}
                onBlur={handleBlur}
            />
                        <span className="errorMsg">{errors.recaptcha && touched.recaptcha && errors.recaptcha}</span>

              {/* <img class="img-fluid w-100" src={Captcha} /> */}
              {/* <!-- <span class="errorMessage">Mobile / Email Address is required</span> --> */}
            </div>
            <div class="form-group">
              <button type="button" onClick={() =>{handleSubmit()}} class="btn bha-btn-primary float-right" name="buttonsubmit">Submit</button>
            </div>
          </div>
        </div>
      </form>)}
    </Formik>
    </div>
    </div>
  </div>
</section>
</div>
    )
  }
}
