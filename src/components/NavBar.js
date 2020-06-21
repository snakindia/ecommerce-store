import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBContainer, MDBDropdownToggle, MDBDropdown, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import item1 from '../assets/images/thumbnail-img/item1.jpg'
import item2 from '../assets/images/thumbnail-img/item2.png'
import item3 from '../assets/images/thumbnail-img/item3.jpg'
import item4 from '../assets/images/thumbnail-img/item4.jpg'
import item5 from '../assets/images/thumbnail-img/item5.jpg'
import item6 from '../assets/images/thumbnail-img/item6.jpg'
import EpicCover from '../assets/images/600X500-4.jpg'
import Baghouse from '../assets/images/baghouse.jpg'
import Valve from '../assets/images/valve.jpg'
import Fan from '../assets/images/fan.jpg'


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>

        <Router>
          <header>
            <MDBNavbar  className="" color="default-color" dark expand="md">
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav className="wsmenu-list" left>
                  <MDBNavItem active>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="dropdown-submenu float-left">
                  <MDBNavLink to="/">Products/Services<span class="dropdown-toggle ml-2"></span></MDBNavLink>
                  <div class="dropdown-menu">
              <div class="wsshopwp clearfix">
                <div class="image-holder">
                    <img src={EpicCover} alt="" width="300" height="150" />
                  </div>
                <ul >
                  <li><a href="#" data-src={Baghouse}>EPC</a>
                    <div>
                    <div class="container-fluid">
                        <div class="row custom-gutter">
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item2} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="/">Cartridge Dust Collectors</a></li>
                            </ul>
                          </div>
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item1} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="/">Baghouse</a></li>
                            </ul>
                          </div>
                          
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item3} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="/">Bin Vents</a></li>
                            </ul>
                          </div>
                          
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item5} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="/">Fans &amp; Blowers</a></li>
                            </ul>
                          </div>
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item4} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="/">Portable Dust Collectors</a></li>
                            </ul>
                          </div>
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item6} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="/">Fiberglass Filter Bags</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  
                  <li class="dropdown-submenu"><a href="/" data-src={Valve}>Equipment</a>
                    <div class="dropdown-menu">
                      <div class="container-fluid">
                        <div class="row custom-gutter">
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item1} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="#">Baghouse</a></li>
                            </ul>
                          </div>
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item2} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="#">Cartridge Dust Collectors</a></li>
                            </ul>
                          </div>
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item3} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="#">Bin Vents</a></li>
                            </ul>
                          </div>
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item4} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="#">Portable Dust Collectors</a></li>
                            </ul>
                          </div>
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item5} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="#">Fans &amp; Blowers</a></li>
                            </ul>
                          </div>
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item6} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="#">Fiberglass Filter Bags</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="dropdown-submenu"><a href="#" data-src={Fan}>Parts</a>
                    <div class="dropdown-menu">
                      <div class="container-fluid">
                        <div class="row custom-gutter">
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item1} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="/">Baghouse</a></li>
                            </ul>
                          </div>
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item2} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="/">Cartridge Dust Collectors</a></li>
                            </ul>
                          </div>
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item3} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="/">Bin Vents</a></li>
                            </ul>
                          </div>
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item4} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="/">Portable Dust Collectors</a></li>
                            </ul>
                          </div>
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item5} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="/">Fans &amp; Blowers</a></li>
                            </ul>
                          </div>
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item6} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="/">Fiberglass Filter Bags</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="dropdown-submenu"><a href="/" data-src={EpicCover}>Brands</a>
                    <div class="dropdown-menu">
                      <div class="container-fluid">
                        <div class="row custom-gutter">
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item1} alt=" "/></li>
                              <li class="wstheading clearfix"><a href="/">Baghouse</a></li>
                            </ul>
                          </div>
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item2} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="/">Cartridge Dust Collectors</a></li>
                            </ul>
                          </div>
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item3} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="/">Bin Vents</a></li>
                            </ul>
                          </div>
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item4} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="/">Portable Dust Collectors</a></li>
                            </ul>
                          </div>
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item5} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="/">Fans &amp; Blowers</a></li>
                            </ul>
                          </div>
                          <div class="col-lg-3 col-md-12">
                            <ul class="wstliststy04 clearfix">
                              <li><img class="scale-down" src={item6} alt=" " /></li>
                              <li class="wstheading clearfix"><a href="/">Fiberglass Filter Bags</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  
                </ul>
              </div>
            </div>     
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/">Projects</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/">News &amp; Events</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/">Projects</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/">Represent Us</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact">Contact</MDBNavLink>
              <span class="dropdown border-0">
              <a href="/" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">EN<i class="caret border-0"></i></a>
            
            <ul class="dropdown-menu">
                <li><a href="/">EN</a></li>
                <li class="dropdown-submenu"><a href="/">US<i class="caret border-0"></i></a>
                <ul  class="dropdown-menu">
                <li><a href="/">Dutch</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="/">Italian</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="/">French</a></li>
                </ul>
                </li>
                <li><a href="/">Dutch</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="/">Italian</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="/">French</a></li>
              </ul>
              </span>

            </MDBNavItem>
             </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </Router>
      </div>
    );
  }
}

export default NavBar;