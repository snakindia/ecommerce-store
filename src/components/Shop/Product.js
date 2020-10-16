import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Ratings from './Ratings'
import AddToCart from './AddToCart'
import ContactForSale from './ContactForSale'
import Compare from './Compare';
import Favourite from './Favourite';
import ToolTip from './ToolTip'
import { API_IMAGE_PATH } from './../../constants/appConstant';
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
                                <Link type="button" onClick={e => this.props.quickView(item)} className="quick-view">Quick View</Link>
                                <Link to={`/shop/${item.id}`} className="quick-view">View Details</Link>
                            </p>
                        </div>
                    </div>
                </div>
                {/* <Favourite /> */}
                <div className="item-pro-inner">
                    <a href="#">
                        <img className="img-fluid"
                            src={imageUrl} alt="" />
                        <div className="product-description">
                            <ToolTip text={item.name} />
                        </div>
                        {hasPrice &&
                            <div className="pro_Price text-center">

                                <div className=" currecny"><span className="strike">${item.regular_price}</span>
                                    <span className="sp-price">${item.sale_price}</span></div>
                            </div>
                        }
                        <div className="text-center">
                            <div className="star-rating">
                                <Ratings />
                            </div>
                        </div>

                        <div className="d-block float-left w-100 text-center">

                            {hasPrice ? <AddToCart /> : <ContactForSale />}
                            <Compare />
                        </div>

                    </a>
                </div>

            </div>

        );
    }
}
