import React, { Component } from 'react';
import {Link} from 'react-router-dom'
const Favourite = ({className}) => {
    return (
        <Link type="button" className={className ? className :"like-button hover-btn"}>
        <i className="fa fa-heart-o not-liked bouncy"></i>
        <i className="fa fa-heart is-liked bouncy"></i>
        <span className="like-overlay"></span>
    </Link>
    );
}
export default Favourite;