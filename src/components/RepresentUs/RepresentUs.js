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
    }

    componentDidMount() {
        this.props.getFaq();
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
                <div class="content-wrapper pb-0 pt-0">
                    <div class="page wrap">
                        <div>
                            <h2 class="bha_heading_2 text-black text-center font-weight-bold pt-4 mb-4" style={{ "z-index": "1", "position": "relative;" }} >Our Dust Extraction Systems Locations</h2>
                            <p class="text-center pb-3 p-10">Baghouse America, Inc. is pushing to enter all foreign emerging and existing markets throughout the globe. Are you a professional looking for a Boiler, Baghouse, Turbine, Dryer, or Industrial Fan Manufacturer? Do you install, contract, or supply turnkey industrial projects for power plants or process plants who generate their own power? Or are you just looking for some components for your current projects? We are the answer.</p>
                            <div class="banner-container mt-0" style={{height:'600px'}}>
                                <GoogleMap />
                            </div>
                        </div>
                        <Clients />
                        <Faq data={data}/>
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
