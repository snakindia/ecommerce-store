import React, { Component } from 'react';
import Slider from "react-slick";
import axios from 'axios';
import {API_URL} from './../../constants/appConstant';

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
                        if(item.image != ''){
                            return (
                                <div className="product-item-wrapper">
                                    <div className="card">
                                        <figure className="imghvr-push-up">
                                            <img src={item.image} alt="Card image" />
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
                        }
                    })
                   
                }
            </Slider>
        )
    }
        
    render() {
       
        return (
            <div>
                <section className="header-section">
                    <div className="container-fluid">
                        <h2 className="bha_heading_2 z-index font-weight-bold">Products parts & Equipment</h2>
                    </div>
                </section>
                <section className="pro-equipment-section">
                    <div className="productitem slider">
                       
                                {this.drawData()}
                        
                    </div>
                </section>
            </div>
        )
    }
}
