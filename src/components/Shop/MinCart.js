import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { removeProduct, addProduct } from './store/Actions';
import { API_IMAGE_PATH } from './../../constants/appConstant';
import ToolTip from './ToolTip';
const Product = (props) => {
    const { item,qty } = props.data;
    const remove = (e) => {
        e.preventDefault();
        props.remove(item.id);
    }
    const price =qty * item.regular_price;
    const imageUrl = item.images.length > 0 ? item.images[0].url : API_IMAGE_PATH + 'default/default.jpg';
    return (
        <li className="item clearfix">
            <div className="cart-thumbnail">
                <div className="corner-close" onClick={e => remove(e)}>
                    <div className="corner-right">
                        <span><i className="fa fa-times"></i></span>
                    </div>
                </div>
                <Link to={`/shop/${item.id}`}><img src={imageUrl} alt="" /></Link>
            </div>
            <div className="details">
                <div className="item-title"><Link to={`/shop/${item.id}`}>
                    <ToolTip text={item.name} />
                </Link></div>
                <span className="sp-price quantity">Qty:{qty}</span>
                <span className="sp-price text-sm-right">${price}</span>

            </div>
        </li>
    )
}
const MiniCart = (props) => {
    const { item, className, cart } = props;
    const onClick = (e) => {
        e.preventDefault();
        props.addProduct(item)
    }
    let subtotal =0;
    if(Object.keys(cart) && Object.keys(cart).length > 0){
        for (const datum of Object.keys(cart)){
            if(cart[datum]){
                const price =cart[datum].item.regular_price;
                const qty =cart[datum].qty;
                subtotal =subtotal +(price*qty);
            }
        }
    }
    return (
        <div className="cart-box-changed-to-min-cart" >
            <ul className="item-list">
                {Object.keys(cart) && Object.keys(cart).length > 0 ? Object.keys(cart).map((key,i)=>
                <Product key={`cart${key}`} data={cart[key]} remove={props.removeProduct} />
                ) : null}
               
            </ul>
            <div className="cart-footer">
                <div className="clearfix cart-summary">
                    <div className="summary-left">
                        Subtotal
                  </div>
                    <div className="summary-right">
                        ${subtotal}
                  </div>
                </div>
                <div className="pt-3 pb-4">
                    <Link to="/shop/cart" className="button bha-btn-primary">View Cart</Link>
                    <Link to="/shop/checkout" className="button bha-btn-primary">Check Out</Link>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    loading: state.shop.loading,
    cart: state.shop.cart,
    error: state.shop.error
});
const mapDispatchToProps = dispatch => ({
    addProduct: (payload) => dispatch(addProduct(payload)),
    removeProduct: (payload) => dispatch(removeProduct(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MiniCart);