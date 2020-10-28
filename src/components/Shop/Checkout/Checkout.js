import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Breadcrumb } from 'antd';
import QuickView from '../QuickView'
import { addOrder, updateAddress, getPaymentMethod , getShippingMethod,getPaymentSettingsMethod} from '../store/Actions';
import { Link } from 'react-router-dom';
import { Collapse } from 'antd';
import { Card } from 'antd';
import Login from './Login'
import Address from './Address'
import Summary from './Summary';
import Payment from './Payment';
import PaypalExpress from './PaypalExpress';
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
        this.props.getPaymentMethod();
        this.props.getShippingMethod();

    }
    componentDidUpdate(prevProps) {
        const { cart } = this.props;
        if (cart && cart !== prevProps.cart) {
            const { email, billing_address, shipping_address } = cart;
            this.setState({
                email:email ? email:'',
                billingAddress: billing_address && billing_address.address1 ? billing_address: undefined,
                shippingAddress: shipping_address && shipping_address.address1 ? shipping_address: undefined,
                step:shipping_address && shipping_address.address1 && billing_address && billing_address.address1 ? 4:billing_address && billing_address.address1 ? 3:email ?2 :1
            })
            
            
            
        }
    }

    setEmail = (email) => {
        this.setState({ email });
        const {cart} =this.props;
        const payload ={
            ...cart,email
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
        const { cart } = this.props;
        const { email, billingAddress, shippingAddress } = this.state;
        console.log(email, billingAddress, shippingAddress)
        const payload = {
            ...cart,
            email,
           
            billing_address: billingAddress,
            shipping_address: shippingAddress,
            full_name: `${shippingAddress.first_name} ${shippingAddress.last_name}`,
            first_name:shippingAddress.first_name,
            last_name:shippingAddress.last_name,
            mobile:shippingAddress.phone,
        }
        console.log(data);
        this.props.updateAddress(payload, type);

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

    placeOrder = (payment_method) => {
        const { cart } = this.props;
        const { email, billingAddress, shippingAddress } = this.state;

        const data = {
            ...cart,
            email,
            billing_address: billingAddress,
            shipping_address: shippingAddress,
            first_name:billingAddress.first_name,
            last_name:billingAddress.last_name,
            ...payment_method
        }
        console.log(data)
        this.props.addOrder(data);
    }

    submit = (id) => {
        const method = this.props.paymentMethods.filter(item => item.id == id);
        console.log({ method })
        if (method && method[0]) {
            const data = {
                payment_method: method[0].name,
                payment_method_gateway: method[0].gateway,
                payment_method_id: method[0].id,
            }
            console.log({data})
            this.placeOrder(data);
        }

    }

    paymentMethodHandler =(id)=>{
        this.props.updateAddress({payment_method_id:id});
        setTimeout(()=>{
            this.props.getPaymentSettingsMethod();
        },500)
        
    }

    shippingMethodHandler =(id)=>{
        this.props.updateAddress({shipping_method_id:id});
    }


    render() {
        const { authenticated, user, cart, paymentMethods,shippingMethods } = this.props;
        const { step, email, shippingAddress, billingAddress } = this.state;
        const headerOne = <div className="headerone"><h5 className="hh1">1. Customer</h5>
            {email ? <div className="info">
                <span>{email ? email : null}</span>
                <button className="SignOut">Edit</button>
            </div> : null}
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
        return (


            <div className="content-wrapper topPadding" id="content">
                <div className="pagewrap">
                    <div className="bgWhite padding-bottom">
                        <section >
                            <div className="container-fluid">
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
                                                                
                                                                <Payment
                                                                 data={paymentMethods} 
                                                                 shippingMethods={shippingMethods} 
                                                                 total={total} submit={this.submit}
                                                                 shippingMethodHandler={this.shippingMethodHandler}
                                                                 paymentMethodHandler={this.paymentMethodHandler}
                                                                  />
                                                                  <PaypalExpress />
                                                            </Panel>
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
                                        <div className="col-sm-12 col-md-8 left-content">Your Cart Empty</div>
                                    </div>
                                }
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
    paymentMethods: state.shop.paymentMethods,
    paymentMethodsSettings: state.shop.paymentMethodsSettings,
    shippingMethods: state.shop.shippingMethods,
    authenticated: state.auth.authenticated,
    user: state.auth.customer_settings,
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
