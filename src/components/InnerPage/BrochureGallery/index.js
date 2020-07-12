import React from 'react';
import ImageCard from "./ImageCard";

const BrochureGallery = props => {
    const { images } = props
        return (
            <section className="pro-equipment-section mt-5">
                <div className="container pl-0 pr-0 portfolio">
                    <div className="row">
                        {
                            images.map(item => {
                             return <ImageCard card={item} />
                            })
                        }

                    </div>
                </div>
            </section>
        );
}

export default BrochureGallery ;
