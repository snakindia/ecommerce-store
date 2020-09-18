import React from 'react';
import htmlParse from 'html-react-parser';

const NewsBanner = (bannerDetails) => {
  return (
        <section class="news-events-banner" style={{"border-bottom": "1px solid #ddd"}} >
            <div class="news-events-inner">
                <div id="news-carousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner animatedParent" role="listbox">
                        <div class="carousel-item active"> 
                            <div class="caption-right">
                                <div class="caption-inner">
                                    <div class="animated bounceInRight">
                                        <h1 class="pt-3 bha_heading_2 text-white">{bannerDetails.bannerDetails.title}</h1>
                                        <h6 class="text-size-medium mt-3">{htmlParse(bannerDetails.bannerDetails.content)}</h6>
                                    </div>
                                    {
                                    bannerDetails.bannerDetails.type == 'News' ?  <a href={'newsdetail/' + bannerDetails.bannerDetails.slug} class="btn btn bha-btn-primary animated bounceInRight">Read More<i class="fa fa-long-arrow-right pl-3"></i></a>: 
                                             <a href={'eventdetail/' + bannerDetails.bannerDetails.slug} class="btn btn bha-btn-primary animated bounceInRight">Read More<i class="fa fa-long-arrow-right pl-3"></i></a>
                                    }
                                 
                                </div>
                            </div>
                            <img class="img-fluid" src={bannerDetails.bannerDetails.image} alt="responsive image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default NewsBanner;

