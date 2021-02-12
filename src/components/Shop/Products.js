import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import Product from './Product'
import HotProduct from './HotProduct'
import { getProducts } from './store/Actions'
import { Link } from 'react-router-dom';
import { MDBModal, MDBContainer } from 'mdbreact';
import QuickView from './QuickView'
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      item: null,
      visible: true,
  }
  }

  componentDidMount() {
    this.props.getProducts(this.props.type)
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
    const { type, heading } = this.props;
    const { item, showModal, visible } = this.state;
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
                        key={`HotProduct${idx}`}
                        item={item}
                        quickView={this.show}
                      />)
                      }
                    </Slider>
                  </div>
                </div>
              </section>
              <section className="bg-opeque pb-4">
                <div className="container-fluid">
                  <p className="view-all-center">
                    <Link to={`category/${this.props.type}`}>
                    View All
                    </Link>
                    </p>
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
                          quickView={this.show}
                        />)
                        }
                      </Slider>
                    </div>
                  </div>
                </div>
              </section>
              {this.props.type !='viewed' ? 
              <section className="bg-opeque pb-4">
                <div className="container-fluid">
                  <p className="view-all-center">
                    <Link to={`category/${this.props.type}`}>
                    View All
                    </Link>
                    </p>
                </div>
              </section> : null }
            </div>
        }
        </>

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
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.shop.loading,
  featured: state.shop.featured,
  topselling: state.shop.topselling,
  viewed: state.shop.viewed,
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