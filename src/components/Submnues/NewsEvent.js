import React, { Component } from 'react';
import {Link} from 'react-router-dom'
const NewsEvent = (props) => {
    const {hide } = props;
      return (
        <ul class="sub-menu"
        onMouseLeave={hide}
        >
            <li aria-haspopup="true"><Link to="/" >News</Link></li>
            <li aria-haspopup="true"><Link to="/" >Events</Link></li>
          </ul>
      )
}
export default NewsEvent;