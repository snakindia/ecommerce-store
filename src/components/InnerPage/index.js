import React, {Component} from 'react';
import BrochureDownload from "./BrochureDownload";
import {downloadBrochure, galleryBrochure, imageGrid, productSlider} from "./config";
import BrochureGallery from "./BrochureGallery";
import ImageGrid from "./ImageGrid";
import ProductSlider from "./ProductSlider";
import './css/style.css';


class InnerPage extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="container pl-0 pr-0">
                    <ol className="breadcrumb breadcrumb-bar">
                        <li className="breadcrumb-item"><a href="home.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Product / Services</a></li>
                        <li className="breadcrumb-item"><a href="#">Dust Collection Equipment</a></li>
                        <li className="breadcrumb-item active">Baghouse</li>
                    </ol>
                </div>
                <div className="container pl-0 pr-0">
                    <h2 className="display-head-2 text-center text-uppercase">Baghouse</h2>
                    <div className="description text-center">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
                <BrochureDownload downloadLinks={downloadBrochure}/>
                <BrochureGallery images={galleryBrochure}/>
                <ImageGrid imageGrid={imageGrid}/>
                <ProductSlider sliderItems={productSlider}/>
            </div>
        );
    }
}

export default InnerPage;
