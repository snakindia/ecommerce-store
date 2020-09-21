import React, { Component } from 'react';
import {Link} from 'react-router-dom'
const NewsEvent = (props) => {
    const {hide } = props;
      return (
        <ul class="sub-menu"
        onClick={hide}
        >
            <li aria-haspopup="true"><Link to="/news" >News</Link></li>
            <li aria-haspopup="true"><Link to="/events" >Events</Link></li>
          </ul>
      )
}
export default NewsEvent;