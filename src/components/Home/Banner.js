import React, { Component } from 'react';
import PexelPhotoImage from '../../assets/images/pexels-photo.png';
import Image from '../../assets/images/2000X500.jpg';
import FiveImage from '../../assets/images/1400X500-2.jpg';
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

export default class Banner extends Component {
  render() {
    this.slider = React.createRef();
    this.state = {
        autoplay: false
    };
    
    return (
        <div class="banner-container">
            <div id="carousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" role="listbox">
                    <RBCarousel
                        autoplay={this.state.autoplay}
                        pauseOnVisibility={true}
                        slideshowSpeed={2000}
                        version={4}
                    >
                        <div>
                            <picture>
                                  <img src={Image} alt="responsive image" class="d-block img-fluid" />
                            </picture>
                            <div class="caption">
                                <h1 class="bha_heading_1">dust collector EQUIPMENT & Speare parts</h1>
                                <a href="#" class="btn bha-btn-primary mt-4 pl-pr">view details</a>
                            </div>
                        </div>

                        <div>
                            <picture>
                                <img src={PexelPhotoImage} alt="responsive image" class="d-block img-fluid" />
                              </picture>
                            <div class="caption">
                                <h1 class="bha_heading_1">dust collector EQUIPMENT & Speare parts</h1>
                                <a href="#" class="btn bha-btn-primary mt-4 pl-pr">view details</a>
                            </div>
                        </div>

                        <div>
                            <picture>
                                <img src={FiveImage} alt="responsive image" class="d-block img-fluid" />
                            </picture>
                            <div class="caption">
                                <h1 class="bha_heading_1">dust collector EQUIPMENT & Speare parts</h1>
                                <a href="#" class="btn bha-btn-primary mt-4 pl-pr">view details</a>
                            </div>
                        </div>
                    </RBCarousel>
                </div> 
            </div>
        </div>
        )
    }
}
