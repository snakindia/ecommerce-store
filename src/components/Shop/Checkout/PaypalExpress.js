import React from 'react';
// import PaypalExpressBtn from 'react-paypal-express-checkout';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { connect } from 'react-redux';
import { addOrder, getCart} from '../store/Actions';
class PaypalExpress extends React.Component {

    render() {
        const { paymentSettings,cart } = this.props;


        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
            console.log("The payment was succeeded!", payment);
            this.props.getCart();
            setTimeout(()=>{
                this.props.addOrder(cart);  
            },500)
            // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        }

        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }

        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }

        let env = paymentSettings && paymentSettings.env ? paymentSettings.env : 'sandbox'; // you can set here to 'production' for production
        let currency = paymentSettings && paymentSettings.currency ? paymentSettings.currency : 'USD'; // or you can set this value from your props or state
        let total = paymentSettings && paymentSettings.amount ? paymentSettings.amount : 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

        const client = {
            sandbox: paymentSettings && paymentSettings.client ? paymentSettings.client : 'Aa6VOh30MgnT4G1x1MVUumKLwgk1iPJM9E3FTZS0o5SOjTcatvS6lnJVhxgoSwq4EWJFeFjoi9nSV9fg',
            production: paymentSettings && paymentSettings.client ? paymentSettings.client : 'Aa6VOh30MgnT4G1x1MVUumKLwgk1iPJM9E3FTZS0o5SOjTcatvS6lnJVhxgoSwq4EWJFeFjoi9nSV9fg',
        }
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
        let style = {
            size: paymentSettings && paymentSettings.size ? paymentSettings.size  :'small',
            color: paymentSettings && paymentSettings.color ? paymentSettings.color :'gold',
            shape: paymentSettings && paymentSettings.shape ? paymentSettings.shape : 'pill',
           
        };
        let order_id =paymentSettings && paymentSettings.order_id ? paymentSettings.order_id : '';
        let paymentOptions ={transactions: [
            { 
                 custom:order_id, 
                amount: 
                {
                 total, currency, 
                
                }
             }
        ]};
        
        return (
            <>
                {
                     paymentSettings ?
                        <PaypalExpressBtn
                        paymentOptions={paymentOptions}
                         style={style} env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
                         : null
                }
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.shop.loading,
    error: state.shop.error,
    cart: state.shop.cart,
    paymentMethods: state.shop.paymentMethods,
    paymentSettings: state.shop.paymentSettings,
});
const mapDispatchToProps = dispatch => ({
    getCart: () => dispatch(getCart()),
    addOrder: (payload) => dispatch(addOrder(null)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaypalExpress);
