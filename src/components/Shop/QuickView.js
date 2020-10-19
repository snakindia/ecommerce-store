import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Ratings from './Ratings'
import AddToCart from './AddToCart'
import BuyNow from './BuyNow'
import ContactForSale from './ContactForSale'
import Share from './Share';
import Favourite from './Favourite';
import Slider from 'react-slick';
import Zoomer from "./Zoomer";
import { API_IMAGE_PATH } from './../../constants/appConstant';
export default class QuickView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: 0,
            imageUrl: API_IMAGE_PATH + 'default/default.jpg'
        };
    }
    componentDidMount() {
        const { item } = this.props;
        const imageUrl = item &&  item.images && item.images.length > 0 ? item.images[0].url : null;
        if (imageUrl) {
            this.setState({ imageUrl })
        }

    }

    changeCounter = (payload) => {
        let { counts } = this.state;
        counts = counts + (payload);
        this.setState({ counts })
    }

    handleInput = (e) => {
        const { value } = e.target;
        if (!isNaN(value)) {
            this.setState({ counts: value })
        }
    }
    changeImage = (imageUrl) => {
        this.setState({ imageUrl })
    }

    render() {
        const { item, single } = this.props;

        const { regular_price, sale_price } = item;
        let diff = undefined;
        if (regular_price && sale_price) {
            diff = (regular_price - sale_price).toFixed(2)
        }
        let images = [];
        images = item && item.images && item.images.length > 1 ? item.images : []
        const { imageUrl, counts } = this.state;
        const sliderImages = [
            'https://adamrisberg.github.io/react-image-magnifiers/4700d4cb26b14563be996aa5f0c53ca2.jpg',
            'http://209.59.154.198:3001/images/products/5f7ed1c5949319479ac6f175/Camfil_Frr_Dust-Collector-Pleated-and-Cartridge-Filters.png',
            'https://adamrisberg.github.io/react-image-magnifiers/4700d4cb26b14563be996aa5f0c53ca2.jpg',
            'http://209.59.154.198:3001/images/products/5f7ed1c5949319479ac6f175/Camfil_Frr_Dust-Collector-Pleated-and-Cartridge-Filters.png',
            'https://adamrisberg.github.io/react-image-magnifiers/4700d4cb26b14563be996aa5f0c53ca2.jpg'
        ];
        const settings = {
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000
        }
        const brand = item && item.tags && item.tags[0] ? item.tags : '';

        return (
            <div
                className={single ? 'single-product-detail' : 'modal-view-inner container-login animated fadeIn'}

                style={single ? {} : {
                    padding: '1rem',
                    background: 'rgb(255, 255, 255) none repeat scroll 0% 0%',
                    bordeRadius: '3px',
                    display: 'block'
                }}
            >
                {single ? null : <button type="button" className="close" onClick={this.props.hide}>
                    <span aria-hidden="true">×</span>
                </button>
                }
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-sm-6 col-md-6">
                            <section id="magnific">
                                <div className="row">
                                    <div className="large-5 column">
                                        {/* {single ? <Favourite />: null } */}
                                        <div className="xzoom-container mt-3">
                                            <div className="prod_gallery-sm">
                                                <div style={{ width: '96%' }} className="zoomer">
                                                    <Zoomer
                                                        image={imageUrl}
                                                        largeImage={imageUrl}
                                                    />
                                                </div>
                                            </div>
                                            <div className="thumbnails product-slider-div" style={{ width: '300px' }}>
                                                <Slider {...settings}>
                                                    {sliderImages.map((sl, i) =>
                                                        <div className="product-slider" style={{ width: '80px' }}>
                                                            <img
                                                                key={`${i}hotp`}
                                                                src={sl}
                                                                width="780"
                                                                onClick={e => this.changeImage(sl)}
                                                                className="xzoom-gallery5"
                                                                alt=''
                                                            />
                                                        </div>

                                                    )}
                                                </Slider>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="large-7 column"></div>
                                </div>
                            </section>

                        </div>
                        <div className="col-sm-6 col-md-6 pl-3">
                            <div className="media-body pt-3 pr-0">
                                <div className="pro_Info">
                                <h1 className="mt-0 mb-2">{item.name}</h1>
                                </div>
                                <div className="brand_name"><span className="txtLabel">Brand:</span><span>{brand}</span></div>
                                <div className="pro_Id"><span className="txtLabel">SKU:</span>
                                    <span>{item.sku}</span></div>
                                <div className="star-rating mt-2">
                                    <Ratings />
                                </div>
                                <div className="pro_Price">
                                    <p className="currecny">
                                        {regular_price && <span className="strike red">$ {item.regular_price}</span>}
                                        {sale_price && <span className="sp-price"> $ {item.sale_price || item.price}</span>}
                                        {diff && <span className="save-offer pl-4 small">( You Save: ${diff}  )</span>}
                                    </p>

                                </div>
                                {(regular_price || sale_price) ?
                                    <form className="inc_value pt-0">
                                        <div className="row">
                                            <div className="col-sm-2 mt-1 mr-3">Quantity</div>
                                            <div className="col-sm-8">

                                                <div className="value-button inc_value decrease"
                                                    onClick={e => this.changeCounter(-1)}
                                                >-</div>
                                                <input type="text" id="number_modal"
                                                    onChange={this.handleInput}
                                                    className="number" value={counts} />
                                                <div className="value-button increase"
                                                    onClick={e => this.changeCounter(+1)}
                                                >+</div>
                                            </div>
                                        </div>
                                    </form> : null}
                                <div className="float-left mt-4">
                                    {(regular_price || sale_price) ? <AddToCart className=" btn bha-btn-primary text-uppercase" /> : <ContactForSale />}
                                    {(regular_price || sale_price) && single ? <BuyNow /> : null}

                                </div>
                                <div className="social_Share">
                                    <p>
                                        <Share item={item} />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
