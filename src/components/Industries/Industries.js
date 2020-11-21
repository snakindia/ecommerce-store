import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CheckOutNews from './CheckOutNews';
import CheckOutEvents from './CheckOutEvents';
import IndustriesSlider from './IndustriesSlider';
import PremiumBrands from './../Shop/ProductServicesPremiumBrands';
import Clients from './../Clients/Clients';
import ReactHtmlParser from 'react-html-parser';
import { fetchIndustriesList } from './industries.actions';
import { API_IMAGE_PATH } from './../../constants/appConstant';
import A1G1665 from '../../assets/images/A1G1665-1024x683.jpg';
import './../../assets/css/news-events.css';
import './../../assets/css/bha-slide.css';
import Slider from 'react-slick';

class Industries extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { actions } = this.props;
        actions.fetchIndustriesList();
        document.title = 'Industries'
    }

    render() {

        const details = this.props.data;
        const settings = {
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    autoplay: true,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: true,
                    autoplay: true,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                  }
                }
              ]
        };
        
        return (
            <div>
                {details &&
                    <section className="card-slider" style={{ "border-bottom": "1px solid #fff" }} >
                        <div className="card-inner">
                            <div className="card-caption sr-only">
                                <h1 className="bha_heading_2">
                                    Industries Served by Air filtration Sustems</h1>
                                <h6 className="pt-2">Lorem ipsum dollar site amntLorem ipsum dolor sit amet</h6>
                            </div>
                            <img className="img-fluid hero-img mobileImg" src={A1G1665} alt="responsive image" />
                            <div className="card-slide_container">
                                <div className="product-items-xx slider">
                                    {
                                        <Slider {...settings}>{
                                            details &&
                                            Object.keys(details).length &&
                                            details.reverse().map((item, idx) => {
                                                return (
                                                    <div className="hot-deals-item-wrapper pb-0">
                                                        <div className="card-slider__container__list__card">
                                                            <a href="#">
                                                                <img className="lazy card-slider__container__list__card__image loaded" src={API_IMAGE_PATH + 'industries/' + item.image} />
                                                            </a>
                                                            <div className="card-slider__container__list__card__content">
                                                                <a href="#">
                                                                    <div className="card-slider__container__list__card__content__headings">
                                                                        <h2 className="card-slider__container__list__card__content__title" style={{ "overflow-wrap": "break-word" }} >
                                                                            {item.title}
                                                                        </h2>
                                                                        <h3 className="card-slider__container__list__card__content__subtitle" style={{ "overflow-wrap": "break-word" }} >
                                                                            {ReactHtmlParser(item.content)}
                                                                        </h3>
                                                                    </div>
                                                                </a>
                                                                <a className="card-slider__container__list__card__content__button" href="#" target="_self">
                                                                    <span className="card-slider__container__list__card__content__button__learn-more">
                                                                        <span>{item.title}</span>
                                                                    </span>
                                                                    <span className="card-slider__container__list__card__content__button__arrow bg-pallblue"></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        </Slider>
                                    }





                                </div>
                            </div>
                        </div>
                    </section>
                }

                <IndustriesSlider />
                <div class="content-wrapper pb-0 pt-0">
                    <div class="pagewrap">
                        <div class="bgWhite pb-4">
                            {/* <CheckOutNews /> */}
                            <PremiumBrands />
                            {/* <CheckOutEvents /> */}
                            <Clients />
                        </div>
                    </div>
                </div>


            </div>

        );
    }
}


const mapStateToProps = ({ industries }) => ({
    data: industries.data
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
        {
            fetchIndustriesList
        },
        dispatch
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(Industries);
