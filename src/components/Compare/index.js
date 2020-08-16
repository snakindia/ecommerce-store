import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { removeFromCompare } from "../Shop/HotDeals/compare.actions";
import '../../assets/css/compare.css';

const Compare = () => {
    const dispatch = useDispatch();
    const compareProperties = {
        // 'Image': 'images',
        'Product Name': 'name',
        // 'Cycles': cycles,
        'Price': 'price',
        'Rating': 'regular_price',
        //  'Contact',




        
        // 'Satisfaction',
        //  'Lead Time'
    }

    const { comparedDeals } = useSelector(
        store => store.compare
    );

    console.log("compared deals", comparedDeals);


    const removeItem = (id) => {
        dispatch(removeFromCompare(id));
    }
    return (
        <>
            <div className="content-wrapper pb-0">
                <div className="pagewrap">
                    <div className="bgWhite pb-4">
                        <div className="container-fluid" style={{marginTop: '100px'}}>
                            <section className="bg-opeque box-shadow footerItems">
                                <div className="container-fluid">
                                    <h2 className="bha_heading_2 z-index text-blue mb-4">Product Compare</h2>
                                </div>
                            </section>
                            <section style={{float: 'left', width: '100%'}}>
                                <div className="container-fluid pb-5 mb-2 pt-4">
                                    <div className="comparison-table">
                                        <table className="table TFtableCol">
                                                <>
                                                    <thead className="bg-secondary">
                                                    <tr>
                                                        <td className="align-middle" />
                                                        <td className="p-0">
                                                            <div className="comparison-item border"><span
                                                                className="remove-item" onClick={() => removeItem(comparedDeals[0]._id)}>
                                                               <i className="fa fa-close"/></span>
                                                                <a className="comparison-item-thumb"
                                                                   href="shop-single.html"><img
                                                                    // src={comparedDeals[0][compareProperties[image]]}
                                                                    alt=""/></a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </thead>
                                                    {
                                                        Object.keys(compareProperties).map(item => (
                                                            <tbody id="summary" data-filter="target">
                                                            <tr className="bg-primary">
                                                                <th>{item}</th>
                                                                <td><span>{comparedDeals[0][compareProperties[item]]}</span>
                                                                </td>
                                                                <td><span>{comparedDeals[1][compareProperties[item]]}</span>
                                                                </td>
                                                                <td><span>{comparedDeals[2][compareProperties[item]]}</span>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        ))
                                                    }
                                                </>
                                        </table>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Compare;