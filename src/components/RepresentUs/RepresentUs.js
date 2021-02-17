import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import Faq from './Faq';
import GoogleMap from '../../utils/Map';
import Clients from '../Clients/Clients';
import { getFaq } from './store/Actions'
class RepresentUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //displayView: window.innerWidth < 450 ? '90%' : 0
        };
    }

    componentDidMount() {
        this.props.getFaq();
        document.title = 'Represent Us'
    }

    render() {
        const { faq } = this.props;
        let total_count, has_more, data;
        if (faq) {
            total_count = faq.total_count;
            has_more = faq.has_more;
            data = faq.data;
        }

        return (
            <div>
                <Banner />
                <div className="content-wrapper pb-0 pt-0" style={{ "margin-top": this.state.displayView}} >
                    <div className="page wrap">
                        <div className="pb-2 texture-bg mt-570">
                            <h2 className="bha_heading_2 text-black text-center font-weight-bold pt-4 mb-4" style={{ "z-index": "10", "position": "relative" }} >Our Dust Extraction Systems Locations</h2>
                            <p className="text-center pb-3 p-10">Baghouse America, Inc. is pushing to enter all foreign emerging and existing markets throughout the globe. Are you a professional looking for a Boiler, Baghouse, Turbine, Dryer, or Industrial Fan Manufacturer? Do you install, contract, or supply turnkey industrial projects for power plants or process plants who generate their own power? Or are you just looking for some components for your current projects? We are the answer.</p>
                            
                        </div>
                        <div id="represent-us-map-div" className="map-responsive">
                            <GoogleMap />
                        </div>
                        {/* <div id="represent-us-map-div" style={{"height":"65vh"}}>
                            <GoogleMap />
                        </div> */}
                        <div className="represent_company_brand">
                            <Clients />
                        </div>
                        {/* <Faq data={data}/> */}
                    </div>
                </div>
            </div>
        );
    }
}

const mSTP = state => {
    return {
        faq: state.representus.faq,
    }
};
const mDTP = dispatch => {
    return {
        getFaq: payload => dispatch(getFaq(payload))
    }
}

export default connect(mSTP, mDTP)(RepresentUs);

