import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CartBlack from '../../assets/icon/cart_black.svg'
import Cartimg from '../../assets/icon/cart.svg'
const AddToCart = (props) => {
    const imgSrc = props.hotDeals ? CartBlack : Cartimg;
    return (
        <Link type="button" className="svg-icon">
            <img className="mr-2" src={imgSrc} alt="" />
            Add to Cart
        </Link>
    );
}
export default AddToCart;