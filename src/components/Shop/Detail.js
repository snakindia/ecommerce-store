import React, { Component } from 'react';
import { connect } from 'react-redux'
import './style.css'
import './xzoom.css'
import { MDBModal, MDBContainer } from 'mdbreact';
import QuickView from './QuickView'
import { getProduct } from './store/Actions'
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';
import Comments from './Comments';
import Breadcrum from './Breadcrum';
import Product from './Product';
import Products from './Products';
import Slider from 'react-slick';
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
    show = (item) => {
        this.setState({
            item,
            showModal: true
        })
    }

    hide = () => {
        this.setState({
            item: null,
            showModal: false
        })
    }

    componentDidMount() {
        const { params: { id } } = this.props.match;
        this.props.getProduct(id);
    }
    componentDidUpdate(prevProps){
        const { params: { id } } = this.props.match;
        if(prevProps && prevProps.match && prevProps.match.params && prevProps.match.params.id != id){
            this.props.getProduct(id);
        }
         
    }

    render() {

        const { product } = this.props;
        const { item, showModal, visible } = this.state;
        const { params: { id } } = this.props.match;
        let related = product && product.related_products ? product.related_products : [];
        // related =[1,2,3,4,5,6,7,8,9].map(i=>related && related[0] ? related[0]:{});
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: related ? related.length > 3 ? 4 : related.length : 0,
            // slidesToShow: 3,
            slidesToScroll: 1,
        };
        return (

            <div className="content-wrapper topPadding" id="content">
                {product ?
                    <div className="pagewrap">
                        <div className="bgWhite padding-bottom">
                            <div className="container-fluid detail-breadcrumb" >

                                <Breadcrum data={product}/>

                            </div>
                            <section >
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-12 col-sm-12">
                                            {product ? <QuickView item={product} single={true} certificate={true} /> : null}
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
                                                    <TabPane tab="Product Reviews" key="2"
                                                        className="resp-tab-item">
                                                        <div className="resp-tabs-container">
                                                            <Comments id={id} />
                                                        </div>

                                                    </TabPane>
                                                    <TabPane tab="Related Category Products" key="3"
                                                        className="resp-tab-item">
                                                        <div className="resp-tabs-container">
                                                         {product && product.category_detail && product.category_detail._id ? 
                                                         <Link to={`/category/${product.category_detail._id}`} >
                                                             {product.category_detail.name}
                                                         </Link>
                                                         :  product.parent_category_detail &&  product.parent_category_detail._id ? 
                                                         <Link to={`/category/${product.parent_category_detail._id}`} >
                                                             {product.parent_category_detail.name}
                                                         </Link>: null}
     
                                                        </div>

                                                    </TabPane>

                                                </Tabs>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {related && related.length > 0  ? 
                            <>
                            <section className="bg-opeque box-shadow footerItems">
                                <div className="container-fluid">
                                    <h2 className="bha_heading_2 z-index text-blue mb-4">Related Products</h2>
                                </div>
                            </section>
                            <section className="pro-equipment-section box-shadow" id="bestSelling">
                                <div className="container-fluid pl-0 pr-0  product-xs-item">
                                    <div className="product-items slider">
                                        <div className="product-card-wrapper outer-wrpper">
                                            <Slider {...settings}>
                                                {related.map((item, idx) => <Product
                                                    item={item}
                                                    quickView={this.show}
                                                />)
                                                }
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            </>
                            : null }
                            <Products
                                type='viewed'
                                heading="Customers also viewed"
                            />


                        </div>
                    </div>
                    : null
                }
                <MDBContainer>
                    <MDBModal
                        isOpen={showModal}
                        toggle={this.hide}
                        centered
                        id="#myModalView"
                        className="modal-width-lg"
                    >
                        {item && <QuickView
                            item={item}
                            hide={this.hide}
                        />
                        }
                    </MDBModal>
                </MDBContainer>
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
