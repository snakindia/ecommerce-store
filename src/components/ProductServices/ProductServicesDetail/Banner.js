import React from 'react';
import ProducstServiceContactForm from './ProducstServiceContactForm';

const Banner = ({ content }) => {
    let pdf_url = '';
    return (
        <section class="hero-header" style={{"background": "none"}}>
            <img src={content.banner_image} alt="..." class="img-fluid banner-img-100"/>
            <div class="pagewrap" style={{"position": "absolute", "top":"30%"}}>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-8 col-md-8 pt-5 pl-0" style={{"position": "relative"}}>
                            <div class="innerPageform">
                                <div class="type1">{content.banner_title}</div>
                            </div>
                        </div>
                        {
                            content.resources && Object.keys(content.resources).length > 0 && content.resources[0].title == '||DB||'  &&
                            content.resources.map((item, idx) => {
                            if (item.title == '||DB||') {
                                pdf_url = item.url;
                            }
                        })}
                        
                        {
                            pdf_url != '' ? <ProducstServiceContactForm pdf_url={content.resources[0].url} /> : <ProducstServiceContactForm />
                        }
                            
                        
                        
                    </div>
                </div>
            </div>
        </section>
  );
};

export default React.memo(Banner);
