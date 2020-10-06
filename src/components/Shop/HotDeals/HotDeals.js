import React, { useCallback, useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import DealCard from './DealCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import QuickViewDeal from './QuickViewDeal';
import CompareSection from "../../Compare/CompareSection";
import { fetchHotDeals} from './hotDeals.actions';
import { addToCompare, removeFromCompare } from "../../Compare/compare.actions";
import { showToast } from "../../Notification/notification.actions";
import {TOAST_TYPE} from "../../Notification/action.constants";

const HotDeals = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
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

  const dispatch = useDispatch();
  const { hotDeals: deals, fetchingDeals  } = useSelector(
    store => store.hotDeals
  );

  const { comparedDeals, comparedError } = useSelector(
      store => store.compare
  );

  const [selectedDeal, setDeal] = useState(null);
  const [comparedDeal, setComparedDeal] = useState(null);
  const openQuickDeal = useCallback(
    deal => {
      setDeal(deal);
    },
    [selectedDeal]
  );

  const addCompare = useCallback(
      deal => {
       setComparedDeal(deal);
       dispatch(addToCompare(deal))
      },
      [comparedDeal]
  );

  const removeComparedDeal = (id) => {
    dispatch(removeFromCompare(id))
  }

  useEffect(() => {
    dispatch(fetchHotDeals());
  }, [dispatch]);

  if(comparedError && comparedError !== '') {
    dispatch(showToast(comparedError, TOAST_TYPE.ERROR));
  }

  const redirectToComparePage = () => {
    const {history} = props;
history.push('/compare');
  }

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
          {fetchingDeals && <div>Loading ...</div>}
          {!fetchingDeals && !deals.length && <div>No Deals Found</div>}
          <Slider
            {...settings}
            className="productitem-auto slider slick-dotted"
          >
            {deals.map(item => (
              <DealCard
                key={item._id}
                dealData={item}
                openQuickDeal={openQuickDeal}
                addToCompare={addCompare}
                comparedDeals={comparedDeals}
              />
            ))}
          </Slider>
        </div>
        <QuickViewDeal dealDetail={selectedDeal} closeModal={openQuickDeal} />
      </section>
      {
        comparedDeals && comparedDeals.length > 0
        && <CompareSection
          deals={comparedDeals}
          removeComparedDeal={removeComparedDeal}
          redirectToComparePage={redirectToComparePage}
        />
      }
    </>
  );
};

export default withRouter(HotDeals);
