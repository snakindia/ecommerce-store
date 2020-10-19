import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import CartBlack from '../../assets/icon/cart_black.svg'
import CartWhite from '../../assets/icon/cart.svg';
import {removeProduct, addProduct} from './store/Actions';
const AddToCart = (props) => {
    const {item, className, qty} =props;
    const onClick =(e)=>{
        e.preventDefault();
        props.addProduct(item, qty)
    }
    return (
        <Link  className={className ? className:"svg-icon"} onClick={e=>onClick(e)}>
            <img className="mr-2" src={className? CartWhite: CartBlack} alt="Add to Cart" width="20"/>
            Add to Cart
        </Link>
    );
}
const mapStateToProps = (state) => ({
    loading: state.shop.loading,
    data: state.shop.products,
    error: state.shop.error
  });
  const mapDispatchToProps = dispatch => ({
    addProduct: (payload, qty) => dispatch(addProduct(payload, qty)),
    removeProduct: (payload) => dispatch(removeProduct(payload)),
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddToCart);