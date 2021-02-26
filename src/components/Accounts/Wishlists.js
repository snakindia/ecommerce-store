import React from 'react';
import { connect } from 'react-redux'
import { Tabs } from 'antd';
import Pagination from '../Shop/Pagination';
import { Select } from 'antd';
import ProductList from '../Shop/ProductList';
import moment from 'moment';
import { getWishlist } from './store/Actions';
import { MDBModal, MDBContainer } from 'mdbreact';
import QuickView from '../Shop/QuickView'
const { Option } = Select;
const { TabPane } = Tabs;
class Wishlists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            resultPerPage: 5,
            total: 0,
            items: [],
            duration: '3',
            status: '',
            tab: '1',
            found: 0,
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
    sortData = (data) => {
        const { duration } = this.state;
        const dt = moment().subtract(duration, 'months');
        data = data.sort((a, b) => {
            if (a.date_updated > b.date_updated) return -1;
            if (a.date_updated < b.date_updated) return 1;
            return 0;
        });

        return data;
    }


    setData = () => {
        let { data } = this.props;
        let items;
        const { currentPage, resultPerPage, tab, } = this.state;
        items = data && data.length > 0 ? data : [];
        items = this.sortData(items);
        const found = items ? items.length : 0;
        items = items.slice((currentPage - 1) * resultPerPage, currentPage * resultPerPage);

        this.setState({
            items, found
        })
    }

    changePagination = (PageNumber) => {
        this.setState({
            currentPage: PageNumber
        }, () => this.setData())
    }


    setDuration = (duration) => {
        this.setState({
            duration
        }, () => this.setData())

    }

    wishlistRemove = (item) => {

    }
    render() {
        const { currentPage, resultPerPage, duration } = this.state;
        const { item, showModal, visible } = this.state;
        let { loading, data } = this.props;

        data = this.sortData(data);
        const found = data ? data.length : 0;
        data = data.slice((currentPage - 1) * resultPerPage, currentPage * resultPerPage);

        return (
            <div className="tabContainer">
                <div className="tabs">
                    <Tabs defaultActiveKey="1" className="tabs" style={{ width: '100%' }}>
                        <TabPane tab="My Wishlist" key="1" />

                    </Tabs>
                    <div className="tab" style={{ display: 'block' }}>

                        <div className="container shorting-box">
                            <div className="row">
                                <div className="col-sm-6 col-md-12 col-lg-6 pl-0">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-4 col-md-5 pr-0">
                                            <div className="short-items">
                                                <span className="font-weight-bold">{found} Products in</span>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 col-md-4 pr-0">
                                            <div className="short-items">
                                                <Select
                                                    showSearch={false}
                                                    style={{ width: 130 }}
                                                    onChange={this.setDuration}
                                                    defaultValue={duration}
                                                >
                                                    <Option value='3'>03 Months</Option>
                                                    <Option value='6'>06 Months</Option>
                                                    <Option value='12'>12 Months</Option>

                                                </Select>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-12 col-lg-6">
                                    <div className="w-100">
                                        <Pagination
                                            current={currentPage}
                                            total={found}
                                            size={resultPerPage}
                                            onChange={this.changePagination}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid pl-0 pr-0 product-xs-list">
                                <div className="row">
                                    <div className="col-lg-12 pl-0 pr-0">
                                        <ul className="list-group">
                                            {data && data.length > 0 ? <> {data.map(item =>

                                                <ProductList
                                                    item={item}
                                                    quickView={this.show}
                                                    wishlistRemove={this.wishlistRemove}
                                                />)}
                                            </>
                                                :
                                                <div className="col-lg-12 pl-0 pr-0">
                                                    {loading ? null :
                                                        <div className="pro-rating">
                                                            <p>You haven't placed any order with us. When you do, their status will appear on this Page</p>
                                                        </div>
                                                    }
                                                </div>
                                            }
                                        </ul>
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
        )
    }
}

const mapStateToProps = (state) => ({
    loadingCart: state.accounts.loadingCart,
    loading: state.accounts.loading,
    error: state.accounts.error,
    authenticated: state.auth.authenticated,
    user: state.accounts.user,
    data: state.accounts.fav,
});
const mapDispatchToProps = dispatch => ({
    getWishlist: (payload) => dispatch(getWishlist(payload)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Wishlists);