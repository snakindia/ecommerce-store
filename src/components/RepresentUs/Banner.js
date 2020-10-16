import React from 'react';
import RBCarousel from 'react-bootstrap-carousel';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import banner1 from '../../assets/images/g-g-b-n-a.jpg';
import banner2 from '../../assets/images/Cristo.jpg';
import banner3 from '../../assets/images/V&A-Waterfront.jpg';
import banner4 from '../../assets/images/statue-liberty.jpg';
import banner5 from '../../assets/images/Western-Wall.gif';
import ContactForm from '../common/ContactForm';

const Banner = () => {
    return (
        <section className="banner-slider-container" style={{ "margin-top": "120px", "padding": "1rem 0 0" }} >
            <div className="page wrap">
                <div className="container-fluid pl-0 pr-0">
                    <div className="row no-gutters">
                        <div className="col-lg-12 pr-0">
                            <div className="banner-container-xxs mt-0">
                                <div id="carousel" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner" role="listbox" style={{ "position": "relative", "overflow":"visible" }}>

                                        <div className="align-right-contactform contTactForm">
                                            <ContactForm />
                                        </div>

                                        <RBCarousel
                                            autoplay={true}
                                            pauseOnVisibility={true}
                                            slideshowSpeed={5000}
                                            version={4}
                                        >


                                            <div key="1" >
                                                <picture>
                                                    <img src={banner1} alt="" className="img-fluid hero-img" />
                                                </picture>
                                                <div className="item-xxs-caption">
                                                    <h1 className="item_heading text-white">North America</h1>
                                                </div>
                                            </div>

                                            <div key="2"  ><picture>
                                                <img src={banner2} alt="" className="img-fluid" /></picture>
                                                <div className="item-xxs-caption">
                                                    <h1 className="item_heading text-white">South America</h1>
                                                </div>
                                            </div>

                                            <div key="3"  ><picture>
                                                <img src={banner3} alt="" className="img-fluid" /></picture>
                                                <div className="item-xxs-caption">
                                                    <h1 className="item_heading text-white">South Africa</h1>
                                                </div>
                                            </div>

                                            <div key="4"  ><picture>
                                                <img src={banner4} alt="" className="img-fluid" /></picture>
                                                <div className="item-xxs-caption">
                                                    <h1 className="item_heading text-white">United States</h1>
                                                </div>
                                            </div>

                                            <div key="5"  ><picture>
                                                <img src={banner5} alt="" className="img-fluid" /></picture>
                                                <div className="item-xxs-caption">
                                                    <h1 className="item_heading text-white">Israel</h1>
                                                    <p className="item-description-xs text-white">An oil refinery is considered an essential part of the downstream side of the petroleum industry. We can assist in the capture of any pollutants with our baghouse air pollution control systems.</p>
                                                </div>
                                            </div>


                                        </RBCarousel>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;

