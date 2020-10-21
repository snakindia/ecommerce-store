


import { Link } from 'react-router-dom'
import React  from 'react';

function Dashboard(props) {
   
    return (
        
                <div className="tabs">
                  
                  <input type="radio" name="tabs" id="tabone" checked="checked"/><label for="tabone">Dashboard</label>
                  <div className="tab">
                    <div className="resp-tabs-container mt-3">
                      <div className="benefits-of-registering float-left w-100">
                      <h5>Hello Gaurav,</h5>
                      <p>From your account dashboard you can view your</p>
                        <ul>
                          <li><Link to="/accounts/my-orders">Recent orders</Link></li>
                          <li><Link to="/accounts/address-book">Shipping and Billing addresses</Link></li>
                          <li><Link to="/accounts/account-details">Edit your password and account details</Link>
                          </li>
                        </ul>
                      </div>
                  </div>
                </div>
           
              </div>

    )
}

export default Dashboard;


