import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getComments, addComments } from './store/Actions';
import Image from './Image';
import { Input,Form ,Button} from 'antd';
import { Rate } from 'antd';
import moment from 'moment'
const { Search, TextArea } = Input;
const Comments = (props) => {
  const onFinish = (values) => {
    const userId =props.user && props.user.id ? props.user.full_name:null;
    let data ={
      ...values,
      userId:userId,
      productId:props.id
    }
    props.addComments(data)
  };

  useEffect(()=>{
    props.getComments(props.id)
  },[props.id])


    const [items, setItems]=useState([])
    const [canComment, setCanComment]=useState('')
    const [key, setKey]=useState(new Date())
    useEffect(()=>{
        let {data, id} =props;
        if(data && data.id == id){
          const d = data.data.sort((a,b)=>{ return a.updatedAt < b.updatedAt})
          setItems(d)
        } else {
          setItems([])
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
        const Comment = ordersId.includes(props.id) ? true:false;
        setCanComment(Comment)
       setKey(new Date())
    },[props.data, props.orders])
    
    
    
    return (
        <div className="col-lg-12 pl-0 pr-0 resp-tab-content resp-tab-content-active" aria-labelledby="tab_item-1" >
                      <div className="row">
                        
                        <div className="col-sm-8 col-md-8">
                          <div className="pro-rating">
                          {items && items.length > 0 ? items.length :''} comments for {props.name}
                        </div>
                          
                          
                          
                        {items && items.length > 0 ? <>
                          {items.map(item=>
                          <div className="media pl-0 pb-1 pr-0">
                            <img className="align-self-start mr-3" src="images/img_avatar3.png" alt="" width="70"/>
                            <div className="media-body bha-review">
                              <h6 className="mt-0"><span>{item.userId} </span>
                               
                               <span>{moment(item.updatedAt).format('MMMM DD, YYYY')}</span>
                               </h6>
                              <div>{item.review}</div>
                              <Rate  disabled defaultValue={item.rating} />
                            </div>
                          </div>
                          )}
                          </>: null }

                        </div>
                        { !canComment   ? 
                        <div className="col-sm-4 col-md-4">
                      
                          <div className="add-new-link pt-1">
                            
                            <span className="text-black">Add a Review</span>
                          </div>
                          
                          <div className="collapse show" id="collapseExample">
                            <div className="card card-body bha-review-inner">
                            <Form
                              name="basic"
                              initialValues={{ review: '', rating:undefined }}
                              onFinish={onFinish}
                              key={key}
                              layout="vertical"
                            >
                              <Form.Item
                                  label="Your rating"
                                  name="rating"
                                  rules={[{ required: true, message: 'Please give rating' }]}
                                  hasFeedback
                                >
                                  <Rate />
                                </Form.Item>
                                <Form.Item
                                  label="Your Review"
                                  name="review"
                                  rules={[{ required: true, message: 'Please input your review!' }]}
                                  hasFeedback
                                >
                                  <TextArea />
                                </Form.Item>

                                <Form.Item >
                                  <Button type="primary" htmlType="submit">
                                    Submit
                                  </Button>
                                </Form.Item>
                              </Form>
                               
                                
                                
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
    orders: state.accounts.orders,
    user:state.accounts.user
});
const mapDispatchToProps = dispatch => ({
    getComments: (payload) => dispatch(getComments(payload)),
    addComments: (payload) => dispatch(addComments(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments);