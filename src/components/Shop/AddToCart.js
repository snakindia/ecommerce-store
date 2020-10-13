import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CartBlack from '../../assets/icon/cart_black.svg'
const AddToCart = (props) => {
    return (
        <Link type="button" className="svg-icon">
            <img className="mr-2" src={CartBlack} alt="Add to Cart" />
            Add to Cart
        </Link>
    );
}
export default AddToCart;