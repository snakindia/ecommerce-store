import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Breadcrumb } from 'antd';
import Loader from '../../Loader/Loader'
import QuickView from '../QuickView'
import { addOrder, updateAddress, getPaymentMethod, getShippingMethod, getPaymentSettingsMethod } from '../store/Actions';
import { getOrders } from '../../Accounts/store/Actions';
import { Link } from 'react-router-dom';
import { Collapse } from 'antd';
import { Card } from 'antd';
import Login from './Login'
import Address from './Address'
import Summary from './Summary';
import Payment from './Payment';
import PannelHeader from './PannelHeader';

import ShippingMethod from './ShippingMethod';
import PaypalExpress from './PaypalExpress';
import Nmi from './Nmi';
import Thankyou from './Thankyou';
import { getAddress } from '../../../utils/helper';
import scrollToEl from '../../../utils/scrollToEl'
import { CheckCircleOutlined } from '@ant-design/icons';
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
            same: false,
            shippingAddress: undefined,
            billingAddress: undefined,
            authenticated: undefined,
            stepCompleted:0,
            demand:null
        }
    }

    componentDidMount() {
        
        this.props.getOrders();
        this.checkForUser();
        this.props.getPaymentMethod();
        this.props.getShippingMethod();
        this.props.getPaymentSettingsMethod();


    }
    scrollToEle(id, time=500) {
        setTimeout(() => {
            console.log('scrolling', id);
            scrollToEl('#' + id, -140, 500)
        }, time)

    }

    checkForUser = () => {
        const { cart, authenticated, user } = this.props;
        if (authenticated && user && user.email) {
            const payload = {
                ...cart, email: user.email
            }
            const pannelstep =2;
            this.props.updateAddress(payload, null, pannelstep);
        }
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
            } else if (billing_address && billing_address.address1 && shipping_address && shipping_address.address1) {
                step = 4;
            } else if (billing_address && billing_address.address1) {
                step = 3;
            } else if (email) {
                step = 2;
            } else {
                this.checkForUser();
            }
            this.setState({
                email: email ? email : '',
                billingAddress: billing_address && billing_address.address1 ? billing_address : undefined,
                shippingAddress: shipping_address && shipping_address.address1 ? shipping_address : undefined,
                step, demand:null
            })
            //this.scrollToEle(`stepp${step}`)
            if (step == 6) {
                this.props.getPaymentSettingsMethod();
            }



        }
        if(this.props.pannelstep ===4 && this.props.pannelstep != prevProps.pannelstep ){
            let methods =this.props.shippingMethods;
            if(methods && methods.length ==1){
                const id  = methods[0].id;
                this.shippingMethodHandler(id)
            }
            if(this.props.pannelstep && (this.props.pannelstep ===3 || this.props.pannelstep==4)){
                this.scrollToEle(`stepp${this.props.pannelstep}`)
            }
        }
        

    }

    setEmail = (email) => {
        this.setState({ email });
        const { cart } = this.props;
        const payload = {
            ...cart, email
        }
        const pannelstep =2
        this.props.updateAddress(payload, null, pannelstep);

    }

    next = (step) => {
        this.setState({ step })
    }
    setAll = (obj, val) => {
        let toReturn = {};
        Object.keys(obj).forEach(k => {
            toReturn[k] = val;
        });
        return toReturn;
    }


    shippingSave = (data, type) => {
        const { same } = this.state;
        if (type == 'billing') {
            if (same) {
                this.setState({
                    shippingAddress: data,
                    billingAddress: data,
                    step: 4
                }, () => this.doAddressUpdate(type))
            } else {
                this.setState({
                    //shippingAddress: this.setAll(data, ''),
                    billingAddress: data,
                    step: 3
                }, () => this.doAddressUpdate(type)
                )
            }

        }
        else if (type == 'shipping') {
            this.setState({
                shippingAddress: data,
                step: 4
            }, () => this.doAddressUpdate(type))
        }


    }

    doAddressUpdate = (type) => {
        const { cart } = this.props;
        const { email, billingAddress, shippingAddress } = this.state;

        const payload = {
            ...cart,
            email,

            billing_address: billingAddress ? billingAddress : undefined,
            shipping_address: shippingAddress ? shippingAddress : undefined,
            full_name: billingAddress ? `${billingAddress.first_name} ${billingAddress.last_name}` : '',
            first_name: billingAddress.first_name,
            last_name: billingAddress.last_name,
            mobile: billingAddress.phone,
        }
        const pannelstep =type =='billing' ? 3 :type=='shipping'? 4 :3;
        this.props.updateAddress(payload, type, pannelstep);
    }

    openPanel = (demand) => {
        const {pannelstep}=this.props;
        if(parseInt(demand) <= parseInt(pannelstep)){
            this.setState({demand})
        }
       
    }

    placeOrder = (payment_method) => {
        const { cart, statuses, authenticated, user } = this.props;
        const { email, billingAddress, shippingAddress } = this.state;
        let status_id = statuses ? statuses.filter(st => st.name == 'Order Received') : undefined;
        status_id = status_id && status_id[0] ? status_id[0].id : '';
        const data = {
            ...cart,
            email,
            billing_address: billingAddress,
            shipping_address: shippingAddress,
            first_name: billingAddress.first_name,
            last_name: billingAddress.last_name,
            ...payment_method,
            status_id,
            status_id,
            status: 'Order Received',
            customer_id: authenticated && user && user.id ? user.id : ''
        }

        this.props.addOrder(data);
    }

    submit = (data) => {
       
        const { statuses, paymentMethods } = this.props;
        const method = paymentMethods.filter(item => item.id == data.payment_method);
        let status_id = statuses ? statuses.filter(st => st.name == 'Order Received') : undefined;
        status_id = status_id && status_id[0] ? status_id[0].id : '';
        console.log('data',data)
        if (method && method[0]) {
            const data = {
                payment_method: method[0].name,
                payment_method_gateway: method[0].gateway,
                payment_method_id: method[0].id,
                status_id,
                status: 'Order Received',
            }

            this.placeOrder(data);
        }

    }

    paymentMethodHandler = (id) => {
        const pannelstep =5;
        this.props.updateAddress({ payment_method_id: id },null, pannelstep);
        setTimeout(() => {
            this.props.getPaymentSettingsMethod();
        }, 500)

    }

    shippingMethodHandler = (id) => {
        const pannelstep =5;
        this.props.updateAddress({ shipping_method_id: id }, null, pannelstep);
    }
    logout = () => {
        localStorage.clear();
        window.location.reload()
    }

    isFilled = (from) => {
        const { stepCompleted } = this.state;
        return stepCompleted > from ? <CheckCircleOutlined /> : null
    }

    

    setSame = (same) => {
        this.setState({ same })
    }

    render() {
        const { authenticated, user, cart, paymentMethods, shippingMethods, checkoutSuccess, order, order_statuses,paymentSettings } = this.props;
        const { step, email, shippingAddress, billingAddress, same ,demand} = this.state;
        
        let subtotal = cart ? cart.subtotal : 0;
        let tax = cart ? cart.tax_total : 0;
        let shipping = cart ? cart.shipping_total : 0;
        let total = cart ? cart.grand_total : 0;
        let items = cart ? cart.items : [];
        if(items && items.length ==0 && cart && cart.id){
            this.props.history.push('/shop')
        }
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
        if (authenticated && user) {
            address = getAddress(order_statuses);

        }
       
        let {pannelstep} =this.props;
        const activeKey=demand ? demand:pannelstep;
        
        return (

            <>
                {this.props.loadingCart && <Loader />}
                <div className="content-wrapper topPadding" id="content">
                    <div className="pagewrap">
                        <div className="bgWhite padding-bottom">
                            <section >
                                <div className="container-fluid">
                                    {
                                        checkoutSuccess ? <Thankyou order={order} /> : <>

                                            {cart ?

                                                <div className="row">
                                                    <div className="col-sm-12 col-md-8 left-content">
                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-12">

                                                                <h1 className="bha_heading_2 text-blue padding-top30 padding-btm30">Check Out</h1>
                                                                <div id="accordion">
                                                                    <Collapse
                                                                        activeKey={activeKey.toString()}
                                                                        onChange={()=>{}}
                                                                        expandIcon={false}
                                                                        ghost={true}
                                                                    >
                                                                        <Panel  header={<PannelHeader edit={this.openPanel} pannelstep={activeKey} step="1" cart={cart}/>} key="1" id="stepp1" showArrow={false} pannelstep={pannelstep} style={{marginBottom:0}}>
                                                                            {authenticated ? <div className="noheight">
                                                                                <div >Logged in as {user.email}</div>
                                                                                <div>not you ? <button onClick={this.logout} className="btn bha-btn-primary btn-danger">Sign Out</button></div>
                                                                                <div><button onClick={this.checkForUser} type="submit" className="btn bha-btn-primary float-right45" name="buttonsubmit">Continue</button></div>
                                                                               
                                                                            </div> : <Login
                                                                                user={user}
                                                                                authenticated={authenticated}
                                                                                setEmail={this.setEmail}
                                                                                email={this.state.email}
                                                                                next={this.next}
                                                                            />
                                                                            }
                                                                        </Panel>   
                                                                        <Panel header={<PannelHeader edit={this.openPanel} pannelstep={activeKey} step="2" cart={cart}/>} key="2" id="stepp2" style={{ backgroundColor: 'transparent'}} showArrow={false} pannelstep={pannelstep}>
                                                                            <Address  scrollToEle={this.scrollToEle} authenticated={authenticated} oldAddress={address && address.billing ? address.billing : null} type="billing" submit={this.shippingSave} data={billingAddress} same={same} setSame={this.setSame}/>
                                                                       
                                                                        </Panel>
                                                                        <Panel header={<PannelHeader edit={this.openPanel} pannelstep={activeKey} step="3" cart={cart}/>} key="3" id="stepp3" showArrow={false} pannelstep={pannelstep}>
                                                                        <Address scrollToEle={this.scrollToEle} authenticated={authenticated} oldAddress={address && address.shipping ? address.shipping : null} type="shipping" submit={this.shippingSave} data={shippingAddress}  />
                                                                            
                                                                            </Panel>
                                                                        <Panel header={<PannelHeader edit={this.openPanel} pannelstep={activeKey} step="4" cart={cart}/>} key="4" id="stepp4" showArrow={false}>
                                                                            {/* <ShippingMethod
                                                                                pannelstep={pannelstep}
                                                                                shipping_method_id={cart && cart.shipping_method_id ? cart.shipping_method_id : ''}
                                                                                shippingMethods={shippingMethods}
                                                                                shippingMethodHandler={this.shippingMethodHandler}
                                                                            /> */}
                                                                        </Panel>
                                                                        <Panel header={<PannelHeader edit={this.openPanel} pannelstep={activeKey} step="5" cart={cart}/>} key="5" id="stepp5" showArrow={false}>

                                                                            <Payment
                                                                                data={paymentMethods}
                                                                                payment_method_id={cart && cart.payment_method_id ? cart.payment_method_id : ''}
                                                                                total={total}
                                                                                submit={this.submit}
                                                                                hide={cart.payment_method_id && cart.payment_method_gateway == 'paypal-checkout'}
                                                                                paymentMethodHandler={this.paymentMethodHandler}
                                                                                cart={cart} paymentSettings={paymentSettings} 
                                                                                //placeOrder ={}
                                                                            />

                                                                        </Panel>

                                                                    </Collapse>
                                                                </div>
                                                            
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-4">

                                                        <div className="right-content aside margin-top30">
                                                            <Summary dataSource={dataSource} />
                                                            {cart.payment_method_id && <div className="form-group mt-3">
                                                                {
                                                                cart.payment_method_gateway == 'paypal-checkout' ? <PaypalExpress /> :
                                                                cart.payment_method_gateway == 'nmi' ? paymentSettings && paymentSettings.TokenKey ? <Nmi />:'Loading..' :
                                                                 <button type="submit" onClick={e=>this.submit({payment_method:cart.payment_method_id})} className="btn bha-btn-primary float-right" name="buttonsubmit"> Place Order</button>}
                                                            </div>}
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
    order: state.shop.order,
    authenticated: state.accounts.authenticated,
    user: state.accounts.user,
    order_statuses: state.accounts.orders,
    order_statuses1: state.accounts,
    statuses: state.accounts.statuses,
    paymentSettings: state.shop.paymentSettings,
    pannelstep: state.shop.pannelstep,
});
const mapDispatchToProps = dispatch => ({
    getPaymentMethod: () => dispatch(getPaymentMethod()),
    getPaymentSettingsMethod: () => dispatch(getPaymentSettingsMethod()),
    getShippingMethod: () => dispatch(getShippingMethod()),
    addOrder: (payload) => dispatch(addOrder(payload)),
    getOrders: () => dispatch(getOrders()),
    updateAddress: (payload, type,pannelstep) => dispatch(updateAddress(payload, type,pannelstep)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout);
