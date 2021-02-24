import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeProduct, addProduct } from './store/Actions';
import { API_IMAGE_PATH } from './../../constants/appConstant';
import ToolTip from './ToolTip';
import Quantity from './Quantity';
import Products from './Products';
import Image from './Image'
const Product = (props) => {
    const item = props.data;
    const remove = (e) => {
        e.preventDefault();
        props.remove(item.id);
    }
    const callback = (counts) => {
        props.QuantityHandler(item, counts)

    }
    // const price = qty * item.sale_price ? item.sale_price : item.regular_price;;
    // const total = qty * price;
    // const imageUrl = item.images.length > 0 ? item.images[0].url : API_IMAGE_PATH + 'default/default.jpg';
    const imageUrl = item.image_url ? item.image_url : API_IMAGE_PATH + 'default/default.jpg';
    return (
        <tr>
            <th scope="row">
                <Image src={imageUrl} width="72px" height="72px" />
            </th>
            <td style={{ verticalAlign: 'middle' }}>
                <ToolTip text={item.name} length={200} />
            </td>
            <td style={{ verticalAlign: 'middle' }}>
                <Quantity qty={item.quantity} id={item.product_id} dependent={true} callback={callback} />
            </td>
            <td style={{ verticalAlign: 'middle' }}>$ {item.price}</td>
            <td style={{ verticalAlign: 'middle' }}>$ {item.price_total}</td>
            <td style={{ verticalAlign: 'middle' }} align="right" onClick={e => remove(e)}><i className="fa fa-close not-liked bouncy"></i></td>
        </tr>

    )
}
const Cart = (props) => {
    const { item, className, cart ,loading} = props;

    const onClick = (e) => {
        e.preventDefault();
        props.addProduct(item)
    }
    let subtotal = cart ? cart.subtotal : 0;
    let tax = cart ? cart.tax_total : 0;
    let shipping = cart ? cart.shipping_total : 0;
    let total = cart ? cart.grand_total : 0;
    let items = cart ? cart.items : [];
    let productsInCart = 0;
    if (cart && cart.items && cart.items.length > 0) {
        for (const item of cart.items) {
            productsInCart = productsInCart + item.quantity;
        }
    }
    
        if(items && items.length ==0 && cart && cart.id){
            props.history.push('/shop')
        }
    return (
        <div className="content-wrapper topPadding" id="content">
            <div className="pagewrap">
                <div className="bgWhite padding-bottom">
                    <section
                    //style="float: left; width: 100%"
                    >
                        <div className="container-fluid">
                            {cart ?
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 left-content">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12">
                                                <h1 className="bha_heading_2 text-blue padding-top30">Cart</h1>
                                                <div className="table-responsive comparison-table">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Product</th>
                                                                <th scope="col"></th>
                                                                <th scope="col">Quantity</th>
                                                                <th scope="col">Item Price</th>
                                                                <th scope="col">Total</th>
                                                                <th scope="col"> </th>
                                                            </tr>
                                                        </thead>
                                                        {items && items.length > 0 ? items.map(data =>
                                                            <Product
                                                                key={`cart${data.id}`}
                                                                data={data}
                                                                QuantityHandler={props.addProduct}
                                                                remove={props.removeProduct}
                                                            />
                                                        ) : null}
                                                        <tr>
                                                            <td colSpan="4" className="no-border" style={{ textAlign: 'right' }}>Subtotal (${productsInCart} items) </td>
                                                            <td colSpan="2" className="no-border">${subtotal}</td>
                                                        </tr>
                                                        {/* <tr>
                                                            <td colSpan="4" className="no-border" style={{ textAlign: 'right' }} >Shipping (Flat Rate)</td>
                                                            <td colSpan="2" className="no-border">${shipping}</td>
                                                        </tr>
                                                        <tr style={{ backgroundColor: '#f1f1f1' }}>
                                                            <td colSpan="4" className="no-border" ><h4>Total</h4> </td>
                                                            <td colSpan="2" className="no-border"><h4>${total}</h4></td>
                                                        </tr> */}
                                                        <tbody>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-12 margin-btm30">
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6 col-md-6">
                                                        <Link to="/shop" className="btn-bha-lg darkBlue" >
                                                            <i className="fas fa-angle-left mr-2"></i>Continue Shopping
                                                </Link>
                                                    </div>
                                                    <div className="col-lg-6 col-sm-6 col-md-6 float-right">
                                                        <div className="text-right">
                                                            <Link to="/shop/checkout" className="btn-bha-lg darkRed" >
                                                                Proceed to Checkout
                                                            <i className="fas fa-angle-right ml-2"></i>
                                                            </Link>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <>
                                {
                                    loading? <div className="row">
                                    <div className="col-sm-12 col-md-8 left-content">loading...</div>
                                </div>:
                                <div className="row">
                                <div className="col-sm-12 col-md-8 left-content">Your Cart Empty</div>
                            </div>
                                }
                                </>
                                
                            }
                        </div>
                    </section>
                    {/* <section className="bg-opeque box-shadow footerItems">
                        <div className="container-fluid">
                            <h2 className="bha_heading_2 z-index text-blue mb-4">Similar Category Products</h2>
                        </div>
                    </section>
                    <section className="pro-equipment-section box-shadow">
                        <div className="container-fluid pl-0 pr-0 product-xs-item">

                        </div>
                    </section>


                    <section className="bg-opeque">
                        <div className="container-fluid">
                            <h2 className="bha_heading_2 z-index text-blue mb-4">Customers also viewed</h2>
                        </div>
                    </section>
                    <section className="pro-equipment-section box-shadow">
                        <div className="container-fluid pl-0 pr-0 product-xs-item">

                        </div>
                    </section> */}
                <Products
                                type='viewed'
                                heading="Customers also viewed"
                            />
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
    addProduct: (payload, qty) => dispatch(addProduct(payload, qty)),
    removeProduct: (payload) => dispatch(removeProduct(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);