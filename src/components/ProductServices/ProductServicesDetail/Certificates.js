import React from 'react';
import AW01 from '../../../assets/images/aw-01.gif';
import AW02 from '../../../assets/images/aw-02.gif';
import AW03 from '../../../assets/images/aw-03.gif';
import AW04 from '../../../assets/images/aw-04.gif';
import BagHouse from '../../../assets/images/bag-house.png';
import Torit from '../../../assets/images/torit.jpg';

const Certificates = (is_certified) => {
  return (
    <section className="certificate-section" style={{"margin-top": "8%"}}>
         <div className="pagewrap">
            <div className="awardTag">
                <div className="container-fluid">
                    <div className="row justify_center">  
                        <img src={AW01} className="img-fluid" alt="..." width="150" />
                        <img src={AW02} className="img-fluid" alt="..." width="150" />
                        <img src={AW03} className="img-fluid" alt="..." width="150" />
                        <img src={AW04} className="img-fluid" alt="..." width="150" />
                    </div>
                </div>
            </div>
        </div>
        
        { is_certified == true ?
            <div className="compaire-container">
                <div className="text-center">
                    <div className="container content-padding">
                        <div className="row align-items-center card-gutter">
                            <div className="col-lg-4">
                                <div className="card-1 mx-auto mt-2 border-blue color--border">
                                    <div className="card-body p-0 pt-0 pb-0">
                                        <div style={{"height": "110px"}}></div>
                                        <h3 className="card-name text-gracy">Dust Collector Catridge Filters</h3>
                                        <h2 className="text-uppercase font-weight-bold mb-4 text-blue">Others</h2>
                                        <ul className="list-unstyled">
                                            <li className="card-list-item">Merv Raiting:<span className="font-weight-bold ml-3">14</span></li>
                                            <li className="card-list-item">Price: <span className="font-weight-bold ml-3">$</span></li> 
                                            <li className="card-list-item">
                                                <div className="star-rating">
                                                    <ul className="list-inline">
                                                        <span className="mr-3 ml-0 pl-0">Rating:</span>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="card-list-item">Contact:<span className="font-weight-bold ml-3">Not Available</span></li>
                                            <li className="card-list-item">Satisfaction Guarantee:
                                                <span className="font-weight-bold ml-3">No Returns</span>
                                            </li>
                                            <li className="card-list-item">Lead Time:<span className="font-weight-bold ml-3">17 days</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card-2 mx-auto border-red border-blue">
                                    <div className="card-body p-0 pb-0 pt-5">
                                        <img src={BagHouse} className="card-img-fit" alt="..." />
                                        <h3 className="card-name text-gracy">Dust Collector Catridge Filters</h3>
                                        <h2 className="text-uppercase font-weight-bold mb-4 text-blue">Baghouse America</h2>
                                        <ul className="list-unstyled">
                                            <li className="card-list-item">Merv Raiting:<span className="font-weight-bold ml-3">15</span></li>
                                            <li className="card-list-item">Price: <span className="font-weight-bold ml-3">$$</span></li>
                                            <li className="card-list-item">
                                                <div className="star-rating">
                                                    <ul className="list-inline">
                                                        <span className="mr-3 ml-0 pl-0">Rating:</span>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="card-list-item">
                                                <div className="call-section">
                                                    <div className="callLabel">Contact: </div>
                                                    <div className="float-right mr-3">
                                                        <a href="#" className="callBtn">Order Online</a>
                                                        <div className="mt-0 mb-0 text-center">or</div>
                                                        <a href="#" className="callBtn">
                                                            <div>Call for Pricing</div>
                                                            <div>(1-888-261-3538)</div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="card-list-item">Satisfaction Guarantee: <span className="font-weight-bold ml-3">Yes</span></li>
                                            <li className="card-list-item">Lead Time: <span className="font-weight-bold ml-3">In Stock</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card-3 mx-auto border-blue color--border mt-1">
                                    <div className="card-body p-0 pt-0 pb-0">
                                        <img src={Torit} className="card-img-fit" alt="..." />
                                        <h3 className="card-name text-gracy">Dust Collector Catridge Filters</h3>
                                        <h2 className="text-uppercase font-weight-bold mb-4 text-blue">Donaldson Torit</h2>
                                        <ul className="list-unstyled">
                                            <li className="card-list-item">Merv Raiting:<span className="font-weight-bold ml-3">15</span></li>
                                            <li className="card-list-item">Price: <span className="font-weight-bold ml-3">$$$$</span></li>
                                            <li className="card-list-item">
                                                <div className="star-rating">
                                                    <ul className="list-inline">
                                                        <span className="mr-3 ml-0 pl-0">Rating:</span>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="card-list-item">
                                                <div className="xsheight">
                                                    <div className="callLabel">Contact: </div>
                                                    <div className="float-right mr-3">
                                                    <a href="#" className="callBtn">
                                                     <div>Call for Pricing</div>
                                                     <div>(1-888-261-3538)</div>
                                                   </a>
                                                    </div>
                                                </div>
                                            </li>
                                          <li className="card-list-item">Satisfaction Guarantee: <span className="font-weight-bold ml-3">Re-Stocking Fee</span></li>
                                          <li className="card-list-item">Lead Time: <span className="font-weight-bold ml-3">In Stock</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : ''
        }
    </section>
    );
};

export default Certificates;
