import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Ratings from './Ratings';
import ToolTip from './ToolTip';
import Slider from 'react-slick';
import { API_IMAGE_PATH } from './../../constants/appConstant';
const Product = ({ item, i }) => {
    const imageUrl = item && item.images && item.images.length > 0 ? item.images[0].url : API_IMAGE_PATH + 'default/default.jpg';
    return (
        <div className="location related-item" >

            <Link to={`/shop/${item.id}`}>
                <img className="bha-flag" src={imageUrl} alt="" />
            </Link>
            <div className="description-xxs">
                <Link to={`/shop/${item.id}`}>

                    <ToolTip length={20} text={item.name} />
                </Link>
            </div>
            <div className="star-rating mb-0">
                <Ratings />
            </div>
            <div className="pro_Price p-0">
                <p className=" currecny">
                    {item.regular_price ? <span className="strike">${item.regular_price}</span> : null}
                    {item.sale_price ? <span className="sp-price">${item.sale_price}</span> : null}

                </p>
            </div>
        </div>
    );
}
const RelatedProduct = ({ items }) => {
    let data = {};
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    }
    if (items && items.length > 0) {
        items.map((item, i) => {
            if (data[i % 3]) {
                data[i % 3] = [...data[i % 3], item];
            } else {
                data[i % 3] = [item];
            }

        })
    }
    return (
        <div className="right-content aside">
            <div id="accordion" className="myaccordion">
                <div className="featured-product pl-0 pr-0 pt-3">
                    <div>
                        <h6>Featured Products</h6>
                    </div>
                    <Slider {...settings}>
                        {
                            Object.keys(data) && Object.keys(data).length > 0 && Object.keys(data).map(key => {
                                return (
                                    <div className="related-warapper" key={`RelatedProduct${Math.random()}`}>
                                        {data[key] && data[key].length > 0 && data[key].map((item, i) => <Product item={item} key={`RelatedProductiem${Math.random()}`}/>)}
                                    </div>
                                )

                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>

    );
}
export default RelatedProduct;