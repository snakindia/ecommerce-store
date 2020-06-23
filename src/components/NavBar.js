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
import Baghouselogo from '../assets/images/baghouse_logo.svg';
import { dropDownMenuProduct,defaultMenuListItems } from "../constants/appConstant";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      coverImg:null,
      listItems:[],
      activeLink: null
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  showMenu = (listArr,idx,e) =>{
    const {coverImg , listItems} = listArr;
    this.setState({coverImg,listItems,activeLink:idx})
  }

  render() {
    const {coverImg,listItems,activeLink} = this.state
    return (
      <div class="headerfull h-25">
          <div class="wsmain clearfix">
            <div className="smllogo"><a href="/"><img className="d-block" src={Baghouselogo} alt="" width="200" /></a></div>
            <div className="wssearchbar clearfix">
                <form class="topmenusearch clearfix">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="What are you looking for..." />
                        <div className="input-group-append">
                            <button class="btn btn-bha-primary" type="button"><i class="fa fa-search pl-0 pr-2"></i>Search</button>
                        </div>
                    </div>
                </form>
            
                <div className="right-section">
                    <div className="call_us mr-4">
                        CALL US: <br />(888) 739-1794 
                    </div>
                    <div className="hotLink mr-3 float-left">
                        <a href="/" className="bha-btn-secondry">request a quote</a>
                    </div>
                    <div className="hotLink float-left">
                        <a href="/" className="bha-btn-primary">shop now</a>
                    </div>
                </div>
            </div>
        </div>
      <nav className="wsmenu clearfix">
        <ul className="wsmenu-list">
         <li aria-haspopup="true" className="wsshopmyaccount float-left"><a href="home.html" className="font-weight-bold">Home</a></li>
          <li aria-haspopup="true" className="wsshopmyaccount float-left"><a href="about-us.html" className="font-weight-bold">About</a></li>
          <li aria-haspopup="true" className="wsshopmyaccount float-left"><a href="#" className="font-weight-bold">Products/Services<span className="dropdown-toggle ml-2"></span></a>
            
            <div className="wsshoptabing wtsdepartmentmenu clearfix" style={{zIndex:999}}>
              <div className="wsshopwp clearfix">
                <div className="image-holder">
                    <img src={!coverImg ? EpicCover : coverImg} alt="" width="300" height="150" />
                  </div>
                <ul className="wstabitem clearfix">
                {
                  dropDownMenuProduct.map((itemOne,idx)=>{
                    let mainText = Object.keys(itemOne)[0];
                    let listArr = itemOne[mainText];
                    //let {listItems} = listArr
                    //console.log('listItems',listItems)
                    return (
                    <li className={activeLink == idx ? "wsshoplink-active":"wsshoplink"} key={idx+Math.random()}><a data-src={Baghouse} onMouseEnter={(e)=>this.showMenu(listArr,idx,e)}>{mainText}</a>
                    <div className="wstitemright clearfix wstpngsml">
                      <div className="container-fluid">
                        <div className="row custom-gutter">
                          {listItems.map((itemTwo,i)=>{
                            return (
                              <div className="col-lg-3 col-md-12" key={i+3}>
                              <ul className="wstliststy04 clearfix">
                                <li><img className="scale-down" src={itemTwo.itemImg} alt=" " /></li>
                                <li className="wstheading clearfix"><a href="#">{itemTwo.itemName}</a></li>
                              </ul>
                            </div>
                            )
                          }) }
                          </div>
                      </div>
                    </div>
                  </li>
                    )
                  })
                }
                  
                </ul>
              </div>
            </div>     

          </li>

           <li aria-haspopup="true" className="wsshopmyaccount float-left"><a href="course-details.html" className="font-weight-bold">Projects</a>
          </li>

          <li aria-haspopup="true" className="wsshopmyaccount float-left"><a href="course-details.html" className="font-weight-bold">Industries</a>
          </li>
           <li aria-haspopup="true" className="wsshopmyaccount float-left"><a href="course-details.html" className="font-weight-bold">News & Events</a>
          </li>
          <li aria-haspopup="true" className="wsshopmyaccount float-left"><a href="course-details.html" className="font-weight-bold">Represent Us</a></li>
          <li aria-haspopup="true" className="wsshopmyaccount float-left"><a href="contact-us.html" className="font-weight-bold">Contact</a></li>
        </ul>
      </nav>
       
      </div>
    );
  }
}

export default NavBar;