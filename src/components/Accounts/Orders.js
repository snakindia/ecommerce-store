import { Link, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux'
import { getOrders, getOrderDetail} from './store/Actions';
class Orders extends React.Component {
     componentDidMount(){
         this.props.getOrders()
     }

     render (){
     <div class="tabContainer">
                <div class="tabs">
                  <input type="radio" name="tabs" id="tabone" checked="checked">
                  <label for="tabone">Orders</label>
                  <div class="tab">
                    <div class="container shorting-box">
                      <div class="row">
                        <div class="col-sm-6 col-md-6 pl-0">
                          <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-4">
                              <div class="short-items">
                                <span class="font-weight-bold">05 Orders in</span>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-4 col-md-4 pl-0">
                              <div class="short-items">
                                <select class="form-control-select form-select">
                                  <option>03 Months</option>
                                  <option>06 Months</option>
                                  <option>12 Months</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-4 col-md-4 pl-0 pr-0">
                              <div class="short-items">
                                <select class="form-control-select form-select">
                                  <option>Filter order by</option>
                                  <option>In Process</option>
                                  <option>Completed</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div> 
                        <div class="col-sm-6 col-md-6">
                          <div class="w-100">
                            <ul class="pagination">
                              <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1"><i class="fa fa-angle-left"></i></a>
                              </li>
                              <li class="page-item active"><a class="page-link" href="#">1</a></li>
                              <li class="page-item">
                                <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                              </li>
                              <li class="page-item">
                                ...
                              </li>
                              <li class="page-item"><a class="page-link" href="#">200</a></li>
                              <li class="page-item"><a class="page-link" href="#">201</a></li>
                              <li class="page-item">
                                <a class="page-link" href="#"><i class="fa fa-angle-right"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="row">  
                        <div class="col-md-12 padding-lr0 padding-top10">
                          <div class="my-order-border" id="myTabContent">
                            <div class="col-md-12 pa  border-bottom" style="background-color:#f1f1f1">
                              <div class="row padding-lr0">

                                <div class="col-sm-6 mb-6">
                                  <div class="text-left">
                                    <div class="lfloat-left">
                                    <h5 class="location_head"><a href="order-details.html">ORDER # -  NAEC80063216290</a></h5>
                                    <div class="text-small">Placed on Aug 17, 2020</div>
                                    </div>
                                
                                  </div>        
                                </div>
                                <div class="col-sm-6 mb-6">
                                  <div class="text-right">
                                    <div class="float-right padding-top15">
                                    <a href="order-details.html"><i class="fas fa-angle-right"></i></a>
                                    </div>
                                  </div>        
                                </div>
                              </div>
                            </div>
                            <!-- Order Details starts -->
                            <section class="pro-equipment-section">      
                              <div class="container-fluid pl-0 pr-0 product-xs-list">
                                <div class="row">
                                  <div class="col-lg-12">
                                  <!-- List group-->
                                    <ul class="list-group pl-0 pr-0">
                                          <!-- list group item-->
                                      <li class="list-group-item">
                                          <!-- Custom content-->
                                        <div class="media flex-column flex-lg-row p-3">
                                          <div class="portfolio-hover">
                                            <div class="portfolio-hover-content">
                                                <!-- <a href="#"><i class="fa fa-heart-o wishList-hover"></i></a> -->
                                              <div class="callToAction-list">
                                                <p>
                                                  <a href="#myModalView" data-toggle="modal" class="quick-view">Quick View</a>
                                                   <a href="product-details.html" class="quick-view">View Details</a>
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                            <img src="images/product/img1.jpg" alt="Generic placeholder image" class="order-1 order-lg-1 mr-lg-4" width="200">

                                              <div class="media-body order-2 order-lg-1">
                                                  <h6 class="mt-0 mb-2">Goyen® Pentair® Orignals®</h6>
                                                  <a href="product-details.html" class="text-muted mb-0">Pentair® A Goyen® A Originals 071-0009 3/32 Barb to 10-32 UNF</a>
                                                  <div class="d-flex align-items-center justify-content-left mt-1">
                                                 
                                                  </div>
                                                   <div class="pro_Price p-0">
                                                    <p class=" currecny"><span class="strike">$91.08</span>
                                                      <span class="sp-price">$75.90</span></p>
                                                  </div>
                                                  <div class="d-block float-left w-100">
                                                   <p class="my-order-status">Processing</p>
                                            
                                                </div>
                                              </div>
                                            </div> <!-- End -->
                                          </li> <!-- End -->
                                        </ul> <!-- End -->
                                      </div>
                                    </div>
                                  </div>
                                  </section>
                                  <!--//Order detail ends-->
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                  
                        <input type="radio" name="tabs" id="tabtwo">
                        <label for="tabtwo">Cancelled Orders</label>
                        <div class="tab">
                          <!--tab content secton-->
                          <div class="col-lg-12 pl-0 pr-0">
                            <div class="pro-rating">
                              <p>You haven't placed any order with us. When you do, their status will appear on this Page</p>
                            </div>
                          </div>
                          <!--tab content secton-->
                        </div>
                      </div>
                    </div>
                    )
                    }
                    
                    const mapStateToProps = (state) => ({
    loadingCart: state.accounts.loadingCart,
    loading: state.accounts.loading,
    
    error: state.accounts.error,
    paymentMethods: state.accounts.paymentMethods,
    paymentMethodsSettings: state.accounts.paymentMethodsSettings,
    shippingMethods: state.accounts.shippingMethods,
    checkoutSuccess : state.accounts.checkoutSuccess,
    authenticated: state.auth.authenticated,
    user: state.auth.customer_settings,
});
const mapDispatchToProps = dispatch => ({
    getOrders: (payload) => dispatch(getOrders(payload)),
    getOrderDetail: (id) => dispatch(getOrderDetail(id)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Accounts);