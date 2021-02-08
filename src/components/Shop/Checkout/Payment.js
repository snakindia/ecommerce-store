
import { Field, Form, Formik } from 'formik';
import React, { useRef, useState, useEffect } from 'react';
import Error from '../../common/Error'
import Nmi from './Nmi';
import PannelHeaderPayment from './PannelHeaderPayment';
import { Collapse } from 'antd';
import PaypalExpress from './PaypalExpress';
const { Panel } = Collapse;
const PannelContent =({paymentSettings, cart, gateway, id, active,submit})=>{

    
    return (<>
  
          {active ==id && cart.payment_method_gateway == gateway && gateway=='paypal-checkout'  ? <PaypalExpress /> :null}
          {active ==id && cart.payment_method_gateway == gateway && gateway=='nmi' && paymentSettings && paymentSettings.TokenKey ? <Nmi /> :null}
          {active ==id && cart.payment_method_gateway == gateway && gateway=='' ? 
          <div className="cod" > 
          <button onClick={e=>submit({payment_method:cart.payment_method_id})}
           className="bha-btn-primary" name="">
                Place Order</button>
                </div>
                 :null}
        </>)
}
function Payment(props) {
    const { data, type, total } = props;
    let methods = [];
    if (data && data.length > 0) {
        methods = data.filter(i => i.enabled)
    }


    const { cart, paymentSettings, placeOrder,submit } = props;
    const [activeKey, setactiveKey] = useState(props.payment_method_id)
    const onChange = (id) => {
        setactiveKey(id)
        console.log(id);
        props.paymentMethodHandler(id)
    }
    return (
        <>

            <div className="card-body">
                <div id="accordion">
                    <Collapse
                        activeKey={activeKey}
                        onChange={onChange}
                        expandIcon={false}
                        ghost={true}
                        accordion={true}
                    >
                        {methods && methods.length > 0 && methods.map(method =>
                            <Panel header={<PannelHeaderPayment id={method.id} method={method} activeKey={activeKey} />} key={method.id} showArrow={false}>
                                <PannelContent 
                                    gateway={method.gateway}
                                    active={activeKey}
                                    cart={cart}
                                    id={method.id}
                                    paymentSettings={paymentSettings}
                                    placeOrder={placeOrder}
                                    submit={submit}
                                />
                            </Panel>)
                        }
                    </Collapse>
                </div>

            </div>



           


        </>
    )
}

export default Payment;


