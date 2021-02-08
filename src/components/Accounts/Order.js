import { Link, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux'
import { getOrderDetail, cancelOrder } from './store/Actions';
import { formatPhone } from '../../utils/helper'
import Loader from '../Loader/Loader';
import moment from 'moment';
class Order extends React.Component {
    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        this.props.getOrderDetail(id)
    }
    cancelIt = (e) => {
        e.preventDefault();
        const { statuses, match: { params: { id } } } = this.props;
        let cancelId;
        if (statuses && statuses.length > 0) {
            for (const st of statuses) {
                if (st.name == 'Order Cancelled') {
                    cancelId = st.id;
                }
            }
        }

        if (cancelId) {
            this.props.cancelOrder({ id, status_id: cancelId });
        }

    }

    render() {

        const { item } = this.props;
        let address = {};
        let billing = {};
        if (item && item.shipping_address) {
            address = item.shipping_address;
            billing = item.billing_address;
        }
        const statusOption = ['Order Received',
            'Order In Process',
            'Order In Transit',
            'Order Delivered'];
        const canCancelOption = [
            'Order Received',
            'Order In Process',
            'Order In Transit',
            ''
        ];
        const attributes = [

            { attribute: 'status', label: 'Order Status' },
            { attribute: 'number', label: 'Order ID' },
            { attribute: 'tracking_number', label: 'Tracking number' },
            { attribute: 'shipping_status', label: 'Shipping status' },
            { attribute: 'shipping_method', label: 'Shipping method' },
            { attribute: 'payment_method', label: 'Payment method' },
            { attribute: 'comments', label: 'Comments' },
            { attribute: 'note', label: 'Note' },
        ];

        return (
            <div className="tabContainer">
                {item ?
                    <div className="tabs">
                        {canCancelOption.includes(item.status) ?
                            <span className="add-address"><a onClick={e => this.cancelIt(e)}>Cancel Order</a></span> : null}
                        <input type="radio" name="tabs" id="tabone" checked="checked" />
                        <label for="tabone">Order Details</label>
                        <div className="tab">
                            <div className="container-fluid pa0">
                                <div className="col-md-12 pa  border-bottom">
                                    <div className="row">
                                        <div className="container px-1 px-md-4 py-5 mx-auto pa0">
                                            <div className="card">
                                                <div class="row d-flex justify-content-between px-3">
                                                    <div class="d-flex flex-column pa">
                                                        <p class="mb-0">Order ID <span><b>{item.number}</b></span></p>
                                                        {/* <p>Payment Status <span class="font-weight-bold">{item.paid && <span className="paid">Paid</span>}</span></p> */}
                                                    </div>
                                                    <div class="d-flex flex-column pa">
                                                        <p class="mb-0">Order placed on <span>{moment(item.date_created).format('MMM D , YYYY').toString()}</span></p>
                                                       
                                                    </div>
                                                </div>

                                                {statusOption.includes(item.status) ? <>
                                                    <div className="row d-flex justify-content-center padding-lr0">
                                                        <div className="col-12 padding-lr0">
                                                            <ul id="progressbar" className="text-center">
                                                                {statusOption.map(op => <li
                                                                    className={statusOption.indexOf(op) <= statusOption.indexOf(item.status) ? 'active step0' : 'step0'}
                                                                    key={`as${op}`}></li>
                                                                )}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="row justify-content-between top">
                                                        {statusOption.map(op => <div key={op} className="row d-flex icon-content">
                                                            <div className="d-flex flex-column">
                                                                <p className="font-weight-bold small text-left">{op}</p>
                                                            </div>
                                                        </div>)}


                                                    </div>
                                                </>
                                                    : <h4 className="redwarn">{item.status}</h4>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 pl-0 pr-0">
                                        <div className="container shorting-box">
                                        

                                            <h5 className="location_head">Order Detail</h5>
                                            <div class="row d-flex justify-content-between px-3">
                                                <div class="d-flex flex-column pa">
                                                    <p class="mb-0">Order Status: <span>{item.status}</span></p>
                                                    <p>Payment method: <span >{item.payment_method}</span></p>
                                                    <p>Payment Status: <span >{item.paid ? 'Paid':'Pending'}</span></p>
                                                    <p>Comments: <span >{item.comments}</span></p>
                                                </div>
                                                <div class="d-flex flex-column pa">
                                                    <p class="mb-0">Shipping status: <span>{item.shipping_status}</span></p>
                                                    {/* <p>Shipping method: <span >{item.shipping_method}</span></p> */}
                                                    <p>Tracking Number <span class="font-weight-bold">{item.tracking_number}</span></p>
                                                    <p>Note: <span >{item.note}</span></p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="text-left">
                                                        <div className="float-left">
                                                            <h5 className="location_head">Billing Address</h5>
                                                            <p className="padding-top15">
                                                                <strong>
                                                                    {`${billing.first_name} ${billing.last_name}`}</strong>
                                                            </p>
                                                            <div className="text-small">
                                                                {`${billing.address1} ${billing.address2} , ${billing.city}`}
                                                                {`${billing.state} , ${billing.postal_code} ${billing.country} `}
                                                            </div>
                                                        </div>
                                                        <div className="float-left padding-top15">
                                                            <i className="fa fa-phone bha-icon"></i>
                                                            <span className="font-weight-bold" style={{ fontSize: '0.9rem' }}>{formatPhone(billing.phone)} </span>

                                                        </div>
                                                    </div>
                                                </div>
                                           
                                                <div className="col-sm-6">
                                                    <div className="text-left">
                                                        <div className="float-left">
                                                            <h5 className="location_head">Shipping Address</h5>
                                                            <p className="padding-top15">
                                                                <strong>
                                                                    {`${address.first_name} ${address.last_name}`}</strong>
                                                            </p>
                                                            <div className="text-small">
                                                                {`${address.address1} ${address.address2} , ${address.city}`}
                                                                {`${address.state} , ${address.postal_code} ${address.country} `}
                                                            </div>
                                                        </div>
                                                        <div className="float-left padding-top15">
                                                            <i className="fa fa-phone bha-icon"></i>
                                                            <span className="font-weight-bold" style={{ fontSize: '0.9rem' }}>{formatPhone(address.phone)} </span>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-12 col-md-12 left-content padding-top15">
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-12">

                                                            <div className="table-responsive">
                                                                <h5 className="location_head">Order Summary</h5><table className="table">

                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">Product</th>
                                                                            <th scope="col"></th>
                                                                            <th scope="col">Item Price</th>
                                                                            <th scope="col">Item Unit</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {item.items.map(product => <tr key={product.id}>
                                                                            <th scope="row">
                                                                                <img src={
                                                                                    product.product_image && product.product_image[0] && product.product_image[0].url ? product.product_image[0].url : ''
                                                                                } width="72" height="72" />
                                                                            </th>
                                                                            <td style={{ verticalAlign: 'middle' }}>{product.name}</td>

                                                                            <td style={{ verticalAlign: 'middle' }}>{product.quantity}</td>
                                                                            <td style={{ verticalAlign: 'middle' }}>${product.price}</td>
                                                                        </tr>)}

                                                                        <tr>
                                                                            <td colspan="3" className="no-border" style={{ textAlign: 'right' }}>Subtotal</td>
                                                                            <td colspan="1" className="no-border">${item.subtotal}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="3" className="no-border" style={{ textAlign: 'right' }}>Shipping (Flat Rate)</td>
                                                                            <td colspan="1" className="no-border">${item.shipping_total}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="3" className="no-border" style={{ textAlign: 'right' }}>Tax</td>
                                                                            <td colspan="1" className="no-border">${item.tax_total}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="3" className="no-border" style={{ textAlign: 'right' }}>Discount</td>
                                                                            <td colspan="1" className="no-border">${item.discount_total}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="3" className="no-border" style={{ textAlign: 'right' }}>Grand Total</td>
                                                                            <td colspan="1" className="no-border">${item.grand_total}</td>
                                                                        </tr>

                                                                        <tr style={{ backgroundColor: '#f1f1f1' }}>
                                                                            <td colspan="3" className="no-border" style={{ textAlign: 'right' }}><h4>Amount Paid</h4> </td>
                                                                            <td colspan="1" className="no-border"><h4>${item.paid ? item.grand_total : 0}</h4></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loadingCart: state.accounts.loadingCart,
    loading: state.accounts.loading,
    item: state.accounts.order,
    statuses: state.accounts.statuses,
    error: state.accounts.error,
    authenticated: state.auth.authenticated,
    user: state.auth.customer_settings,
});
const mapDispatchToProps = dispatch => ({
    getOrderDetail: (id) => dispatch(getOrderDetail(id)),
    cancelOrder: (payload) => dispatch(cancelOrder(payload)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Order);