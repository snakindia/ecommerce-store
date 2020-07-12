import React, { Component } from 'react';
import GoyanImage from '../../assets/images/goyan.jpg';
import MecareImage from '../../assets/images/mecare.jpg';
import AscoImage from '../../assets/images/asco.jpg';
import DonaldImage from '../../assets/images/donald.jpg';
import CamfilFarrImage from '../../assets/images/camfil-farr.jpg';
import Slider from "react-slick";

export default class OEM extends Component {
   render() {
        var settings = {
            slidesToShow:4,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
        };
    return (
           <div>
                <section class="pb-4 bg-opeque" id="brand">
                    <div class="container-fluid">
                        <h2 class="bha_heading_2 z-index text-blue">Premium OEM Brands</h2>
                    </div>
                </section>
                
                        <section class="pro-equipment-section">
    <div class="container pl-0 pr-0">
     <div class="productitem slider">
                             <Slider {...settings}>
                              <div class="product-item-wrapper">
            <div class="card">
              <figure class="imghvr-shutter-in-out-vert">
                <img src={GoyanImage} alt="Card image" />
                <figcaption class="text-center">
                  <h4>Goyen</h4>
                  <button type="button" class="btn bha-btn-primary w-100 mt-2">Shop Now!</button>
                </figcaption>
             
              <div class="card-body p-0">
                <h4 class="card-title">Goyen</h4>
              </div>
               </figure>
            </div>
        </div>
        <div class="product-item-wrapper">
          <div class="card">
            <figure class="imghvr-shutter-in-out-vert">
              <img src={MecareImage} alt="Card image" />
              <figcaption class="text-center">
                  <h4>Mecair</h4>
                  <button type="button" class="btn bha-btn-primary w-100 mt-2">Shop Now!</button>
                </figcaption>
             
              <div class="card-body p-0">
                <h4 class="card-title">Mecair</h4>
              </div>
            </figure>
          </div>
        </div>

        <div class="product-item-wrapper">
          <div class="card">
            <figure class="imghvr-shutter-in-out-vert">
              <img src={AscoImage} alt="Card image" />
                <figcaption class="text-center">
                  <h4>Asco</h4>
                  <button type="button" class="btn bha-btn-primary w-100 mt-2">Shop Now!</button>
                </figcaption>
              <div class="card-body p-0">
                <h4 class="card-title">Asco</h4>
              </div>
            </figure>
          </div>
        </div>

        <div class="product-item-wrapper">
          <div class="card">
            <figure class="imghvr-shutter-in-out-vert">
              <img src={DonaldImage} alt="Card image" />
                <figcaption class="text-center">
                  <h4>Donaldson Torit</h4>
                  <button type="button" class="btn bha-btn-primary w-100 mt-2">Shop Now!</button>
                </figcaption>
              <div class="card-body p-0">
                <h4 class="card-title">Donaldson Torit</h4>
              </div>
            </figure>
          </div>
        </div>

        <div class="product-item-wrapper">
            <div class="card">
              <figure class="imghvr-shutter-in-out-vert">
                <img src={CamfilFarrImage} alt="Card image" />
                <figcaption class="text-center">
                  <h4>Camfil Farr</h4>
                  <button type="button" class="btn bha-btn-primary w-100 mt-2">Shop Now!</button>
                </figcaption>
                <div class="card-body p-0">
                <h4 class="card-title">Camfil Farr</h4>
                </div>
              </figure>
          </div>
        </div>

                               
                            </Slider>
                    </div>
                </div>
                        </section>
            </div>
        )
    }
}
