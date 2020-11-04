import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { MDBModal, } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { doLogin, logout } from '../components/Accounts/store/Actions';
import Cart from '../assets/icon/cart.svg';
import Profile from '../assets/icon/profile.svg';
import Globe from '../assets/icon/globe.svg';
import { Link } from 'react-router-dom'
import { Formik } from 'formik';
import base64 from 'buffer';
import { setUserSession } from '../utils/Common';
import { API_AJAX_URL, API_URL } from '../constants/appConstant';
import parseHtml from 'react-html-parser';
import { POST } from '../services/httpService';
import GoogleTranslator from './common/GoogleTranslator';
import { Popover } from 'antd';
import MiniCart from './Shop/MinCart';
import Login from './Login'
class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal4: false,
      modal5: false,
      fields: {},
      errors: {},
      loginError: null,
    };
    this.ref = React.createRef(null);
  }
  toggle = nr => () => {
    let modalNumber = 'modal' + nr;
    this.setState({
      modal5: false,
      modal6: false,
      loginError: null,
      showLanguage: undefined
    });
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  displaySignupContent() {
    const pageDetails = this.props.page_details;
    return (
      <div>
        {pageDetails &&
          Object.keys(pageDetails).length &&
          pageDetails.map(item =>
            item.slug == '/sign-up' ? (
              <small>{parseHtml(item.content)}</small>
            ) : (
                ''
              )
          )}
      </div>
    );
  }

  showLanguage = () => {
    const { showLanguage } = this.state;
    this.setState({ showLanguage: showLanguage ? false : true })
  }

  onFormSubmit = (values, { setSubmitting }) => {
    this.props.doLogin(values);
   
  };

  onSignOut = () => {
    this.props.logout();
  };

  render() {
    const { authenticated, userDetails, cart } = this.props;
    let productsInCart = 0;
    if(cart && cart.items && cart.items.length > 0){
      for (const item of cart.items) {
       
          productsInCart = productsInCart + item.quantity;
      
      }
    }
    const { showLanguage } = this.state;
    return (
      <div>
        <div style={{ display: showLanguage ? 'block' : 'none' }}>
          <GoogleTranslator />
        </div>

        <div className="headtoppart">
          <div className="call-us-mob">CALL US: (888) 286-8708</div>
          <div className="topbar">
            <div className="headerwp">
              <div
                className="mobile pt-2 font-weight-bold pl-0 callUs_lx"
                style={{ float: 'left' }}
              >
                CALL US: (888) 286-8708
              </div>
              <div className="rightLink" >
                <ul className="toplink">
                  <li>
                    {productsInCart > 0 ?
                      <Popover placement="bottom" title='' content={<MiniCart />} trigger="click"
                        overlayStyle={{ zIndex: 10001,position:'fixed' }}
                        overlayClassName="mini-cart-popup"
                      >
                        <Link to="" onClick={e => e.preventDefault()}>
                          <embed src={Cart} type='image/svg+xml' alt="" width="20" height="20" style={{ marginRight: '2px' }}></embed>
                          <div style={{
                            width: '20px', height: '20px', borderRadius: '100px', textAlign: 'center', margin: '0 5px 0 2px',
                            lineHeight: '20px', background: '#f00'
                          }}>{productsInCart}</div>
                      Cart
                    </Link>
                      </Popover>
                      :
                      <Link to="" onClick={e => e.preventDefault()}>
                        <embed src={Cart} type='image/svg+xml' alt="" width="20" height="20"></embed>
                   Cart
                 </Link>
                    }
                  </li>
                  <span>&nbsp;</span>
                  {authenticated && userDetails && userDetails.first_name ? (
                    <li>
                      {userDetails.first_name}
                      <button onClick={this.onSignOut}>SignOut</button>
                    </li>
                  ) : (
                      <li >
                        <Popover placement="bottom" title='' content={
                        <Login  
                        loginError={this.state.loginError}
                        displaySignupContent={this.displaySignupContent}
                        onFormSubmit={this.onFormSubmit}/>
                      } trigger="click"
                        overlayStyle={{ zIndex: 10001,position:'fixed' }}
                        overlayClassName="mini-cart-popup signInBox"
                      >
                        <Link to="" onClick={e => e.preventDefault()} id="loginpopover">
                          <embed src={Profile} alt="" width="20" height="20"></embed>
                        login/signup
                      </Link>
                      </Popover>
                      </li>
                    )}

                  {/* <span className="mobPipe">&nbsp;</span>
                <li id="CountryOpen"  onClick={this.showLanguage}>
                    {/*<a href="#"><embed src={Globe}  alt="" width="20" height="20"></embed>
                    <a>
                    EN<i className="caret border-0"></i></a>
                </li>*/}

                  <span>&nbsp;</span>
                  <li>
                    {/*<a color="primary" onClick={this.toggle(4)}><img src={Globe} alt="" width="20" />EN</a>*/}
                    <a color="primary" ><img src={Globe} alt="" width="20" />EN</a> </li>
                  <span className="mobHide">&nbsp;</span>
                  <li className="mobHide">
                    {/*<a onClick={this.toggle(6)}>*/}
                    <a>
                      <i className="fa fa-search mr-2" /> Search
                      <i className="caret border-0" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <MDBModal
          className="logIn"
          isOpen={this.state.modal5}
          toggle={this.toggle(5)}
        >
          <div>
            
          </div>
        </MDBModal>

        <MDBModal
          className="searchbox"
          isOpen={this.state.modal6}
          toggle={this.toggle(6)}
        >
          <form className="topmenusearch">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="What are you looking for..."
              />
              <div className="input-group-append">
                <button className="btn btn-bha-primary" type="button">
                  <i className="fa fa-search pl-0 pr-2" />
                </button>
              </div>
            </div>
          </form>
        </MDBModal>

        {/* <div className="headtoppart">
  <div className="topbar">
      <div className="headerwp">
          <div className="mobile pt-2 font-weight-bold pl-0" style={{"float":"left"}}>
            CALL US: (888) 286-8708
          </div>
          <div className="float-right">
            <a href=""><img src={Cart} alt="" width="20" />Cart</a>
            <span>&nbsp;</span>
            <a href="/" data-toggle="modal"><img src={Profile} alt="" width="20" />login/signup</a>
            <span>&nbsp;</span>
              <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img src={Globe} alt="" width="20" />EN</a>
            
          </div>
      </div>
    </div> 
</div> */}
      </div>
    );
  }
}

const mapStateToProps = ({ asyncReducer, auth, shop,accounts }) => {
  return {
    page_details: asyncReducer.page_meta_details,
    authenticated: accounts.authenticated,
    userDetails: accounts.user,
    cart: shop.cart
  };
};

export default connect(mapStateToProps, {doLogin, logout })(TopBar);
