import React, { Component } from 'react';
import { MDBModal, MDBContainer } from 'mdbreact';
import Slider from 'react-slick';
import LeftMenu from './LeftMenu';
import Banner from './Banner';
import Clients from './../Clients';
import Brands from './../Home/Products';
import PremiumBrands from './PremiumBrands';
import CategoryProducts from './CategoryProducts';
import Products from './Products'
import './style.css'
import './xzoom.css'
import QuickView from './QuickView'
import Footer from '../Footer'
class ShopNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      item: null,
      visible: true,
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

  render() {
    const { item, showModal, visible } = this.state;
    const {pathname} =this.props.location;
    
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
                          type='hotDeals'
                          heading="Our Hot Deals"
                        />
                        <Products
                          quickView={this.show}
                          type='bestSelling'
                          heading="Best Selling Products"
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
                        <CategoryProducts  quickView={this.show} match={this.props.match}/>
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

      </div>

    );
  }
}

export default ShopNow;
