import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CartBlack from '../../assets/icon/cart_black.svg'
import CartWhite from '../../assets/icon/cart.svg'
const AddToCart = ({className}) => {
    return (
        <Link  className={className ? className:"svg-icon"}>
            <img className="mr-2" src={className? CartWhite: CartBlack} alt="Add to Cart" width="20"/>
            Add to Cart
        </Link>
    );
}
export default AddToCart;