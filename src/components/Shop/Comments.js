import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getComments, alterComment } from './store/Actions';
import Image from './Image';
import { Input } from 'antd';
import { Rate } from 'antd';
const { Search } = Input;
const Comments = (props) => {
    
    const [items, setItems]=useState([])
    useEffect(()=>{
        let {data} =props;
        data = data && data.data && data.data.length >0 ? data.data :[]
        setItems(data)
    },[props.data, props.orders])
    const doSearch = (e) => {
        const {value}=e.target;
        props.search(value)
    }
    const linkClick = () => {
        props.linkClick()

    }
    const {orders} =props;
    let ordersId = []
    if(props.orders && orders.data && orders.data.length > 0){
         orders.data.map(d=>{
        if(d && d.items && d.items.length > 0){
            d.items.map(dd=>{
                ordersId.push(dd.id)
            })
           
        }
    })
    }
    ordersId =[...new Set(ordersId)];
    const canComment = ordersId.includes(props.id) ? true:false;
    
    return (
        <div class="col-lg-12 pl-0 pr-0 resp-tab-content resp-tab-content-active" aria-labelledby="tab_item-1" >
                      <div class="row">
                        
                        <div class="col-sm-8 col-md-8">
                          <div class="pro-rating">
                          2 reviews for Mecair® DB112 Replacement Diaphragm Valve Kit 1 1/2″ (Single Stage Type)
                          
                        </div>
                          
                          
                          
                          
                          <div class="media pl-0 pb-1 pr-0">
                            <img class="align-self-start mr-3" src="images/img_avatar3.png" alt="" width="70"/>
                            <div class="media-body bha-review">
                              <h6 class="mt-0"><span>Joe Doe –</span> <span>February 22, 2018</span></h6>
                              <div>Awesome!</div>
                              <Rate  disabled defaultValue={2} />
                            </div>
                          </div>

                        </div>
                        { canComment   ? 
                        <div class="col-sm-4 col-md-4">
                      
                          <div class="add-new-link pt-1">
                            
                            <span class="text-black">Add a Review</span>
                          </div>
                          
                          <div class="collapse show" id="collapseExample">
                            <div class="card card-body bha-review-inner">
                             <span>Your rating </span>
                              <Rate />
                              <form class="mt-4">
                                <div class="form-group">
                                  <label>Your Review *</label>
                                  <textarea class="form-control border border border-light" placeholder="Your Review" rows="5"></textarea>
                                </div>
                               
                               
                                
                                <div class="form-group">
                                  <input name="submit" type="submit" id="submit" class="btn btn-bha-primary" value="Submit"/>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        : null }
                     </div>
                    </div>
    );
}
const mapStateToProps = (state) => ({
    data: state.shop.comments,
    loading: state.shop.loading,
    orders: state.accounts.orders
});
const mapDispatchToProps = dispatch => ({
    getComments: (payload) => dispatch(getComments(payload)),
    alterComment: (payload) => dispatch(alterComment(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments);