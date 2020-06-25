import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import axios from 'axios';
import {API_URL} from './../../constants/appConstant';

export default class Products extends Component {
        
    constructor(props) {
        super(props);
        this.state = {
            category: {},
            subCategory: {},
            activeId: '',
            firstCategoryId: ''
        };
    }
    
    componentDidMount(){
        axios.get(API_URL + "/get_branded_category_list?fields=name")
            .then((res)=> {
            this.setState({category: res.data});
            
            if (typeof res.data != 'undefined' && res.data.length > 0) {
                this.getSubCategoryList(res.data[0].id);
                this.state.activeId = res.data[0].id;
            }
        })
        
        
    }
    
    getSubCategoryList = (id) => {
        this.state.activeId = id;
        axios.get(API_URL + '/products?category_id=' + id + '&fields=name,images')
            .then((res)=> {
            this.setState({subCategory: res.data.data});
        })
    }
    
    drawCategory() {
        const {category} = this.state;
        return (
            <div>
                {
                    Object.keys(category).length &&
                        category.map((item, idx) => {
                            if(idx == '0'){
                                return (
                                    <li><Link className={ this.state.activeId === item.id ? 'tablink current' : 'tablink' } onClick={(e) => this.getSubCategoryList(item.id, e)}>{item.name}</Link></li>
                                )
                            } else {
                                return (
                                    <li><Link className={this.state.activeId === item.id? 'tablink current' : 'tablink' } onClick={(e) => this.getSubCategoryList(item.id, e)}>{item.name}</Link></li>
                                )
                        }
                        
                   
                    })
                }
                
            </div>
        )
    }
    
    drawSubCategory() {
        const {subCategory} = this.state;
       
        return (
            <div>
                {
                    Object.keys(subCategory).length &&
                    subCategory.map((item, idx) => {
                        return (
                            <div class="product-card-wrapper" style={{position: "relative"}}>
                                <a href="#" >
                                    <div class="product-card hvr-float-shadow">
                                        <div class="product-card-inner">

                                            <img class="img-fluid" src={item.images[0].url} alt="" style={{width: "262px", height: "280px"}}/>
                                            <div class="product-description">
                                              {item.name}
                                            </div>
                                            <div class="product-tag">
                                              DCS574W1
                                            </div>

                                            <div class="prod-details-link">
                                                <button type="button" class="btn bha-btn-primary w-100">View Details</button>
                                            </div>
                                        </div>
                                  </div>  
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    
    render() {
        const settings = {
            dots: false,
            infinite: true
        };
        
        return (
              <section className="bha-product-section">
                <div className="tab-container">
                    <ul className="tab-inner">
                        <a className="left-control" href=""><i className="fa fa-chevron-left" aria-hidden="true"></i></a>
                       
                            {this.drawCategory()}
                        <a className="right-control" href=""><i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                        <div class="brands-head">Brands</div>
                    </ul>
                </div>
                  <div class="item-wraper mt-5">
                      <div class="resp-tabs-container">
                          <div id="mis" class="tab-pane active show">
                              <section class="regular slider">
                                  <Slider {...settings}>
                                      {this.drawSubCategory()}
                                 </Slider>
                              </section>
                          </div> 
                      </div>
                      <div class="container text-center">
                          <a href="" class="btn bha-btn-primary z-index view-all">View All</a>
                      </div>
                      </div>
              </section>
        )
    }
}
