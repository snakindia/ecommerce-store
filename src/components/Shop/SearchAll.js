import React, { Component } from 'react';
import { connect } from 'react-redux'
import Product from './Product';
import ProductList from './ProductList';
import Pagination from './Pagination';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Select } from 'antd';
import Loader from '../Loader/Loader'
import scrollToEl from '../../utils/scrollToEl';
import { Breadcrumb } from 'antd';
import { search } from './store/Actions';
import QuickView from './QuickView'
import { MDBModal, MDBContainer } from 'mdbreact';
import noproductImg from "../../assets/images/no-product.png"
const { Option } = Select;
class SearchAll extends Component {
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
        const query = new URLSearchParams(this.props.location.search);
        const str = query.get('search')
        if (str) {
            this.setState({str})
            this.props.search(str);
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
        else if (data && data.length > 0 && order == 'pricedesc') {
            const data2 = data.filter(d => !d.price)
            data = data.filter(d => d.price)

            data = data.sort((a, b) => {
                const ap = a.sale_price ? a.sale_price : a.price;
                const bp = b.sale_price ? b.sale_price : b.price;
                console.log(ap, bp);
                if (ap > bp) return -1;
                if (ap < bp) return 1;
                return 0;
            })
            data = data.concat(data2)
        }
        else if (data && data.length > 0 && order == 'priceasc') {
            const data2 = data.filter(d => !d.price)
            data = data.filter(d => d.price)

            data = data.sort((a, b) => {
                const ap = a.sale_price ? a.sale_price : a.price;
                const bp = b.sale_price ? b.sale_price : b.price;
                console.log(ap, bp);
                if (ap < bp) return -1;
                if (ap > bp) return 1;
                return 0;
            })
            data = data.concat(data2)
        }
        return data;
    }

    setData = (scroll = true) => {
        let { data } = this.props;
        let products;
        const { currentPage, resultPerPage, sorting } = this.state;
        products = data && data.data && data.data.length > 0 ? data.data : [];
        products = this.sortData(products, sorting);
        products = products.slice((currentPage - 1) * resultPerPage, currentPage * resultPerPage);
        this.setState({
            products
        }, () => {
            if (scroll) {
                scrollToEl('#categorycontent', -240, 500)
            }

        })

    }

    changePagination = (PageNumber) => {
        this.setState({
            currentPage: PageNumber
        }, () => this.setData())
    }

    changePageSize = (resultPerPageNew) => {
        const { resultPerPage } = this.state;
        this.setState({
            resultPerPage: resultPerPageNew, currentPage: 1
        }, () => this.setData(resultPerPageNew < resultPerPage))
    }
    sort = (sorting) => {
        this.setState({
            sorting
        }, () => this.setData())

    }

    setView = (e, view) => {
        e.preventDefault();
        this.setState({
            view
        })
    }
    componentDidUpdate(prevProps, prevState) {
        const query = new URLSearchParams(this.props.location.search);
        const str = query.get('search')
        if (prevProps.data != this.props.data) {
            this.setData()
        } else if (prevState.str != str ){
            this.setState({str})
            this.props.search(str);
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
    

    render() {
        const { currentPage, resultPerPage, products, sorting, view } = this.state;
        const { data, loading, menu, match: { params: { id } } } = this.props;
        const total = data && data.data ? data.data.length : 0;
        const { item, showModal, visible } = this.state;
        const query = new URLSearchParams(this.props.location.search);
        const str = query.get('search')


        return (
            <div class="content-wrapper topPadding" id="content">
                <div className="pagewrap">
                    <div className="bgWhite padding-bottom">
                        <div className="container-fluid">

                            <Breadcrumb style={{padding:"1rem 0"}}>
                                <Breadcrumb.Item> <Link to="/shop">Shop</Link></Breadcrumb.Item>
                                <Breadcrumb.Item> Search</Breadcrumb.Item>
                            </Breadcrumb>
                            <section className="bg-opeque product--heading">
                                <div className="container-fluid">
                                    <h2 className="bha_heading_2 z-index text-blue mb-4">
                                        Search result for {str}
                                    </h2>
                                </div>
                            </section>
                            {loading ? <Loader /> :

                                <section className="pro-equipment-section">
                                   


                                    {
                                        total && total > 0 ? <>

                                            <div className="container shorting-box border-bottom" id="categorycontent">
                                                <div className="row">
                                                    <div className="col-sm-5 col-md-5 pl-0 pr-0">
                                                        <div className="short-items">
                                                            <span>Sort By:</span>
                                                            <Select
                                                                showSearch={false}
                                                                style={{ width: 200 }}
                                                                onChange={this.sort}
                                                                defaultValue={sorting}
                                                            >
                                                                <Option value='latest'>Newest Items</Option>
                                                                <Option selected="bestselling" value="bestselling">Bestselling</Option>
                                                                <Option value="AZ">Alphabetical: A to Z</Option>
                                                                <Option value="ZA">Alphabetical: Z to A</Option>
                                                                <Option value="avgcustomerreview">Avg. Customer Review</Option>
                                                                <Option value="priceasc">Price: Low to High</Option>
                                                                <Option value="pricedesc">Price: High to Low</Option>

                                                            </Select>

                                                        </div>
                                                    </div>
                                                    <div className="col-sm-7 col-md-7 pl-0 pr-0">
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
                                                                        quickView={this.show}
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
                                                                            quickView={this.show}
                                                                        />

                                                                    )
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }


                                            <div className="container-fluid box-shadow shorting-box">
                                                <div className="row">
                                                    <div className="col-sm-4 col-md-4">
                                                        <div className="short-items">
                                                            <span>Show:</span>
                                                            <Select
                                                                showSearch={false}
                                                                style={{ width: 200 }}
                                                                onChange={this.changePageSize}
                                                                defaultValue={this.state.resultPerPage}
                                                            >
                                                                <Option value={10}>10</Option>
                                                                <Option value={20}>20</Option>
                                                                <Option value={50}>50</Option>
                                                                <Option value={100} >100</Option>
                                                                <Option value={200}>200</Option>

                                                            </Select>

                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8 col-md-8">
                                                        <div className="w-100">

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
                                        </> : <>
                                                {
                                                this.props.error ? 'Opps something went wrong...' :
                                                <div style={{width:"100%", textAlign:"center"}}>
                                                    <img src={noproductImg}/>
                                                    <h1 className="noprodct"><small><span className="noProdictText">No Product</span> found</small></h1>
                                                </div>
                                                }
                                            </>

                                    }
                                </section>
                            }
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
        )
    }

}
const mapStateToProps = (state) => ({
    data: state.shop.searchAllResult,
    loading: state.shop.loading,
});
const mapDispatchToProps = dispatch => ({
    search: (payload, limit) => dispatch(search(payload, limit)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(SearchAll));