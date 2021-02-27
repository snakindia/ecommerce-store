import React, { Component, useEffect, useState } from 'react';
import { Rate, Pagination } from 'antd';
import moment from 'moment'
import avtarImg from '../../assets/images/img_avatar3.png';
const Reviews = ({data}) => {
    data =data && data.length > 0 ? data.sort((a,b)=>a.updatedAt < b.updatedAt ?  1 : a.updatedAt > b.updatedAt ? -1 :0):[]
    const pageSize =5;
    const [items,  setItems] =useState([])
    const onChange =(e,v)=>{
        let i = (e-1)*v;
        let j = (e)*v;
        setItems(data.slice(i,j))
    }
    useEffect(()=>{
        setItems(data.slice(0,5))
    },[data])
   
    return (
        <>
            {data && data.length > 0 ? <>
                <Pagination   simple  total={data.length} pageSize={pageSize} onChange={onChange} />
                {items.map(item =>
                    <div className="media pl-0 pb-1 pr-0" key={item._id}>
                        <img className="align-self-start mr-3" src={avtarImg} alt="" width="70" />
                        <div className="media-body bha-review">
                            <h6 className="mt-0"><span>{item.user && item.user[0] && item.user[0].full_name ? item.user[0].full_name : ''} </span>

                                <span>{moment(item.updatedAt).format('MMMM DD, YYYY hh:mm:ssA')}</span>
                            </h6>
                            <div>{item.review}</div>
                            <Rate disabled defaultValue={item.rating} />
                        </div>
                    </div>
                )}
            </> : null}

        </>
    );
}
export default Reviews;