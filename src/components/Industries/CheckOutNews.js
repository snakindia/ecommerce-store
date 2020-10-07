import React, { Component } from 'react';
import about_1 from '../../assets/images/about_1.jpg';

class CheckOutNews extends Component {
    
    render() {
        
        return (
            <section class="pro-equipment-section pl-0 pr-0">
                <div class="container-fluid">
                  <div class="row">
                    <div class="checkOut-container box-shadow padding_news">
                      <div class="row no-gutters">
                        <div class="col-lg-3">
                          <div class="card border-0 radious-0">
                            <img class="news-thumbnail" src={about_1} alt="..." />
                          </div>
                        </div>
                        <div class="col-lg-9">
                         <div class="border-0 radious-0">
                            <div class="card-body">
                              <h3 class="bha_heading_2 text-black pt-2">Checkout Our News</h3>
                              <a href="/news" class="btn bha-btn-primary">View Details</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
        );
    }
}


export default CheckOutNews;
