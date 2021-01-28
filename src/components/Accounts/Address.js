
import { connect } from 'react-redux'
import React , {useState} from 'react';
import {Card} from 'antd';
function Address({orders}) {
    let data =[];
    let shipping =[];
    let billing =[];
   if(orders && orders.data && orders.data.length > 0){
    for(const d of orders.data){
        if(d.shipping_address){
            shipping.push(d.shipping_address)
        }
        if(d.billing_address){
            billing.push(d.billing_address)
        }
    }
   }
   const hasData =(arr)=>{
       let val =false;
       if(arr){
           for(const key of Object.keys(arr)){
               if(arr[key] && key !== 'coordinates'){
                   val=true;
               }
           }
       }
       return val;
   }

   const formatPhone =(nbr)=>{
       if(nbr && nbr.length > 6){
          
           nbr =`(${nbr.substring(0,3)}) ${nbr.substring(3,6)} ${nbr.substring(6,nbr.length)}`;
           
       }
       return nbr;
   }

   const getData =(obj)=>{
       const arr =['address1','address2','city','company','state','postal_code','country'];
       const stringArr =[];
           for(const key of arr){
               if(obj && obj[key]){
                  stringArr.push(obj[key])
               }
           }
      
       return {
           address: stringArr.join(', '),phone:formatPhone(obj.phone)
       }
       
   }
   billing = billing.filter((v,i,a)=>a.findIndex(t=>(JSON.stringify(t) === JSON.stringify(v)))===i);
   shipping = shipping.filter((v,i,a)=>a.findIndex(t=>(JSON.stringify(t) === JSON.stringify(v)))===i);
    
   billing =billing.filter(item=>hasData(item));
   shipping =shipping.filter(item=>hasData(item));
   //console.log({billing})
   billing =billing.map(item=>getData(item));
   shipping =shipping.map(item=>getData(item));
   //onsole.log({billing})
   //console.log({shipping})
    
    return (
        <div className="tabContainer">
              <div className="tabs">
                
                <input type="radio" name="tabs" id="tabone" checked="checked"/>
                <label for="tabone">My Address Book</label>

                <div className="tab">
                  <div className="row mt-4">
                    <div className="col-sm-6">
                      <div className="text-left">
                        <div className="location">
                        <h5 className="location_head pb-2">Shipping Address</h5>
                        {shipping.map(s=><Card>
                            <div className="text-small">
                                {s.address}
                            </div>
                       
                            <div className="mt-4 float-left">
                                {s.phone ? <>
                            <i className="fa fa-phone bha-icon mr-1"></i>
                                <span className="font-weight-bold" style={{fontSize: '0.850rem'}}>{s.phone}</span>
                            </>:null}
                            </div>
                        </Card>)}
                        
                      </div>        
                    </div>
                    </div>
                    <div className="col-sm-6 mb-4">
                      <div className="text-left">
                        <div className="location">
                        <h5 className="location_head pb-2">Billing Address </h5>
                       
                        {billing.map(s=><Card>
                            <div className="text-small">
                                {s.address}
                            </div>
                       
                            <div className="mt-4 float-left">
                                {s.phone ? <>
                            <i className="fa fa-phone bha-icon mr-1"></i>
                            <span className="font-weight-bold" style={{fontSize: '0.850rem'}}>{s.phone}</span>
                            </>:null}
                            </div>
                        </Card>)}
                        
                      </div>  
                      </div>  
                    </div>
                  </div>
                </div>
               
              </div>
            </div>

    )
}


const mapStateToProps = (state) => ({
    loadingCart: state.accounts.loadingCart,
    loading: state.accounts.loading,
    orders: state.accounts.orders,
    error: state.accounts.error,
    authenticated: state.auth.authenticated,
    user: state.auth.customer_settings,
});
const mapDispatchToProps = dispatch => ({
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Address);




