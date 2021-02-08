
import {Table} from 'antd'
import { Link } from 'react-router-dom'
import React , {useEffect, useState} from 'react';
import scrollToEl from '../../../utils/scrollToEl'
import imgSrc from '../../../assets/images/success.png';
function Thankyou({order,user}) {
  useEffect(()=>{
    scrollToEl('#thankyou', -140, 500);
  },[order])
   const onClick=(e)=>{
    if(!user){
      e.preventDefault()
      document.getElementById('loginpopover').click()
    }
   }
    
    return (
        <div className="row" id="thankyou">
            <div className="col-sm-12 col-md-12 left-content">
              <div className="row">
                <div className="col-sm-12 col-md-12">
             			<div className="container-fluid mt-5">
                   <div className="row">
                    <div className="col-lg-12 mb-5 pl-0 pr-0">
                      <div className="benefits-of-registering float-left w-100">
                        <div className="row">
                          <div className="col-sm-12 col-md-12 text-center">
                            <img src={imgSrc} width="70px" height="70px"/>
                            <h5 className="pt-4">Your order has placed successfully !</h5>
                            <p>your order Number is <Link to={`/accounts/my-orders/${order && order.id ?  order.id: '' }`}>#{order && order.number ? order.number:''}</Link>. You can track your order under my profile page</p>
                            <p className="pt-5" style={{fontWeight: 'bold'}}>What all you can do from here:</p>
                          </div>
                          <ul style={{float: 'left', width: '100%', textAlign: 'center',padding:0}}>
                            <li style={{listStyle: 'none'}}><Link to="/accounts/my-orders" onClick={onClick}>Check your Recent orders</Link></li>
                            <li style={{listStyle: 'none'}}><Link to="/accounts/address-book" onClick={onClick}>Shipping and Billing addresses</Link></li>
                            <li style={{listStyle: 'none'}}><Link to="/accounts/account-details" onClick={onClick}>Edit your password and account details</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    )
}

export default Thankyou;


