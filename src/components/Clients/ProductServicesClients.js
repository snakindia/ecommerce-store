import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick';

import {
    fetchClientList
} from './clients.actions';

class ProductServicesClients extends Component {
    
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
            <section class="clientBg">
                <div class="bg-opeque" id="company">
                    <div class="container-fluid">
                        <h2 class="bha_heading_2 z-index text-blue">
                            Companies using our products
                        </h2>
                    </div>
                </div>
                <div class="placement-client pt-0" style={{"padding":"1rem 3rem"}}>
                    <div class="container-fluid">
                        <section class=" slider ">
                            <Slider {...settings}>
                            {
                                clientData &&
                                Object.keys(clientData).length > 0 &&
                                clientData.map((item, idx) => {
                                    return (
                                        <div class="item-container">
                                            <div class="thumbnail">
                                                <img className="filterNone" src={item.url} alt=""  />
                                            </div>
                                        </div>
                                    );
                                })
                            }
                            </Slider>
                        </section>
                    </div>
                </div>
            </section>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductServicesClients);
