import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Breadcrumb } from 'antd';
import QuickView from '../QuickView'
//import { getProduct } from '../store/Actions'
import { Link } from 'react-router-dom';
import { Collapse } from 'antd';
import { Card } from 'antd';
import Login from './Login'
import Address from './Address'
import Summary from './Summary';
const { Panel } = Collapse;

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            item: null,
            visible: true,
            email: '',
            step: 1,
            shippingAddress: undefined,
            billingAddress: undefined
        }
    }

    componentDidMount() {
        // const { params: { id } } = this.props.match;
        // this.props.getProduct(id);
    }

    setEmail = (email) => {
        this.setState({ email })
    }

    next = (step) => {
        this.setState({ step })
    }

    shippingSave = (data, type) => {
        console.log({ data, type });
        if (type == 'shipping') {
            if (data.same == 1) {
                this.setState({
                    shippingAddress: data,
                    billingAddress: data,
                    step: 4
                })
            } else {
                this.setState({
                    shippingAddress: data,
                    step: 3
                })
            }

        }
        else if (type == 'billing') {
            this.setState({
                billingAddress: data,
                step: 4
            })
        }

    }

    openPanel = (e) => {
        const { email, billingAddress, shippingAddress } = this.state;
        if (e && e.length > 1 && e[1]) {
            const step = e[1];
            if (step == 1) {
                this.setState({ step })
            }
            else if (step == 2 && email) {
                this.setState({ step })
            } else if (step == 3 && shippingAddress) {
                this.setState({ step })
            } else if (step == 4 && billingAddress) {
                this.setState({ step })
            }
        }
        console.log({ e });
    }


    render() {
        const { authenticated, user,cart } = this.props;
        const { step, email, shippingAddress, billingAddress } = this.state;
        const headerOne = <div className="headerone"><h5 className="hh1">1. Customer</h5>
            {authenticated ? <div className="info">
                <span>{email ? email : null}</span>
                <button className="SignOut">Sign Out</button>
            </div> : null}
        </div>
        let subtotal = 0;
        let shipping = 0;
        let tax = 0;
        let total = 0;
        let  dataSource =[];
        if (Object.keys(cart) && Object.keys(cart).length > 0) {
            for (const datum of Object.keys(cart)) {
                if (cart[datum]) {
                    
                    const price = cart[datum].item.sale_price ? cart[datum].item.sale_price: cart[datum].item.regular_price;
                    const qty = cart[datum].qty;
                    subtotal = subtotal + (price * qty);
                    const item ={
                        name:cart[datum].item.name,
                        qty:cart[datum].qty,
                        price:`$${price}`
                    };
                    dataSource.push(item);
                }
            }
        }
        dataSource.push({
            name:'',
            qty:'Subtotal',
            price:`$${subtotal}`
        });
        dataSource.push({
            name:'',
            qty:'Shipping',
            price: shipping ? `$${shipping}`:'---'
        });
        dataSource.push({
            name:'',
            qty:'Tax',
            price:tax ? `$${tax}`:'$0.00'
        });
    
        total =subtotal+shipping+tax;
        dataSource.push({
            name:'Total',
            qty:'',
            price:total ? `$${total}`:'$0.00'
        });
        return (


            <div className="content-wrapper topPadding" id="content">
                <div className="pagewrap">
                    <div className="bgWhite padding-bottom">
                        <section >
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-12 col-md-8 left-content">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12">

                                                <h1 className="bha_heading_2 text-blue padding-top30 padding-btm30">Check Out</h1>
                                                <div id="accordion">
                                                    <Collapse
                                                        activeKey={step.toString()}
                                                        onChange={this.openPanel}
                                                    >
                                                        <Panel header={headerOne} key="1">
                                                            {authenticated ? null : <Login
                                                                user={user}
                                                                authenticated={authenticated}
                                                                setEmail={this.setEmail}
                                                                email={this.state.email}
                                                                next={this.next}
                                                            />
                                                            }
                                                        </Panel>
                                                        <Panel header="2. Shipping" key="2" >
                                                            <Address type="shipping" submit={this.shippingSave} data={shippingAddress} />
                                                        </Panel>
                                                        <Panel header="3. Billing" key="3" >
                                                            <Address type="billing" submit={this.shippingSave} data={billingAddress} />
                                                        </Panel>
                                                        <Panel header="4. Payment" key="4" >
                                                            <div className="card-body">
                                                                <form>
                                                                    <div className="row">

                                                                        <div className="col-lg-12"  >
                                                                            <div className="row">

                                                                                <div className="col-sm-12 col-md-12">

                                                                                    <div className="form-group">

                                                                                        <div><input type="radio" className="mr-2 mt-3" checked="" />Cash on Delivery <span >(Pay with cash upon delivery.)</span></div>

                                                                                    </div>

                                                                                    <div className="form-group">

                                                                                        <div><input type="radio" className="mr-2 mt-3" />Paypal</div>
                                                                                        <div className="pt-3">
                                                                                            <img src="images/paypal-payment-checkout.png" width="319px" height="80px" />

                                                                                        </div>

                                                                                    </div>

                                                                                    <p className="mt-3">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#">privacy policy.</a></p>
                                                                                </div>


                                                                                <div className="col-sm-12 col-md-12 mt-3">
                                                                                    <h5>${total}</h5>

                                                                                    <div className="form-group mt-3 mb-3">
                                                                                        <a href="thank-you.html" className="btn bha-btn-primary margin-left-mobile15 w-100 text-center" name="buttonsubmit">Place Order</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </Panel>
                                                    </Collapse>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4">

                                        <div className="right-content aside margin-top30">
                                            <Summary dataSource={dataSource}/>
                                             </div>
                                    </div>
                                </div>
                            </div>
                        </section>




                    </div>
                </div>
            </div>


        );
    }
}
const mapStateToProps = (state) => ({
    loading: state.shop.loading,
    cart: state.shop.cart,
    error: state.shop.error,
    authenticated: state.auth.authenticated,
    user: state.auth.customer_settings,
});
const mapDispatchToProps = dispatch => ({
    //getProduct: (id) => dispatch(getProduct(id)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout);