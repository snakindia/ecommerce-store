import React from 'react';
import LadyImg from '../../../assets/images/lady-img.png';

const Resources = ({ content }) => {
    return (
        <section className="baghouseFilter-section">
            <div className="bg-opeque" id="company">
                <div className="container-fluid">
                    <h2 className="bha_heading_2 z-index text-blue pb-3">{content.meta_title}</h2>
                </div>
            </div>

            <div className="pagewrap">
                <div style={{"float": "left", "width": "100%"}} >
                    <div className="container-fluid pl-0 pr-0 pb-4 product-xs-item">
                        <div className="row">
                        {content.resources &&
                            Object.keys(content.resources).length &&
                            content.resources.map((item, idx) => {
                            if (item.title != '||DB||') {
                                let spliTitle = item.title.split('||');
                                return (
                                    <div className="col-sm-6 col-md-6 col-lg-3 mb-4">
                                        <div className="hot-deals-item-wrapper imgwrap" style={{"height": "450px !important"}}>
                                            <div className="item-pro-inner p-0">
                                                <div className="filter-description text-center">
                                                    <h6 className="font-weight-bold text-uppercase">{spliTitle[0]}</h6>
                                                    <p className="text-muted">{spliTitle[1]}</p>
                                                </div>
                                                <img className="filterImg" src={item.url} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default React.memo(Resources);
