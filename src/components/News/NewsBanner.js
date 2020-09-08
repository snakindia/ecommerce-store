import React from 'react';
import img from '../../assets/images/1 (4).jpg';

const NewsBanner = () => {
  return (
        <section class="news-events-banner" style={{"border-bottom": "1px solid #ddd"}} >
            <div class="news-events-inner">
                <div id="news-carousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner animatedParent" role="listbox">
                        <div class="carousel-item active"> 
                            <div class="caption-right">
                                <div class="caption-inner">
                                    <div class="animated bounceInRight">
                                        <h4 class="pt-3">Lorem Ipsum Dollar</h4>
                                        <h1 class="bha-inner-heading">Lorem ipsum dollar site amnt</h1>
                                        <h6 class="text-size-medium mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</h6>
                                    </div>
                                  <a href="news.html" class="btn btn bha-btn-primary animated bounceInRight">Read More<i class="fa fa-long-arrow-right pl-3"></i></a>
                                </div>
                            </div>
                            <img class="img-fluid" src={img} alt="responsive image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default NewsBanner;

