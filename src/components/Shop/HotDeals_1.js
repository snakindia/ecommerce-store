import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import axios from 'axios';
import {API_URL, API_IMAGE_PATH} from './../../constants/appConstant';
import BlackCart from '../../assets/icon/cart_black.svg';
import Compare from '../../assets/icon/compare.svg';

export default class HotDeals extends Component {
        
    constructor(props) {
        super(props);
        this.state = {
            products: {}
        };
    }
    
    componentDidMount() {
        axios.post(API_URL + "/products/getHotProductList?fields=name,regular_price,sale_price,images")
            .then((res)=> {
            this.setState({products: res.data});
        })
    }
    
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
         
        const {products} = this.state;
        return (
            <div>   
                <section class="bg-opeque">
                    <div class="container-fluid">
                        <h2 class="bha_heading_2 z-index text-blue mb-4">Our Hot Deals</h2>
                    </div>
                </section>
                <section class="pro-equipment-section box-shadow">
                    <div class="container-fluid pl-0 pr-0 portfolio-item">
                        <div class="productitem-auto slider">
                                <Slider {...settings}>
                                {
                                    products && Object.keys(products).length &&
                                    products.map((item, idx) => {
                                        
                                        let priceDiff = item.regular_price - item.sale_price;
                                        let discount  = parseFloat((priceDiff * 100) / item.regular_price).toFixed(2);
                                        
                                        return (
                                            <div class="hot-deals-item-wrapper deals-border-right">
                                                <div class="portfolio-hover">
                                                    <div class="portfolio-hover-content">
                                                        <a href="#"><i class="fa fa-heart-o wishList-hover"></i></a>
                                                        <div class="callToAction-xs">
                                                            <p>
                                                                <a href="#myModalView" data-toggle="modal" class="quick-view">Quick View</a>
                                                                <a href="#" class="quick-view">View Details</a>
                                                            </p>
                                                        </div>
                                                  </div>
                                                </div>
                                                
                                                <div class="card d-block">
                                                    <a href="#"><i class="fa fa-heart-o wishList"></i></a>
                                                    <div class="hot-tag">
                                                        <div class="innertag">Hot</div>
                                                        <div class="discount">-{discount}%</div>
                                                    </div>
                                                    <div class="card-description">
                                                        <h6>{item.name}</h6>
                                                        <div class="pro_Price">
                                                            <p class=" currecny"><span class="strike">${item.regular_price}</span>
                                                            <span class="sp-price">${item.sale_price}</span></p>
                                                         </div>
                                                    </div>
                                                    <div class="card-item">
                                                        <img src={item.images.length > 0 ? item.images.url : API_IMAGE_PATH + 'default/default.jpg'} alt="" class="img-fluid" />
                                                    </div>
                                                    <div class="d-block float-left w-100 pl-3">
                                                        <a href="#" class="svg-icon"><img class="mr-2" src={BlackCart} alt="" />Add to Cart</a>
                                                        <a href="#" class="svg-icon"><img class="mr-2 ml-4"src={Compare} alt="" />Compare</a>
                                                    </div>
                                                </div>
                                          </div>
                                        )
                                    })
                                }
                                </Slider>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
