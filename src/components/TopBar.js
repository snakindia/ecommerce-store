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

    <Router>
      <MDBNavbar color="default-color" className="headtoppart" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">CALL US: (888) 286-8708</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav  right>
            <MDBNavItem className="address">
              <MDBNavLink to="/">
              <img src={Cart} style={{width:25}} alt="Cart" /> <span className="Cart-text">Cart</span>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink  className="address" to="/">
              <img src={Profile} style={{width:25}} alt="Profile" /> <span className="Cart-text">LoginSignUP</span>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown className="top-dropdown">
                <MDBDropdownToggle nav caret>
                <img src={Globe} style={{width:25}} className="globe" alt="Globe" /> 
                  <div className="d-none d-md-inline">EN</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="/">EN</MDBDropdownItem>
                  <MDBDropdownItem href="/">US</MDBDropdownItem>
                  <MDBDropdownItem href="/">Dutch</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem href="/">Italian</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem href="/">French</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default TopBar;