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
            <div class="hot-deals-item-wrapper">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <div class="callToAction-xxs">
                            <p>
                                <Link type="button" onClick={e => this.props.quickView(item)} class="quick-view">Quick View</Link>
                                <Link to={`/shop/${item.id}`} class="quick-view">View Details</Link>
                            </p>
                        </div>
                    </div>
                </div>
                {/* <Favourite /> */}
                <div class="item-pro-inner">
                    <a href="#">
                        <img class="img-fluid"
                            src={imageUrl} alt="" />
                        <div class="product-description">
                            <ToolTip text={item.name} />
                        </div>
                        {hasPrice &&
                            <div class="pro_Price text-center">

                                <div class=" currecny"><span class="strike">${item.regular_price}</span>
                                    <span class="sp-price">${item.sale_price}</span></div>
                            </div>
                        }
                        <div className="text-center">
                            <div className="star-rating">
                                <Ratings />
                            </div>
                        </div>

                        <div class="d-block float-left w-100 text-center">

                            {hasPrice ? <AddToCart /> : <ContactForSale />}
                            <Compare />
                        </div>

                    </a>
                </div>

            </div>

        );
    }
}
