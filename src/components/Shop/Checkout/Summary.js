
import { Table } from 'antd'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';

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
                        <div class="col-md-6 col-sm-4 col-lg-6 col">
                          Product Name
                        </div>
                        <div class="col-md-3 col-sm-4 col-lg-3 col text-center">
                          Quantity
                        </div>
                        <div class="col-md-3 col-sm-4  col-lg-3 col text-center">
                          Price
                        </div>
                      </div>
                    </div>

                    <div class="product-cart-detail">

                      <div class="about-product">
                        {
                          dataSource && dataSource.length > 0 ? dataSource.map(item => <div key={item.name} class="product-specification">
                            <div class="row">
                              <div class="col-sm-4 col-md-6 col-lg-6 col">
                                <div class="media p-0">
                                <img src={item.image_url} class="card-thumbnail" alt="" />
                                <div class="media-body">{item.name}</div>
                                </div>
                              </div>
                              <div class="col-sm-4 col-md-3 col-lg-3 col text-center">
                                {item.qty}
                              </div>
                              <div class="col-sm-4 col-md-3 col-lg-3 col text-center">
                                $ {item.price}
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

                      <div class="col-sm-4 col-md-6 col-lg-6 col">
                          <b>Subtotal</b>
                        </div>
                        <div class="col-sm-4 col-md-3 col-lg-3 col text-center"></div>
                        <div class="col-sm-4 col-md-3 col-lg-3 col text-center">
                          <b>$ {props.subtotal}</b>
                        </div>
                      </div>

                      <div class="row">
                      <div class="col-sm-4 col-md-6 col-lg-6 col">
                          Shipping
                        </div>
                        <div class="col-sm-4 col-md-3 col-lg-3 col text-center"></div>
                        <div class="col-sm-4 col-md-3 col-lg-3 col text-center">
                          ${props.shipping}
                        </div>
                      </div>

                      <div class="row">
                      <div class="col-sm-4 col-md-6 col-lg-6 col">
                          Tax
                        </div>
                        <div class="col-sm-4 col-md-3 col-lg-3 col text-center"></div>
                        <div class="col-sm-4 col-md-3 col-lg-3 col text-center">
                          ${props.tax}
                        </div>
                      </div>
                    </div>
                    <div class="apply-coupon">
                      <a href="#demo" data-toggle="collapse">Coupon/Gift Certificate</a>
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
                        <div class="col-md-7 col-sm-7 col-lg-8 col d-flex align-items-center">
                          Total (USD)
                        </div>
                        <div class="col-md-5 col-sm-5 col-lg-4 col text-right">
                          <span class="pr-3">$ {props.total}</span>
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


