import React from 'react';
import SliderItem from "./SliderItem";
import Slider from 'react-slick';

const ProductSlider = props => {
    const { sliderItems } = props;
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        // autoplay: true,
        // autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    };

    return (
        <section className="pro-equipment-section mt-5">

                    <Slider {...settings}>
                        {
                          sliderItems.map(item => {
                              return <SliderItem item={item}/>
                          })
                        }
                    </Slider>

        </section>
    );
}

export default ProductSlider;
