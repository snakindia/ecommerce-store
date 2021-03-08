import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import './../../assets/css/bha-landing.css';
import './../../assets/css/landing-fans.css';
import './../../assets/css/parallax.css';
import { fetchProdcutServiceDetail } from './productservice.actions';
import ReactHtmlParser from 'react-html-parser';
import Client from '../Clients/Clients';
import RequestAQuote from '../RequestAQuote/RequestAQuote'
import ProducstServiceContactForm from './ProductServicesDetail/ProducstServiceContactForm'
import { save_brochures_details } from '../../actions/freeBrochuresActions';
import { showToast } from '../Notification/notification.actions';
class Fans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            pageType: 'News',
            size: 4,
            filterBy: 'Default',
            url: undefined,
            isOpen: false
        };
    }

    componentDidMount() {
        let url = this.props.location.pathname;
        if (url != '') {
            const slug = url.replace(/\\|\//g, '');
            this.props.fetchProdcutServiceDetail(slug);
        }
    }

    requestAQoute = (e) => {
        e.preventDefault();
        this.setState({ url: undefined })
        // document.getElementById('requestAQuote').click()
        this.toggleModal()

    }

    toggleModal = () => {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen })
    }

    dl = (e, url) => {
        e.preventDefault();
        this.setState({
            url,
        })
        this.toggleModal()
    }

    render() {

        const data = this.props.data;
        let cat_name = 'Fans';
        let cat_id = '';
        let c = undefined;
        let resources = [];
        if (data && data.contents) {
            c = data.contents;
        }
        if (data && data.resources && data.resources.length > 0) {
            resources = data.resources;
        }
        const { subMenuData } = this.props;

        if (subMenuData && Object.keys(subMenuData).length > 0) {
            for (const key of Object.keys(subMenuData)) {
                if (subMenuData[key] && subMenuData[key][0] && subMenuData[key][0].items && subMenuData[key][0].items.length > 0) {
                    subMenuData[key][0].items.map(item => {

                        if (item.page_url == '/fans') {
                            cat_id = item._id;
                        }
                    })
                }
            }
        }
        return (
            <div>
                <RequestAQuote
                    isOpen={this.state.isOpen}
                    toggleModal={this.toggleModal}
                    url={this.state.url}
                    onSubmit={this.props.saveBrochuresDetails}
                    showToast={this.props.showToast}

                />
                {data ?
                    <div id="parallax-world-of-ugg">
                        <section>
                            <div className="parallax-header" style={{ backgroundImage: `url(${data.banner_image})` }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-8 col-md-7 col-lg-8">
                                            <div className="row text-sm-right">
                                                <div className="offer">
                                                    {data.banner_title}
                                                </div>
                                            </div>
                                            <div className="row text-center textLeft">
                                                <div className="col-lg-12">
                                                    <div className="p-pom-box">
                                                        <div className="lp-pom-image">
                                                            <a href="#" target="_self">
                                                                <img src="./images/b1932bf9-centrifugal-fans_105e046000000000000028.png" />
                                                            </a>
                                                        </div>
                                                        <h3>Centrifugal Fans</h3>
                                                    </div>

                                                    <div className="p-pom-box">
                                                        <div className="lp-pom-image">
                                                            <a href="#" target="_self">
                                                                <img src="./images/c75a42aa-pressure-blower_105303x000000000000028.png" />
                                                            </a>
                                                        </div>
                                                        <h3>Pressure Blower</h3>
                                                    </div>

                                                    <div className="p-pom-box">
                                                        <div className="lp-pom-image">
                                                            <a href="#" target="_self">
                                                                <img src="./images/2eadaf6e-radial-bladed_105e045000000000000028.png" />
                                                            </a>
                                                        </div>
                                                        <h3>Radial Bladed</h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="p-pom-box">
                                                        <div className="lp-pom-image">
                                                            <a href="#" target="_self">
                                                                <img src="./images/dd80e336-radial-tip_105403x000000000000028.png" />
                                                            </a>
                                                        </div>
                                                        <h3>Radial Tip</h3>
                                                    </div>
                                                    <div className="p-pom-box">
                                                        <div className="lp-pom-image">
                                                            <a href="#" target="_self">
                                                                <img src="./images/9ab93894-utility-sets_105503y000000000000028.png" />
                                                            </a>
                                                        </div>
                                                        <h3>Utility Sets</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-md-5 col-lg-4 d-flex justify-content-center headerForm">

                                            <ProducstServiceContactForm
                                                cat_id={cat_id}
                                                cat_name={cat_name}
                                                hideclassName={true}
                                            />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <section>
                            <div className="parallax-one">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 d-flex justify-content-center">
                                            <div className="row">
                                                <div className="col-sm-3 col-md-6 col-lg-3 text-center">
                                                    <img className="img-fluid" src="images/c2e53f0e-badges1_105b05b000000000000028.png" />
                                                </div>
                                                <div className="col-sm-3 col-md-6 col-lg-3 text-center">
                                                    <img className="img-fluid" src="images/d409b07d-badges2_106h05a000000000000028.png" />
                                                </div>
                                                <div className="col-sm-3 col-md-6 col-lg-3 text-center">
                                                    <img className="img-fluid" src="images/ac4a649d-badges4_104t04u000000000000028.png" />
                                                </div>
                                                <div className="col-sm-3 col-md-6 col-lg-3 text-center">
                                                    <img className="img-fluid" src="images/ac4a649d-badges4_104t04u000000000000028.png" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 d-flex justify-content-center pt-10" >
                                            <div className="compaire-container fans_comp_bg">
                                                <div className="text-center">
                                                    <div className="container content-padding">
                                                        <div className="row align-items-center card-gutter">
                                                            <div className="col-sm-6 col-md-6 col-lg-4">
                                                                <div className="card-1 mx-auto border-blue color--border mt-8">
                                                                    <div className="card-body p-0 pt-0 pb-2" >
                                                                        <div className="vh-50"></div>
                                                                        <h3 className="card-name text-gracy">Industrial Fans</h3>
                                                                        <h2 className="text-uppercase font-weight-bold mb-4">Others</h2>
                                                                        <ul className="list-unstyled">
                                                                            <li className="card-list-item">
                                                                                <div className="star-rating">
                                                                                    <ul className="list-inline">
                                                                                        <span className="mr-3 ml-0 pl-0">Quality:</span>
                                                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </li>
                                                                            <li className="card-list-item">Price: <span className="font-weight-bold ml-3">$$$$</span></li>
                                                                            <li className="card-list-item">Lead Time:<span className="font-weight-bold ml-3">10-12 Weeks</span></li>
                                                                            <li className="card-list-item">Satisfaction Guarantee:<span className="font-weight-bold ml-3">No</span></li>
                                                                            <li className="card-list-item">Static Efficiency:
					                    <span className="font-weight-bold ml-3"> 68 </span>
                                                                            </li>
                                                                            <li className="card-list-item">Housing Thickness:<span className="font-weight-bold ml-3">Standard</span>
                                                                            </li>
                                                                            <li className="card-list-item">AMCA Certified:<span className="font-weight-bold ml-3">No</span>
                                                                            </li>
                                                                            <li className="card-list-item">
                                                                                <span className="font-weight-bold ml-3"></span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6 col-md-6 col-lg-4">
                                                                <div className="card-2 mx-auto border-dark-blue" >
                                                                    <img className="sticker" src="images/f1c611cf-best-choice_1000000000000000000028.png" />
                                                                    <div className="card-body p-0 pb-2 pt-2">
                                                                        <img className="img-fluid" src="images/ytvcad-logo-1469632076-13035_106501d000000000000028.png" className="card-img-fit" alt="..." />
                                                                        <h3 className="card-name text-gracy">Industrial Fans</h3>
                                                                        <h2 className="text-uppercase font-weight-bold mb-4">Baghouse America</h2>
                                                                        <ul className="list-unstyled">
                                                                            <li className="card-list-item">
                                                                                <div className="star-rating">
                                                                                    <ul className="list-inline">
                                                                                        <span className="mr-3 ml-0 pl-0">Quality:</span>
                                                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </li>
                                                                            <li className="card-list-item">Price: <span className="font-weight-bold ml-3">$$$</span></li>
                                                                            <li className="card-list-item">Lead Time:<span className="font-weight-bold ml-3">8-10 Weeks</span></li>
                                                                            <li className="card-list-item">Satisfaction Guarantee:<span className="font-weight-bold ml-3">Yes</span></li>
                                                                            <li className="card-list-item">Static Efficiency:<span className="font-weight-bold ml-3">78</span>
                                                                            </li>
                                                                            <li className="card-list-item">Housing Thickness:<span className="font-weight-bold ml-3">20% Thicker</span>
                                                                            </li>
                                                                            <li className="card-list-item">AMCA Certified:<span className="font-weight-bold ml-3">Yes</span>
                                                                            </li>
                                                                            <li className="card-list-item">
                                                                                <div className="call-section">
                                                                                    <a href="tel:8007852944" className="callBtn">
                                                                                        <img src="images/call.png" className="pr-2" />
                                                                                    (800) 785-2944)
					                        </a>
                                                                                    <div className="text-center p-0">Or</div>
                                                                                    <a href=""
                                                                                        onClick={this.requestAQoute} className="callBtn">
                                                                                        Reqest a Quote
					                        </a>
                                                                                </div>
                                                                            </li>
                                                                        </ul>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6 col-md-6 col-lg-4">
                                                                <div className="card-3 mx-auto border-blue color--border mt-70">
                                                                    <div className="card-body p-0 pt-3 pb-0">
                                                                        <img className="img-fluid" src="images/aa63d403-tcf-logos-tcf-logos-174-1-240x240_104r01n000000000000028.png" className="card-img-fit" alt="..." />
                                                                        <h3 className="card-name text-gracy">Industrial Fans</h3>
                                                                        <h2 className="text-uppercase font-weight-bold mb-4">TWIN CITY FAN & BLOWERS</h2>
                                                                        <ul className="list-unstyled">
                                                                            <li className="card-list-item">
                                                                                <div className="star-rating">
                                                                                    <ul className="list-inline">
                                                                                        <span className="mr-3 ml-0 pl-0">Quality:</span>
                                                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </li>
                                                                            <li className="card-list-item">Price: <span className="font-weight-bold ml-3">$$$$$$</span></li>
                                                                            <li className="card-list-item">Lead Time:<span className="font-weight-bold ml-3">10-12 Weeks</span></li>
                                                                            <li className="card-list-item">Satisfaction Guarantee:<span className="font-weight-bold ml-3">No Restocking Fee</span></li>
                                                                            <li className="card-list-item">Static Efficiency:<span className="font-weight-bold ml-3">75</span>
                                                                            </li>
                                                                            <li className="card-list-item">Housing Thickness:<span className="font-weight-bold ml-3">Standard</span>
                                                                            </li>
                                                                            <li className="card-list-item">AMCA Certified:<span className="font-weight-bold ml-3">Yes</span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>



                        {c && c[0] ? <section>
                            <div className="parallax-two">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12"><h2 className="h2">
                                            {c[0].title}
                                        </h2></div>
                                        <div className="col-lg-12 d-flex justify-content-center">
                                            {c[0].url ? <img className="img-fluid pt-4" src={c[0].url} /> : null}
                                            
                                        </div>
                                        <div className="col-lg-12 d-flex justify-content-center"
                                            dangerouslySetInnerHTML={{ __html: c[0].description }} />


                                        <div className="col-lg-12 d-flex justify-content-center">
                                            <a href="" onClick={this.requestAQoute} className="request-a-quote-btn">Request a Quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> : null}


                        {c && c[1] ? <section>
                            <div className="parallax-three">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12"><h2 className="h2"> {c[1].title}</h2></div>
                                        <div className="col-lg-12 d-flex justify-content-center">
                                        {c[1].url ? <img className="img-fluid pt-4" src={c[1].url} /> : null}
                                        </div>
                                        <div className="col-lg-12 d-flex justify-content-center" dangerouslySetInnerHTML={{ __html: c[1].description }} />
                                        <div className="col-lg-12 d-flex justify-content-center">
                                            <a href="" onClick={this.requestAQoute} className="request-a-quote-btn">Request a Quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> : null}

                        {c && c[2] ? <section>
                            <div className="parallax-four">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12"><h2 className="h2">Radial Tip & Heigh Efficiency fans</h2></div>
                                        <div className="col-lg-12 d-flex justify-content-center">
                                        {c[2].url ? <img className="img-fluid pt-4" src={c[2].url} /> : null}
                                        </div>
                                        <div className="col-lg-12 d-flex justify-content-center" dangerouslySetInnerHTML={{ __html: c[2].description }} />
                                        <div className="col-lg-12 d-flex justify-content-center">
                                            <a href="" onClick={this.requestAQoute} className="request-a-quote-btn">Request a Quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> : null}

                        {c && c[3] ? <section>
                            <div className="parallax-five">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12"><h2 className="h2">PRESSURE BLOWERS</h2></div>
                                        <div className="col-lg-12 d-flex justify-content-center">
                                        {c[3].url ? <img className="img-fluid pt-4" src={c[3].url} /> : null}
                                        </div>
                                        <div className="col-lg-12 d-flex justify-content-center" dangerouslySetInnerHTML={{ __html: c[3].description }} />
                                        <div className="col-lg-12 d-flex justify-content-center">
                                            <a href="" onClick={this.requestAQoute} className="request-a-quote-btn">Request a Quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> : null}

                        {c && c[4] ? <section>
                            <div className="parallax-six">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12"><h2 className="h2">UTILITY FANS</h2></div>
                                        <div className="col-lg-12 d-flex justify-content-center">
                                        {c[4].url ? <img className="img-fluid pt-4" src={c[4].url} /> : null}
                                        </div>
                                        <div className="col-lg-12 d-flex justify-content-center" dangerouslySetInnerHTML={{ __html: c[4].description }} />
                                        <div className="col-lg-12 d-flex justify-content-center">
                                            <a href="" onClick={this.requestAQoute} className="request-a-quote-btn">Request a Quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> : null}

                        {c && c[5] ? <section>
                            <div className="parallax-seven">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-12"><h2 className="h2">PRODUCTS FOR EVERY INDUSTRY</h2></div>

                                        <div className="col-lg-12 d-flex justify-content-center" dangerouslySetInnerHTML={{ __html: c[5].description }} />
                                        <div className="col-lg-12 d-flex justify-content-center">
                                            <div className="row column-gutter">
                                                <div className="col-sm-6 col-md-4 col-lg-3">
                                                    <ul className="industry-list">
                                                        <li>Automotive</li>
                                                        <li>Textile</li>
                                                        <li>Nuclear Power</li>
                                                        <li>Pulp and Paper</li>
                                                        <li>Food Processing</li>
                                                        <li>Water Treatment</li>
                                                        <li>Petrochemical and Oil</li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-6 col-md-4 col-lg-3">
                                                    <ul className="industry-list">
                                                        <li>Agriculture </li>
                                                        <li>Material Handling </li>
                                                        <li>Coal Processing</li>
                                                        <li>Foundries</li>
                                                        <li>Tunnel Ventilation</li>
                                                        <li>Dust Collection</li>
                                                        <li>Glass</li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-6 col-md-4 col-lg-3">
                                                    <ul className="industry-list">
                                                        <li>Waste Management </li>
                                                        <li>Material Handling</li>
                                                        <li>Chemical</li>
                                                        <li>Recycling</li>
                                                        <li>Marine</li>
                                                        <li>Pharmaceutical</li>
                                                        <li>Cement and Lime</li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-6 col-md-4 col-lg-3">
                                                    <ul className="industry-list">
                                                        <li>Transportation</li>
                                                        <li>Ethanol</li>
                                                        <li>Air Pollution Control</li>
                                                        <li>Energy</li>
                                                        <li>Recovery</li>
                                                        <li>Mining and General Manufacturing</li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-12 pt-3 d-flex justify-content-center">
                                            <a href="tel:18007852944" className="request-a-quote-btn">Request a Call</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section> : null}

                        {c && c[6] ? <section>
                            <div className="parallax-eight">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12"><h2 className="h2">{c[6].title}</h2></div>

                                        <div className="col-lg-6 d-flex justify-content-center" dangerouslySetInnerHTML={{ __html: c[6].description }} />
                                        <div className="col-lg-6">
                                        {c[6].url ? <img className="img-fluid pt-4" src={c[6].url} /> : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> : null}

                        <section>
                            <div className="parallax-nine">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12"><h2 className="h2">UNMATCHED PRODUCT OFFERINGS</h2></div>
                                        <div className="col-lg-12 d-flex justify-content-center" dangerouslySetInnerHTML={{ __html: c[0].description }} />
                                        <div className="col-lg-12 d-flex justify-content-center ">
                                            <a href="/" className="request-a-quote-btn">Visit Our Website</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <Client />


                        <section>
                            <div className="parallax-eleven">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12"><h2 className="h2">6789</h2></div>
                                        <div className="col-lg-12 d-flex justify-content-center">
                                            <p>CUSTOMERS HAVE ALREADY ORDERED</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="parallax-twelve">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12"><h2 className="h2">Radial Tip & Heigh Efficiency fans</h2></div>
                                        <div className="col-lg-3 text-center">
                                            <img className="img-fluid pt-4" src="images/82ef88ff-money_1064054000000000000028.png" />
                                        </div>
                                        <div className="col-lg-9">
                                            <ol className="ol-list" start="1">
                                                <li>Guaranteed Performance</li>
                                                <li>If you try one of our products and don’t like it, return it and get your money back!</li>
                                                <li>We aren’t perfect, so let us know if there is an issue with your order. Not only will we take the blame, we’ll make it up to you.</li>
                                            </ol>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="parallax-thirteen">
                                <div className="container pl-5 pr-5">
                                    <div className="row card-outer-gutter">
                                        <div className="col-lg-12"><h2 className="h2-lowercase text-left pl-3">Satisfied Customers </h2></div>
                                        <div className="col-sm-12 col-md-6 col-lg-4">
                                            <div className="customer-card-outer d-flex justify-content-center">
                                                <div className="customer-card-body">
                                                    <div className="text-left pt-4 pl-2"><img src="images/eed84b33-quotes2_1000000000000000000028.png" height="36" /></div>
                                                    <div className="cust-card-description">
                                                        They perform and look the same as the originals.
			  					</div>
                                                    <div className="text-right pr-3 pb-2"><img src="images/d44271e1-quotes_1000000000000000000028.png" height="36" /></div>
                                                </div>
                                            </div>
                                            <div className="card--pic--avt">
                                                <img src="images/aacefba8-jose-carlos_103g03g03g03f000000028.png" />
                                                <div className="caption-name">Jose Carlos</div>
                                                <p>Plant Engineer , Grupo Numar</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-4">
                                            <div className="customer-card-outer d-flex justify-content-center">
                                                <div className="customer-card-body">
                                                    <div className="text-left pt-4 pl-2"><img src="images/eed84b33-quotes2_1000000000000000000028.png" height="36" /></div>
                                                    <div className="cust-card-description">
                                                        Very happy with the delivery time
			  					</div>
                                                    <div className="text-right pr-3 pb-2"><img src="images/d44271e1-quotes_1000000000000000000028.png" height="36" /></div>
                                                </div>
                                            </div>
                                            <div className="card--pic--avt">
                                                <img src="images/t2.png" />
                                                <div className="caption-name">Sherry Tanner </div>
                                                <p>Purchase Agent ,  CEMEX</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-4">
                                            <div className="customer-card-outer d-flex justify-content-center">
                                                <div className="customer-card-body">
                                                    <div className="text-left pt-4 pl-2"><img src="images/d44271e1-quotes_1000000000000000000028.png" height="36" /></div>
                                                    <div className="cust-card-description">
                                                        The product was constructed very well.
			  					</div>
                                                    <div className="text-right pr-3 pb-2"><img src="images/d44271e1-quotes_1000000000000000000028.png" height="36" /></div>
                                                </div>
                                            </div>
                                            <div className="card--pic--avt">
                                                <img src="images/39340522-jaosn-kennedy_103g03g03g03f000000028.png" />
                                                <div className="caption-name">Jasen Kennedy</div>
                                                <p>Plant Engineer ,  ABENGOA</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <section>
                            <div className="parallax-fourteen">
                                <div className="container">
                                    <div className="row card-outer-gutter">
                                        <div className="col-lg-12"><h2 className="h2 text-left pl-3">Resources</h2></div>
                                        {resources.map(item => <div className="col-sm-12 col-md-6 col-lg-4"><div className="customer-card-outer d-flex justify-content-center">
                                            <div className="resources-card">
                                                <h3>{item.title}</h3>
                                                <a
                                                    href='#'
                                                    onClick={e => this.dl(e, item.url)}
                                                    className="request-a-quote-btn"
                                                >Download</a>
                                            </div>
                                        </div>
                                        </div>)}




                                    </div>
                                </div>
                            </div>
                        </section>



                    </div>
                    : null
                }
            </div>
        );
    }
}

const mapStateToProps = ({ productService, asyncReducer }) => ({
    data: productService[0],

    subMenuData: asyncReducer.subMenuData,
});

const mapDispatchToProps = {
    saveBrochuresDetails: save_brochures_details,
    showToast,
    fetchProdcutServiceDetail,
};
export default connect(mapStateToProps, mapDispatchToProps)(Fans);
