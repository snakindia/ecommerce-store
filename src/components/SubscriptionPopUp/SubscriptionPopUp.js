import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuLogo from '../../assets/images/menu-logo.png';
import PopUpClose from '../../assets/images/popup-close.png';
import Image from '../../assets/images/1 (3).jpg';

class SubscriptionPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            idleTime: 0
        };
    }
    
    handleClose() {
        document.cookie = "subscriptionPopUp=true";
        document.getElementsByClassName("delayedPopupWindow")[0].style.display = "none";
        document.getElementsByClassName("backgroundOverlay")[0].style.display = "none";
        clearInterval(window.timer);
    }

    
    render() {
        return (
                <div>
                 <div id="bkgOverlay" class="backgroundOverlay"></div>
            <div id="delayedPopup" class="delayedPopupWindow">
                <a href="#" id="btnClose" title="Click here to close this deal box." onClick={this.handleClose.bind(this)}><img src={PopUpClose} alt="Close" /></a>
                <div class="container pl-0 pr-0">
                    <div class="row no-gutters">
                        <div class="col-sm-6 col-md-6"><img class="img-fluid img-cover" src={Image} alt="" /></div>
                        <div class="col-sm-6 col-md-6">
                          <div class="popup-brand">
                            <img src={MenuLogo} alt="Baghouseamerica" class="img-fluid" width="320" />
                          </div>
                          <div class="popup-decscription">
                            <div class="">Daily Inspiration, straight to your inbox.</div>
                            <div class="popup-display">Don't miss out on sales, new arrivals and more.</div>
                          </div>
                          <div class="popup-decscription">
                            <form action="" method="">
                              <div class="form-group">
                                <input type="email" value="" name="email" class="popup-input" placeholder="Enter Your Email" />
                              </div>
                              <div class="clear mt-2">
                                <input type="submit" value="Sign Up" name="" class="popup-btn" />
                              </div>
                            </form>
                            <div class="text-uppercase mt-3 text-underline text">No, Thanks</div>
                          <div class="small">Baghouse america can see <a href="#" class="text-underline">Financial Incentive Terms</a> for terms and
                can request <a href="#" class="text-underline">Do Not Sell My Info.</a> Please visit our <a href="#" class="text-underline">privacy policy</a> to learn how we use your information.</div>
                          </div>

                        </div>
                    </div>
              </div>
            </div>
            </div>
        );
    }
}

const mSTP = () => ({
    
});
const mDTP = {  };
export default connect(mSTP, mDTP)(SubscriptionPopUp);

