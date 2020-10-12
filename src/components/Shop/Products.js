import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import Product from './Product'
import HotProduct from './HotProduct'
import { getProducts } from './store/Actions'
class Products extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProducts(this.props.type)
  }

  render() {
    const { type, heading } = this.props;
    const data = this.props[type]
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: data  ? data.length > 3 ? 4 :data.length:0 ,
      // slidesToShow: 3,
      slidesToScroll: 1,
    };


    return (
      <> 
      {
        data && data.length > 0 ?
        <>
        {
          type == 'hotDeals' ?
            <>
              <section className="bg-opeque">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-12">
                      <h2 className="bha_heading_2 text-blue">Our Hot Deals</h2>
                    </div>
                  </div>
                </div>
              </section>
              <section className="pro-equipment-section box-shadow">
                <div className="container-fluid pl-0 pr-0 portfolio-item">
                  <div className="productitem-auto slider">
                    <Slider {...settings}>
                      {data.map((item, idx) => <HotProduct
                        item={item}
                        quickView={this.props.quickView}
                      />)
                      }
                    </Slider>
                  </div>
                </div>
              </section>
            </>
            :
            <div>
              <section className="bg-opeque pb-4">
                <div className="container-fluid">
                  <h2 className="bha_heading_2 z-index text-blue">{heading}</h2>
                </div>
              </section>
              <section className="pro-equipment-section box-shadow" id="bestSelling">
                <div className="container-fluid pl-0 pr-0  product-xs-item">
                  <div className="product-items slider">
                    <div className="product-card-wrapper outer-wrpper">
                      <Slider {...settings}>
                        {data.map((item, idx) => <Product
                          item={item}
                          quickView={this.props.quickView}
                        />)
                        }
                      </Slider>
                    </div>
                  </div>
                </div>
              </section>
            </div>
        }
        </>

        : null
      }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.shop.loading,
  hotDeals: state.shop.hotDeals,
  bestSelling: state.shop.bestSelling,
  topRated: state.shop.topRated,
  error: state.shop.error
});
const mapDispatchToProps = dispatch => ({
  getProducts: (payload) => dispatch(getProducts(payload)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);