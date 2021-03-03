import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Image from './Image'
import { Breadcrumb, Rate } from 'antd';
import ContactForSale from './ContactForSale'
const CompareProductTable = ({ items, onClick }) => {
    return (
        <div class="content-wrapper topPadding" id="content">
            <div className="pagewrap">
                <div className="bgWhite padding-bottom">
                    <div className="container-fluid">
                        <Breadcrumb style={{ padding: "1rem 0" }}>
                            <Breadcrumb.Item> <Link to="/">Home</Link></Breadcrumb.Item>
                            <Breadcrumb.Item> <Link to="/shop">Shop</Link></Breadcrumb.Item>
                            <Breadcrumb.Item>Compare </Breadcrumb.Item>
                        </Breadcrumb>


                        <section className="bg-opeque product--heading">
                            <div className="container-fluid">
                                <h2 className="bha_heading_2 z-index text-white mb-4">Product Compare</h2>
                            </div>
                        </section>
                        <section >
                            <div className="container-fluid pb-5 mb-2 pt-4">
                                <div className="comparison-table table-responsive">
                                    <table className="table table-bordered TFtableCol">
                                        <thead className="bg-secondary">
                                            <tr>
                                                <td className="align-middle">
                                                    <label style={{ fontWeight: 'bold' }}>Product Image</label>
                                                </td>
                                                {items.map(d =>
                                                    <td className="p-0" key={d.id}>
                                                        <div className="comparison-item"><span className="remove-item" onClick={e => onClick(d)}><i className="fa fa-close"></i></span>
                                                            <Link className="comparison-item-thumb" to={`/shop/${d.id}`}>
                                                                <Image preview={false} item={d} alt="" height="200px" width="200px" />
                                                            </Link>
                                                        </div>
                                                    </td>
                                                )}

                                            </tr>
                                        </thead>
                                        <tbody id="summary" data-filter="target">
                                            <tr className="bg-primary">
                                                <th className="text-uppercase">Product Name</th>
                                                {items.map(d => <td key={d.name}><span className="font-weight-bold">
                                                    <Link className="comparison-item-thumb" to={`/shop/${d.id}`}>
                                                        {d.name}
                                                    </Link>
                                                </span></td>)}


                                            </tr>
                                            <tr>
                                                <th>Price</th>
                                                {items.map(d => <td key={`${d.name}price`}>${d.sale_price ? d.sale_price : d.regular_price}</td>)}

                                            </tr>
                                            <tr>
                                                <th>Featured</th>
                                                {items.map(d => <td key={`${d.name}featured`}>{d.featured ? 'Yes' : 'No'}</td>)}

                                            </tr>
                                            <tr>
                                                <th>Best Selling</th>
                                                {items.map(d => <td key={`${d.name}topselling`}>{d.topSelling ? 'Yes' : 'No'}</td>)}

                                            </tr>
                                            {/* <tr>
                                                <th>Brand</th>
                                                {items.map(d => <td key={`${d.name}brand`}>{d.topSelling ? 'Yes' : 'No'}</td>)}

                                            </tr> */}

                                            <tr>
                                                <th>Rating</th>
                                                {items.map(d => <td key={`${d.name}rating`}><Rate disabled defaultValue={d.reviews} /></td>)}

                                            </tr>
                                            <tr>
                                                <th>Contact</th>
                                                {items.map(d => <td key={`${d.name}contact`}><ContactForSale /></td>)}

                                            </tr>
                                            <tr>
                                                <th>Others</th>
                                                {items.map(d => <td key={`${d.name}contact`}>NA</td>)}

                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CompareProductTable;