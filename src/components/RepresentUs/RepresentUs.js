import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import Faq from './Faq';
import GoogleMap from '../../utils/Map';
import Clients from '../Clients/Clients';

class RepresentUs extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
//    this.fetchData();
    }

    render() {
        return (
            <div>
                <Banner />
                <div class="content-wrapper pb-0 pt-0">
                    <div class="page wrap">
                        <div>
                            <h2 class="bha_heading_2 text-black text-center font-weight-bold pt-4 mb-4" style={{"z-index": "1", "position": "relative;"}} >Our Dust Extraction Systems Locations</h2>
                            <p class="text-center pb-3 p-10">Baghouse America, Inc. is pushing to enter all foreign emerging and existing markets throughout the globe. Are you a professional looking for a Boiler, Baghouse, Turbine, Dryer, or Industrial Fan Manufacturer? Do you install, contract, or supply turnkey industrial projects for power plants or process plants who generate their own power? Or are you just looking for some components for your current projects? We are the answer.</p>
                            <div class="banner-container mt-0">
                            <GoogleMap />
                            </div>
                        </div>
                        <Clients />
                        <Faq />
                    </div>
                </div>
            </div>
        );
    }
}

const mSTP = ({ news }) => ({
    
});
const mDTP = {  };
export default connect(mSTP, mDTP)(RepresentUs);

