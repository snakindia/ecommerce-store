import React, { Component } from 'react';
import EventImg from '../../assets/images/1.png';

class CheckOutEvents extends Component {
    
    render() {
        
        return (
            <sectioin class="pro-equipment-section mt-0 pt-3 pl-0 pr-0 pagewrap-inner">
                <div class="container-fluid">
                    <div class="row">
                        <div class="checkOut-container box-shadow">
                            <div class="row no-gutters">
                                <div class="col-lg-3">
                                    <div class="card border-0 radious-0">
                                        <img class="news-thumbnail" src={EventImg} alt="..." />
                                    </div>
                                </div>
                                <div class="col-lg-9">
                                    <div class="border-0 radious-0">
                                        <div class="card-body">
                                            <h3 class="bha_heading_2 text-black pt-2">Checkout Our Events</h3>
                                            <p class="card-text small">Lorem ipsum dollar site amntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                            <a href="/events" class="btn bha-btn-primary">View Details</a>
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
