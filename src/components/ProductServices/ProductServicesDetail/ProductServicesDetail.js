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
import { save_brochures_details } from '../../../actions/freeBrochuresActions';
import { showToast } from '../../Notification/notification.actions';
import RequestAQuote from './Quote';
class ProductServicesDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            pageType: 'News',
            size: 4,
            filterBy: 'Default',
            brochureVisible:false,
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
            this.props.fetchProdcutServiceDetail(url);
        }
    }
  
    showBrochure=(e)=>{
        e.preventDefault()
        this.setState({brochureVisible:true})
    }

    toggleQuoteModal = () => {
        const { brochureVisible } = this.state;
        this.setState({ brochureVisible: !brochureVisible });
    };
    render() {
        
    const details = this.props.data;
    const { subMenuData} = this.props;
    let cat_id ='';
    let cat_name = '';
    let slug = this.props.data ? this.props.data.slug :'';
    if (subMenuData && Object.keys(subMenuData).length > 0) {
      for (const key of Object.keys(subMenuData)) {
        if (subMenuData[key] && subMenuData[key][0] && subMenuData[key][0].items && subMenuData[key][0].items.length > 0) {
          subMenuData[key][0].items.map(item => {

            if (item.page_url == slug) {
              cat_id = item._id;
              cat_name = item.name;
              
            }
          })
        }
      }
    }
    return (
        <div>
        {
        details && (
               
            <div>
                <section className="breadcrumb-container" style={{"position": "relative", "z-index": "1000"}} >
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <ol className="breadcrumb breadcrumb-bar pb-0 pt-1 small">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Product/Services</a></li>
                                <li className="breadcrumb-item active">{details.meta_title}</li>
                            </ol>
                        </div>
                    </div>
                </section>
                <Banner content={details} cat_id={cat_id} cat_name={cat_name}/>
                 {
                details.contents && Object.keys(details.contents).length > 0 ?  
                <Certificates data={details} /> : ''
                }
    
                {
                details.contents && Object.keys(details.contents).length > 0 ?  
                    <section className="efficiency-section" style={{"position":"relative"}}>
                    <div className="imgB_color"></div>
                        <div className="pagewrap">
                            <div className="container-fluid" style={{"overflow-x": "hidden"}}>
                              <div className="row">
                                <div className="col-sm-6 col-md-6 pl-0 animatedParent">
                                  <h1 className="bag_jai_head text-left text-black pl-0 pr-5 animated bounceInDown">{details.contents[0].title}</h1>
                                  <div className="imgL-container">
                                    <div className="inner-wrap">
                                      <img className="iMg_pos animated bounceInLeft mt-3" data-id="1" src={details.contents[0].url} alt=""/>
                                      
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-6 animatedParent contentDescript">
                                {ReactHtmlParser(details.contents[0].description)}
                                  <div class="mt-4 mb-5">
                                    <div class="actionButton w-50">
                                      <a style={{color:'#fff'}} onClick={this.showBrochure}>Download Brochure</a>

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
                    <section className="bag_Jail_Section">
                        <div className="pagewrap">
                            <div className="container-fluid pl-0 pr-0">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h1 className="bag_jai_head font-xl text-white">{details.contents[1].title}</h1>
                                    </div>
                                    <div className="col-sm-6 col-md-6 ">
                                        <div className="jail_Content_Descrpt">{ReactHtmlParser(details.contents[1].description)}</div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 text-left pt-5 pr-4 pl-3">
                                        <img src={details.contents[1].url} alt="..." className="img-fluid" />
                                    </div>
                                  </div>
                            </div>
                        </div>
                    </section> : ''
                }

                <Clients />
                <PremiumBrands />
                <RequestAQuote
            toggleModal={this.toggleQuoteModal}
            isOpen={this.state.brochureVisible}
            cat_id={cat_id} cat_name={cat_name}
            onSubmit={this.props.save_brochures_details}
            showToast={this.props.showToast}
          />
            </div>
         )}
        </div>
    );
  }
}

const mapStateToProps = ({ productService,asyncReducer }) => ({
    data: productService[0],
    subMenuData: asyncReducer.subMenuData,
});

const mapDispatchToProps = {
    save_brochures_details,
    showToast,
    fetchProdcutServiceDetail
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductServicesDetail);
