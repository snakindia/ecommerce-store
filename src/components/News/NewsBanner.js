import React from 'react';
import img from '../../assets/images/1 (4).jpg';

const NewsBanner = () => {
  return (
    <section className="news-events-banner">
      <div className="news-events-inner">
        <div id="news-carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner animatedParent" role="listbox">
            <div className="carousel-item active">
              <div className="caption-right">
                <div className="caption-inner">
                  <div className="animated bounceInRight go">
                    <h4 className="pt-3">Lorem Ipsum Dollar</h4>
                    <h1 className="bha-inner-heading">
                      Lorem ipsum dollar site amnt
                    </h1>
                    <h6 className="text-size-medium mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </h6>
                  </div>
                  <a
                    href="news.html"
                    className="btn btn bha-btn-primary animated bounceInRight go"
                  >
                    Read More
                    <i className="fa fa-long-arrow-right pl-3" />
                  </a>
                </div>
              </div>
              <img className="img-fluid" src={img} alt="responsive image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsBanner;

