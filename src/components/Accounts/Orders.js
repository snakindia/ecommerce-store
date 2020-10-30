import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux'
import { getOrderDetail } from './store/Actions';
import { Tabs } from 'antd';
import Pagination from '../Shop/Pagination';
import { Select } from 'antd';
import moment from 'moment';
const { Option } = Select;
const { TabPane } = Tabs;
class Orders extends React.Component {
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
      statusOption: ['Order Received',
        'Order In Process',
        'Order In Transit',
        'Order Delivered',
        'Order On Hold']
    };
  }
  
  componentDidMount(){
   if(this.props.data && this.props.data.data !== this.state.items){
     this.setData();
   }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setData()
    }
  }

  sortData = (data) => {
    let { duration, status, tab, statusOption } = this.state;
    const dt = moment().subtract(duration, 'months');
    statusOption.push('');
    const shouldStatus = tab == '1' ? status ? [status] : statusOption : ['Order Cancelled'];
    console.log({ shouldStatus })
    data = data.sort((a, b) => {
      if (a.date_updated < b.date_updated) return -1;
      if (a.date_updated > b.date_updated) return 1;
      return 0;
    });
    data = data.filter(datum => shouldStatus.includes(datum.status) && dt < moment(datum.date_created))
    //data = data.filter(datum => shouldStatus.includes(datum.status) )


    return data;
  }


  setData = () => {
    let { data } = this.props;
    let items;
    const { currentPage, resultPerPage, tab, } = this.state;
    items = data && data.data && data.data.length > 0 ? data.data : [];
    items = this.sortData(items);
    const found = items ? items.length : 0;
    items = items.slice((currentPage - 1) * resultPerPage, currentPage * resultPerPage);
    this.setState({
      items, found
    })
  }
  callback = (key) => {
    this.setState({ tab: key }, () => this.setData())
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

  setStatus = (status) => {
    this.setState({
      status
    }, () => this.setData())

  }
  render() {
    const { currentPage, resultPerPage, items, duration, status, statusOption, found, tab } = this.state;
    const { loading} = this.props;

    return (
      <div className="tabContainer">
        <div className="tabs">
          <Tabs defaultActiveKey="1" onChange={this.callback} className="tabs" style={{ width: '100%' }}>
            <TabPane tab="Orders" key="1" />
            <TabPane tab="Cancelled Orders" key="2" />
          </Tabs>
          <div className="tab" style={{ display: 'block' }}>

            <div className="container shorting-box">
              <div className="row">
                <div className="col-sm-6 col-md-6 pl-0">
                  <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-4">
                      <div className="short-items">
                        <span className="font-weight-bold">{found} Orders in</span>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 pl-0">
                      <div className="short-items">
                        <Select
                          showSearch={false}
                          style={{ width: 120 }}
                          onChange={this.setDuration}
                          defaultValue={duration}
                        >
                          <Option value='3'>03 Months</Option>
                          <Option value='6'>06 Months</Option>
                          <Option value='12'>12 Months</Option>

                        </Select>

                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 pl-0 pr-0">
                      <div className="short-items">
                        {tab == '1' && <Select
                          showSearch={false}
                          style={{ width: 150 }}
                          onChange={this.setStatus}
                          defaultValue={status}
                        >
                          <Option value="">Filter order by</Option>
                          {statusOption.map(op => <Option key={op} value={op}>{op}</Option>)}

                        </Select>
                        }

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6">
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
              {items && items.length > 0 ? <> {items.map(item =>
                <div className="row">
                  <div className="col-md-12 padding-lr0 padding-top10">
                    <div className="my-order-border" id="myTabContent">
                      <div className="col-md-12 pa  border-bottom" style={{ backgroundColor: '#f1f1f1' }}>
                        <div className="row padding-lr0">

                          <div className="col-sm-6 mb-6">
                            <div className="text-left">
                              <div className="lfloat-left">
                                <h5 className="location_head">
                                  <Link to={`/accounts/my-orders/${item.id}`}>ORDER # -  {item.id}</Link></h5>
                                <div className="pro_Price p-0">
                                  <p className=" currecny">
                                    <span className="sp-price">${item.grand_total}</span></p>
                                </div>
                                <div className="d-block float-left w-100">
                                  <p className="my-order-status">{item.status}</p>

                                </div>
                                <div className="text-small">Placed on {moment(item.date_created).format('MMM D , YYYY').toString()}</div>
                              </div>

                            </div>
                          </div>
                          <div className="col-sm-6 mb-6">
                            <div className="text-right">
                              <div className="float-right padding-top15">
                                <Link to={`/accounts/my-orders/${item.id}`}><i className="fas fa-angle-right"></i></Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              )}
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

            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loadingCart: state.accounts.loadingCart,
  loading: state.accounts.loading,
  error: state.accounts.error,
  authenticated: state.auth.authenticated,
  user: state.auth.customer_settings,
  data: state.auth.order_statuses,
});
const mapDispatchToProps = dispatch => ({
  getOrderDetail: (id) => dispatch(getOrderDetail(id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);