import React, { Component } from 'react';
import Image from './Image'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Shop from './index';
import Detail from './Detail';
import { compareWith } from './store/Actions'
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
                                        <ul className="compare-widget__products">
                                            {data.map(datum =>
                                                <li className="compare-widget__product">
                                                    <Image height="40px" width="40px" src="images/product/img1.jpg" preview={false} alt="" className="compare-widget__image" />
                                                    <h3 className="compare-widget__title">
                                                        {datum.name}
                                                    </h3>
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
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompareHoc);