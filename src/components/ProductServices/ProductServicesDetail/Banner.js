import React from 'react';
import ProducstServiceContactForm from './ProducstServiceContactForm';

const Banner = ({ content,cat_id, cat_name }) => {
    let pdf_url = '';
    return (
        <section className="hero-header" style={{"background": "none"}}>
            <img src={content.banner_image} alt="..." className="img-fluid banner-img-100"/>
            <div className="pagewrap" style={{"position": "absolute", "top":"30%"}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8 col-md-8 pt-5 pl-0" style={{"position": "relative"}}>
                            <div className="innerPageform">
                                <div className="type1">{content.banner_title}</div>
                            </div>
                        </div>
                        {
                            content.resources && Object.keys(content.resources).length > 0 &&
                            content.resources.map((item, idx) => {
                            if (item.title == '||DB||') {
                                pdf_url = item.url;
                            }
                        })}
                        
                        {
                            pdf_url != '' ? 
                            <ProducstServiceContactForm 
                            cat_id={cat_id} cat_name={cat_name}
                             /> : 
                             <ProducstServiceContactForm 
                             
                              cat_id={cat_id} cat_name={cat_name}
                               />
                        }
                            
                        
                        
                    </div>
                </div>
            </div>
        </section>
  );
};

export default React.memo(Banner);
