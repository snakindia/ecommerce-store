import React from 'react';
const rS =(data, key)=>{
    let str ='';
    if( data && data[key]){
        const val =data[key];
        str =val.includes('object') ? '': val;
    }
    return str;
}
const renderAddress = (data) => {
    return (
        <>
            <div >{rS(data,'first_name')}  {rS(data,'last_name')}</div>
            <div >{rS(data,'address1')}  {rS(data,'phone')}</div>
            {data.address2 ? <div >{rS(data,'address2')}</div> : ''}
            <div >{rS(data,'city')}  {rS(data,'state')}  {rS(data,'postal_code')}  {rS(data,'country')}</div>
        </>
    )
}
const PannelHeader = ({ step, cart, pannelstep, activeKey,edit }) => {
    if (step == 1) {
        return (
            <div className="row pannel-header">
                <div className="col-md-4">Customer</div>
                <div className="col-md-8">
                    <div className="float-left">{cart && cart.email ? cart.email : ''}</div>
                    <div className="float-right">
                        {pannelstep >1 && activeKey != 1 ?
                            <button className="bha-btn-primary" onClick={e => edit(1)}>Edit</button> : null}
                    </div>
                </div>
            </div>
        );
    } else if (step == 2) {
        return (
            <div className="row pannel-header">
                <div className="col-md-4">Billing Address</div>
                {cart && cart.billing_address ?
                    <div className="col-md-8">
                        <div className="float-left">
                            {renderAddress(cart.billing_address)}

                        </div>

                        <div className="float-right">
                            {pannelstep > 2 && activeKey != 2 ?
                                <button className="bha-btn-primary" onClick={e => edit(2)}>Edit</button>
                                : null
                            }
                        </div>
                    </div>
                    : null
                }
            </div>
        )
    } else if (step == 3) {
        return (<div className="row pannel-header">
            <div className="col-md-4">Shipping Address</div>
            {cart && cart.shipping_address ?
                <div className="col-md-8">
                    <div className="float-left">
                        {renderAddress(cart.shipping_address)}

                    </div>
                    <div className="float-right">
                        {pannelstep > 3 && activeKey != 3 ?
                            <button className="bha-btn-primary" onClick={e => edit(3)}>Edit</button>
                            :
                            null
                        }
                    </div>
                </div>
                : null
            }
        </div>)
    } else if (step == 4) {
        return (<div className="row pannel-header">
            <div className="col-md-4">Shipping Rate</div>
            <div className="col-md-8">
                <div className="float-left">
                    {cart.shipping_method_id ?  cart.shipping_price ===0 ? <div> Free Shippinng </div>:<div> Flat Rate ${cart.shipping_price} </div> : ''}
                </div>

            </div>
        </div>)
    } else if (step == 6) {
        return (<div className="row pannel-header">
            <div className="col-md-4">Payment</div>
            <div className="col-md-8">

            </div>
        </div>)
    }
    else {
        return null;
    }
}
export default PannelHeader;