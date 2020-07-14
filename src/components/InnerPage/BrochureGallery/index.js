import React, {useState} from 'react';
import ImageCard from "./ImageCard";
import Lightbox from "react-image-lightbox";
import {hideNextButton, hidePrevButton} from "../helper";
import 'react-image-lightbox/style.css';


const BrochureGallery = props => {
    const {images} = props;
    const [photoIndex, setIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const openGallery = (e, index) => {
        e.preventDefault();
        setIndex(index);
        setOpen(true);
        setTimeout(()=>{if (index === 0) {
            hidePrevButton('add');
        } else if (index === images.length - 1) {
            hideNextButton('add')
        }}, 100)
    }
    const movePrev = () => {
        hideNextButton();
        if (photoIndex === 0) {
            hidePrevButton('add');
        } else {
            setIndex((photoIndex + images.length - 1) % images.length)
            photoIndex-1 === 0 && hidePrevButton('add');
        }
    }

    const moveNext = () => {
        hidePrevButton();
        if (photoIndex !== (images.length - 1)) {
            setIndex((photoIndex + 1) % images.length)
        }
        photoIndex + 1 === (images.length - 1) && hideNextButton('add')
    }
    return (
        <section className="pro-equipment-section mt-5">
            <div className="container pl-0 pr-0 portfolio">
                <div className="row">
                    {images.map((item, index) => <ImageCard key={index} card={item} openGallery={openGallery}/>)}
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex].link}
                    nextSrc={images[(photoIndex + 1) % images.length].link}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setOpen(false)}
                    onMovePrevRequest={movePrev}
                    onMoveNextRequest={moveNext}
                    enableZoom={false}
                />
            )}
        </section>
    );
}

export default BrochureGallery;
