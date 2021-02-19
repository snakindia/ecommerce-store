import React, { Component , useEffect} from 'react';
import { Link } from 'react-router-dom'
import Image from './Image'
import { connect } from 'react-redux';
import { compareWith,getCompareProducts } from './store/Actions'
import { Breadcrumb,Rate } from 'antd';
const CompareProducts = ({ item, data, compareWith, location,getCompareProducts }) => {
    const query = new URLSearchParams(location.search);
    const urlIds = query.get('ids')
    let ids = data && data.length > 0 ? data.map(d => d.id) : []
    useEffect(()=>{
        if(ids && ids.length > 0){

        } else {
            getCompareProducts(urlIds)
        }
    },[])
   
    const onClick = (item) => {
        compareWith({ type: 'remove', item })
    }
    return (
        <div class="content-wrapper topPadding" id="content">
            <div className="pagewrap">
                <div className="bgWhite padding-bottom">
                    <div className="container-fluid">
                        <Breadcrumb>
                            <Breadcrumb.Item> <Link to="/">Home</Link></Breadcrumb.Item>
                            <Breadcrumb.Item> <Link to="/shop">Shop</Link></Breadcrumb.Item>
                            <Breadcrumb.Item>Compare </Breadcrumb.Item>
                        </Breadcrumb>


                        <section className="bg-opeque product--heading">
                            <div className="container-fluid">
                                <h2 className="bha_heading_2 z-index text-blue mb-4">Product Compare</h2>
                            </div>
                        </section>
                        <section >
                            <div className="container-fluid pb-5 mb-2 pt-4">
                                <div className="comparison-table">
                                    <table className="table TFtableCol">
                                        <thead className="bg-secondary">
                                            <tr>
                                                <td className="align-middle">

                                                </td>
                                                {data.map(d=>
                                                <td className="p-0" key={d.id}>
                                                    <div className="comparison-item border"><span className="remove-item" onClick={e=>onClick(d)}><i className="fa fa-close"></i></span>
                                                        <Link className="comparison-item-thumb" to={`/shop/${d.id}`}>
                                                            <Image preview={false} item={d} alt="" height="200px"  width="200px"/>
                                                            </Link>
                                                    </div>
                                                </td>
                                                )}

                                            </tr>
                                        </thead>
                                        <tbody id="summary" data-filter="target">
                                            <tr className="bg-primary">
                                                <th className="text-uppercase">Product Name</th>
                                                {data.map(d=><td key={d.name}><span className="font-weight-bold">{d.name}</span></td>)}
                                                

                                            </tr>
                                            <tr>
                                                <th>Price</th>
                                                {data.map(d=><td key={`${d.name}price`}>{d.sale_price ? d.sale_price :d.regular_price}</td>)}

                                            </tr>
                                            <tr>
                                                <th>Featured</th>
                                                 {data.map(d=><td key={`${d.name}featured`}>{d.featured ? 'Yes':'No'}</td>)}

                                            </tr> 
                                            <tr>
                                                <th>Best Selling</th>
                                                 {data.map(d=><td key={`${d.name}topselling`}>{d.topSelling ? 'Yes':'No'}</td>)}

                                            </tr>
                                           
                                            <tr>
                                                <th>Rating</th>
                                                {data.map(d=><td key={`${d.name}rating`}><Rate readOnly /></td>)}

                                            </tr>
                                            <tr>
                                                <th>Contact</th>
                                                {data.map(d=><td key={`${d.name}contact`}>Not Available</td>)}

                                            </tr>
                                            <tr>
                                                <th>Satisfaction Guarantee</th>
                                                {data.map(d=><td key={`${d.name}contact`}>No return</td>)}

                                            </tr>
                                            <tr>
                                                <th>Lead Time</th>
                                                {data.map(d=><td key={`${d.name}contact`}>17 days</td>)}

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
const mapStateToProps = (state) => ({
    data: state.shop.compare
});
const mapDispatchToProps = dispatch => ({
    compareWith: (payload) => dispatch(compareWith(payload)),
    getCompareProducts: (payload) => dispatch(getCompareProducts(payload)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompareProducts);