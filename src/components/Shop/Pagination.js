import React from 'react';
import { Pagination as P } from 'antd';
import 'antd/dist/antd.css';
const Pagination = (props) => {
    const { current, total, size, onChange } = props;

    const onChangeHandler = (e) => {
        onChange(e)
    }
    return (
        <>
            { total > size ?
                <P simple
                    current={current}
                    total={total}
                    pageSize={size}
                    onChange={onChangeHandler}
                />
                : null
            }
        </>
    );
}
export default Pagination;