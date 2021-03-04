import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { message, Button, Space } from 'antd';
import { connect } from 'react-redux';
import Profile from '../assets/icon/profile.svg';
import { MDBModal, MDBContainer } from 'mdbreact';
import loginpopupleft from '../assets/images/loginpopupleft.jpg'
import logo from '../assets/images/footer-logo.png'
import closeImg from '../assets/images/popup-close.png'
import Login from './Login'
// import { toggleWishlist } from '../Accounts/store/Actions'
class LoginPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            item: null,
            visible: true,
        }
    }

    componentDidUpdate(prevProps,prevState ){
        const {location:{pathname}}=this.props;
        if(pathname != prevProps.location.pathname && this.state.showModal){
            this.setState({showModal:false})
        }
    }

    show = (e) => {
        e.preventDefault()
        this.setState({ showModal: true })
    }

    hide = () => {
        this.setState({ showModal: false })
    }

    render() {
        const { type, heading } = this.props;
        const { item, showModal, visible } = this.state;
        return (
            <>
                <li><a id="loginpopover" href="/" className="ant-popover-open" onClick={this.show}>
                <embed src={Profile} type='image/svg+xml' alt="" width="20" height="20"></embed>
                        
                        login/signup
                </a>
                </li>
                <MDBContainer>
                    <MDBModal
                        isOpen={showModal}
                        toggle={this.hide}
                        centered
                        id="#myModalView"
                        className="modal-width-lg"
                    >


                        <a href="#" id="btnClose" title="Click here to close this deal box." onClick={this.hide}>
                            <img src={closeImg} alt="Close" /></a>
                        <div className="container pl-0 pr-0">
                            <div className="row no-gutters">
                                <div className="col-sm-6 col-md-6">
                                    <div className="leftWrap">
                                        <div className="LoginLeft">
                                            <img src={logo} alt="Baghouseamerica" className="img-fluid" width="250" />
                                            <h4 className="login-heading font-xx text-white">Account Login</h4>
                                            <p>Get access to your Orders, Wishlist and Recommendations</p>
                                        </div>
                                        <img className="Img-object-fit" src={loginpopupleft} alt="" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6">
                                    {/* <div className="popup-brand">
                                        <img src={logo} alt="Baghouseamerica" className="img-fluid" width="320" />
                                    </div> */}
                                  <div className="LoginReft">
                                    <div className="popup-decscription">
                                        <Login  onFormSubmit={this.props.doLogin}/>
                                     </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MDBModal>
                </MDBContainer>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    loading: state.accounts.loading,
    fav: state.accounts.fav,
    authenticated: state.accounts.authenticated,
    error: state.accounts.error
});
const mapDispatchToProps = dispatch => ({
    // toggleWishlist: (payload) => dispatch(toggleWishlist(payload)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(LoginPopUp));









