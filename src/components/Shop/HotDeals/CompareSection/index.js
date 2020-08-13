import React, { useState } from 'react';

const CompareSection = ({deals, removeComparedDeal}) => {
    const [collapse, setCollapse] = useState(false);
    if (!deals) {
        return null;
    }
    const removeDeal = (id) => {
        removeComparedDeal(id);
    }
    const toggleComparePanel = (e) => {
        e.preventDefault();
        setCollapse(!collapse);
    }
    const parentClass = ['btn', 'btn-header-link', 'text-uppercase', 'font-weight-bold', 'collapsed'];
    return (
                <div id="main">
                    <div className="container" id="about_popup" style={{display: 'block'}}>
                        <div id="faq">
                            <div className="card">
                                <div className="card-header" id="faqhead1">
                                    <a
                                        href="#!"
                                        className={collapse ? 'btn btn-header-link text-uppercase font-weight-bold': 'btn btn-header-link text-uppercase font-weight-bold collapsed' }
                                        data-toggle="collapse"
                                        data-target="#faq1"
                                        aria-expanded="true"
                                        aria-controls="faq1"
                                        onClick={(e) => toggleComparePanel(e)}
                                    >
                                        Compare<span> ({deals.length})</span>
                                    </a>
                                </div>

                                <div id="faq1" className={collapse ? "collapse show": "collapse"} aria-labelledby="faqhead1" data-parent="#faq">
                                    <div className="card-body" id="myDiv">
                                        <ul className="compare-widget__products">
                                            {
                                                deals.map(item => (
                                                    <li key={item._id} className="compare-widget__product">
                                                        <img src="images/product/img1.jpg" alt=""
                                                             className="compare-widget__image" />
                                                        <h3 className="compare-widget__title">{item.name}</h3>
                                                        <button
                                                            className="compare-widget__product-remove-trigger"
                                                            title="Remove"
                                                            onClick={() =>removeDeal(item._id)}
                                                        >Remove Product
                                                        </button>
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                        {
                                            deals && deals.length > 1
                                            && <a href="compare.html" className="btn bha-btn-primary w-100">COMPARE
                                                SELECTED</a>
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
}

export default CompareSection;