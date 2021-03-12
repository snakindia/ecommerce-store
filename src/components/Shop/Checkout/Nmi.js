import React from 'react';
import { connect } from 'react-redux';
import { notification } from '../../../utils/helper';
import { addOrder, getCart, paymentCompleted } from '../store/Actions';
import CollectJSSection from "./CollectJSSection";
class Nmi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitting: false,
            alertMessage: '',
            error:{},
            clicked:false,
            paymentDone:false,
            loaded:false,
            data:{}
        };
        this.setState = this.setState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.finishSubmit = this.finishSubmit.bind(this);
    }
    validationCallback =(field, status, message)=>{
        console.log(field, status, message);
            let {error,clicked, data} =this.state
            //console.log(field, status, message);
            if (status) {
                if(error[field+'err']){
                    delete error[field+'err']
                }
                this.setState({data:{...data,[field]:true}})
               
               
            } else {
                error={...error,[field+'err']:message};

                this.setState({data:{...data,[field]:false}})
                
            }
            // if(clicked){
                this.setState({error})
            // }
          
    }

    componentDidMount() {
        
        const { paymentSettings, cart } = this.props;
        let currency = paymentSettings && paymentSettings.currency ? paymentSettings.currency : 'USD'; // or you can set this value from your props or state
        // let total = paymentSettings && paymentSettings.amount ? paymentSettings.amount : 1;
        let total = cart && cart.grand_total ? cart.grand_total : 1;
        
        window.CollectJS.configure({
            variant: 'inline',
                    "styleSniffer" : false,
                    "googleFont": "Montserrat:400",
                    "customCss" : {
                        "color": "#000",
                        "background-color": "#fff",
                        "border":"1px"
                    },
                    "invalidCss": {
                        "color": "#000",
                        "background-color": "fff"
                    },
                    "validCss": {
                        "color": "#000",
                        "background-color": "#fff"
                    },
                    "placeholderCss": {
                        "color": "#888",
                        "background-color": "#fff"
                    },
                    "focusCss": {
                        "color": "#000",
                        "background-color": "#fff",
                        "border":"none",
                        "outline":"0",
                        "box-shadow":"none"

                    },

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
                    // "timeoutDuration" : 1000,
                    "timeoutCallback" : function () {
                        window.location.reload()
                        console.log("The tokenization didn't respond in the expected timeframe.  This could be due to an invalid or incomplete field or poor connectivity");
                    },
                    "fieldsAvailableCallback" : this.formLoaded,
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

    formLoaded =()=>{
            //window.CollectJS.startPaymentRequest();
            this.setState({loaded:true})
            console.log("Collect.js loaded the fields onto the form");
    }

    finishSubmit=(response)=> {
        console.log(response);
        // this.setState({ isSubmitting: false });
        if (response && response.token) {
            const { paymentSettings, cart } = this.props;
        // let currency = paymentSettings && paymentSettings.currency ? paymentSettings.currency : 'USD'; // or you can set this value from your props or state
        let currency = paymentSettings && paymentSettings.currency ? paymentSettings.currency : 'USD'; // or you can set this value from your props or state
        // let total = paymentSettings && paymentSettings.amount ? paymentSettings.amount : 1;
        let total = cart && cart.grand_total ? cart.grand_total : 1;
        const { statuses } = this.props;
        let status_id = statuses ? statuses.filter(st => st.name == 'Order Received') : undefined;
        status_id = status_id && status_id[0] ? status_id[0].id : '';
            this.props.paymentCompleted({...this.props.cart,status_id,status:'Order Received'},{currency, total, response })
            this.setState({isSubmitting:false, paymentDone:true})
            notification('success','Payment successfully completed ...please wait while system creating your order', 3)
        } else {
            notification('error','Payment failed')
         
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ isSubmitting: true,clicked:true,  });
        window.CollectJS.startPaymentRequest();
    }

    onClick =(e)=>{
        e.preventDefault();
       // console.log('dddddd');
        this.setState({ isSubmitting: true });
        window.CollectJS.startPaymentRequest();
    }

    render() {
        let {data,isSubmitting,error, loaded, paymentDone}=this.state;
        console.log(data,isSubmitting,error);

        let disabled=false;
        if(!data){
            disabled=true;
        } else if ( data && Object.keys(data).length !==4){
            disabled=true;
        } else if(data && Object.keys(data).length ===4 && Object.keys(error).length !=0){
            disabled =true;
        }
        if(isSubmitting){
            disabled =true;
        }
        // if(data && Object.keys(data).length > 0){
        //     let filtered = Object.keys(data).filter(f=>!data[f])
        //     console.log(filtered);
        // }
        console.log({disabled});
        return (<form >
            {!loaded ? <p className="payment-form-loading" >Please wait while payment page loading</p>:null}
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
            
            {!paymentDone ? <div className="col-lg-12 pl-0 pr-0 pt-2 pb-3" >
                <button className={
                    disabled ? "bha-btn-new-blue disabled-submitting-nmi" : "bha-btn-new-blue" }
                    onClick={this.onClick}
                    type="submit"
                    disabled={disabled}
                >
                 {isSubmitting ? 'Submitting ...' :'Submit'}   
            </button>
            </div>: null }
        </form>
        );
    }
}
const mapStateToProps = (state) => ({
    loading: state.shop.loading,
    error: state.shop.error,
    cart: state.shop.cart,
    statuses: state.accounts.statuses,
    paymentDone: state.shop.paymentDone,
    // paymentSettings: state.shop.paymentSettings,
});
const mapDispatchToProps = dispatch => ({
    getCart: () => dispatch(getCart()),
    //addOrder: (payload) => dispatch(addOrder(null)),
    paymentCompleted: (payload, payment_data) => dispatch(paymentCompleted(payload,payment_data)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nmi);