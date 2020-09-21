import React from 'react';
import ContactForm from '../../common/ContactForm';

const Banner = ({ content }) => {
  return (
        <section class="hero-header" style={{"background": "none"}}>
            <img src={content.banner_image} alt="..." class="img-fluid banner-img-100"/>
            <div class="pagewrap" style={{"position": "absolute", "top":"35%"}}>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-8 col-md-8 pt-5 pl-0" style={{"position": "relative"}}>
                            
                            <div style={{"position": "absolute", "top":"5%", "right":"30px", "width": "250px"}}>
                            <div class="type1">GET UP TO</div><div class="type2"> 60% OFF</div> 
                            <div class="type3">TODAY!</div>
                            </div>
                        </div>
                        <div class="col-sm-5 col-md-4 pr-0">
                            <div class="freequote-container">
                                <div class="actionButton">
                                    <a href="#">Download Full Brochure</a>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default React.memo(Banner);
