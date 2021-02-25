import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux'
import { getOrderDetail,getOrders } from './store/Actions';
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
       this.props.getOrders()
        this.setOrderStatuses(this.props.statuses);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setData()
    }
   
  }

  setOrderStatuses =(items)=>{
    let statusOption = items && items.length > 0 ? items.map(item=>item.name):[];
    statusOption =statusOption.filter(s=>s!=='Order Cancelled');
    statusOption =statusOption.filter(d=>d);
    //return statusOption;
    this.setState({statusOption})
  }

  sortData = (data) => {
    const { duration, status, tab, statusOption } = this.state;
    const dt = moment().subtract(duration, 'months');
   
    let shouldStatus = tab == '1' ? status ? [status] : statusOption : ['Order Cancelled'];
    //console.log('->>>>>>>>>>>>2',shouldStatus )
    const hasEmpty = shouldStatus && shouldStatus.length >0 ? shouldStatus.filter(df=>!df):false;
   // console.log('->>>>>>>>>>>>hasEmpty',hasEmpty )
    if(tab==1 && !status && (!hasEmpty || hasEmpty && hasEmpty.length ==0) ){
      shouldStatus.unshift('')
    }
   // console.log('->>>>>>>>>>>>2w',shouldStatus )
    data = data.sort((a, b) => {
      if (a.date_updated > b.date_updated) return -1;
      if (a.date_updated < b.date_updated) return 1;
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
    const { currentPage, resultPerPage,  duration, status, tab,items, found,statusOption } = this.state;
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
                <div className="col-sm-6 col-md-12 col-lg-7 pl-0">
                  <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-4">
                      <div className="short-items">
                        <span className="font-weight-bold">{found} Orders in</span>
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
                    <div className="col-xs-12 col-sm-4 col-md-4 pr-0">
                      <div className="short-items">
                        {tab == '1' && <Select
                          showSearch={false}
                          style={{ width: 170 }}
                          onChange={this.setStatus}
                          defaultValue={status}
                        >
                          {statusOption.map(op => op ?  <Option key={op} value={op}>{op}</Option> : <Option value="">Filter order by</Option> )}

                        </Select>
                        }

                      </div>


                    </div>

                  </div>
                </div>

                
                <div className="col-sm-6 col-md-12 col-lg-5 pl-0 pr-0">
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
                      <div className="col-md-12 pa" style={{ backgroundColor: 'rgb(251 251 251)' }}>
                        <div className="row padding-lr0">

                          <div className="col-sm-12 mb-6">
                            <div className="text-left">
                              <div className="lfloat-left">
                                <h5 className="location_head d-inline">
                                  <Link to={`/accounts/my-orders/${item.id}`}>ORDER # -  {item.number}</Link></h5>
                                  <div className="float-right">
                                <Link to={`/accounts/my-orders/${item.id}`}><i className="fas fa-angle-right"></i></Link>
                              </div>
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
  user: state.accounts.user,
  data: state.accounts.orders,
  statuses: state.accounts.statuses,
  orderSyncTime: state.accounts.orderSyncTime,
});
const mapDispatchToProps = dispatch => ({
  getOrderDetail: (id) => dispatch(getOrderDetail(id)),
  getOrders: () => dispatch(getOrders()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);