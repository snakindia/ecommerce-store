import React from 'react';
import htmlParse from 'html-react-parser';

const NewsBanner = (bannerDetails) => {
  return (
        <section className="news-events-banner" style={{"border-bottom": "1px solid #ddd"}} >
            <div className="news-events-inner">
                <div id="news-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner animatedParent" role="listbox">
                        <div className="carousel-item active"> 
                            <div className="caption-right">
                                <div className="caption-inner">
                                    <div className="animated bounceInRight">
                                        <h1 className="pt-3 bha_heading_2 text-white">{bannerDetails.bannerDetails.title}</h1>
                                        <h6 className="text-size-medium mt-3">{htmlParse(bannerDetails.bannerDetails.content)}</h6>
                                    </div>
                                    {
                                    bannerDetails.bannerDetails.type == 'News' ?  <a href={'newsdetail/' + bannerDetails.bannerDetails.slug} className="btn btn bha-btn-primary animated bounceInRight">Read More<i className="fa fa-long-arrow-right pl-3"></i></a>: 
                                             <a href={'eventdetail/' + bannerDetails.bannerDetails.slug} className="btn btn bha-btn-primary animated bounceInRight">Read More<i className="fa fa-long-arrow-right pl-3"></i></a>
                                    }
                                 
                                </div>
                            </div>
                            <img className="img-fluid" src={bannerDetails.bannerDetails.image} alt="responsive image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default NewsBanner;

