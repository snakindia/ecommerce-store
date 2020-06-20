import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import Cart from '../assets/icon/cart.svg';
import Profile from '../assets/icon/profile.svg';
import Globe from '../assets/icon/globe.svg';

class TopBar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <div class="headtoppart">
  <div class="topbar">
      <div class="headerwp">
          <div class="mobile pt-2 font-weight-bold pl-0" style={{float:'left'}}>
            CALL US: (888) 286-8708
          </div>
          <div class="address float-right">
            <a href=""><img src={Cart} alt="" width="20" />Cart</a>
            <span>&nbsp;</span>
            <a href="/" data-toggle="modal"><img src={Profile} alt="" width="20" />login/signup</a>
            <span>&nbsp;</span>
            <span class="dropdown border-0">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img src={Globe} alt="" width="20" />EN<i class="caret border-0"></i></a>
            
            <ul class="dropdown-menu">
                <li><a href="/">EN</a></li>
                <li><a href="/">US</a></li>
                <li><a href="/">Dutch</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="/">Italian</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="/">French</a></li>
              </ul>
              </span>
          </div>
      </div>
    </div>
    </div>
    );
  }
}

export default TopBar;