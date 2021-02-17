import React, { Component } from 'react';
import { MDBModal, MDBContainer } from 'mdbreact';
import Slider from 'react-slick';
import LeftMenu from './LeftMenu';
import Banner from './Banner';
import Clients from './../Clients';
import Brands from './../Home/Products';
import PremiumBrands from './PremiumBrands';
import CategoryProducts from './CategoryProducts';
import Image from './Image'
import Products from './Products'
import './style.css'
import './xzoom.css'
import QuickView from './QuickView'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import { compareWith } from './store/Actions'
import { connect } from 'react-redux';
import { Drawer, Button, Radio, Space } from 'antd';
class ShopNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      item: null,
      visible: true,
      drawerVisible: false
    }
  }
  shrink = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible })
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

  componentDidUpdate(prevProps) {
    const { data } = this.props;
    if (data != prevProps.data && data.length >0) {
      this.setState({ drawerVisible: true })
    }
  }
  onClose = () => {
    this.setState({ drawerVisible: false })
  }
  removeCompare = (item) => {
    const {data} =this.props;
    
    if(data && data.length ==1){
      this.setState({drawerVisible:false})
    }
   this.props.compareWith({type:'remove',item})
  }

  render() {
    const { item, showModal, visible, drawerVisible } = this.state;
    const { pathname } = this.props.location;
    const {data}=this.props;
    return (

      <div className={visible ? 'wrapper' : 'sidebar_minimize wrapper'}>
        <div className="topPadding">
          <div className="shopnow-pagewrap">
            <div className="bgWhite">
              <LeftMenu visible={visible} shrink={this.shrink} />
              <div className="main-panel">
                <div className="content">

                  <div className="page-inner">
                    <div className="shop-now-page-inner">
                      {pathname == '/shop' ?
                        <div className="container-fluid pl-0 pr-0">
                          <Banner />
                          <Products
                            quickView={this.show}
                            type='bestselling'
                            heading="Best Selling Products"
                          />
                          <Products
                            quickView={this.show}
                            type='featured'
                            heading="Featured Products"
                          />
                          <Products
                            quickView={this.show}
                            type='topRated'
                            heading="Top Rated Products"
                          />
                          <Brands />
                          <Clients />
                          {/* <PremiumBrands /> */}
                          {/* <Footer /> */}
                        </div>
                        :
                        <div className="container-fluid pl-0 pr-0">
                          <CategoryProducts quickView={this.show} match={this.props.match} />
                          <Clients />
                          {/* <PremiumBrands /> */}
                          {/* <Footer /> */}
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        {data &&
          <Drawer
            title={<>Compare<span> ({data.length})</span></>}
            placement="bottom"
            closable={true}
            onClose={this.onClose}
            visible={drawerVisible}
            mask={false}
            width={400}
            zIndex={9000000}
            className="compare-products"
           style={{maxHeight:'650px', width:'400px'}}
          >
            <div id="faq1" className="collapse show" >
              <div className="card-body" id="myDiv">
                <ul className="compare-widget__products">
                  {data.map(datum =>
                    <li className="compare-widget__product">
                      <Image height="40px" width="40px" src="images/product/img1.jpg" preview={false} alt="" className="compare-widget__image" />
                      <h3 className="compare-widget__title">
                        {datum.name}
                      </h3>
                      <button className="compare-widget__product-remove-trigger" title="Remove" onClick={e=>this.removeCompare(datum)}>
                        Remove Product
                      </button>
                    </li>
                  )}

                </ul>
                <Link to="/compare" className="btn bha-btn-primary w-100">COMPARE SELECTED</Link>
              </div>
            </div>
          </Drawer>
        }
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  data: state.shop.compare
});
const mapDispatchToProps = dispatch => ({
  compareWith: (payload) => dispatch(compareWith(payload)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopNow);