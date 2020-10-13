import React, { useEffect, useState } from 'react';
import { Pagination as P } from 'antd';
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';
const Pagination = (props) => {
    const {current,total,size,onChange}=props;
    const [defaultCurrent,setdefaultCurrent] =useState(current)
   
    const onChangeHandler =(e)=>{
        console.log('onChange',e);
        setdefaultCurrent(e)
        onChange(e)
    }
    return (
        <P simple
        current={defaultCurrent}
         total={total}
         pageSize={size}
         onChange={onChangeHandler}
          />        
    );
}
export default Pagination;