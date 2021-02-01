import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
const Breadcrum = ({ data }) => {
    let arr = [];
    arr.push({ title: 'Shop', a: '/shop' });
    if (data && data.parent_category_detail) {
        arr.push({ title: data.parent_category_detail.name, a: `/category/${data.parent_category_detail._id}` });
    }
    if (data && data.category_detail) {
        arr.push({ title: data.category_detail.name, a: `/category/${data.category_detail._id}` });
    }

    return (
        <Breadcrumb>
            {arr.map(item => <Breadcrumb.Item id={item.a}>
                <Link to={item.a}>{item.title}</Link>
            </Breadcrumb.Item>)}
            {data && data.name ? <Breadcrumb.Item>{data.name}</Breadcrumb.Item> : null}

        </Breadcrumb>
    )
}
export default Breadcrum;