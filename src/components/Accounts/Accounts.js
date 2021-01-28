import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import React from 'react';
import { Menu } from 'antd';
import Dashboard from './Dashboard';
import Orders from './Orders';
import Order from './Order';
import Address from './Address';
import AccountDetail from './AccountDetail';
import Loader from '../Loader/Loader';
import { getUser } from './store/Actions';
import './style.css';
 class Accounts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            item: null,
            visible: true,
        }
    }

    componentDidMount(){
        this.props.getUser();
    }

    handleClick = e => {
        console.log('click ', e);
    };


    logout =(e)=>{
        e.preventDefault();
        localStorage.clear();
        window.location.reload();

    }
    
    render() {
        const {authenticated, user,loading, orderSyncTime,orders}=this.props;
        if(loading === false && authenticated === false){
            this.props.history.push('/')
        }
        console.log('loadingloading',loading,authenticated);
        return (
            <div className="content-wrapper topPadding" id="content">
                {loading ? <Loader /> :null}
                {!loading && authenticated && user ? 
                <div className="pagewrap">
                    <div className="bgWhite">
                        <div className="container-fluid">
                            <ol className="breadcrumb breadcrumb-bar pb-0 pt-1 small">
                                <li className="breadcrumb-item"><a href="home.html">Home</a></li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </div>
                        <section className="pro-equipment-section">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-3 col-md-3 padding-0 border-right border-bottom left-content">
                                        <div className="side-bar-menu">
                                            <div className="sidebar-head">Manage your account</div>
                                            <Menu
                                                onClick={this.handleClick}
                                                mode="inline"
                                                className="menu sidebar-inner"
                                            >
                                                <Menu.Item key="dashboard" >
                                                    <Link to="/accounts">
                                                        Dashboard
                                                </Link>
                                                </Menu.Item>
                                                <Menu.Item key="order" >
                                                    <Link to="/accounts/my-orders">
                                                        View Order Status
                                                </Link>
                                                </Menu.Item>
                                                <Menu.Item key="address" >
                                                    <Link to="/accounts/address-book">
                                                        My Address Book
                                                </Link>
                                                </Menu.Item>
                                                {/* <Menu.Item key="wishlist" >
                                                    <Link to="/accounts/wishlist">
                                                        My Wishlist
                                                </Link>
                                                </Menu.Item> */}
                                                <Menu.Item key="detail" >
                                                    <Link to="/accounts/account-details">
                                                        Account Details
                                                </Link>
                                                </Menu.Item>
                                                <Menu.Item key="Logout" >
                                                    <Link to="/" onClick={this.logout}>
                                                        Logout
                                                </Link>
                                                </Menu.Item>
                                            </Menu>

                                        </div>
                                    </div>
                                    <div className="col-sm-9 col-md-9">
                                        <div className="tabContainer">
                                            <Switch>
                                                
                                                <Route path="/accounts/my-orders/:id" component={Order} />
                                                <Route path="/accounts/my-orders" component={Orders} />
                                                {/* <Route path="/accounts/my-orders" render={props => <Orders key={orderSyncTime} {...props} />} /> */}
                                                <Route path="/accounts/address-book" component={Address} />
                                                <Route path="/accounts/account-details" component={AccountDetail} />
                                                <Route path="/wishlist" component={Dashboard} />
                                                <Route  path="/" component={Dashboard} />
                                            </Switch>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                : <p>Please login to view your account details</p> 
                }
            </div>


        )
    }
}

const mapStateToProps = (state) => ({
    authenticated: state.accounts.authenticated,
    user: state.accounts.user,
    orders: state.accounts.orders,
    loading:state.accounts.authloading,
});
const mapDispatchToProps = dispatch => ({
    getUser: () => dispatch(getUser()),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Accounts);

