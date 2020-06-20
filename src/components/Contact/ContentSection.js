import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import Arizona from '../../assets/images/Arizona.png'
import Florida from '../../assets/images/Florida.png'
import Brazil from '../../assets/images/Brazil.png'
import Israel from '../../assets/images/Israel.jpg'
import SouthAfrica from '../../assets/images/South Africa.jpg'
import Captcha from '../../assets/images/captcha.jpg';

export default class ContentSection extends Component {
  render() {
    return (
      <div>
        <section class="content-section">
          <MDBContainer fluid>
            <MDBRow>
              <MDBCol md="8" sm="8" className="mb-3 pl-0 pr-5">
              <h2 class="bha_heading_2 text-black font-xx mb-3">BAGHOUSE AMERICA</h2>
              <MDBRow>
                <MDBCol sm="6" className="mb-4">
                <div class="text-left">
            <div class="location float-left">
              <img className="bha-flag" src={Arizona} alt="Arizona" />
            <div style={{position:"relative", zindex:100}}>2415 East Camelback Road,
            Ste. 700, Phoenix, Arizona, P.O. Box: 6887, Goodyear, Arizona 85338, United States</div>
            </div>
            <div style={{width:"100%", background:'#555', padding: '1rem', float:'left', color:'#fff'}}>
              <i class="fa fa-phone bha-icon mr-3"></i><span class="font-weight-bold">(888) 739 1794</span>
              <i class="fa fa-fax bha-icon mr-3 ml-3" aria-hidden="true"></i><span class="font-weight-bold">(800) 632 1533</span>
            </div>
          </div>
                </MDBCol>
                <MDBCol sm="6" className="mb-4">
                <div class="text-left">
            <div class="location">
              <img className="bha-flag" src={Florida} alt="Florida" />
            <div style={{position:"relative", zindex:100}}>International Sales Office,
            North, South, &amp; Central America, 801 Brickell Avenue, Suite 900, Miami, Florida, 33131, United States</div>
            </div>
            <div style={{width:"100%", background:'#555', padding: '1rem', float:'left', color:'#fff'}}>
              <i class="fa fa-phone bha-icon mr-3"></i><span class="font-weight-bold">+1.786.422.5225</span>
            </div>
          </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="6" className="mb-4">
                <div class="text-left">
            <div class="location float-left">
              <img className="bha-flag" src={Brazil} alt="Arizona" />
            <div style={{position:"relative", zindex:100}}>South America,
            Edifício Candelária Corporate, Rua Candelária, 65, #1600, Rio de Janeiro, Brazil</div>
            </div>
            <div style={{width:"100%", background:'#555', padding: '1rem', float:'left', color:'#fff'}}>
              <i class="fa fa-phone bha-icon mr-3"></i><span class="font-weight-bold">+552139587260</span>
            </div>
          </div>
                </MDBCol>
                <MDBCol sm="6" className="mb-4">
                <div class="text-left">
            <div class="location">
              <img className="bha-flag" src={Israel} alt="Florida" />
            <div style={{position:"relative", zindex:100}}>International Sales Office -
            Eurasia &amp; Oceania, 12 Abba Hillel Street, Suite 1600, 52136 Ramat-Gan, Tel-Aviv, Israel</div>
            </div>
            <div style={{width:"100%", background:'#555', padding: '1rem', float:'left', color:'#fff'}}>
              <span class="font-weight-bold">Comming Soon</span>
            </div>
          </div>
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol sm="6" className="mb-4">
                <div class="text-left">
            <div class="location float-left">
              <img className="bha-flag" src={SouthAfrica} alt="Arizona" />
            <div style={{position:"relative", zindex:100}}>Africa- Block B &amp; Block C, Metropolitan Park, 8 Hillside Road, Suite 1000 Parktown, Johannesburg, 2196, South Africa </div>
            </div>
            <div style={{width:"100%", background:'#555', padding: '1rem', float:'left', color:'#fff'}}>
              <i class="fa fa-phone bha-icon mr-3"></i><span class="font-weight-bold">+552139587260</span>
            </div>
          </div>
                </MDBCol>
                <MDBCol sm="6" className="mb-4">
                <div class="text-left">
            <div class="location">
            <div style={{position:"relative", zindex:100}}>
            <div class="text-uppercase pt-0 pb-4 font-weight-bold">For pay any assistance, please contact</div>
            <div class="mb-2"><i class="fa fa-envelope bha-icon mr-3"></i><a href="/">info@baghouseamerica.com</a></div>
            <div class="mb-2"><i class="fa fa-envelope bha-icon mr-3"></i><a href="/">sales@baghouseamerica.com</a></div>
            <div class="mb-2"><i class="fa fa-envelope bha-icon mr-3"></i><a href="/">hr@baghouseamerica.</a></div>
            <div class="mb-2"><i class="fa fa-envelope bha-icon mr-3"></i><a href="/">finance@baghouseamerica.</a></div>
            </div>
            </div>
          </div>
                </MDBCol>
              </MDBRow>




              </MDBCol>
              <MDBCol md="4" sm="4" className="pl-0 pr-0">
                <form>
                  <MDBRow>
                    <MDBCol lg="12"><h2 class="bha_heading_2 text-black font-xx mb-3">Contact Us</h2></MDBCol>
                    <MDBCol lg="12">
                    <div class="form-group">
                      <label>First Name, Surname *</label>
                      <input type="text" class="form-control input-control" name="email" placeholder="Enter Name/Surname" />
                    </div>
                    <div class="form-group">
                    <label>Email Address *</label>
                    <input type="text" class="form-control input-control" name="email" placeholder="Enter Email address" />
                   </div>
                   <div class="form-group">
                    <label>Phone *</label>
                    <input type="text" class="form-control input-control" name="email" placeholder="Enter Phone Number" />
                  </div>
                  <div class="form-group">
                   <label>Message</label>
                   <textarea type="text" class="form-control input-control" name="email" placeholder="Enter message here..."></textarea>
                </div>
                <div class="form-group">
              <label>Captcha</label>
              <img class="img-fluid w-100" src={Captcha} alt="Captcha" />
            </div>
            <div class="form-group">
              <button type="button" class="btn bha-btn-primary float-right" name="buttonsubmit">Submit</button>
            </div>
                </MDBCol>

                  </MDBRow>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </div>
    )
  }
}
