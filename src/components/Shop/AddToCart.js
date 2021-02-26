import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { notification } from '../../utils/helper';
import { connect } from 'react-redux'
import CartBlack from '../../assets/icon/cart_black.svg'
import CartWhite from '../../assets/icon/cart.svg';
import { removeProduct, addProduct } from './store/Actions';
const AddToCart = (props) => {
  const { item, className, qty, add } = props;
  const onClick = (e) => {
    e.preventDefault();
    if (add) {
      const oldQty = getProductQtyFromCart();
      const newQty = oldQty + qty;
      props.addProduct(item, newQty)

    } else {
      const oldQty = getProductQtyFromCart();
      if(oldQty){
        notification('warning', 'Product already added with one quantity , to increase quantity visit cart page')
      } else {
        props.addProduct(item, qty)
      }
      
    }

  }
  const getProductQtyFromCart = () => {
    const { cart, item: { id } } = props;
    let qtyy = 0;
    if (cart && cart.items && cart.items.length > 0) {
      const Olditem = cart.items.filter(i => i.product_id === id);
      
      if (Olditem && Olditem[0]) {
        qtyy = Olditem[0].quantity;
      }
    }
    return qtyy;
  }


  return (
    <Link className={className ? className : "svg-icon"} onClick={e => onClick(e)} to="/">
      <img className="mr-2" src={className ? CartWhite : CartBlack} alt="Add to Cart" width="20" />
            Add to Cart
    </Link>
  );
}
const mapStateToProps = (state) => ({
  loading: state.shop.loading,
  data: state.shop.products,
  error: state.shop.error,
  cart: state.shop.cart
});
const mapDispatchToProps = dispatch => ({
  addProduct: (payload, qty) => dispatch(addProduct(payload, qty)),
  removeProduct: (payload) => dispatch(removeProduct(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCart);