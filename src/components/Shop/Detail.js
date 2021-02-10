import React, { Component } from 'react';
import { connect } from 'react-redux'
import './style.css'
import './xzoom.css'
import QuickView from './QuickView'
import { getProduct } from './store/Actions'
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';
import RelatedProduct from './RelatedProduct';
import Breadcrum from './Breadcrum';
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
       
        let related =product && product.related_products ? product.related_products :[];
        related =[1,2,3,4,5,6,7,8,9].map(i=>related && related[0] ? related[0]:{});
        return (

            <div className="content-wrapper topPadding" id="content">
                {product ?
                    <div className="pagewrap">
                        <div className="bgWhite padding-bottom">
                            <div className="container-fluid" >
                               
                            <Breadcrum data={product} />

                            </div>
                            <section >
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-12 col-sm-12">
                                            {product ? <QuickView item={product} single={true} certificate={true}/> : null}
                                        </div>
                                        {/* <div className="col-sm-3 col-md-3">
                                        <RelatedProduct items={related} />
                                        </div> */}
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="mt-4" id="review_rating">
                                                <Tabs id="horizontalTab">
                                                    <TabPane tab="Product Description" key="1" className="resp-tab-item">
                                                        <div className="resp-tabs-container" dangerouslySetInnerHTML={{ __html: product.description }}>
                                                        </div>

                                                    </TabPane>
                                                    {/* <TabPane tab="Product Reviews" key="2"
                                                        className="resp-tab-item">
                                                        <div className="resp-tabs-container">
                                                            No Product Reviews
                                                        </div>

                                                    </TabPane> */}

                                                </Tabs>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* <section className="bg-opeque box-shadow footerItems">
                                <div className="container-fluid">
                                    <h2 className="bha_heading_2 z-index text-blue mb-4">Similar Category Products</h2>
                                </div>
                            </section>
                            <section className="pro-equipment-section box-shadow">
                                <div className="container-fluid pl-0 pr-0 product-xs-item"></div>
                            </section>
                            <section className="bg-opeque">
                                <div className="container-fluid">
                                    <h2 className="bha_heading_2 z-index text-blue mb-4">Customers also viewed</h2>
                                </div>
                            </section>
                            <section className="pro-equipment-section box-shadow">
                                <div className="container-fluid pl-0 pr-0 product-xs-item"></div>
                            </section> */}
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
