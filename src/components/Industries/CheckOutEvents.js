import React, { Component } from 'react';
import EventImg from '../../assets/images/1.png';

class CheckOutEvents extends Component {
    
    render() {
        
        return (
            <sectioin className="pro-equipment-section mt-0 pt-3 pl-0 pr-0 pagewrap-inner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="checkOut-container box-shadow">
                            <div className="row no-gutters">
                                <div className="col-lg-3">
                                    <div className="card border-0 radious-0">
                                        <img className="news-thumbnail" src={EventImg} alt="..." />
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="border-0 radious-0">
                                        <div className="card-body">
                                            <h3 className="bha_heading_2 text-black pt-2">Checkout Our Events</h3>
                                            <a href="/events" className="btn bha-btn-primary">View Details</a>
                                        </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </sectioin>
        );
    }
}


export default CheckOutEvents;
