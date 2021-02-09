
import { Table } from 'antd'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import Image from '../Image'
function Summary(props) {
  const [coupon, setCoupon] = useState(null);
  const onClickApply = () => {
    //props.applyCoupon(coupon);
  }
  const { dataSource } = props;

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
      width: '60%',
    },
    {
      title: 'Quantity',
      dataIndex: 'qty',
      key: 'qty',
      width: '10%',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: '30%',
    },
  ];


  return (
    <div id="accordion" className="myaccordion">
      <div class="border-0">
        <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body card-body margin-top p-0">
            <div class="col-sm-12 col-md-12">
              <div class="row">
                <div class="order-summary">
                  <div class="Heading">
                    Order Summary
             				       <span><Link to="/shop/cart">Edit Cart</Link></span>
                  </div>
                  <p class="cart-total-items">{dataSource.length} Items</p>



                  <div class="product-all-detail">
                    <div class="product-detail-quantity">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-lg-6">
                          <p>Product Name</p>
                        </div>
                        <div class="col-md-3 col-sm-3 col-lg-3">
                          <p>Quantity</p>
                        </div>
                        <div class="col-md-3 col-sm-3 col-lg-3 ">
                          <p>Price</p>
                        </div>
                      </div>
                    </div>

                    <div class="product-cart-detail">

                      <div class="about-product">
                        {
                          dataSource && dataSource.length > 0 ? dataSource.map(item => <div key={item.name} class="product-specification">
                            <div class="row">
                              <div class="col-sm-2 col-md-2 col-lg-2 ">
                                <Image src={item.image_url} class="card-thumbnail" alt="" />
                              </div>
                              <div class="col-sm-5 col-md-5 col-lg-5">
                                <p>{item.name}</p>
                              </div>
                              <div class="col-sm-2 col-md-2 col-lg-2 text-center">
                                <p>{item.qty}</p>
                              </div>
                              <div class="col-sm-3 col-md-3 col-lg-3  ">
                                <p>$ {item.price}</p>
                              </div>
                            </div>
                          </div>) : null
                        }




                        {/* <div class="cart-actions">
                          <button class="btn-see-all" type="button" value="see all">See All <i class="fa fa-angle-down down-arrow-icon"></i></button>
                        </div> */}
                      </div>
                    </div>
                    <div class="product-subtotal">
                      <div class="row">

                        <div class="col-md-8 col-sm-8 col-lg-8">
                          <p><b>Subtotal</b></p>
                        </div>
                        <div class="col-md-4 col-sm-4 col-lg-4 ">
                          <p><b>$ {props.subtotal}</b></p>
                        </div>


                        <div class="col-md-8 col-sm-8 col-lg-8">
                          <p>Shipping</p>
                        </div>
                        <div class="col-md-4 col-sm-4 col-lg-4 ">
                          <p>${props.shipping}</p>
                        </div>

                        <div class="col-md-8 col-sm-8 col-lg-8">
                          <p>Tax</p>
                        </div>
                        <div class="col-md-4 col-sm-4 col-lg-4 ">
                          <p>${props.tax}</p>
                        </div>
                      </div>
                    </div>
                    <div class="apply-coupon">
                      <a href="#demo" data-toggle="collapse"><p class="coupon-code mb-1">Coupon/Gift Certificate</p></a>
                      <form id="demo" class="collapse">
                        <div class="col-lg-12">
                          <div class="row">
                            <div class="col-sm-9 col-md-9 col-xs-12">
                              <div class="form-group mt-2">
                                <input type="text" class="form-control input-control" name="email" placeholder="Coupon/Gift Certificate code" />

                              </div>
                            </div>
                            <div class="col-sm-3 col-md-3 col-xs-12 p-0">
                              <div class="form-group mt-2">
                                <button type="button" class="btn bha-btn-apply">Apply</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div class="total-product-price">
                      <div class="row">
                        <div class="col-md-7 col-sm-7 col-lg-7">
                          <p>Total (USD)</p>
                        </div>
                        <div class="col-md-5 col-sm-5 col-lg-5">
                          <p class="payable-amount">$ {props.total}</p>
                        </div>
                      </div>
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

export default Summary;


