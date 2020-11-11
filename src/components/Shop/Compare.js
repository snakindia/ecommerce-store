import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import imgsrc from '../../assets/icon/compare.svg'
const Compare = (props) => {
    return null;
    return (
        <Link type="button" className="svg-icon">
            {/* <img className="mr-2 ml-4" src={imgsrc} alt="" /> */}
            <i className="fa fa-random mr-2 ml-2" area-hidden="true"></i>
                Compare
        </Link>
    );
}
export default Compare;