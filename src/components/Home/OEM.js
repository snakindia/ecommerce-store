import React, { Component } from 'react';
import axios from 'axios';
import {API_URL, API_IMAGE_PATH} from './../../constants/appConstant';
import Slider from "react-slick";

export default class OEM extends Component {
        
    constructor(props) {
        super(props);
        this.state = {
            brands: {},
        };
    }
        
    componentDidMount() {
        axios.get(API_URL + "/get_branded_category_list?fields=name,image")
            .then((res)=> {
            this.setState({brands: res.data});
        })
    }
    
    
    drawData() {
        const {brands} = this.state;
       
        return (
            <div>
                {
                    Object.keys(brands).length &&
                    brands.map((item, idx) => {
                        return (
                            <div class="product-item-wrapper">
                                <div class="card">
                                    <figure class="imghvr-shutter-in-out-vert">
                                        <img src={item.image.length > 0 ? item.image : API_IMAGE_PATH + 'default/default.jpg'} alt="Card image" />
                                        <figcaption class="text-center">
                                            <h4>{item.name}</h4>
                                            <button type="button" class="btn bha-btn-primary w-100 mt-2">Shop Now!</button>
                                        </figcaption>

                                    <div class="card-body p-0">
                                        <h4 class="card-title">{item.name}</h4>
                                    </div>
                                    </figure>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
   render() {
       const {brands} = this.state;
        var settings = {
            slidesToShow:4,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
        };
    return (
            <div>
                <section class="pb-4 bg-opeque" id="brand">
                    <div class="container-fluid">
                        <h2 class="bha_heading_2 z-index text-blue">Premium OEM Brands</h2>
                    </div>
                </section>
                
                <section class="pro-equipment-section">
                    <div class="container pl-0 pr-0">
                        <div class="productitem slider">
                             <Slider {...settings}>
                                {
                    Object.keys(brands).length &&
                    brands.map((item, idx) => {
                        return (
                            <div class="product-item-wrapper">
                                <div class="card">
                                    <figure class="imghvr-shutter-in-out-vert">
                                        <img src={item.image.length > 0 ? item.image : API_IMAGE_PATH + 'default/default.jpg'} alt="Card image" />
                                        <figcaption class="text-center">
                                            <h4>{item.name}</h4>
                                            <button type="button" class="btn bha-btn-primary w-100 mt-2">Shop Now!</button>
                                        </figcaption>

                                    <div class="card-body p-0">
                                        <h4 class="card-title">{item.name}</h4>
                                    </div>
                                    </figure>
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
