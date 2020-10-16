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
      
    <section className="" style={{'border-bottom': '1px solid #ddd', 'margin-top': '7.5rem'}}>
        <div className="">
            <div id="" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox" style={{'height': '540px'}}>
                    <div className="carousel-item active"> 
                        <div className="landing-caption">

                          <div className="landing-caption-inner">
                           <h1 className="bha_heading_2 text-white">{details.banner_title}</h1>
                           <h6 className="text-size-medium mt-3 text-white">{ReactHtmlParser(details.banner_desc)}</h6>
                          </div>

                        </div>

                        <img className="img-fluid" src={details.banner_image} alt="responsive image" />
                        {details.resources && Object.keys(details.resources).length > 0 &&
                            <div className="quick-link-container pattern pattern1" >
                                <div className="inner-link">
                                    <h2 className="pb-2">Quick Links</h2> {
                                            details.resources.map((item, idx) => {
                                                return (
                                                    <a href={item.image} target="_blank" className="quick-link-btn">
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
        <section className="promo-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-6 justify-content-center"> 
                      <img className="img-fluid promo-graphic" src={details.contents[0].url} alt="responsive image" />
                    </div>
                     <div className="col-sm-6 col-md-6 justify-content-center">
                        <div className="bags-promo-caption">
                            <h2 className="promo-heading">
                                {details.contents[0].title}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section> : ''
    }
    <section className="how-best-container">
        <div className="text-center">
            <div className="container-fluid pt-5">
                <h2 className="bha_heading_2 z-index text-blue">{details.contents[1].title}</h2>
            </div>
        </div>
  
        <div className="pagewrap">
          <div className="text-center">
            <div className="container content-padding">
              <div className="row align-items-center card-gutter">
                <div className="col-lg-4">
                  <div className="card-1 mx-auto mt-2 border-blue">
                    <div className="card-body p-0 pt-3 pb-3">
                      <img src={Goyen} className="card-img-fit fade" alt="..." />
                      <h3 className="card-name">Valves & Repair Kits</h3>
                      <h2 className="text-uppercase font-weight-bold mb-4 text-blue">Others</h2>
                      <ul className="list-unstyled">
                        <li className="card-list-item">Cycles:<span className="font-weight-bold ml-3">500K</span></li>
                        <li className="card-list-item">Max PSI:<span className="font-weight-bold ml-3">80</span></li>
                        <li className="card-list-item">Price: <span className="font-weight-bold ml-3">$</span></li> 
                        <li className="card-list-item">
                          <div className="star-rating">
                            <ul className="list-inline">
                              <span className="mr-3 ml-0 pl-0">Rating:</span>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            </ul>
                          </div>
                        </li>
                        <li className="card-list-item">Contact:<span className="font-weight-bold ml-3">Not Available</span></li>
                        <li className="card-list-item">Satisfaction Guarantee:
                          <span className="font-weight-bold ml-3">No Returns</span></li>
                        <li className="card-list-item">Lead Time:<span className="font-weight-bold ml-3">17 days</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card-2 mx-auto border-red" style={{"margin-bottom": "2.2rem"}}>
                    <img src={Best} className="sticker" alt="..." />
                    <div className="card-body p-0 pb-3 pt-2">
                      <img src={baghouse1} className="card-img-fit" alt="..." />
                      <h3 className="card-name">Valves & Repair Kits</h3>
                      <h2 className="text-uppercase font-weight-bold mb-4 text-blue">Baghouse America</h2>
                      <ul className="list-unstyled">
                        <li className="card-list-item">Cycles: <span className="font-weight-bold ml-3">2 Million</span></li>
                        <li className="card-list-item">Max PSI: <span className="font-weight-bold ml-3">125</span></li>
                        <li className="card-list-item">Price: <span className="font-weight-bold ml-3">$$</span></li>
                        <li className="card-list-item">
                          <div className="star-rating">
                            <ul className="list-inline">
                              <span className="mr-3 ml-0 pl-0">Rating:</span>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            </ul>
                          </div>
                        </li>
                        <li className="card-list-item">Contact: <span className="font-weight-bold ml-3">Order Online or Call for Pricing</span></li>
                        <li className="card-list-item">Satisfaction Guarantee: <span className="font-weight-bold ml-3">Yes</span></li>
                        <li className="card-list-item">Lead Time: <span className="font-weight-bold ml-3">In Stock</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card-3 mx-auto border-blue mt-2">
                    <div className="card-body p-0 pt-3 pb-3">
                      <img src={Goyen} className="card-img-fit" alt="..." />
                      <h3 className="card-name">Valves & Repair Kits</h3>
                      <h2 className="text-uppercase font-weight-bold mb-4 text-blue">Goyen</h2>
                      <ul className="list-unstyled">
                        <li className="card-list-item">Cycles: <span className="font-weight-bold ml-3">2 Million</span></li>
                        <li className="card-list-item">Max PSI: <span className="font-weight-bold ml-3">125</span></li>
                        <li className="card-list-item">Price: <span className="font-weight-bold ml-3">$$$$</span></li>
                        <li className="card-list-item">

                          <div className="star-rating">
                            <ul className="list-inline">
                              <span className="mr-3 ml-0 pl-0">Rating:</span>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            </ul>
                          </div>
                        </li>
                         <li className="card-list-item">Contact: <span className="font-weight-bold ml-3">Call 888-405-1143 for Pricing</span></li>
                        <li className="card-list-item">Satisfaction Guarantee: <span className="font-weight-bold ml-3">Re-Stocking Fee</span></li>
                        <li className="card-list-item">Lead Time: <span className="font-weight-bold ml-3">In Stock</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
  
  
        <div className="certificate-container">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-md-4 text-center">
                        <img src={shipping2} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-sm-4 col-md-4 text-center">
                        <img src={badge} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-sm-4 col-md-4 text-center">
                        <img src={badge} className="img-fluid" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    </section>

    {
    details.contents && Object.keys(details.contents).length == 3 ?  
        <section className="call-for-acton">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-7 col-md-7">
                        <div className="call-for-action-container">
                            <h2 className="promo-heading">
                                {details.contents[2].title}
                            </h2>
                            {ReactHtmlParser(details.contents[2].description)}
                            <a href="" className="free-quote">{details.contents[2].title}</a>
                        </div>
                    </div>
                    <div className="col-sm-5 col-md-5 pr-5">
                        <img src={details.contents[2].url} alt="..." className="img-fluid" />
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
