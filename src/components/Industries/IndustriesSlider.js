import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RBCarousel from 'react-bootstrap-carousel';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import { API_IMAGE_PATH } from './../../constants/appConstant';
import ReactHtmlParser from 'react-html-parser';
import ContactForm from '../common/ContactForm';
class IndustriesSlider extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const details = this.props.data;
        return (
            <section class="banner-slider-container">
                <div class="container-fluid pb-3 pt-3 pl-0 pr-0">
                    <h2 class="bha_heading_2 text-black text-center font-weight-bold pt-3 mb-4" style={{ "z-index": "1", "position": "relative" }} >
                        Industries Served by Air Filtration Systems</h2>
                    <div class="row no-gutters">
                        <div class="col-lg-12">
                            <div id="industrybanner" class="banner-container-xx mt-0 " style={{ "position": "relative" }} >
                                <div id="carousel" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner" role="listbox">
                                        <div id="IndustriesSlider" className="align-right-contactform">
                                            <ContactForm />
                                        </div>
                                        <RBCarousel
                                            autoplay={true}
                                            pauseOnVisibility={true}
                                            slideshowSpeed={2000}
                                            version={4}
                                        >
                                            {details &&
                                                details.map((item, i) => {
                                                    return (
                                                        <div class="carousel-item active">
                                                            <img src={API_IMAGE_PATH + 'industries/' + item.image} alt="" class="img-fluid" />
                                                            <div class="item-xs-caption caption-setting">
                                                                <h1 class="item_heading text-white">{item.title}</h1>
                                                                <p class="item-description-xs text-white"> {ReactHtmlParser(item.content)}</p>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                        </RBCarousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = ({ industries }) => ({
    data: industries.data
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
        {

        },
        dispatch
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(IndustriesSlider);
