import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {dateConversion} from './../../common/Util';
import Clients from './../../Clients';
import PremiumBrands from './../../Shop/PremiumBrands';
import baghouse1 from '../../../assets/images/baghouse1.png';
import Goyen from '../../../assets/images/Goyen-Original.jpg';
import shipping2 from '../../../assets/images/free-shipping2.png';
import badge from '../../../assets/images/badge-28.png';
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
        console.log('details')
        console.log(details)
    return (
            <div>
             {
        details && (
    <div>
      
    <section class="news-events-banner" style={{'border-bottom': '1px solid #ddd'}}>
        <div class="news-events-inner">
            <div id="" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" role="listbox" style={{'height': '500px'}}>
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
                    <div class="col-sm-7 col-md-7">
                        <div style={{width:'650px', height:'350px', overflow:'hidden'}}>
                            <img class="img-fluid" src={details.contents[0].url} alt="responsive image" />
                        </div>
                    </div>
                     <div class="col-sm-5 col-md-5">
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
  <div class="bg-opeque">
    <div class="container-fluid pt-4 pb-4">
      <h2 class="bha_heading_2 z-index text-blue">How Best We Are</h2>
    </div>
  </div>
 
  <div class="table-responsive">
    <article class="course-pricing-table">
    <ul class="course-pricing-table">
      <li class="bg-green course-pricing-table">
        <button>Cycles</button>
      </li>
      <li class="bg-green course-pricing-table">
        <button>Max PSI</button>
      </li>
      <li class="bg-green course-pricing-table active">
        <button>Price</button>
      </li>
      <li class="bg-green course-pricing-table">
        <button>Rating</button>
      </li>
      <li class="bg-green course-pricing-table">
        <button>Contact</button>
      </li>
      <li class="bg-green course-pricing-table">
        <button>Satisfaction Guarantee</button>
      </li>
      <li class="bg-green course-pricing-table">
        <button>Lead Time</button>
      </li>
    </ul>  

    <table class="course-pricing-table shadow bottom">
      <thead class="course-pricing-table">
        <tr class="course-pricing-table">
          <th class="hide course-pricing-table"></th>
          <th class="hide course-pricing-table"></th>
          <th class="bg-green course-pricing-table">Cycles</th>
          <th class="bg-green course-pricing-table">Max PSI</th>
          <th class="bg-green course-pricing-table default">Price</th>
          <th class="bg-green course-pricing-table ">Rating</th>
          <th class="bg-green course-pricing-table">Contact</th>
          <th class="bg-green course-pricing-table">Satisfaction Guarantee</th>
          <th class="bg-green course-pricing-table">Lead Time</th>
        </tr>
      </thead>
      <tbody class="course-pricing-table">
          <tr class="course-pricing-table bg-gray">
          <td class="course-pricing-table">&nbsp;</td>
          <td class="course-pricing-table head-blue">
            <span>Valves & Repair Kits</span><div>Others</div>
          </td>
          <td class="course-pricing-table">500K</td>
          <td class="course-pricing-table">80K</td>
          <td class="course-pricing-table default">$</td>
          <td class="course-pricing-table">
            <div class="star-rating mt-3">
              <ul class="list-inline">
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
              </ul>
            </div>
          </td>
          <td class="course-pricing-table">Not Available</td>
          <td class="course-pricing-table">No Returns</td>
          <td class="course-pricing-table">17 days</td>
        </tr>
        <tr class="bg-orange-light">
          <td class="course-pricing-table bg-white">
            <div class="corner-tag">
              <div class="corner"><span>Best<br/>Value</span></div>
            </div>
            <img src={baghouse1} alt="..." class="img-fluid" />
          </td>
          <td class="course-pricing-table head-orange">
            <span>Valves & Repair Kits</span>
            <div>baghouse america</div>
          </td>
          <td class="course-pricing-table">2 Million</td>
          <td class="course-pricing-table">110</td>
          <td class="course-pricing-table default">$$</td>
          <td class="course-pricing-table">
            <div class="star-rating mt-3">
              <ul class="list-inline">
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
              </ul>
            </div>
          </td>
          <td class="course-pricing-table">Order Online or Call for Pricing</td>
          <td class="course-pricing-table">Yes</td>
          <td class="course-pricing-table">In Stock</td>
        </tr>
        <tr class="course-pricing-table bg-white">
          <td class="course-pricing-table bg-white">
            <img src={Goyen} alt="..." class="img-fluid" />
          </td>
          <td class="course-pricing-table head-red">
            <span>Valves & Repair Kits</span><div>goyens</div>
          </td>
          <td class="course-pricing-table">2 Million</td>
          <td class="course-pricing-table">115</td>
          <td class="course-pricing-table default">$$$</td>
          <td class="course-pricing-table">
            <div class="star-rating mt-3">
              <ul class="list-inline">
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
              </ul>
            </div>
          </td>
          <td class="course-pricing-table">Call for Pricing</td>
          <td class="course-pricing-table">Re-Stocking Fee</td>
          <td class="course-pricing-table">In Stock</td>
        </tr>
      </tbody>
    </table>
  </article>
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
                            <ul class="call-to-action-link">
                               {ReactHtmlParser(details.contents[2].description)}
                            </ul>
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
