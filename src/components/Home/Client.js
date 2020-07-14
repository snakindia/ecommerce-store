import React, { Component } from 'react';
import ClientImage1 from '../../assets/images/clients/brand1.jpg';
import ClientImage2 from '../../assets/images/clients/brand2.jpg';
import ClientImage3 from '../../assets/images/clients/brand3.jpg';
import ClientImage4 from '../../assets/images/clients/brand4.jpg';
import ClientImage5 from '../../assets/images/clients/brand5.jpg';
import ClientImage6 from '../../assets/images/clients/brand6.jpg';
import ClientImage7 from '../../assets/images/clients/brand7.jpg';
import ClientImage8 from '../../assets/images/clients/brand8.jpg';
import ClientImage9 from '../../assets/images/clients/brand9.jpg';
import ClientImage10 from '../../assets/images/clients/brand10.jpg';
import Slider from "react-slick";

export default class Client extends Component {
  render() {
        var settings = {
            slidesToShow: 6,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 1500,
        };
    return (
            
            <div>
                <section class="bg-opeque" id="company">
                    <div class="container-fluid">
                        <h2 class="bha_heading_2 z-index text-blue">Companies using our products</h2>
                    </div>
                </section>
                <div class="placement-client pt-0">
                    <div class="container pl-0 pr-0">
                        <section class="bhaClient slider portfolio">
                             <Slider {...settings}>
                                <div class="item-container">
                                    <div class="thumbnail">
                                        <img src={ClientImage1} alt="" />
                                    </div>
                                </div>

                                <div class="item-container">
                                    <div class="thumbnail">
                                        <img src={ClientImage2} alt="" />
                                    </div>
                                </div>

                                <div class="item-container">
                                    <div class="thumbnail">
                                        <img src={ClientImage3} alt="" />
                                    </div>
                                </div>

                                <div class="item-container">
                                    <div class="thumbnail">
                                        <img src={ClientImage4} alt="" />
                                    </div>
                                </div>

                                <div class="item-container">
                                    <div class="thumbnail">
                                        <img src={ClientImage5} alt="" />
                                    </div>
                                </div>

                                <div class="item-container">
                                    <div class="thumbnail">
                                        <img src={ClientImage6} alt="" />
                                    </div>
                                </div>

                                <div class="item-container">
                                    <div class="thumbnail">
                                        <img src={ClientImage7} alt="" />
                                    </div>
                                </div>

                                <div class="item-container">
                                    <div class="thumbnail">
                                        <img src={ClientImage8} alt="" />
                                    </div>
                                </div>

                                <div class="item-container">
                                    <div class="thumbnail">
                                        <img src={ClientImage9} alt="" />
                                    </div>
                                </div>

                                <div class="item-container">
                                    <div class="thumbnail">
                                        <img src={ClientImage10} alt="" />
                                    </div>
                                </div>
                            </Slider>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}
