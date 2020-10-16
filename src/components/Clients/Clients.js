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
            autoplaySpeed: 5000,
             responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
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
                <div className="placement-client pt-0">
                    <div className="container pl-0 pr-0">
                        <section className="slider">
                            <Slider {...settings}>
                            {
                                clientData &&
                                Object.keys(clientData).length > 0 &&
                                clientData.map((item, idx) => {
                                    return (
                                        <div className="item-container">
                                            <div className="thumbnail">
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
