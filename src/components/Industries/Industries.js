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
    }
    
    render() {
        
        const details = this.props.data;
        const settings = {
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 1500,
        };
        console.log('details')
        console.log(details)
        return (
        <div>
            {details &&
            <section class="card-slider" style={{"border-bottom": "1px solid #fff"}} >
                <div class="card-inner">
                    <div class="card-caption sr-only">
                        <h1 class="bha_heading_2">
                         Industries Served by Air filtration Sustems</h1>
                        <h6 class="pt-2">Lorem ipsum dollar site amntLorem ipsum dolor sit amet</h6>
                    </div>
                    <img class="img-fluid hero-img mobileImg" src={A1G1665} alt="responsive image" />
                    <div class="card-slide_container">
                       <div class="product-items-xx slider">
                        {
                         <Slider {...settings}>{
                            details &&
                            Object.keys(details).length &&
                                details.map((item, idx) => {
                                return (
                                    <div class="hot-deals-item-wrapper pb-0">
                                        <div class="card-slider__container__list__card">
                                            <a href="" target="_self">
                                                <img class="lazy card-slider__container__list__card__image loaded" src={API_IMAGE_PATH + 'industries/' + item.image} />
                                            </a>
                                            <div class="card-slider__container__list__card__content">
                                                <a href="/en/industrial-manufacturing/landing/red1000.html" target="_self">
                                                    <div class="card-slider__container__list__card__content__headings">
                                                        <h2 class="card-slider__container__list__card__content__title" style={{"overflow-wrap": "break-word"}} >
                                                            {item.title}
                                                        </h2>
                                                        <h3 class="card-slider__container__list__card__content__subtitle" style={{"overflow-wrap": "break-word"}} >
                                                            {ReactHtmlParser(item.content)}
                                                        </h3>
                                                    </div>
                                                </a>
                                                <a class="card-slider__container__list__card__content__button" href="/en/industrial-manufacturing/landing/red1000.html" target="_self">
                                                    <span class="card-slider__container__list__card__content__button__learn-more">
                                                        <span>{item.title}</span>
                                                    </span>
                                                    <span class="card-slider__container__list__card__content__button__arrow bg-pallblue"></span>
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
        
                <IndustriesSlider/>
        <div class="content-wrapper pb-0 pt-0">
            <div class="pagewrap">
                <div class="bgWhite pb-4">
                <CheckOutNews/>
                <PremiumBrands/>
                <CheckOutEvents/>
                <Clients/>
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
