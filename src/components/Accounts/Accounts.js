import { Link, Route, Switch, Redirect } from 'react-router-dom';
import React, { useState } from 'react';
import { Menu } from 'antd';
import Dashboard from './Dashboard';
class Accounts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            item: null,
            visible: true,
        }
    }
    handleClick = e => {
        console.log('click ', e);
    };


    logout =(e)=>{
        e.preventDefault();

    }
    render() {
        return (
            <div className="content-wrapper topPadding" id="content">
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
                                                <Menu.Item key="wishlist" >
                                                    <Link to="/accounts/wishlist">
                                                        My Wishlist
                                                </Link>
                                                </Menu.Item>
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
                                                <Route path="/my-orders" component={Dashboard} />
                                                <Route path="/order-details/:id" component={Dashboard} />
                                                <Route path="/order-details" component={Dashboard} />
                                                <Route path="/address-book" component={Dashboard} />
                                                <Route path="/wishlist" component={Dashboard} />
                                                <Route path="/account-details" component={Dashboard} />
                                                <Route path="/" component={Dashboard} />
                                            </Switch>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>


        )
    }
}

export default Accounts;


