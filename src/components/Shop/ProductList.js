import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Ratings from './Ratings'
import AddToCart from './AddToCart'
import ContactForSale from './ContactForSale'
import Compare from './Compare';
import Favourite from './Favourite';
import ToolTip from './ToolTip'
import Image from './Image'
import { API_IMAGE_PATH } from './../../constants/appConstant';
export default class ProductList extends Component {
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
            <li className="list-group-item">
                <div className="media flex-column flex-lg-row p-3">
                    <Favourite  item={item}/>
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                            <div className="callToAction-list">
                                <p>
                                    <Link type="button" onClick={e => this.props.quickView(item)} className="quick-view">Quick View</Link>
                                    <Link to={`/shop/${item.id}`} className="quick-view">View Details</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image src={imageUrl} alt="Generic placeholder image" className="order-1 order-lg-1 mr-lg-4" width="200" />
                    </div>
                    <div className="media-body order-2 order-lg-1 pl-3">
                        <h6 className="mt-0 mb-2"><ToolTip text={item.name} length={1000} /></h6>
                        {/* <a href="product-details.html" className="text-muted mb-0"><ToolTip text={item.description} /></a> */}
                        <div className="d-flex align-items-center justify-content-left mt-1">
                            <div className="star-rating">
                                <Ratings />
                            </div>
                        </div>
                        {hasPrice &&
                            <div className="pro_Price p-0">
                                {item.sale_price ?
                                    <p className=" currecny"><span className="strike">${item.regular_price}</span>
                                        <span className="sp-price">${item.sale_price}</span></p>

                                    :
                                    <p className=" currecny"><span className="sp-price">${item.regular_price}</span></p>


                                }
                            </div>
                        }
                        <div className="d-block float-left w-100 mt-4">
                            {hasPrice ? <AddToCart item={item} /> : <ContactForSale />}
                            <Compare item={item} />
                        </div>
                    </div>
                
            </li>
        );
    }
}
