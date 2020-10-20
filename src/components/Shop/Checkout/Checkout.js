import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Breadcrumb } from 'antd';
import QuickView from '../QuickView'
//import { getProduct } from '../store/Actions'
import { Link } from 'react-router-dom';
import { Collapse } from 'antd';
import { Card } from 'antd';
import Login from './Login'
const { Panel } = Collapse;

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            item: null,
            visible: true,
            email:'',
            step:1
        }
    }

    componentDidMount() {
        // const { params: { id } } = this.props.match;
        // this.props.getProduct(id);
    }

    setEmail =(email)=>{
        this.setState({email})
    }

    next =(step)=>{
        this.setState({step})
    }
    render() {
        const {authenticated,user}=this.props;
        const {step}=this.state;


        return (


            <div className="content-wrapper topPadding" id="content">
                <div className="pagewrap">
                    <div className="bgWhite padding-bottom">
                        <section >
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-8 col-md-8 left-content">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12">

                                                <h1 className="bha_heading_2 text-blue padding-top30 padding-btm30">Check Out</h1>
                                                <div id="accordion">
                                                    <Collapse
                                                        defaultActiveKey={[step.toString()]}
                                                    // onChange={callback}
                                                    >
                                                        <Panel header="1. Customer" key="1">
                                                            <Login 
                                                            user={user}
                                                             authenticated={authenticated}
                                                             setEmail={this.setEmail}
                                                             email={this.state.email}
                                                             next ={this.next}
                                                             />

                                                        </Panel>
                                                        <Panel header="2. Shipping" key="2">
                                                            <p>dgfh</p>
                                                        </Panel>
                                                        <Panel header="3. Billing" key="3" disabled>
                                                            <p>dgfh</p>
                                                        </Panel>
                                                        <Panel header="4. Payment" key="4" disabled>
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
                                                                                    <h5>$75.70</h5>

                                                                                    <div className="form-group mt-3 mb-3">
                                                                                        <a href="thank-you.html" className="btn bha-btn-primary margin-left-mobile15" name="buttonsubmit">Place Order</a>
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
                                    <div className="col-sm-4 col-md-4">

                                        <div className="right-content aside">
                                            <div id="accordion" className="myaccordion">
                                                <div className="border-0">
                                                    <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
                                                        <div className="card-body card-body margin-top p-0">
                                                            <div className="col-sm-12 col-md-12">
                                                                <div className="row">
                                                                    <div className="order-summary">
                                                                        <div className="Heading">
                                                                            Order Summary
                                      <span><a href="cart.html">Edit Cart</a></span>
                                                                        </div>

                                                                        <div className="table-responsive">
                                                                            <table className="table">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th scope="col" width="60%"> Product Name</th>
                                                                                        <th scope="col" width="10%">Quantity</th>
                                                                                        <th scope="col" width="30%">Price</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td className="no-border">Goyen® K0380 (M1131B) Replacement Repair Kit</td>
                                                                                        <td className="no-border">01</td>
                                                                                        <td className="no-border">$ 21.80</td>

                                                                                    </tr>
                                                                                    <tr>

                                                                                        <td className="no-border">ASCO® C113826 Replacement Repair Kit for ASCO 1 1/2" Valve</td>
                                                                                        <td className="no-border">01</td>
                                                                                        <td className="no-border">$ 34.00</td>

                                                                                    </tr>
                                                                                    <tr>

                                                                                        <td  >Goyen® K2529 Replacement Repair Kit</td>
                                                                                        <td  >01</td>
                                                                                        <td  >$ 19.90</td>

                                                                                    </tr>

                                                                                    <tr>

                                                                                        <td  ></td>
                                                                                        <td  ><strong>Subtotal</strong></td>
                                                                                        <td  >$ 45874.70</td>

                                                                                    </tr>
                                                                                    <tr>

                                                                                        <td className="no-border"  ></td>
                                                                                        <td className="no-border"  ><strong>Shipping</strong></td>
                                                                                        <td className="no-border"  >- - - -</td>

                                                                                    </tr>
                                                                                    <tr>

                                                                                        <td  ></td>
                                                                                        <td  ><strong>Tax</strong></td>
                                                                                        <td  >$0.00</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td colSpan="3">
                                                                                            <form>
                                                                                                <div className="col-lg-12 padding-left0">
                                                                                                    <div className="row">
                                                                                                        <div className="col-sm-9 col-md-9 col-xs-12">
                                                                                                            <div className="form-group mt-3">
                                                                                                                <input type="text" className="form-control input-control" name="email" placeholder="Coupon/Gift Certificate code" />

                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="col-sm-3 col-md-3 col-xs-12 padding-left0">
                                                                                                            <div className="form-group mt-3">
                                                                                                                <button type="button" className="btn bha-btn-apply margin-left-mobile15" name="buttonsubmit">Apply</button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </form>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="total-bg"  ><strong>Total</strong></td>
                                                                                        <td className="total-bg"  ></td>
                                                                                        <td className="total-bg"  >$ 75.70</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
    product: state.shop.product,
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
