import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CartBlack from '../../assets/icon/cart_black.svg'
import Cartimg from '../../assets/icon/cart.svg'
const ContactForSale = (props) => {
    const imgSrc = props.hotDeals ? CartBlack : Cartimg;
    return (
        <a  className="lp-element lp-pom-button" href="tel:1-888-405-1143" target="_top">
            Contact for Sale :<span className="label">1-888-405-1143</span>
        </a>
    );
}
export default ContactForSale;