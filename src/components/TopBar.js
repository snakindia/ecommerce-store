import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { MDBModal, } from 'mdbreact';
import { withRouter } from 'react-router-dom';
import { doLogin, logout } from '../components/Accounts/store/Actions';
import Cart from '../assets/icon/cart.svg';
import Profile from '../assets/icon/profile.svg';
import { Link } from 'react-router-dom'
import GoogleTranslator from './common/GoogleTranslator';
import { Popover } from 'antd';
import MiniCart from './Shop/MinCart';
import SearchProduct from './Shop/SearchProduct';
import LoginPopUp from './LoginPopUp';
class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal4: false,
      modal5: false,
      fields: {},
      errors: {},
      visibleMiniCart: false,
      loginError: null,
      showuserDetail: false,
      searchVisible:false
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

 

  showLanguage = () => {
    const { showLanguage } = this.state;
    this.setState({ showLanguage: showLanguage ? false : true })
  }

  onFormSubmit = (values, { setSubmitting }) => {
    this.props.doLogin(values);

  };
  showCart = (e, visibleMiniCart) => {
    if (e) { e.preventDefault(); }
    this.setState({ visibleMiniCart })
  }
  showuserDetailHandler = (e) => {
    e.preventDefault()
    this.setState((prevState) => ({ ...prevState, showuserDetail: !prevState.showuserDetail }))
  }

  accountsClick = (e) => {
    window.location.href = '/accounts'
  }

  onSignOut = () => {

    const { pathname } = this.props.location;
    // localStorage.clear();
    // if(pathname && pathname.split('/').includes('accounts')){
    //   window.location= process.env.REACT_APP_CLIENT_URL;
    // }else {
    //   window.location.reload();
    // }

    this.props.logout(this.props.history, pathname);
  };

  render() {
    const { authenticated, userDetails, cart } = this.props;
    const { visibleMiniCart, searchVisible } = this.state;
    let productsInCart = 0;
    if (cart && cart.items && cart.items.length > 0) {
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
          <div className="call-us-mob" style={{ "display": "none" }}>CALL US: (888) 286-8708</div>
          <div className="topbar">
            <div className="headerwp">
              {/* <div className="mobile pt-2 font-weight-bold pl-0 callUs_lx" style={{ float: 'left' }}>
                CALL US: (888) 286-8708
              </div> */}
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-5">
                  <div className="mobile pt-2 font-weight-bold pl-0 callUs_lx">
                    CALL US: (888) 286-8708
                  </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-7">
                    <div className="text-sm-right">
                      <ul className="top-nav-link">
                        <li>
                        {productsInCart > 0 ?
                          <Popover placement="bottom" title='' content={<MiniCart showCart={this.showCart} />} trigger="click"
                            overlayStyle={{ zIndex: 10001, position: 'fixed' }}
                            overlayClassName="mini-cart-popup"
                            visible={visibleMiniCart}
                            destroyTooltipOnHide={true}>
                            <Link to="" onClick={e => this.showCart(e, true)}>
                              <embed src={Cart} type='image/svg+xml' alt="" width="20" height="20" style={{ marginRight: '2px' }}></embed>
                              <div style={{
                                width: '20px', height: '20px', borderRadius: '100px', textAlign: 'center', margin: '0 5px 0 2px',
                                lineHeight: '20px', background: '#f00'
                              }}>{productsInCart}</div>
                            Cart
                          </Link>
                          </Popover>
                          :
                          <Link to="" onClick={e => this.showCart(e, true)}>
                              <embed src={Cart} type='image/svg+xml' alt="" width="20" height="20"></embed>
                          Cart
                          </Link>
                          }
                        </li>
                        <span>|</span>
                        <li>
                        
                        {authenticated && userDetails && userDetails.first_name ? (
                          <Popover placement="bottom" title='' content={
                              <ul className="user-setting-menu">
                                <li onClick={this.accountsClick}><a href="/accounts" >My Accounts</a></li>
                                <li onClick={this.onSignOut}><a href="#">Sign out</a></li>
                              </ul>
                              } trigger="click"
                              overlayStyle={{ zIndex: 10001, position: 'fixed' }}
                              overlayClassName="mini-cart-popup"
                              
                            >
                              
                              {userDetails.first_name}
                              <i className="fa fa-angle-down top-caret ml-2"
                              ></i>
                              </Popover>
                            ) : <LoginPopUp doLogin={this.props.doLogin} />
                            }

                        </li>
                       <span>|</span>
                        <Popover placement="bottom" title='' content={<SearchProduct linkClick={e => this.setState({searchVisible:false})} />} trigger="click"
                          overlayStyle={{ zIndex: 10001, position: 'fixed', width:'300px', maxHeight:'350px' }}
                          overlayClassName="search-bar-popup"
                          visible={searchVisible}
                        >
                          <li className="mobHide" onClick={e => this.setState({searchVisible:true})}>
                            
                              <i className="fa fa-search mr-2" />Search
                              {/* <i className="caret border-0" /> */}
                            
                        </li>
                        </Popover>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    );
  }
}

const mapStateToProps = ({ asyncReducer, auth, shop, accounts }) => {
  return {
    page_details: asyncReducer.page_meta_details,
    authenticated: accounts.authenticated,
    userDetails: accounts.user,
    cart: shop.cart
  };
};

export default connect(mapStateToProps, { doLogin, logout })(withRouter(TopBar));
