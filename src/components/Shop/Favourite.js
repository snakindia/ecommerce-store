import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const Favourite = ({className}) => {
    const [liked,setLike]= useState(null);

    const onClick =()=>{
        setLike(!liked)
    }
    let c =className ? className :"like-button hover-btn mt-3";
    c =liked ? `${c} is-active`: c;
    return (
        <Link type="button" className={c} onClick={onClick}>
        <i className="fa fa-heart-o not-liked bouncy"></i>
        <i className="fa fa-heart is-liked bouncy"></i>
        <span className="like-overlay"></span>
    </Link>
    );
}
export default Favourite;