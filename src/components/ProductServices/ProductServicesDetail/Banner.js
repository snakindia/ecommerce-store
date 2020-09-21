import React from 'react';
import ProducstServiceContactForm from './ProducstServiceContactForm';

const Banner = ({ content }) => {
  return (
        <section class="hero-header" style={{"background": "none"}}>
            <img src={content.banner_image} alt="..." class="img-fluid banner-img-100"/>
            <div class="pagewrap" style={{"position": "absolute", "top":"35%"}}>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-8 col-md-8 pt-5 pl-0" style={{"position": "relative"}}>

                            <img src={content.banner_image} alt="..." class="img-object" />
                            <div style={{"position": "absolute", "top":"25%", "right":"30px", "width": "250px"}} >
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
