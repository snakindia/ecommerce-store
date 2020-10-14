import React, { Component } from 'react';
import { connect } from 'react-redux'
import './style.css'
import './xzoom.css'
import { Breadcrumb } from 'antd';
import QuickView from './QuickView'
import { getProduct } from './store/Actions'
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            item: null,
            visible: true,
        }
    }

    componentDidMount() {
        const { params: { id } } = this.props.match;
        this.props.getProduct(id);
    }

    render() {

        const { product } = this.props;

        return (

            <div className="content-wrapper topPadding" id="content">
                {product ?
                    <div className="pagewrap">
                        <div className="bgWhite padding-bottom">
                            <div className="container-fluid" >
                                {product ? <Breadcrumb>
                                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link to="/shop">Products /Service</Link>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link to={`/category/${product.category_id}`}>
                                            {product && product.category_name ? product.category_name : ''}
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                    : null
                                }


                            </div>
                            <section >
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-9 col-md-9">
                                            {product ? <QuickView item={product} single={true} /> : null}
                                        </div>
                                        <div className="col-sm-3 col-md-3">

                                            {/* <div className="right-content sidebar">
                   </div> */}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="mt-4" id="review_rating">
                                                <Tabs >
                                                    <TabPane tab="Product Description" key="1">
                                                        <div className="resp-tabs-container" dangerouslySetInnerHTML={{ __html: product.description }}>
                                                        </div>

                                                    </TabPane>
                                                    <TabPane tab="Product Reviews" key="2">
                                                        No Product Reviews
                                                </TabPane>

                                                </Tabs>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>


                            <div id="main">
                                <div className="container" id="about_popup">
                                    <div id="faq">
                                        <div className="card">
                                            <div className="card-header" id="faqhead1">
                                                <a href="#" className="btn btn-header-link text-uppercase font-weight-bold" data-toggle="collapse" data-target="#faq1"
                                                    aria-expanded="true" aria-controls="faq1">Compare<span> (3)</span></a>
                                            </div>

                                            <div id="faq1" className="collapse show" aria-labelledby="faqhead1" data-parent="#faq">
                                                <div className="card-body" id="myDiv">
                                                    <ul className="compare-widget__products">
                                                        <li className="compare-widget__product">
                                                            <img src="images/product/img1.jpg" alt="" className="compare-widget__image" />
                                                            <h3 className="compare-widget__title">RCA-3D2 Replacement Solenoid Valve with Coil 1/8″ NPT 120V</h3>
                                                            <button className="compare-widget__product-remove-trigger" title="Remove">Remove Product</button>
                                                        </li>
                                                        <li className="compare-widget__product">
                                                            <img src="images/product/img2.jpg" alt="" className="compare-widget__image" />
                                                            <h3 className="compare-widget__title">Goyen® Pentair® CA25T000-331 1″ Replacement Dust Collector Valve</h3>
                                                            <button className="compare-widget__product-remove-trigger" title="Remove">Remove Product</button>
                                                        </li>
                                                        <li className="compare-widget__product">
                                                            <img src="images/product/img6.jpg" alt="" className="compare-widget__image" />
                                                            <h3 className="compare-widget__title">Taeha® ITSPK1 5825 Repair Kits for Taeha (Tae-ha) TH5825 Diaphragm Valve</h3>
                                                            <button className="compare-widget__product-remove-trigger" title="Remove">Remove Product</button>
                                                        </li>
                                                    </ul>
                                                    <button className="btn bha-btn-primary w-100">COMPARE SELECTED</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
                }
            </div>


        );
    }
}
const mapStateToProps = (state) => ({
    loading: state.shop.loading,
    product: state.shop.product,
    error: state.shop.error
});
const mapDispatchToProps = dispatch => ({
    getProduct: (id) => dispatch(getProduct(id)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail);
