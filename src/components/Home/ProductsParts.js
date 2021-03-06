import React, { Component } from 'react';
import Slider from "react-slick";
import axios from 'axios';
import {API_URL, API_IMAGE_PATH} from './../../constants/appConstant';

export default class ProductsPart extends Component {
        
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }
    
    componentDidMount(){
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get(API_URL + "/get_product_parts_category_list")
            .then((res)=> {
            this.setState({data:res.data});
        })
    }
    
    drawData() {
        const {data} = this.state;
         const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };

        return (
            <Slider {...settings}>{
               
                Object.keys(data).length &&
                    data.map((item, idx) => {
                        return (
                            <div key={idx} className="product-item-wrapper">
                                <div className="card">
                                    <figure className="imghvr-shutter-in-out-vert">
                                        <img src={item.image != '' ? item.image : API_IMAGE_PATH + 'default/default.jpg'}  alt="Card image" />
                                        <figcaption className="text-center">
                                          <h4>{item.name}</h4>
                                          <button type="button" className="btn bha-btn-primary w-100 mt-2">Shop Now!</button>
                                        </figcaption>

                                        <div className="card-body p-0">
                                            <h4 className="card-title">{item.name}</h4>
                                        </div>
                                     </figure>
                                </div>
                            </div>
                        )
                    })
                   
                }
            </Slider>
        )
    }
        
    render() {
       
        return (
            <div>
                <section class="bg-opeque pb-4" id="product">
                    <div class="container-fluid">
                        <h2 class="bha_heading_2 z-index text-blue">Products parts & Equipment</h2>
                    </div>
                </section>
                <section class="pro-equipment-section">
                    <div class="container pl-0 pr-0">
                        <div class="productitem slider">
                            {this.drawData()}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
