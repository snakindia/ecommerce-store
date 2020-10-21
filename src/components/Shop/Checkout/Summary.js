
import {Table} from 'antd'
import { Link } from 'react-router-dom'
import React , {useState} from 'react';

function Summary(props) {
    const [coupon, setCoupon]  =useState(null);
    const onClickApply =()=>{
        //props.applyCoupon(coupon);
    }
    const {dataSource} =props;
    
    const columns = [
        {
          title: 'Product Name',
          dataIndex: 'name',
          key: 'name',
          width:'60%',
        },
        {
          title: 'Quantity',
          dataIndex: 'qty',
          key: 'qty',
          width:'10%',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
          width:'30%',
        },
      ];
      
    
    return (
        <div id="accordion" className="myaccordion">
            <div className="border-0">
                <div id="collapseTwo" className="collapse show" >
                    <div className="card-body card-body margin-top p-0">
                        <div className="col-sm-12 col-md-12">
                            <div className="row">
                                <div className="order-summary">
                                    <div className="Heading">
                                        Order Summary
                                      <span><Link to="/shop/cart">Edit Cart</Link></span>
                                    </div>

                                    <div className="table-responsive">
                                    <div className="col-lg-12">
							                	  <div className="row">
    							                	<div className="col-sm-9 col-md-9 col-xs-12">
  							                  		<div className="form-group mt-3">
                                        <input
                                        onChange={e=>setCoupon(e.target.value)}
                                        value={coupon}
                                          type="text" className="form-control input-control" name="" placeholder="Coupon/Gift Certificate code"
                                        />
  							                   		
  							                  		</div>
    							              		</div>
    							              	  <div className="col-sm-3 col-md-3 col-xs-12 padding-left0">    							
    							                  	<div className="form-group mt-3">
    							                    	<button onClick={onClickApply} type="button" className="btn bha-btn-apply margin-left-mobile15 w-100 text-center" name="buttonsubmit">Apply</button>
    							                  	</div>
    							                   </div>
							                     </div>
							                   </div>
                                    <Table
                                    className="table"
                                    pagination={false}
                                     dataSource={dataSource} columns={columns} />
                                        
                                               
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

export default Summary;


