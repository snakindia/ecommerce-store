import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Ratings from './Ratings'
import AddToCart from './AddToCart'
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
        const imageUrl = item.images.length > 0 ? item.images[0].url : null;
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
        const { item } = this.props;

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
        const brand = item && item.tags && item.tags[0]? item.tags:'';
        
        return (
            <div className="modal-view-inner container-login animated fadeIn"
                style={{
                    padding: '1rem',
                    background: 'rgb(255, 255, 255) none repeat scroll 0% 0%',
                    bordeRadius: '3px',
                    display: 'block'
                }}
            >
                <button type="button" class="close" onClick={this.props.hide}>
                    <span aria-hidden="true">×</span>
                </button>
                <div class="container">
                    <div class="row no-gutters">
                        <div class="col-sm-6 col-md-6">
                            <section id="magnific">
                                <div class="row">
                                    <div class="large-5 column">
                                        <Favourite />
                                        <div class="xzoom-container">
                                            <div className="prod_gallery-sm">
                                                <div style={{ width: '96%' }} className="zoomer">
                                                    <Zoomer
                                                        image={imageUrl}
                                                        largeImage={imageUrl}
                                                    />
                                                </div>
                                            </div>
                                            <div class="thumbnails product-slider-div" style={{ width: '300px' }}>
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
                                    <div class="large-7 column"></div>
                                </div>
                            </section>

                        </div>
                        <div class="col-sm-6 col-md-6 pl-3">
                            <div class="media-body pt-3 pr-4">
                                <h4 class="mt-0 mb-2">{item.name}</h4>
                                <div class="brand_name"><span class="txtLabel">Brand:</span><span>{brand}</span></div>
                                <div class="pro_Id"><span class="txtLabel">SKU:</span>
                                    <span>{item.sku}</span></div>
                                <div class="star-rating mt-2">
                                    <Ratings />
                                </div>
                                <div class="pro_Price">
                                    <p class="currecny">
                                        {regular_price && <span class="strike red">$ {item.regular_price}</span>}
                                        {sale_price && <span class="sp-price"> $ {item.sale_price || item.price}</span>}
                                        {diff && <span class="save-offer pl-4 small">( You Save: ${diff}  )</span>}
                                    </p>

                                </div>
                                {(regular_price || sale_price) ?
                                <form class="inc_value pt-0">
                                    <div class="row">
                                        <div class="col-sm-2 mt-2 mr-3">Quantity</div>
                                        <div class="col-sm-8">

                                            <div class="value-button inc_value decrease"
                                                onClick={e => this.changeCounter(-1)}
                                            >-</div>
                                            <input type="text" id="number_modal"
                                                onChange={this.handleInput}
                                                class="number" value={counts} />
                                            <div class="value-button increase"
                                                onClick={e => this.changeCounter(+1)}
                                            >+</div>
                                        </div>
                                    </div>
                                </form>: null }
                                <div class="float-left mt-4">
                                    {(regular_price || sale_price) ? <AddToCart className=" btn bha-btn-primary text-uppercase" /> : <ContactForSale />}

                                </div>
                                <div class="social_Share">
                                    <p>
                                        <Share />
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
