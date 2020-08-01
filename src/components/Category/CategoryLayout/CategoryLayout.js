import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pagination from './Pagination';
import DropDown from './DropDown';
import CategoryCard from './CategoryCard';
import { fetchCategory, fieldChange } from '../category.actions';
import QuickViewDeal from '../../Shop/HotDeals/QuickViewDeal';

class CategoryLayout extends Component {
  state = {
    selectedProduct: null,
  };
  componentDidMount() {
    const { actions } = this.props;
    actions.fetchCategory();
  }

  toggleModal = selectedProduct => {
    this.setState({ selectedProduct });
  };

  handleChange = e => {
    const { actions } = this.props;
    const { value } = e.target;
    actions.fieldChange(value);
  };

  render() {
    const { products, search } = this.props;
    const { selectedProduct } = this.state;
    return (
      <section className="pro-equipment-section">
        <div className="container shorting-box border-bottom">
          <div className="row">
            <div className="col-sm-4 col-md-4">
              <div className="short-items">
                <span>Sort By:</span>
                <DropDown />
              </div>
              <div className="short-items">
                <input
                  type="text"
                  value={search}
                  placeholder="search"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-sm-8 col-md-8">
              <div className="w-100">
                <a
                  href="list-view-page.html"
                  className="grid-switcher"
                  title="List View"
                >
                  <i className="fas fa-list" />
                </a>
                <a
                  href="category-page.html"
                  className="grid-switcher"
                  title="Grid View"
                >
                  <i className="fas fa-th" />
                </a>
                <Pagination />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid pl-0 pr-0 product-xs-item">
          <div className="row no-gutters">
            {products.map(item => (
              <CategoryCard product={item} openQuickView={this.toggleModal} />
            ))}
          </div>
        </div>
        <div className="container box-shadow shorting-box">
          <div className="row">
            <div className="col-sm-4 col-md-4">
              <div className="short-items">
                <span>Show:</span>
                <DropDown
                  styles={{
                    width: '80px !important',
                    float: 'left',
                    marginLeft: '1rem',
                  }}
                />
              </div>
            </div>
            <div className="col-sm-8 col-md-8">
              <div className="w-100">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
        <QuickViewDeal
          dealDetail={selectedProduct}
          closeModal={this.toggleModal}
        />
      </section>
    );
  }
}

const mapStateToProps = ({ category }) => ({
  products: category.data,
  search: category.search,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchCategory,
      fieldChange,
    },
    dispatch
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(CategoryLayout);
