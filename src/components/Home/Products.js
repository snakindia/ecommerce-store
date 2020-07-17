import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import axios from 'axios';
import {API_URL, API_IMAGE_PATH} from './../../constants/appConstant';

import Item1Image from '../../assets/images/product/item1.jpg';
import Item2Image from '../../assets/images/product/item2.jpg';


export default class Products extends Component {
        
    constructor(props) {
        super(props);
        this.state = {
            category: {},
            subCategory: {},
            activeId: '',
            firstCategoryId: '',
            image_url: ''
        };
    }
    
    componentDidMount() {
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
                                            <img class="img-fluid" src={item.images.length > 0 ? item.images[0].url : API_IMAGE_PATH + 'default/default.jpg'} alt="" style={{width: "262px", height: "280px"}}/>
                                            <div class="product-description">
                                              {item.name}
                                            </div>
                                            <div class="product-tag">
                                              {item.sku}
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
             dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
         
        const {category} = this.state;
        
        return (
            <div>   
            <section class="bg-opeque pb-4">
                <div class="container-fluid">
                    <h2 class="bha_heading_2 z-index text-blue">Best Selling Products</h2>
                </div>
            </section>
            <section class="pro-equipment-section" id="bestSelling">
                   <div class="container pl-0 pr-0">
                        <div class="productitem slider">
                            <Slider {...settings}>
                        <div class="product-card-wrapper outer-wrpper">
                            <em class="product-card__ribbon-wrapper">
                              <span class="product-card__ribbon product-card__ribbon--is-new">New</span>
                            </em> 
                          <div class="product-card hvr-float-shadow">
                            <div class="item-pro-inner">
                              <a href="#">
                            <img class="img-fluid" src={Item1Image} alt="" />
                              <div class="product-description">
                                Goyen® K4502 (M2162) Replacement Repair Kit
                              </div>
                              <div class="product-tag">
                                DCS574W1
                              </div>
                              </a>
                              <a href="#" class="btn bha-btn-primary w-100 float-left mt-4">View Details</a>
                            </div>
                          </div>
                        </div>

        <div class="product-card-wrapper outer-wrpper">
          <div class="product-card hvr-float-shadow">
            <div class="item-pro-inner">
              <a href="#">
            <img class="img-fluid" src={Item2Image} alt="" />
              <div class="product-description">
                Goyen® K4502 (M2162) Replacement Repair Kit
              </div>
              <div class="product-tag">
                DCS574W1
              </div>
              </a>
              <a href="#" class="btn bha-btn-primary w-100 float-left mt-4">View Details</a>
            </div>
          </div>
        </div>

        <div class="product-card-wrapper outer-wrpper">
          <div class="product-card hvr-float-shadow">
            <div class="item-pro-inner">
              <a href="#">
            <img class="img-fluid" src={Item2Image} alt="" />
              <div class="product-description">
                Goyen® K4502 (M2162) Replacement Repair Kit
              </div>
              <div class="product-tag">
                DCS574W1
              </div>
              </a>
              <a href="#" class="btn bha-btn-primary w-100 float-left mt-4">View Details</a>
            </div>
          </div>
        </div>

        <div class="product-card-wrapper outer-wrpper">
          <div class="product-card hvr-float-shadow">
            <div class="item-pro-inner">
              <a href="#">
            <img class="img-fluid" src={Item2Image} alt="" />
              <div class="product-description">
                Goyen® K4502 (M2162) Replacement Repair Kit
              </div>
              <div class="product-tag">
                DCS574W1
              </div>
              </a>
              <a href="#" class="btn bha-btn-primary w-100 float-left mt-4">View Details</a>
            </div>
          </div>
        </div>

        <div class="product-card-wrapper outer-wrpper">
          <div class="product-card hvr-float-shadow">
            <div class="item-pro-inner">
              <a href="#">
            <img class="img-fluid" src={Item2Image} alt="" />
              <div class="product-description">
                Goyen® K4502 (M2162) Replacement Repair Kit
              </div>
              <div class="product-tag">
                DCS574W1
              </div>
              </a>
              <a href="#" class="btn bha-btn-primary w-100 float-left mt-4">View Details</a>
            </div>
          </div>

        </div>
                            </Slider>
                      </div>
                      </div>
              </section>
              </div>
        )
    }
}
