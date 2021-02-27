import React, { Component } from 'react';
import Image from './Image'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Shop from './index';
import Detail from './Detail';
import Accounts from '../Accounts/Accounts'
import { compareWith, removeAllCompare } from './store/Actions'
import { connect } from 'react-redux';
import { Collapse, Select } from 'antd';
import { notification } from '../../utils/helper';
import SearchAll from './SearchAll';
const { Panel } = Collapse;
const { Option } = Select;
class CompareHoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerVisible: false
        }
    }

    clearAll =(e)=>{
        e.preventDefault();
        this.props.removeAllCompare()
    }

    componentDidUpdate(prevProps) {
        const { data } = this.props;
        if (data != prevProps.data && data.length > 0) {
            this.setState({ drawerVisible: true })
        }
    }
    onClose = () => {
        this.setState({ drawerVisible: false })
    }
    removeCompare = (item) => {
        const { data } = this.props;

        if (data && data.length == 1) {
            this.setState({ drawerVisible: false })
        }
        this.props.compareWith({ type: 'remove', item })
    }
    onClick = (e) => {
        e.preventDefault()
        const { data } = this.props;
        if (data.length == 1) {
            notification('error', 'Please select at least two products to compare')
        }

    }

    render() {
        const { drawerVisible } = this.state;
        const { data, children } = this.props;
        return (
            <>
                <Switch>
                    <Route path="/shop/search" component={SearchAll} />
                    <Route path="/shop/:id" component={Detail} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/category/:id" component={Shop} />
                    <Route path="/accounts" component={Accounts} />
                </Switch>
                <div className="compare-collaspe-div">
                    {data && data.length > 0 ?
                        <Collapse

                            expandIconPosition="right"
                            className="comparee"
                            style={{zIndex:99999999}}

                        >
                            <Panel header={<>Compare<span> ({data.length})</span></>} key="1" >
                                <div id="faq1" className="collapse show" >
                                    <div className="card-body" id="myDiv">
                                        <ul className="compare-widget__products pl-0">
                                            {data.map(datum =>
                                                <li className=" media compare-widget__product">
                                                    <Image height="40px" width="40px" item={datum} preview={false} alt="" className="compare-widget__image" />
                                                   <div className="media-body">
                                                    <h3 className="compare-widget__title">
                                                        {datum.name}
                                                    </h3>
                                                    </div>
                                                    <button className="compare-widget__product-remove-trigger" title="Remove" onClick={e => this.removeCompare(datum)}>
                                                        Remove Product
                                                         </button>
                                                </li>
                                            )}

                                        </ul>
                                        {data.length > 1 ?
                                            <Link to={`/compare?ids=${data.map(d => d.id).toString()}`} className="btn bha-btn-primary w-100">COMPARE SELECTED</Link>
                                            : <Link onClick={this.onClick } className="btn bha-btn-primary w-100">COMPARE SELECTED</Link>
                                        }
                                        <button onClick={this.clearAll} className="bha-btn-secondry hotLink mr-2 ml-2">Remove All</button>
                                    </div>
                                </div>

                            </Panel>

                        </Collapse>
                        : null}
                </div>

            </>

        );
    }
}

const mapStateToProps = (state) => ({
    data: state.shop.compare
});
const mapDispatchToProps = dispatch => ({
    compareWith: (payload) => dispatch(compareWith(payload)),
    removeAllCompare: () => dispatch(removeAllCompare()),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompareHoc);