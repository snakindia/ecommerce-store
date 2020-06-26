import React, { Component } from 'react';
import { Formik } from 'formik';
import { connect } from "react-redux";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Link} from 'react-router-dom'
import Facebook from '../assets/images/facebook.png'
import Linkedin from '../assets/images/linkedin.png'
import Youtube from '../assets/images/youtube.png'
import Pintrest from '../assets/images/pintrest.png'
import Footerlogo from '../assets/images/footer-logo.png'
import Chat from '../assets/icon/chat.svg'
import {fetch_dynamic_menus} from '../actions/fetchActions';

class Footer extends Component {

  componentDidMount (){
    this.props.dispatch(fetch_dynamic_menus())
 }
  render() {
    const {navMenuData} = this.props;
    const {menuData} = navMenuData;
    const {
    footer_menu_1_title,footer_menu_2_title,footer_menu_3_title,footer_menu_4_title,footer_menu_5_title,
    footer_menu_1_items,footer_menu_2_items,footer_menu_3_items,footer_menu_4_items,footer_menu_5_items,footer_social
  } = menuData;
    return (
   <MDBFooter className="font-small footer-section py-4 mt-4 footer">
      <MDBContainer fluid className="text-center text-md-left">
      <MDBRow>
      <MDBCol md="8">
        <MDBRow>
          <MDBCol md="4">
            <h3 className="title">{footer_menu_1_title}</h3>
            <ul class="foote-link">
            {
              footer_menu_1_items && footer_menu_1_items.map((item,i)=>{
                return <li key={i+"aa"}>
                        <Link to={item.url}>{item.text}</Link>
                       </li> 

              })
            }
                </ul>
                <div class="breathing">
                  <h3>{footer_menu_4_title}</h3>
                  <ul class="foote-link">
                  {
                    footer_menu_4_items && footer_menu_4_items.map((item,i)=>{
                      return <li key={i+"bb"}>
                              <Link to={item.url}>{item.text}</Link>
                            </li> 

                    })
                  }
                  </ul> 
                </div>

          </MDBCol>
          <MDBCol md="4">
          <h3 className="title">{footer_menu_2_title}</h3>
          <ul class="foote-link">
                  {
                    footer_menu_2_items && footer_menu_2_items.map((item,i)=>{
                      return <li key={i+Math.random()}>
                              <Link to={item.url}>{item.text}</Link>
                            </li> 

                    })
                  }
                  </ul> 
          </MDBCol>
          <MDBCol md="4">
          <h3 className="title">{footer_menu_3_title}</h3>
          <ul class="foote-link">
                  {
                    footer_menu_3_items && footer_menu_3_items.map((item,i)=>{
                      return <li key={i+"avf"}>
                              <Link to={item.url}>{item.text}</Link>
                            </li> 

                    })
                  }
                  </ul> 
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-4">
          <MDBCol md="4">
          <h3 className="title">{footer_menu_5_title}</h3>
          <ul class="foote-link">
                  {
                    footer_menu_5_items && footer_menu_5_items.map((item,i)=>{
                      return <li key={i+"yj"}>
                              <Link to={item.url}>{item.text}</Link>
                            </li> 

                    })
                  }
            </ul> 
          </MDBCol>
          <MDBCol md="4">
          <h3 className="title">Quick links</h3>
          <ul class="foote-link">
            <li><a href="/">Projects</a></li> 
            <li><a href="/">Industries</a></li> 
            <li><a href="/">Shop</a></li> 
            <li><a href="/">Request a Quote</a></li>
          </ul>

          </MDBCol>
          <MDBCol md="4"></MDBCol>
        </MDBRow>
        </MDBCol>
        <MDBCol md="4">
          <div className="broucher-wrapper">
            <div className="broucher-inner">
              <h2 className="bha_heading_2">Free Brochures</h2>
              <p className="mt-3">Sign up to receive the lates infor on new Baghouse products, special offers and more.</p>
              <Formik
      initialValues={{ fname: '', companyname: '', email: '',  phone: '' }}
      validate={values => {
        const errors = {};
        if (!values.fname) {
          errors.fname = 'Name is required';
        } else if (
          !/^[a-zA-Z ]*$/i.test(values.fname)
        ) {
          errors.fname = 'Please enter alphabet characters only';
        }

        
        if (!values.phone) {
          errors.phone = 'Phone number is required';
        } else if (
          !/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i.test(values.phone)
        ) {
          errors.phone = 'Please enter valid phone number';
        }

        if (!values.companyname) {
          errors.companyname = 'Company name is required';
        } else if (
          !/^[a-zA-Z ]*$/i.test(values.companyname)
        ) {
          errors.companyname = 'Please enter alphabet characters only';
        }


        if (!values.email) {
          errors.email = 'Email address is required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
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
      }) => (<form onSubmit={handleSubmit}>
              <MDBRow>
                <MDBCol md="6">
             <form>
                <label
                  htmlFor=""
                  className="white-text font-weight-bold"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  name="fname" 
                  value={values.fname} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Name"
                />
                <span className="errorMsg">{errors.fname && touched.fname && errors.fname}</span>
                </form>
                </MDBCol>
                <MDBCol md="6">
                <form>
                <label
                  htmlFor=""
                  className="white-text font-weight-bold"
                >
                  Phone*
                </label>
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  placeholder="Enter Phone"
                  value={values.phone} 
                  onChange={handleChange}
                  onBlur={handleBlur} name="phone"
                />
                <span className="errorMsg">{errors.phone && touched.phone && errors.phone}</span>
                </form>

                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol lg="12">
                <form>
                <label
                  htmlFor=""
                  className="white-text font-weight-bold"
                >
                  Email Address *
                </label>
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
                <span className="errorMsg">{errors.email && touched.email && errors.email}</span>
                </form>

                </MDBCol>
              </MDBRow>
              <MDBRow>
              <MDBCol lg="12">
                <form>
                <label
                  htmlFor=""
                  className="white-text font-weight-bold"
                >
                  Company Name *
                </label>
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  placeholder="Enter Company Name"
                  name="companyname" 
                  value={values.companyname} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                 <span className="errorMsg">{errors.companyname && touched.companyname && errors.companyname}</span> 

                </form>


                </MDBCol>
              </MDBRow>
              <p class="mt-3">
                  By signing up you agre to receive emails from Bhaghouse
                  with new, special offers, promotions and other information.
                  You can unsubscribe at any time. See Updated Privacy 
                  Policy or Contact Us at support.bhaghouse@gamil.com.
                </p>
                <div class="mt-5"><button type="button"  onClick={() =>{handleSubmit()}} class="btn bha-btn-primary w-100">subscribe</button></div>
                </form>)}
    </Formik>
    <div class="chat-button pulse"><a href="/"><img src={Chat} class="mr-2" alt="" width="30" />Live Chat</a></div>
            </div>
          </div>
        </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-bottom py-3">
        <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="9">
          <span class="call-us">CALL US: (888) 286-8708</span>

          </MDBCol>
          <MDBCol md="3" sm="3" xs="12" className="text-right">
          <div class="socialLink">
          <span class="float-left">Follow us:</span>
          <a href="/"><img src={Facebook} alt="Facebook" /></a>
          <a href="/"><img src={Linkedin} alt="Linkedin" /></a>
          <a href="/"><img src={Youtube} alt="Youtube" /></a>
          <a href="/"><img src={Pintrest} alt="Pintrest" /></a>
        </div>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
      </div>

      <div className="copyright">
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md="9" sm="9" xs="12">
            <p>COPYRIGHT © 2020 Baghouse. The following are trademarks for one or more  Baghouse power tools, accessories, anchors and concrete adhesives: The yellow and black 
            color scheme; the  the array of  pyramids on the handgrip; the kit box configuration; and the array of lozenge-shaped humps on the surface of the tool.</p>
            <ul class="footer-middle-list">
              <li><a href="/">Updated Privacy Policy</a><span>|</span></li>
              <li><a href="/">Terms of Use</a><span>|</span></li>
              <li><a href="/">Safety Notices and Recalls</a><span>|</span></li>
              <li><a href="/">Travel  Safety with Cordless Tools</a><span>|</span></li>     
              <li><a href="/">BAGHOUSE Patent Information</a><span>|</span></li>       
              <li><a href="/">Shop Safe</a><span>|</span></li>     
            </ul>
            </MDBCol>
            <MDBCol md="3" sm="3" xs="12" className="float-right-sm pt-3 pr-4">
            <img src={Footerlogo} alt="" width="240" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </MDBFooter>    )
  }
}

const mapStateToProps = state => {
  return {
    navMenuData: state
  };
};
export default connect(mapStateToProps)(Footer);
