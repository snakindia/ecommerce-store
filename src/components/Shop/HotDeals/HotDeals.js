import React, { useCallback, useState } from 'react';
import Slider from 'react-slick';
import { deals } from './hotdeals.dummy';
import DealCard from './DealCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import QuickViewDeal from './QuickViewDeal';

const HotDeals = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    // autoplay: true,
    // autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [selectedDeal, setDeal] = useState(null);
  const openQuickDeal = useCallback(
    deal => {
      setDeal(deal);
    },
    [selectedDeal]
  );
  return (
    <>
      <section className="bg-opeque">
        <div className="container-fluid">
          <h2 className="bha_heading_2 z-index text-blue mb-4">
            Our Hot Deals
          </h2>
        </div>
      </section>
      <section className="pro-equipment-section box-shadow">
        <div className="container-fluid pl-0 pr-0 portfolio-item">
          <Slider
            {...settings}
            className="productitem-auto slider slick-dotted"
          >
            {deals.map(item => (
              <DealCard dealData={item} openQuickDeal={openQuickDeal} />
            ))}
          </Slider>
        </div>
        <QuickViewDeal dealDetail={selectedDeal} closeModal={openQuickDeal} />
      </section>
    </>
  );
};

export default HotDeals;
