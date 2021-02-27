
import { Table } from 'antd'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import Image from '../Image';
import ToolTip from '../ToolTip';
function Summary(props) {
  const [coupon, setCoupon] = useState(props.coupon);
  const [isVisible, setVisible] = useState(null);
  const onClickApply = (e) => {
    e.preventDefault();
    props.applycoupon({ code: coupon });
  }

  const toggleCouponForm = (e) => {
    e.preventDefault();
    setVisible(!isVisible)
  }

  const onChange = (e) => {
    setCoupon(e.target.value)
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
      <div className="border-0">
        <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
          <div className="card-body card-body margin-top p-0">
            <div className="col-sm-12 col-md-12">
              <div className="row">
                <div className="order-summary">
                  <div className="Heading">
                    Order Summary
             				       <span><Link to="/shop/cart">Edit Cart</Link></span>
                  </div>
                  <p className="cart-total-items">{props.productsInCart} Items</p>



                  <div className="product-all-detail">

                    <div className="product-detail-quantity">
                      <div className="row">
                        <div className="col-md-9 col-sm-8 col-lg-9 col">
                          Product Name
                        </div>
                        {/*
                        <div className="col-md-4 col-sm-4 col-lg-5 col text-center">
                          Quantity
                        </div>
                        */}
                        <div className="col-md-3 col-sm-4  col-lg-3 col text-center">
                          Price
                        </div>
                      </div>
                    </div>

                    <div className="product-cart-detail">

                      <div className="about-product">
                        {
                          dataSource && dataSource.length > 0 ? dataSource.map(item => <div key={item.name} className="product-specification">
                            <div className="row">
                             
                              <div className="col-sm-8 col-md-9 col-lg-9 col media pr-0">
                                <Image src={item.image_url} className="card-thumbnail" alt="" />
                                <div className="item-title media-body pl-2 item-title-new-link"><Link to={`/shop/${item.product_id}`} onClick={props.linkClick}>
                                {/* <ToolTip text={item.name} /> */} {item.name}
                              </Link></div>
                                <div className="item-title"> {item.name}</div>
                              </div>
                             {/*
                              <div className="col-sm-4 col-md-4 col-lg-5 col text-center pt-4">
                                {item.qty}
                              </div>
                             */}
                              <div className="col-sm-4 col-md-3 col-lg-3 col text-center pt-3">
                                {item.price}
                              </div>
                            </div>
                          </div>) : null
                        }




                        {/* <div className="cart-actions">
                          <button className="btn-see-all" type="button" value="see all">See All <i className="fa fa-angle-down down-arrow-icon"></i></button>
                        </div> */}
                      </div>
                    </div>
                    <div className="product-subtotal">
                      <div className="row">

                        <div className="col-sm-4 col-md-6 col-lg-6 col">
                          <b>Subtotal</b>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-3 col text-center"></div>
                        <div className="col-sm-4 col-md-3 col-lg-3 col text-center">
                          <b>$ {props.subtotal}</b>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-4 col-md-6 col-lg-6 col">
                          Shipping
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-3 col text-center"></div>
                        <div className="col-sm-4 col-md-3 col-lg-3 col text-center">
                          ${props.shipping}
                        </div>
                      </div>
                      {props.coupon && <div className="row">
                        <div className="col-sm-4 col-md-6 col-lg-6 col">
                          Coupon Applied
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-3 col text-center"></div>
                        <div className="col-sm-4 col-md-3 col-lg-3 col text-center">
                          {props.coupon}
                        </div>
                      </div>}
                      {props.couponDiscount && <div className="row">
                        <div className="col-sm-4 col-md-6 col-lg-6 col">
                          Discount
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-3 col text-center"></div>
                        <div className="col-sm-4 col-md-3 col-lg-3 col text-center">
                          ${props.couponDiscount}
                        </div>
                      </div>}


                      <div className="row">
                        <div className="col-sm-4 col-md-6 col-lg-6 col">
                          Tax
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-3 col text-center"></div>
                        <div className="col-sm-4 col-md-3 col-lg-3 col text-center">
                          ${props.tax}
                        </div>
                      </div>
                    </div>
                    <div className="apply-coupon">
                      <a href="#" onClick={toggleCouponForm} data-toggle="collapse">Coupon/Gift Certificate</a>
                      {isVisible && <form id="demo" className="collapse" style={{ display: 'block' }}>
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9 pl-0">
                              <div className="form-group mt-2">
                                <input onChange={onChange} value={coupon} type="text" className="form-control input-control" placeholder="Coupon/Gift Certificate code" />
                              </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 p-0">
                              <div className="form-group mt-2">
                                <button type="button" className="btn bha-btn-apply" onClick={onClickApply}>Apply</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>}
                    </div>

                    <div className="total-product-price">
                      <div className="row">
                        <div className="col-md-5 col-sm-4 col-lg-4 col d-flex align-items-center">
                          Total (USD)
                        </div>
                        <div className="col-md-7 col-sm-8 col-lg-8 col text-right">
                          <span>$ {props.total}</span>
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


