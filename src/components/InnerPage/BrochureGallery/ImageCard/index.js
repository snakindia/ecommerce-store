import React from 'react';
// import { useLightbox } from 'simple-react-lightbox';

const ImageGrid = props => {
    const {image, link} = props.card;
    // const { openLightbox } = useLightbox();
    return (
        <div className="col-sm-3 col-md-3">
            <a href={link} className="glightbox-demo">
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                        <div className="callToAction">
                            <button
                                className="btn-view"
                                type="button"
                                name=""
                                // onClick={() => openLightbox(link)}
                            >View Full Size
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <img src={image} alt=""/>
                </div>
            </a>
        </div>
    );
}

export default ImageGrid;
