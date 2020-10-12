import React, { Component } from 'react';
import { connect } from 'react-redux'
import Product from './Product';
import ProductList from './ProductList';
import { getProducts } from './store/Actions';
import Pagination from './Pagination';
import {Link} from 'react-router-dom'
class CategoryProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      resultPerPage: 20,
      total: 0,
      products: [],
      sorting: 'latest',
      view: 'grid'
    };
  }

  componentDidMount() {
    const { params: { id } } = this.props.match;
    this.props.getProducts('products', id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data != this.props.data) {
      this.setData()
    }
    const { params: { id } } = this.props.match;
    const { params: { id:oldId } } = prevProps.match;
    if(id !== oldId){
      this.props.getProducts('products', id);
    }
  }

  sortData = (data, order) => {
    if (data && data.length > 0 && order == 'latest') {
      data = data.sort((a, b) => {
        if (a.date_updated < b.date_updated) return -1;
        if (a.date_updated > b.date_updated) return 1;
        return 0;
      })
    }
    else if (data && data.length > 0 && order == 'oldest') {
      data = data.sort((a, b) => {
        if (a.date_updated > b.date_updated) return -1;
        if (a.date_updated < b.date_updated) return 1;
        return 0;
      })
    }
    else if (data && data.length > 0 && order == 'AZ') {
      data = data.sort((a, b) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      })
    }
    else if (data && data.length > 0 && order == 'ZA') {
      data = data.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      })
    }
    return data;
  }

  setData = () => {
    let { data } = this.props;
    let products;
    const { currentPage, resultPerPage, sorting } = this.state;
    products = data && data.data && data.data.length > 0 ? data.data : [];
    products = this.sortData(products, sorting);
    products = products.slice((currentPage - 1) * resultPerPage, currentPage * resultPerPage);
    this.setState({
      products
    })
  }

  changePagination = (PageNumber) => {
    this.setState({
      currentPage: PageNumber
    }, () => this.setData())
  }

  changePageSize = (e) => {
    const { value } = e.target;
    let size = value && !isNaN(parseInt(value)) ? parseInt(value) : 20;
    this.setState({
      resultPerPage: size
    }, () => this.setData())
  }
  sort = (e) => {
    const { value } = e.target;
    this.setState({
      sorting: value
    }, () => this.setData())

  }

  setView = (e, view) => {
    e.preventDefault();
    this.setState({
      view
    })
  }

  render() {
    const { currentPage, resultPerPage, products, sorting, view } = this.state;
    const { data } = this.props;
    const total = data && data.data ? data.data.length : 0;
    return (
      <section className="pro-equipment-section">
        <div className="container shorting-box border-bottom">
          <div className="row">
            <div className="col-sm-5 col-md-5">
              <div className="short-items">
                <span>Short By:</span>
                <select id="shortOption" className="form-control-select form-select"
                  onChange={this.sort}
                >
                  <option value='latest' selected={sorting == 'latest'}>Default Shorting:</option>
                  <option value='oldest' selected={sorting == 'Oldest'}>Oldest</option>
                  <option value='AZ' selected={sorting == 'Oldest'}>By Name A-Z</option>
                  <option value='ZA' selected={sorting == 'Oldest'}>By Name Z-A</option>
                </select>
              </div>
            </div>
            <div className="col-sm-7 col-md-7">
              <div className="w-100">
                <Link type="button" onClick={e => this.setView(e, 'list')} className="grid-switcher" title="List View"><i className="fas fa-list"></i></Link>
                <Link type="button" onClick={e => this.setView(e, 'grid')} className="grid-switcher" title="Grid View"><i className="fas fa-th"></i></Link>
                <Pagination
                  current={currentPage}
                  total={total}
                  size={resultPerPage}
                  onChange={this.changePagination}
                />
              </div>
            </div>
          </div>
        </div>
        {
          view == 'grid' ?
            <div className="container-fluid pl-0 pr-0 product-xs-item">
              <div className="row no-gutters">
                {products.map((item, idx) =>
                  <div className="col-sm-6 col-md-6 col-lg-3 border-bottom">
                    <Product
                      item={item}
                      quickView={this.props.quickView}
                    />
                  </div>
                )
                }
              </div>
            </div> :
            <div className="container-fluid pl-0 pr-0 product-xs-list">
              <div className="row">
                <div className="col-lg-12">
                  <ul className="list-group">
                    {products.map((item, idx) =>
                      
                        <ProductList
                          item={item}
                          quickView={this.props.quickView}
                        />
                      
                    )
                    }
                  </ul>
                </div>
              </div>
            </div>
        }


        <div className="container box-shadow shorting-box">
          <div className="row">
            <div className="col-sm-4 col-md-4">
              <div className="short-items">
                <span>Show:</span>
                <select id="shortOption" className="form-control-select form-select"
                  style={{ width: '80px !important', float: 'left', marginLeft: '1rem' }}
                  onChange={this.changePageSize}
                >
                  <option value={12} selected={resultPerPage == 12}>12</option>
                  <option value={20} selected={resultPerPage == 20}>20</option>
                  <option value={50} selected={resultPerPage == 50}>50</option>
                  <option value={100} selected={resultPerPage == 100}>100</option>
                  <option value={200} selected={resultPerPage == 200}>200</option>
                </select>
              </div>
            </div>
            <div className="col-sm-8 col-md-8">
              <div className="w-100">

                {/* <Pagination simple defaultCurrent={2} total={50} /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

}
const mapStateToProps = (state) => ({
  loading: state.shop.loading,
  data: state.shop.products,
  error: state.shop.error
});
const mapDispatchToProps = dispatch => ({
  getProducts: (payload, id) => dispatch(getProducts(payload, id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryProducts);