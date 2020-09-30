import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Banner from './Banner';
import Certificates from './Certificates';
import Resources from './Resources';
import {dateConversion} from './../../common/Util';
import Clients from './../../Clients/ProductServicesClients';
import PremiumBrands from './../../Shop/ProductServicesPremiumBrands';
import baghouse1 from '../../../assets/images/baghouse1.png';
import Goyen from '../../../assets/images/Goyen-Original.jpg';
import shipping2 from '../../../assets/images/free-shipping2.png';
import badge from '../../../assets/images/badge-28.png';
import Best from '../../../assets/images/832c6ba1-best-icon.png';
import './../../../assets/css/bha-landing.css';
import { fetchProdcutServiceDetail } from './../productservice.actions';
import ReactHtmlParser from 'react-html-parser';

class ProductServicesDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            pageType: 'News',
            size: 4,
            filterBy: 'Default',
        };
  }
    
    componentDidMount() {
        let url = this.props.location.pathname;
        const { actions } = this.props;
        if (url != '') {
//            const slug = url.replace(/\\|\//g,'');
            if (url[0] == '/') {
                url = url.slice(1, url.length)
            }
            actions.fetchProdcutServiceDetail(url);
        }
    }
  
    render() {
        
    const details = this.props.data;
    return (
        <div>
        {
        details && (
               
            <div>
                <section class="breadcrumb-container" style={{"position": "relative", "z-index": "1000"}} >
                    <div class="container-fluid">
                        <div class="row justify-content-center">
                            <ol class="breadcrumb breadcrumb-bar pb-0 pt-1 small">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Product/Services</a></li>
                                <li class="breadcrumb-item active">{details.meta_title}</li>
                            </ol>
                        </div>
                    </div>
                </section>
                <Banner content={details} />
                <Certificates is_certified={details.is_certified}/>
    
                {
                details.contents && Object.keys(details.contents).length > 0 ?  
                    <section class="efficiency-section" style={{"position":"relative"}}>
                    <div class="imgB_color"></div>
                        <div class="pagewrap">
                            <div class="container-fluid" style={{"overflow-x": "hidden"}}>
                              <div class="row">
                                <div class="col-sm-6 col-md-6 pl-0 animatedParent">
                                  <h1 class="bag_jai_head text-left text-black pl-0 pr-5 animated bounceInDown">{details.contents[0].title}</h1>
                                  <div class="imgL-container">
                                    <div class="inner-wrap">
                                      <img class="iMg_pos animated bounceInLeft mt-3" data-id="1" src={details.contents[0].url} alt=""/>
                                      
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-6 animatedParent contentDescript">
                                {ReactHtmlParser(details.contents[0].description)}
                                  <div class="mt-4 mb-5">
                                    <div class="actionButton w-50">
                                      <a href="tel:+1-888-286-8708">Call for a free quote</a>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </section> : ''
                }
                    {details.resources && Object.keys(details.resources).length > 0 && details.resources[0].title != '||DB||' ?
                        <Resources content={details} /> : ''
                    }
                    
                {
                details.contents && Object.keys(details.contents).length > 1 ?  
                    <section class="bag_Jail_Section">
                        <div class="pagewrap">
                            <div class="container-fluid pl-0 pr-0">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <h1 class="bag_jai_head font-xl text-white">{details.contents[1].title}</h1>
                                    </div>
                                    <div class="col-sm-6 col-md-6 ">
                                        <div class="jail_Content_Descrpt">{ReactHtmlParser(details.contents[1].description)}</div>
                                    </div>
                                    <div class="col-sm-6 col-md-6 text-left pt-5 pr-4 pl-3">
                                        <img src={details.contents[1].url} alt="..." class="img-fluid" />
                                    </div>
                                  </div>
                            </div>
                        </div>
                    </section> : ''
                }

                <Clients />
                <PremiumBrands />
  
            </div>
         )}
        </div>
    );
  }
}

const mapStateToProps = ({ productService }) => ({
    data: productService[0]
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
    {
       fetchProdcutServiceDetail
    },
    dispatch
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductServicesDetail);
