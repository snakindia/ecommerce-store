import React from 'react';
import AW01 from '../../../assets/images/aw-01.gif';
import AW02 from '../../../assets/images/aw-02.gif';
import AW03 from '../../../assets/images/aw-03.gif';
import AW04 from '../../../assets/images/aw-04.gif';
import BagHouse from '../../../assets/images/bag-house.png';
import Torit from '../../../assets/images/torit.jpg';

const Certificates = () => {
  return (
    <section class="certificate-section" style={{"margin-top": "8%"}}>
         <div class="pagewrap">
            <div class="awardTag">
                <div class="container-fluid">
                    <div class="row">  
                        <img src={AW01} class="img-fluid" alt="..." width="150" />
                        <img src={AW02} class="img-fluid" alt="..." width="150" />
                        <img src={AW03} class="img-fluid" alt="..." width="150" />
                        <img src={AW04} class="img-fluid" alt="..." width="150" />
                    </div>
                </div>
            </div>
        </div>
        
        <div class="compaire-container">
            <div class="text-center">
                <div class="container content-padding">
                    <div class="row align-items-center card-gutter">
                        <div class="col-lg-4">
                            <div class="card-1 mx-auto mt-2 border-blue color--border">
                                <div class="card-body p-0 pt-0 pb-0">
                                    <div style={{"height": "110px"}}></div>
                                    <h3 class="card-name text-gracy">Dust Collector Catridge Filters</h3>
                                    <h2 class="text-uppercase font-weight-bold mb-4 text-blue">Others</h2>
                                    <ul class="list-unstyled">
                                        <li class="card-list-item">Merv Raiting:<span class="font-weight-bold ml-3">14</span></li>
                                        <li class="card-list-item">Price: <span class="font-weight-bold ml-3">$</span></li> 
                                        <li class="card-list-item">
                                            <div class="star-rating">
                                                <ul class="list-inline">
                                                    <span class="mr-3 ml-0 pl-0">Rating:</span>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="card-list-item">Contact:<span class="font-weight-bold ml-3">Not Available</span></li>
                                        <li class="card-list-item">Satisfaction Guarantee:
                                            <span class="font-weight-bold ml-3">No Returns</span>
                                        </li>
                                        <li class="card-list-item">Lead Time:<span class="font-weight-bold ml-3">17 days</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="card-2 mx-auto border-red border-blue">
                                <div class="card-body p-0 pb-0 pt-5">
                                    <img src={BagHouse} class="card-img-fit" alt="..." />
                                    <h3 class="card-name text-gracy">Dust Collector Catridge Filters</h3>
                                    <h2 class="text-uppercase font-weight-bold mb-4 text-blue">Baghouse America</h2>
                                    <ul class="list-unstyled">
                                        <li class="card-list-item">Merv Raiting:<span class="font-weight-bold ml-3">15</span></li>
                                        <li class="card-list-item">Price: <span class="font-weight-bold ml-3">$$</span></li>
                                        <li class="card-list-item">
                                            <div class="star-rating">
                                                <ul class="list-inline">
                                                    <span class="mr-3 ml-0 pl-0">Rating:</span>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="card-list-item">
                                            <div class="call-section">
                                                <div class="callLabel">Contact: </div>
                                                <div class="float-right mr-3">
                                                    <a href="#" class="callBtn">Order Online</a>
                                                    <div class="mt-0 mb-0 text-center">or</div>
                                                    <a href="#" class="callBtn">
                                                        <div>Call for Pricing</div>
                                                        <div>(1-888-261-3538)</div>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="card-list-item">Satisfaction Guarantee: <span class="font-weight-bold ml-3">Yes</span></li>
                                        <li class="card-list-item">Lead Time: <span class="font-weight-bold ml-3">In Stock</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="card-3 mx-auto border-blue color--border mt-1">
                                <div class="card-body p-0 pt-0 pb-0">
                                    <img src={Torit} class="card-img-fit" alt="..." />
                                    <h3 class="card-name text-gracy">Dust Collector Catridge Filters</h3>
                                    <h2 class="text-uppercase font-weight-bold mb-4 text-blue">Donaldson Torit</h2>
                                    <ul class="list-unstyled">
                                        <li class="card-list-item">Merv Raiting:<span class="font-weight-bold ml-3">15</span></li>
                                        <li class="card-list-item">Price: <span class="font-weight-bold ml-3">$$$$</span></li>
                                        <li class="card-list-item">
                                            <div class="star-rating">
                                                <ul class="list-inline">
                                                    <span class="mr-3 ml-0 pl-0">Rating:</span>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="card-list-item">
                                            <div class="xsheight">
                                                <div class="callLabel">Contact: </div>
                                                <div class="float-right mr-3">
                                                <a href="#" class="callBtn">
                                                 <div>Call for Pricing</div>
                                                 <div>(1-888-261-3538)</div>
                                               </a>
                                                </div>
                                            </div>
                                        </li>
                                      <li class="card-list-item">Satisfaction Guarantee: <span class="font-weight-bold ml-3">Re-Stocking Fee</span></li>
                                      <li class="card-list-item">Lead Time: <span class="font-weight-bold ml-3">In Stock</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Certificates;
