import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import axios from 'axios';
import {API_URL, API_IMAGE_PATH} from './../../constants/appConstant';

export default class TopRatedProducts extends Component {
        
    constructor(props) {
        super(props);
        this.state = {
            products: {}
        };
    }
    
    componentDidMount() {
        axios.post(API_URL + "/products/getTopRatedProducts?fields=name,images,sku")
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
                <section class="bg-opeque pb-4">
                    <div class="container-fluid">
                        <h2 class="bha_heading_2 z-index text-blue">Top Rated Products</h2>
                    </div>
                </section>
                <section class="pro-equipment-section" id="bestSelling">
                   <div class="container pl-0 pr-0">
                        <div class="productitem slider">
                            <div class="product-card-wrapper outer-wrpper">
                                <Slider {...settings}>
                                {
                                    products && Object.keys(products).length &&
                                    products.map((item, idx) => {
                                        return (
                                            <div class="product-card hvr-float-shadow">
                                                <div class="item-pro-inner">
                                                    <a href="#">
                                                        <img class="img-fluid"  src={item.images.length > 0 ? item.images[0].url : API_IMAGE_PATH + 'default/default.jpg'} alt="" style={{width: "130px", height: "200px"}} />
                                                        <div class="product-description">
                                                            {item.name}
                                                        </div>
                                                        <div class="product-tag">
                                                            {item.sku}
                                                        </div>
                                                    </a>
                                                    <a href="#" class="btn bha-btn-primary w-100 float-left mt-4">View Details</a>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
