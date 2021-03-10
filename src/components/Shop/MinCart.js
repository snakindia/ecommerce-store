import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { removeProduct, addProduct } from './store/Actions';
import { API_IMAGE_PATH } from './../../constants/appConstant';
import ToolTip from './ToolTip';
import Image from './Image'
import OutSideClick from '../OutSideClick'
const Product = (props) => {
    const item = props.data;
    const remove = (e) => {
        e.preventDefault();
        props.remove(item.id);
    }
    
    // let price = item.sale_price ? item.sale_price: item.regular_price;
    // price =qty * price;
    // const imageUrl = item.images.length > 0 ? item.images[0].url : API_IMAGE_PATH + 'default/default.jpg';
    const imageUrl = item.image_url ? item.image_url : API_IMAGE_PATH + 'default/default.jpg';
    return (
        <li className="item clearfix">
            <div className="cart-thumbnail">
                <div className="corner-close" onClick={e => remove(e)} style={{zIndex:9999}}>
                    <div className="corner-right">
                        <span><i className="fa fa-times"></i></span>
                    </div>
                </div>
                <Link to={`/shop/${item.slug}`} onClick={props.linkClick}>
                    <Image src={imageUrl} alt="" />
                    </Link>
            </div>
            <div className="details">
                <div className="item-title"><Link to={`/shop/${item.slug}`} onClick={props.linkClick}>
                    <ToolTip text={item.name} />
                </Link></div>
                <span className="sp-price quantity">Qty:{item.quantity}</span>
                <span className="sp-price text-sm-right">${item.price_total}</span>

            </div>
        </li>
    )
}
const MiniCart = (props) => {
    const {cart } = props;
    const linkClick=()=>{
        props.showCart(null, false);

    }
    let subtotal = cart ? cart.subtotal: 0;
    let tax = cart ? cart.tax_total: 0;
    let shipping = cart ? cart.shipping_total: 0;
    let total = cart ? cart.grand_total: 0;
    let items = cart ? cart.items:[];
    let counts =0;
    counts = items && items.length > 0 ? items.map(i=> counts + i.quantity):counts;
    return (
        <OutSideClick callback={linkClick}>
        <div className="cart-box-changed-to-min-cart" >
            <ul className="item-list">
                {items && items.length > 0 ? items.map(data=>
                <Product linkClick={linkClick} key={`cart${data.id}`} data={data} remove={props.removeProduct} />
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
                    <Link to="/shop/cart" className="button bha-btn-primary" onClick={linkClick}>View Cart</Link>
                    <Link to="/shop/checkout" className="button bha-btn-primary" onClick={linkClick}>Check Out</Link>
                </div>
            </div>
        </div>
        </OutSideClick>           
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