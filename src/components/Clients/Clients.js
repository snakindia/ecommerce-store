import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick';

import {
    fetchClientList
} from './clients.actions';

class Clients extends Component {
    
    componentDidMount() {
        const { actions } = this.props;
        actions.fetchClientList();
    }
  
    render() {
        const clientData = this.props.data;
        const settings = {
            slidesToShow: 6,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 1500,
        };
        return (
            <div>
                <section className="pb-4 bg-opeque" id="company">
                    <div className="container-fluid">
                        <h2 className="bha_heading_2 z-index text-blue">
                            Companies using our products
                        </h2>
                    </div>
                </section>
                <div class="placement-client pt-0">
                    <div class="container pl-0 pr-0">
                        <section class="bhaClient slider portfolio">
                            <Slider {...settings}>
                            {
                                clientData &&
                                Object.keys(clientData).length > 0 &&
                                clientData.map((item, idx) => {
                                    return (
                                        <div class="item-container">
                                            <div class="thumbnail">
                                                <img className="filterNone" src={item.url} alt="" />
                                            </div>
                                        </div>
                                    );
                                })
                            }
                            </Slider>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ clients }) => ({
    data: clients.data
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
    {
        fetchClientList
    },
    dispatch
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(Clients);
