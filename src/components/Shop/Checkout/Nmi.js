import React from 'react';
import { connect } from 'react-redux';
import { addOrder, getCart,paymentCompleted } from '../store/Actions';
class Nmi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitting: false,
            alertMessage: '',
        };
        this.setState = this.setState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.finishSubmit = this.finishSubmit.bind(this);
    }

    componentDidMount() {
        const { paymentSettings, cart } = this.props;
        let currency = paymentSettings && paymentSettings.currency ? paymentSettings.currency : 'USD'; // or you can set this value from your props or state
        let total = paymentSettings && paymentSettings.amount ? paymentSettings.amount : 1;
        // let TokenKey = paymentSettings && paymentSettings.TokenKey ? paymentSettings.TokenKey : 1;
        // const script = document.createElement("script");
        // script.src = "https://secure.networkmerchants.com/token/Collect.js";
        // script.async = true;
        // script.setAttribute('data-tokenization-key', TokenKey ? TokenKey : 'TokenKey');
        // script.setAttribute('buttonText','Pay');
        // script.setAttribute('instructionText','Enter Card Info Below');
        // script.setAttribute('paymentType','cc');
        // script.setAttribute('callback',this.finishSubmit);
        //document.body.appendChild(script);

        // setTimeout(()=>{
        //     //if (window.CollectJS) {
                window.CollectJS.configure({
                    variant: 'lightbox',
                    theme: 'bootstrap',
                    primaryColor: '#ff288d',
                    secondaryColor: '#ffe200',
                    buttonText: 'Pay',
                    instructionText: 'Enter Card Info Below',
                    paymentType: 'cc',
                    price: total,
                    currency:currency,
                    country: 'US',
                    callback: (token) => {
                        console.log(token);
                        this.finishSubmit(token);
                    }
                });
            //}
        // },1000)

    }

    finishSubmit(response) {
        console.log(response);
        this.setState({ isSubmitting: false});
        if(response && response.token){
            this.props.paymentCompleted({response})
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ isSubmitting: true });
        window.CollectJS.startPaymentRequest();
    }

    render() {

        return (<form onSubmit={this.handleSubmit}>
            <div className="form-group mt-3">
                <button
                    type="submit"
                    className="btn bha-btn-primary float-right"
                    disabled={this.state.isSubmitting}
                >
                    Do Payment
            </button>
            </div>
        </form>
        );
    }
}
const mapStateToProps = (state) => ({
    loading: state.shop.loading,
    error: state.shop.error,
    cart: state.shop.cart,
    paymentDone: state.shop.paymentDone,
    paymentSettings: state.shop.paymentSettings,
});
const mapDispatchToProps = dispatch => ({
    getCart: () => dispatch(getCart()),
    addOrder: (payload) => dispatch(addOrder(null)),
    paymentCompleted: (payload) => dispatch(paymentCompleted(payload)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nmi);