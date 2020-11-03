import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Breadcrumb } from 'antd';
import Loader from '../../Loader/Loader'
import QuickView from '../QuickView'
import { addOrder, updateAddress, getPaymentMethod, getShippingMethod, getPaymentSettingsMethod } from '../store/Actions';
import { Link } from 'react-router-dom';
import { Collapse } from 'antd';
import { Card } from 'antd';
import Login from './Login'
import Address from './Address'
import Summary from './Summary';
import Payment from './Payment';
import ShippingMethod from './ShippingMethod';
import PaypalExpress from './PaypalExpress';
import Thankyou from './Thankyou';
import {getAddress} from '../../../utils/helper';
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
            billingAddress: undefined,
            authenticated: undefined
        }
    }

    componentDidMount() {
        this.props.getPaymentMethod();
        this.props.getShippingMethod();

    }
    componentDidUpdate(prevProps) {
        const { cart } = this.props;

        if (cart && cart !== prevProps.cart) {
            const { email, billing_address, shipping_address, payment_method_id, shipping_method_id, payment_method_gateway } = cart;
            let step = 1;
            if (payment_method_id && payment_method_gateway == 'paypal-checkout') {
                step = 6;
            } else if (shipping_method_id) {
                step = 5;
            } else if (shipping_address && shipping_address.address1 && billing_address && billing_address.address1) {
                step = 4;
            } else if (shipping_address && shipping_address.address1) {
                step = 3;
            } else if (email) {
                step = 2;
            }
            this.setState({
                email: email ? email : '',
                billingAddress: billing_address && billing_address.address1 ? billing_address : undefined,
                shippingAddress: shipping_address && shipping_address.address1 ? shipping_address : undefined,
                step
            })
            if (step == 6) {
                this.props.getPaymentSettingsMethod();
            }



        }

    }

    setEmail = (email) => {
        this.setState({ email });
        const { cart } = this.props;
        const payload = {
            ...cart, email
        }
        this.props.updateAddress(payload, null);

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
                },()=>this.doAddressUpdate(type))
            } else {
                this.setState({
                    shippingAddress: data,
                    step: 3
                },()=>this.doAddressUpdate(type))
            }

        }
        else if (type == 'billing') {
            this.setState({
                billingAddress: data,
                step: 4
            },()=>this.doAddressUpdate(type))
        }
        

    }

    doAddressUpdate = (type)=>{
        const { cart } = this.props;
        const { email, billingAddress, shippingAddress } = this.state;
       
        const payload = {
            ...cart,
            email,

            billing_address: billingAddress,
            shipping_address: shippingAddress ? shippingAddress: undefined,
            full_name: billingAddress ? `${billingAddress.first_name} ${shippingAddress.last_name}`:'',
            first_name: shippingAddress.first_name,
            last_name: shippingAddress.last_name,
            mobile: shippingAddress.phone,
        }
       
        this.props.updateAddress(payload, type);
    }

    openPanel = (e) => {
        const { email, billingAddress, shippingAddress, } = this.state;
        const { payment_method_id, shipping_method_id, payment_method_gateway } = this.props.cart;
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
            } else if (step == 5 && shipping_method_id) {
                this.setState({ step })
            } else if (step == 6 && payment_method_id && payment_method_gateway == 'paypal-checkout') {
                this.setState({ step })
            }
        }
        console.log({ e });
    }

    placeOrder = (payment_method) => {
        const { cart, statuses, authenticated, user } = this.props;
        const { email, billingAddress, shippingAddress } = this.state;
        let status_id =statuses ?  statuses.filter(st=>st.name=='Order Received'): undefined ;
        status_id =status_id && status_id[0] ? status_id[0].id: '';
        const data = {
            ...cart,
            email,
            billing_address: billingAddress,
            shipping_address: shippingAddress,
            first_name: billingAddress.first_name,
            last_name: billingAddress.last_name,
            ...payment_method,status_id, 
            customer_id :authenticated && user && user.id ? user.id:''
        }
        console.log(data)
        this.props.addOrder(data);
    }

    submit = (data) => {
        const {statuses,paymentMethods}=this.props;
        const method = paymentMethods.filter(item => item.id == data.payment_method);
        let status_id =statuses ?  statuses.filter(st=>st.name=='Order Received'): undefined ;
        status_id =status_id && status_id[0] ? status_id[0].id: '';
        if (method && method[0]) {
            const data = {
                payment_method: method[0].name,
                payment_method_gateway: method[0].gateway,
                payment_method_id: method[0].id,
                status_id
            }
            console.log({ data })
            this.placeOrder(data);
        }

    }

    paymentMethodHandler = (id) => {
        this.props.updateAddress({ payment_method_id: id });
        setTimeout(() => {
            this.props.getPaymentSettingsMethod();
        }, 500)

    }

    shippingMethodHandler = (id) => {

        this.props.updateAddress({ shipping_method_id: id });
    }


    render() {
        const { authenticated, user, cart, paymentMethods, shippingMethods, checkoutSuccess, orderId,order_statuses } = this.props;
        const { step, email, shippingAddress, billingAddress } = this.state;
        const headerOne = <div className="headerone"><h5 className="hh1">1. Customer</h5>
            {authenticated && user && user.email ? <div className="info">
                <span>{user.email}</span>
                <button className="SignOut">Sign Out</button>
            </div> : <> {email ? <div className="info">
                <span>{email ? email : null}</span>
                <button className="SignOut">Edit</button>
            </div> : null} </>
            }
        </div>
        let subtotal = cart ? cart.subtotal : 0;
        let tax = cart ? cart.tax_total : 0;
        let shipping = cart ? cart.shipping_total : 0;
        let total = cart ? cart.grand_total : 0;
        let items = cart ? cart.items : [];
        let productsInCart = 0;
        if (cart && cart.items && cart.items.length > 0) {
            for (const item of cart.items) {
                productsInCart = productsInCart + item.quantity;
            }
        }
        let dataSource = [];
        if (items && items.length > 0) {
            for (const item of items) {
                const datum = {
                    name: item.name,
                    qty: item.quantity,
                    price: `$${item.price ? item.price : 0}`
                };
                dataSource.push(datum);
            }
        }
        dataSource.push({
            name: '',
            qty: 'Subtotal',
            price: `$${subtotal}`
        });
        dataSource.push({
            name: '',
            qty: 'Shipping',
            price: shipping ? `$${shipping}` : '---'
        });
        dataSource.push({
            name: '',
            qty: 'Tax',
            price: tax ? `$${tax}` : '$0.00'
        });

        dataSource.push({
            name: 'Total',
            qty: '',
            price: total ? `$${total}` : '$0.00'
        });

        let address;
        if(authenticated && user){
            address =getAddress(order_statuses);
            
        }
       
        return (

            <>
                {this.props.loadingCart && <Loader />}
                <div className="content-wrapper topPadding" id="content">
                    <div className="pagewrap">
                        <div className="bgWhite padding-bottom">
                            <section >
                                <div className="container-fluid">
                                    {
                                        checkoutSuccess ? <Thankyou orderId={orderId} /> : <>

                                            {cart ?

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
                                                                            {authenticated ? <div className="noheight"></div> : <Login
                                                                                user={user}
                                                                                authenticated={authenticated}
                                                                                setEmail={this.setEmail}
                                                                                email={this.state.email}
                                                                                next={this.next}
                                                                            />
                                                                            }
                                                                        </Panel>
                                                                        <Panel header="2. Shipping Address" key="2" >
                                                                            <Address oldAddress={address && address.shipping ? address.shipping: null} type="shipping" submit={this.shippingSave} data={shippingAddress} />
                                                                        </Panel>
                                                                        <Panel header="3. Billing Address" key="3" >
                                                                            <Address  oldAddress={address && address.billing ? address.billing: null} type="billing" submit={this.shippingSave} data={billingAddress} />
                                                                        </Panel>
                                                                        <Panel header="4. Shipping Method" key="4" >
                                                                            <ShippingMethod
                                                                                shipping_method_id={cart && cart.shipping_method_id ? cart.shipping_method_id : ''}
                                                                                shippingMethods={shippingMethods}
                                                                                shippingMethodHandler={this.shippingMethodHandler}
                                                                            />
                                                                        </Panel>
                                                                        <Panel header="5. Payment Method" key="5" >

                                                                            <Payment
                                                                                data={paymentMethods}
                                                                                payment_method_id={cart && cart.payment_method_id ? cart.payment_method_id : ''}
                                                                                total={total}
                                                                                submit={this.submit}
                                                                                hide={cart.payment_method_id && cart.payment_method_gateway == 'paypal-checkout'}
                                                                                paymentMethodHandler={this.paymentMethodHandler}
                                                                            />

                                                                        </Panel>
                                                                        {cart.payment_method_id && cart.payment_method_gateway == 'paypal-checkout' ?
                                                                            <Panel header="6. Payment " key="6" >
                                                                                <PaypalExpress />
                                                                            </Panel>
                                                                            : null
                                                                        }
                                                                    </Collapse>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-4">

                                                        <div className="right-content aside margin-top30">
                                                            <Summary dataSource={dataSource} />
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-8 left-content">{this.props.error && this.props.loadingCart ? 'Opps something went wrong...' : this.props.loadingCart ? '' : 'Your Cart Empty'}</div>
                                                </div>
                                            }
                                        </>
                                    }
                                </div>
                            </section>




                        </div>
                    </div>
                </div>
            </>

        );
    }
}
const mapStateToProps = (state) => ({
    loadingCart: state.shop.loadingCart,
    loading: state.shop.loading,
    cart: state.shop.cart,
    error: state.shop.error,
    paymentMethods: state.shop.paymentMethods,
    paymentMethodsSettings: state.shop.paymentMethodsSettings,
    shippingMethods: state.shop.shippingMethods,
    checkoutSuccess: state.shop.checkoutSuccess,
    orderId: state.shop.orderId,
    authenticated: state.auth.authenticated,
    user: state.auth.customer_settings,
    order_statuses: state.auth.order_statuses,
    statuses: state.accounts.statuses,
});
const mapDispatchToProps = dispatch => ({
    getPaymentMethod: () => dispatch(getPaymentMethod()),
    getPaymentSettingsMethod: () => dispatch(getPaymentSettingsMethod()),
    getShippingMethod: () => dispatch(getShippingMethod()),
    addOrder: (payload) => dispatch(addOrder(payload)),
    updateAddress: (payload, type) => dispatch(updateAddress(payload, type)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout);
