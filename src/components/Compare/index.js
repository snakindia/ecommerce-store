import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCompare } from './compare.actions';
import CompareImages from './CompareImages';
import { mapKeys } from './constants';
import Rating from '../common/Rating';

const Compare = () => {
  const dispatch = useDispatch();

  const { comparedDeals } = useSelector(store => store.compare);

  const removeItem = id => {
    dispatch(removeFromCompare(id));
  };
  const noData =
    !comparedDeals || (Array.isArray(comparedDeals) && !comparedDeals.length);

  return (
    <>
      <div className="content-wrapper topPadding" id="content">
        <div className="pagewrap">
          <div className="bgWhite padding-bottom">
            <div className="container-fluid">
              <ol className="breadcrumb breadcrumb-bar pb-0 pt-1 small">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/shop">Shop Now</Link>
                </li>
                <li className="breadcrumb-item active">Compare</li>
              </ol>
            </div>
            <section className="bg-opeque box-shadow footerItems">
              <div className="container-fluid">
                <h2 className="bha_heading_2 z-index text-blue mb-4">
                  Product Compare
                </h2>
              </div>
            </section>
            <section style={{ float: 'left', width: '100%' }}>
              <div className="container-fluid pb-5 mb-2 pt-4">
                <div className="comparison-table">
                  {noData ? (
                    'No Data to Compare'
                  ) : (
                    <table className="table TFtableCol">
                      <>
                        <CompareImages
                          data={comparedDeals}
                          handleCloseClick={removeItem}
                        />
                        {Object.keys(mapKeys).map(key => (
                          <tbody key={key} id="summary" data-filter="target">
                            <tr className="bg-primary">
                              <th>{key}</th>
                              {comparedDeals.map(deal => {
                                return (
                                  <td key={deal.id}>
                                    {key === 'Rating' ? (
                                      <Rating ratings={3} />
                                    ) : (
                                      <span>
                                        {key === 'Price' ? '$' : ''}{' '}
                                        {deal[mapKeys[key]]}
                                      </span>
                                    )}
                                  </td>
                                );
                              })}
                            </tr>
                          </tbody>
                        ))}
                      </>
                    </table>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compare;
