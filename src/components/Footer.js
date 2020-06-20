import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Facebook from '../assets/images/facebook.png'
import Linkedin from '../assets/images/linkedin.png'
import Youtube from '../assets/images/youtube.png'
import Pintrest from '../assets/images/pintrest.png'
import Footerlogo from '../assets/images/footer-logo.png'
import Chat from '../assets/icon/chat.svg'
export default class Footer extends Component {
  render() {
    return (
<MDBFooter className="font-small footer-section py-4 mt-4 footer">
      <MDBContainer fluid className="text-center text-md-left">
      <MDBRow>
      <MDBCol md="8">
        <MDBRow>
          <MDBCol md="4">
            <h3 className="title">Equipment</h3>
            <ul class="foote-link">
                  <li><a href="/">Baghouse</a></li> 
                  <li><a href="/">Cartridge Dust Collectors</a></li> 
                  <li><a href="/">Bin Vents</a></li> 
                  <li><a href="/">Portable/Fume Dust Collectors</a></li>
                  <li><a href="/">Fans &amp; Blowers</a></li> 
                  <li><a href="/">Rotary Airlock Valve</a></li>
                </ul>
                <div class="breathing">
                  <h3>COMPANY INFORMATION</h3>
                  <ul class="foote-link">
                    <li><a href="/">About Us</a></li> 
                    <li><a href="/">Contact Us</a></li> 
                    <li><a href="/">News &amp; Events</a></li> 
                    <li><a href="/">Represent Us</a></li>
                  </ul> 
                </div>

          </MDBCol>
          <MDBCol md="4">
          <h3 className="title">Parts</h3>
          <ul class="foote-link">
                  <li><a href="/">Baghouse Filter Bags</a></li> 
                  <li>
                    <a href="/">Dust Collector Cartridge Filters</a>
                    <ul className="list-disc">
                      <li><a href="/">Aramid/Nomex Filter Bags</a></li>
                      <li><a href="/">Fiberglass Filter Bags</a></li>
                      <li><a href="/">PTFE Teflon Filter Bags</a></li>
                      <li><a href="/">Polyester Filters</a></li>
                    </ul>
                  </li> 
                  <li>
                    <a href="/">Baghouse Cages</a>
                    <ul>
                      <li><a href="/">Epoxy Coated Cages</a></li>
                      <li><a href="/">Stainless Steel Cages</a></li>
                      <li><a href="/">Carbon Steel Cages</a></li>
                    </ul>
                  </li> 
                  <li><a href="/">Pleated Bags</a></li>
                  <li><a href="/">Valve Repair Kits</a></li>
                  <li><a href="/">Diaphragm Valves</a></li>
                  <li><a href="/">Solenoid Valves</a></li>
                  <li><a href="/">Control Panels</a></li>
                  <li><a href="/">Timer Boards</a></li>
                  <li><a href="/">Leak Detection Powder</a></li>
                </ul>
                          </MDBCol>
          <MDBCol md="4">
          <h3 className="title">Brands</h3>
          <ul class="foote-link">
                  <li>
                    <a href="/">Goyen</a>
                    <ul>
                      <li><a href="/">Original Goyen</a></li>
                      <li><a href="/">Replacement Goyen</a></li>
                    </ul>
                  </li> 
                  <li>
                    <a href="/">Asco</a>
                    <ul>
                      <li><a href="/">Original Asco</a></li>
                      <li><a href="/">Replacement Asco</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">Mecair</a>
                    <ul>
                      <li><a href="/">Original Mecair</a></li>
                      <li><a href="/">Replacement Mecair</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">Taeha</a>
                    <ul>
                      <li><a href="/">Original Taeha</a></li>
                      <li><a href="/">Replacement Taeha</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">Donaldson Torit</a>
                    <ul>
                      <li><a href="/">Original Donaldson Torit</a></li>
                      <li><a href="/">Replacement Donaldson Torit</a></li>
                    </ul>
                  </li>
                </ul>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-4">
          <MDBCol md="4">
          <h3 className="title">Baghouse Policy</h3>
          <ul class="foote-link">
            <li><a href="/">Privacy policy</a></li> 
            <li><a href="/">Returns Policy</a></li> 
            <li><a href="/">Terms of Use</a></li> 
            <li><a href="/">Terms of Sale</a></li>
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
              <MDBRow>
                <MDBCol md="6">
                <form>
                <label
                  htmlFor=""
                  className="white-text font-weight-bold"
                >
                  Enter Name*
                </label>
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  placeholder="Enter Name"
                />
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
                  placeholder="Enter Name"
                />
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
                  placeholder="Enter Email"
                />
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
                  placeholder="Enter Email"
                />
                </form>
                <div class="chat-button pulse"><a href="/"><img src={Chat} class="mr-2" alt="" width="30" />Live Chat</a></div>
                </MDBCol>
              </MDBRow>
              <p class="mt-3">
                  By signing up you agre to receive emails from Bhaghouse
                  with new, special offers, promotions and other information.
                  You can unsubscribe at any time. See Updated Privacy 
                  Policy or Contact Us at support.bhaghouse@gamil.com.
                </p>
                <div class="mt-5"><button type="button" class="btn bha-btn-primary w-100">subscribe</button></div>
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
