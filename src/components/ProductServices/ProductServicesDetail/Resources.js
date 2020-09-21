import React from 'react';
import LadyImg from '../../../assets/images/lady-img.png';

const Resources = ({ content }) => {
    return (
        <section class="baghouseFilter-section">
            <div class="bg-opeque" id="company">
                <div class="container-fluid">
                    <h2 class="bha_heading_2 z-index text-blue pb-3">{content.meta_title}</h2>
                </div>
            </div>

            <div class="pagewrap">
                <div style={{"float": "left", "width": "100%"}} >
                    <div class="container-fluid pl-0 pr-0 pb-4 product-xs-item">
                        <div class="row">
                        {content.resources &&
                            Object.keys(content.resources).length &&
                            content.resources.map((item, idx) => {
                            let spliTitle = item.title.split('||');
                            return (
                                <div class="col-sm-6 col-md-6 col-lg-4 mb-4">
                                    <div class="hot-deals-item-wrapper imgwrap" style={{"height": "450px !important"}}>
                                        <div class="item-pro-inner p-0">
                                            <div class="filter-description text-center">
                                                <h6 class="font-weight-bold text-uppercase">{spliTitle[0]}</h6>
                                                <p class="text-muted">{spliTitle[1]}</p>
                                            </div>
                                            <img class="filterImg" src={item.url} alt="" />
                                        </div>
                                    </div>
                                </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default React.memo(Resources);
