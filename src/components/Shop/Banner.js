import React, { Component } from 'react';
import Pro01 from '../../assets/images/promo-banner/pro-01.jpg';
import ProSecond from '../../assets/images/promo-banner/pro-02.jpg';
import RBCarousel from "react-bootstrap-carousel";

class Banner extends Component {

    render() {
        return (
            <div class="carousel-inner" role="listbox">
                <RBCarousel
                    autoplay={true}
                    pauseOnVisibility={true}
                    slideshowSpeed={2000}
                    version={4}
                >
                 
                    <div class="carousel-item item-xs active">
                      <img src={Pro01} alt="" class="img-fluid" />
                      <div class="item-xs-caption">
                        <h1 class="item_heading">Square Chuck Air Filter Cartridge</h1>
                        <p class="item-description-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod didunt ut labore et dolore magna aliqua.</p>
                        <p class="item-price pt-3">from<span class="priceTag">$399</span></p>
                        <a href="#myModal" data-toggle="modal" class="btn bha-btn-primary mt-2">Shop Now</a>
                      </div>
                    </div>

                    <div class="carousel-item item-xs active">
                      <img src={ProSecond} alt="" class="img-fluid" />
                      <div class="item-xs-caption">
                        <h1 class="item_heading">Bin Vent Dust Collector</h1>
                        <p class="item-description-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod didunt ut labore et dolore magna aliqua.</p>
                        <p class="item-price pt-3">from<span class="priceTag">$399</span></p>
                        <a href="#myModal" data-toggle="modal" class="btn bha-btn-primary mt-2">Shop Now</a>
                      </div>
                    </div>

                    <div class="carousel-item item-xs active">
                      <img src={Pro01} alt="" class="img-fluid" />
                      <div class="item-xs-caption">
                        <h1 class="item_heading">Square Chuck Air Filter Cartridge</h1>
                        <p class="item-description-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod didunt ut labore et dolore magna aliqua.</p>
                        <p class="item-price pt-3">from<span class="priceTag">$399</span></p>
                        <a href="#myModal" data-toggle="modal" class="btn bha-btn-primary mt-2">Shop Now</a>
                      </div>
                    </div>
                   
                </RBCarousel> </div>
        )
    }
}

export default Banner;
