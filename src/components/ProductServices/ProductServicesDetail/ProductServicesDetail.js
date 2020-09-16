import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
            const slug = url.replace(/\\|\//g,'');
            actions.fetchProdcutServiceDetail(slug);
        }
    }
  
    render() {
        
        const details = this.props.data;
    return (
            <div>
             {
        details && (
    <div>
      
    <section class="news-events-banner" style={{'border-bottom': '1px solid #ddd', 'margin-top': '7.5rem'}}>
        <div class="news-events-inner">
            <div id="" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" role="listbox" style={{'height': '540px'}}>
                    <div class="carousel-item active"> 
                        <div class="landing-caption">

                          <div class="landing-caption-inner">
                           <h1 class="bha_heading_2 text-white">{details.banner_title}</h1>
                           {ReactHtmlParser(details.content)}
                          </div>

                        </div>

                        <img class="img-fluid" src={details.banner_image} alt="responsive image" />
                        {details.resources && Object.keys(details.resources).length > 0 &&
                            <div class="quick-link-container pattern pattern1" >
                                <div class="inner-link">
                                    <h2 class="pb-2">Quick Links</h2> {
                                            details.resources.map((item, idx) => {
                                                return (
                                                    <a href={item.image} target="_blank" class="quick-link-btn">
                                                    <span>{item.title}</span></a>
                                                )
                                            })
                                        }
                                </div>
                            </div>
                          }

                    </div>
                </div>
            </div>
        </div>
    </section>
    {
        details.contents && Object.keys(details.contents).length > 0 ?  
        <section class="promo-container">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6 col-md-6"> 
                      <img class="img-fluid" src={details.contents[0].url} alt="responsive image" />
                    </div>
                     <div class="col-sm-6 col-md-6 justify-content-center">
                        <div class="promo-caption">
                            <h2 class="promo-heading">
                                {details.contents[0].title}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section> : ''
    }
    <section class="how-best-container">
        <div class="text-center">
            <div class="container-fluid pt-5">
                <h2 class="bha_heading_2 z-index text-blue">{details.contents[1].title}</h2>
            </div>
        </div>
  
        <div class="pagewrap">
          <div class="text-center">
            <div class="container content-padding">
              <div class="row align-items-center card-gutter">
                <div class="col-lg-4">
                  <div class="card-1 mx-auto mt-2 border-blue">
                    <div class="card-body p-0 pt-3 pb-3">
                      <img src={Goyen} class="card-img-fit fade" alt="..." />
                      <h3 class="card-name">Valves & Repair Kits</h3>
                      <h2 class="text-uppercase font-weight-bold mb-4 text-blue">Others</h2>
                      <ul class="list-unstyled">
                        <li class="card-list-item">Cycles:<span class="font-weight-bold ml-3">500K</span></li>
                        <li class="card-list-item">Max PSI:<span class="font-weight-bold ml-3">80</span></li>
                        <li class="card-list-item">Price: <span class="font-weight-bold ml-3">$</span></li> 
                        <li class="card-list-item">
                          <div class="star-rating">
                            <ul class="list-inline">
                              <span class="mr-3 ml-0 pl-0">Rating:</span>
                              <li class="list-inline-item"><i class="fa fa-star"></i></li>
                              <li class="list-inline-item"><i class="fa fa-star"></i></li>
                              <li class="list-inline-item"><i class="fa fa-star"></i></li>
                              <li class="list-inline-item"><i class="fa fa-star"></i></li>
                              <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            </ul>
                          </div>
                        </li>
                        <li class="card-list-item">Contact:<span class="font-weight-bold ml-3">Not Available</span></li>
                        <li class="card-list-item">Satisfaction Guarantee:
                          <span class="font-weight-bold ml-3">No Returns</span></li>
                        <li class="card-list-item">Lead Time:<span class="font-weight-bold ml-3">17 days</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="card-2 mx-auto border-red" style={{"margin-bottom": "2.2rem"}}>
                    <img src={Best} class="sticker" alt="..." />
                    <div class="card-body p-0 pb-3 pt-2">
                      <img src={baghouse1} class="card-img-fit" alt="..." />
                      <h3 class="card-name">Valves & Repair Kits</h3>
                      <h2 class="text-uppercase font-weight-bold mb-4 text-blue">Baghouse America</h2>
                      <ul class="list-unstyled">
                        <li class="card-list-item">Cycles: <span class="font-weight-bold ml-3">2 Million</span></li>
                        <li class="card-list-item">Max PSI: <span class="font-weight-bold ml-3">125</span></li>
                        <li class="card-list-item">Price: <span class="font-weight-bold ml-3">$$</span></li>
                        <li class="card-list-item">
                          <div class="star-rating">
                            <ul class="list-inline">
                              <span class="mr-3 ml-0 pl-0">Rating:</span>
                              <li class="list-inline-item"><i class="fa fa-star"></i></li>
                              <li class="list-inline-item"><i class="fa fa-star"></i></li>
                              <li class="list-inline-item"><i class="fa fa-star"></i></li>
                              <li class="list-inline-item"><i class="fa fa-star"></i></li>
                              <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            </ul>
                          </div>
                        </li>
                        <li class="card-list-item">Contact: <span class="font-weight-bold ml-3">Order Online or Call for Pricing</span></li>
                        <li class="card-list-item">Satisfaction Guarantee: <span class="font-weight-bold ml-3">Yes</span></li>
                        <li class="card-list-item">Lead Time: <span class="font-weight-bold ml-3">In Stock</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="card-3 mx-auto border-blue mt-2">
                    <div class="card-body p-0 pt-3 pb-3">
                      <img src={Goyen} class="card-img-fit" alt="..." />
                      <h3 class="card-name">Valves & Repair Kits</h3>
                      <h2 class="text-uppercase font-weight-bold mb-4 text-blue">Goyen</h2>
                      <ul class="list-unstyled">
                        <li class="card-list-item">Cycles: <span class="font-weight-bold ml-3">2 Million</span></li>
                        <li class="card-list-item">Max PSI: <span class="font-weight-bold ml-3">125</span></li>
                        <li class="card-list-item">Price: <span class="font-weight-bold ml-3">$$$$</span></li>
                        <li class="card-list-item">

                          <div class="star-rating">
                            <ul class="list-inline">
                              <span class="mr-3 ml-0 pl-0">Rating:</span>
                              <li class="list-inline-item"><i class="fa fa-star"></i></li>
                              <li class="list-inline-item"><i class="fa fa-star"></i></li>
                              <li class="list-inline-item"><i class="fa fa-star"></i></li>
                              <li class="list-inline-item"><i class="fa fa-star"></i></li>
                              <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            </ul>
                          </div>
                        </li>
                         <li class="card-list-item">Contact: <span class="font-weight-bold ml-3">Call 888-405-1143 for Pricing</span></li>
                        <li class="card-list-item">Satisfaction Guarantee: <span class="font-weight-bold ml-3">Re-Stocking Fee</span></li>
                        <li class="card-list-item">Lead Time: <span class="font-weight-bold ml-3">In Stock</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
  
  
        <div class="certificate-container">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 col-md-4 text-center">
                        <img src={shipping2} class="img-fluid" alt="..." />
                    </div>
                    <div class="col-sm-4 col-md-4 text-center">
                        <img src={badge} class="img-fluid" alt="..." />
                    </div>
                    <div class="col-sm-4 col-md-4 text-center">
                        <img src={badge} class="img-fluid" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    </section>

    {
    details.contents && Object.keys(details.contents).length == 3 ?  
        <section class="call-for-acton">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-7 col-md-7">
                        <div class="call-for-action-container">
                            <h2 class="promo-heading">
                                {details.contents[2].title}
                            </h2>
                            {ReactHtmlParser(details.contents[2].description)}
                            <a href="" class="free-quote">{details.contents[2].title}</a>
                        </div>
                    </div>
                    <div class="col-sm-5 col-md-5 pr-5">
                        <img src={details.contents[2].url} alt="..." class="img-fluid" />
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
