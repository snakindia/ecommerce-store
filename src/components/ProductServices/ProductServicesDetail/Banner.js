import React from 'react';
import ProducstServiceContactForm from './ProducstServiceContactForm';

const Banner = ({ content }) => {
  return (
        <section class="hero-header" style={{"background": "none"}}>
            <img src={content.banner_image} alt="..." class="img-fluid banner-img-100"/>
            <div class="pagewrap" style={{"position": "absolute", "top":"30%"}}>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-8 col-md-8 pt-5 pl-0" style={{"position": "relative"}}>
                            <div style={{"position": "absolute", "top":"120%", "right":"2px", "width": "320px"}} >
                                <div class="type1">{content.banner_title}</div>
                            </div>
                        </div>
                        <ProducstServiceContactForm />
                    </div>
                </div>
            </div>
        </section>
  );
};

export default React.memo(Banner);
