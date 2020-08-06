import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pagination from './Pagination';
import DropDown from './DropDown';
import CategoryCard from './CategoryCard';
import {
  resetPage,
  changePage,
  searchChange,
  fetchCategory,
  dropDownChange,
} from '../category.actions';
import QuickViewDeal from '../../Shop/HotDeals/QuickViewDeal';
import {
  LAYOUT,
  SORT_BY_OPTIONS,
  PAGE_SIZE_OPTIONS,
} from './categoryLayout.constants';
import CategoryListCard from './CategoryListCard';

class CategoryLayout extends Component {
  state = {
    selectedProduct: null,
    layout: LAYOUT.GRID,
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
    actions.searchChange(value);
    actions.resetPage();
  };

  handleLayoutChange = layout => event => {
    event.preventDefault();
    this.setState({ layout });
  };

  handlePageSizeChange = (fieldName, value) => {
    const { actions } = this.props;
    actions.dropDownChange(fieldName, value);
    actions.resetPage();
  };

  render() {
    const {
      size,
      search,
      actions,
      products,
      currentPage,
      totalRecords,
    } = this.props;
    const { selectedProduct, layout } = this.state;
    const isGridLayout = layout === LAYOUT.GRID;
    const CardComponent = isGridLayout ? CategoryCard : CategoryListCard;
    const Wrapper1 = isGridLayout ? Fragment : 'div';
    const Wrapper2 = isGridLayout ? Fragment : 'ul';
    return (
      <section className="pro-equipment-section">
        <div className="container shorting-box border-bottom">
          <div className="row">
            <div className="col-sm-4 col-md-4">
              <div className="short-items">
                <span>Sort By:</span>
                <DropDown
                  name="sortBy"
                  options={SORT_BY_OPTIONS}
                  onChange={actions.dropDownChange}
                />
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
                  href="#"
                  className="grid-switcher"
                  title="List View"
                  onClick={this.handleLayoutChange(LAYOUT.LIST)}
                >
                  <i className="fas fa-list" />
                </a>
                <a
                  href="#"
                  className="grid-switcher"
                  title="Grid View"
                  onClick={this.handleLayoutChange(LAYOUT.GRID)}
                >
                  <i className="fas fa-th" />
                </a>
                <Pagination
                  size={size}
                  currentPage={currentPage}
                  totalRecords={totalRecords}
                  changePage={actions.changePage}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`container-fluid pl-0 pr-0 product-xs-${
            isGridLayout ? 'item' : 'list'
          }`}
        >
          <div className={`row ${isGridLayout ? 'no-gutters' : ''}`}>
            <Wrapper1 className="col-lg-12">
              <Wrapper2 className="list-group">
                {products.map(item => (
                  <CardComponent
                    product={item}
                    openQuickView={this.toggleModal}
                  />
                ))}
              </Wrapper2>
            </Wrapper1>
          </div>
        </div>
        <div className="container box-shadow shorting-box">
          <div className="row">
            <div className="col-sm-4 col-md-4">
              <div className="short-items">
                <span>Show:</span>
                <DropDown
                  name="size"
                  styles={{
                    width: '80px !important',
                    float: 'left',
                    marginLeft: '1rem',
                  }}
                  options={PAGE_SIZE_OPTIONS}
                  onChange={this.handlePageSizeChange}
                />
              </div>
            </div>
            <div className="col-sm-8 col-md-8">
              <div className="w-100">
                <Pagination
                  size={size}
                  currentPage={currentPage}
                  totalRecords={totalRecords}
                  changePage={actions.changePage}
                />
              </div>
            </div>
          </div>
        </div>
        <QuickViewDeal
          dealDetail={selectedProduct}
          onSale={(selectedProduct || {}).on_sale}
          closeModal={this.toggleModal}
        />
      </section>
    );
  }
}

const mapStateToProps = ({ category }) => ({
  size: category.size,
  search: category.search,
  products: category.data,
  currentPage: category.currentPage,
  totalRecords: category.total_count,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      resetPage,
      changePage,
      searchChange,
      fetchCategory,
      dropDownChange,
    },
    dispatch
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(CategoryLayout);
