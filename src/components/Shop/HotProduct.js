import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AddToCart from './AddToCart'
import Favourite from './Favourite';
import ContactForSale from './ContactForSale'
import ToolTip from './ToolTip'

import { API_IMAGE_PATH } from './../../constants/appConstant';
const HotProduct = (props) => {
    const { item } = props;
    const { regular_price, sale_price } = item;
    let sale = undefined;
    if (regular_price && sale_price) {
        sale = (((regular_price - sale_price) * 100) / regular_price).toFixed(0)
    }

    const imageUrl = item.images.length > 0 ? item.images[0].url : API_IMAGE_PATH + 'default/default.jpg';
    const hasPrice = item && (item.regular_price || item.sale_price) ? true : false;
    return (
        <div className="hot-deals-item-wrapper deals-border-right">
            <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                    <div className="callToAction-xxs">
                        <p>
                            <Link type="button" onClick={e => props.quickView(item)} className="quick-view">Quick View</Link>
                            <Link to={`/shop/${item.id}`} className="quick-view">View Details</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="card d-block">
                {/* <Favourite className="like-button hover-hotdeal" /> */}

                <div className="icon-wishlist"></div>
                {sale && <div className="hot-tag">
                    <div className="innertag">Hot</div>
                    <div className="discount">-{sale}%</div>
                </div>
                }
                <div className="card-description">
                    <h6>
                        <ToolTip text={item.name} />
                    </h6>
                    {hasPrice && <div className="pro_Price">
                        <p className=" currecny"><span className="strike">${item.regular_price}</span>
                            <span className="sp-price">${item.sale_price}</span></p>
                    </div>
                    }
                </div>
                <div className="card-item">
                    <img src={imageUrl} alt="" className="img-fluid" />
                </div>
                <div className="d-block float-left w-100 pl-3">
                    {hasPrice ? <AddToCart /> : <ContactForSale />}
                    <Link type="button" className="svg-icon bottom_menu compare-link">
                        <i className="fa fa-random mr-2 ml-2" area-hidden="true"></i>
                        Compare
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default HotProduct; 
