import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Ratings from './Ratings'
import AddToCart from './AddToCart'
import ContactForSale from './ContactForSale'
import Compare from './Compare';
import Favourite from './Favourite';
import ToolTip from './ToolTip'
import {Rate} from 'antd'
import { API_IMAGE_PATH } from './../../constants/appConstant';
import Image from './Image'
export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: {},
        };
    }

    
    render() {
        const { item } = this.props;
        const hasPrice = item && (item.regular_price || item.sale_price) ? true : false;
        const imageUrl = item.images.length > 0 ? item.images[0].url : API_IMAGE_PATH + 'default/default.jpg';
        return (
            <div className="hot-deals-item-wrapper">
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                        <div className="callToAction-xxs">
                            <p>
                                <Link type="button"  onClick={e => {e.preventDefault();this.props.quickView(item)}} className="quick-view">Quick View</Link>
                                <Link to={`/shop/${item.id}`} className="quick-view">View Details</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <Favourite  item={item}/>
                <div className="item-pro-inner">
                    <a href="#">
                        <Image className="img-fluid"
                            src={imageUrl} alt="" />
                        <div className="product-description">
                        <Link to={`/shop/${item.id}`}><ToolTip text={item.name} /></Link>
                        </div>
                        {hasPrice ?
                            <div className="pro_Price text-center">
                                {item.sale_price ?
                                    <div className=" currecny"><span className="strike red">${item.regular_price}</span>
                                        <span className="sp-price">${item.sale_price}</span>
                                    </div> :
                                    <div className=" currecny"> <span className="sp-price">${item.regular_price}</span>
                                    </div>
                                }
                            </div>
                            :<div className="has_no_price"/>
                        }
                        <div className="text-center">
                            <div className="star-rating">
                            {item.reviews > 0 ? <Rate disabled  defaultValue ={item.reviews} style={{color:'#ff9c00'}}/> : <div className="has_no_review" /> }
                            </div>
                        </div>

                        <div className="d-block float-left w-100 text-center prod-comp-top">

                            {hasPrice ? <AddToCart item={item} /> : <ContactForSale />}
                            <Compare item={item}/>
                        </div>

                    </a>
                </div>

            </div>

        );
    }
}
