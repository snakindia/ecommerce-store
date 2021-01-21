import React from 'react';
import { connect } from 'react-redux';
import { addOrder, getCart, paymentCompleted } from '../store/Actions';
import CollectJSSection from "./CollectJSSection";
class Nmi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitting: false,
            alertMessage: '',
            error:{},
            clicked:false

        };
        this.setState = this.setState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.finishSubmit = this.finishSubmit.bind(this);
    }
    validationCallback =(field, status, message)=>{
            let {error,clicked} =this.state
            console.log(field, status, message);
            if (status) {
                if(error[field+'err']){
                    delete error[field+'err']
                }
               
               
            } else {
                error={...error,[field+'err']:message};
                
                
            }
            if(clicked){
                this.setState({error})
            }
          
    }

    componentDidMount() {
        const { paymentSettings, cart } = this.props;
        let currency = paymentSettings && paymentSettings.currency ? paymentSettings.currency : 'USD'; // or you can set this value from your props or state
        let total = paymentSettings && paymentSettings.amount ? paymentSettings.amount : 1;
        
        window.CollectJS.configure({
            variant: 'inline',
                    "styleSniffer" : true,
                    // "googleFont": "Montserrat:400",
                    // "customCss" : {
                    //     "color": "#0000ff",
                    //     "background-color": "#d0d0ff"
                    // },
                    // "invalidCss": {
                    //     "color": "white",
                    //     "background-color": "red"
                    // },
                    // "validCss": {
                    //     "color": "black",
                    //     "background-color": "#d0ffd0"
                    // },
                    // "placeholderCss": {
                    //     "color": "green",
                    //     "background-color": "#808080"
                    // },
                    // "focusCss": {
                    //     "color": "yellow",
                    //     "background-color": "#202020"
                    // },
                    "fields": {
                        "ccnumber": {
                            "selector": "#ccnumber",
                            "title": "Card Number",
                            "placeholder": "0000 0000 0000 0000",
                        },
                        "ccexp": {
                            "selector": "#ccexp",
                            "title": "Card Expiration",
                            "placeholder": "00 / 00"
                        },
                        "cvv": {
                            //"display": "show",
                            "selector": "#cvv",
                            "title": "CVV Code",
                            "placeholder": "***"
                        },
                        
                        "checkname": {
                            "selector": "#nameonCard",
                            "title": "Name on Card",
                            "placeholder": "Name on Card"
                        },
                        
                    },
                    'price': total , //'1.00',
                    'currency':currency, // 'USD',
                    'country': 'US',
                    'validationCallback' :this.validationCallback,
                    "timeoutDuration" : 2000,
                    "timeoutCallback" : function () {
                        console.log("The tokenization didn't respond in the expected timeframe.  This could be due to an invalid or incomplete field or poor connectivity");
                    },
                    "fieldsAvailableCallback" : function () {
                        window.CollectJS.startPaymentRequest();
                        console.log("Collect.js loaded the fields onto the form");
                    },
                    // 'callback' : function(response) {
                    //     alert(response.token);
                    //     var input = document.createElement("input");
                    //     input.type = "hidden";
                    //     input.name = "payment_token";
                    //     input.value = response.token;
                    //     // var form = document.getElementsByTagName("form")[0];
                    //     // form.appendChild(input);
                    //     // form.submit();
                    // }
                     'callback' : this.finishSubmit
                });
               
    }

    finishSubmit=(response)=> {
        console.log(response);
        this.setState({ isSubmitting: false });
        if (response && response.token) {
            this.props.paymentCompleted({ response })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ isSubmitting: true,clicked:true });
        window.CollectJS.startPaymentRequest();
    }

    onClick =(e)=>{
        e.preventDefault();
        console.log('dddddd');
        this.setState({ isSubmitting: true });
        window.CollectJS.startPaymentRequest();
    }

    render() {
       
        return (<form >

            <CollectJSSection error={this.state.error}>
                <div>
                    <input
                        type="text"
                        name="amount"
                        placeholder="Amount"
                        onChange={event => this.setState({ amount: event.target.value })}
                        value={this.state.amount}
                    />
                </div>
            </CollectJSSection>
            <div className="col-lg-12" >
               
            </div>
            <div className="col-lg-12" >
                <button
                    onClick={this.onClick}
                    type="submit"
                    //disabled={this.state.isSubmitting}
                >
                    Submit
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
    //addOrder: (payload) => dispatch(addOrder(null)),
    paymentCompleted: (payload) => dispatch(paymentCompleted(payload)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nmi);