import React from 'react';
import { Pagination as P } from 'antd';
import 'antd/dist/antd.css';
const Pagination = (props) => {
    const { current, total, size, onChange } = props;

    const onChangeHandler = (e) => {
        onChange(e)
    }
    return (
        <P simple
            current={current}
            total={total}
            pageSize={size}
            onChange={onChangeHandler}
        />
    );
}
export default Pagination;