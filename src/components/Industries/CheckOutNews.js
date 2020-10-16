import React, { Component } from 'react';
import about_1 from '../../assets/images/about_1.jpg';

class CheckOutNews extends Component {
    
    render() {
        
        return (
            <section className="pro-equipment-section pl-0 pr-0">
                <div className="container-fluid">
                  <div className="row">
                    <div className="checkOut-container box-shadow padding_news">
                      <div className="row no-gutters">
                        <div className="col-lg-3">
                          <div className="card border-0 radious-0">
                            <img className="news-thumbnail" src={about_1} alt="..." />
                          </div>
                        </div>
                        <div className="col-lg-9">
                         <div className="border-0 radious-0">
                            <div className="card-body">
                              <h3 className="bha_heading_2 text-black pt-2">Checkout Our News</h3>
                              <a href="/news" className="btn bha-btn-primary">View Details</a>
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
