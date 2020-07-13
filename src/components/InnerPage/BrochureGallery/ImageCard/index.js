import React, {useState} from 'react';
import { hidePrevButton, hideNextButton } from '../../helper';
import galleryImage1 from "../../../../assets/images/broucher01.jpg";
import galleryLink from "../../../../assets/images/mv-bg.png";
import galleryImage2 from "../../../../assets/images/broucher02.jpg";
import galleryImage3 from "../../../../assets/images/broucher03.jpg";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const ImageGrid = props => {
    const {card: {image, link, index }} = props;
    const images = [
        {
            link: galleryLink,
        },
        {
            link: galleryImage2,
        },
        {
            link: galleryImage3,
        },
        {
            link: galleryImage2,
        }
    ]
   const [photoIndex, setIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const openGallery = (e,index) => {
        e.preventDefault();
        setOpen(true);
        setIndex(index);
    }

    const movePrev = () => {
        hideNextButton();
        if(photoIndex === 0) {
            hidePrevButton('add');
        } else {
            setIndex((photoIndex + images.length - 1) % images.length)
        }
    }

    const moveNext = () => {
        hidePrevButton();
        if(photoIndex !== 3) {
            setIndex((photoIndex + 1) % images.length)
        } else {
            hideNextButton('add')
        }
    }

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
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex].link}
                    nextSrc={images[(photoIndex + 1) % images.length].link}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setOpen(false)}
                    onMovePrevRequest={() => movePrev()}
                    onMoveNextRequest={() => moveNext()}
                    enableZoom={false}
                />
            )}
        </React.Fragment>

    );
}

export default ImageGrid;
