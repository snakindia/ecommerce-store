import React from 'react';
import ContactForm from '../../common/ContactForm';

const Banner = ({ content }) => {
  return (
        <section class="hero-header" style={{"float":"left", "width": "100%", "padding-top": "150px"}}>
            <div class="pagewrap">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-8 col-md-8 pt-5 pl-0" style={{"position": "relative"}}>
                            <img src={content.banner_image} alt="..." class="img-object" />
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
