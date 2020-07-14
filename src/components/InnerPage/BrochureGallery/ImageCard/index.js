import React from 'react';

const ImageGrid = props => {
    const {card: {image, link, index }, openGallery} = props;
    return (
        <React.Fragment>
            <div className="col-sm-3 col-md-3">
                <a href='#!' className="glightbox-demo">
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                            <div className="callToAction">
                                <button
                                    className="btn-view"
                                    type="button"
                                    name=""
                                    onClick={(e)=> openGallery(e,index)}
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
        </React.Fragment>

    );
}

export default ImageGrid;
