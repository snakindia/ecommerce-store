import * as ActionTypes from './ActionTypes';
import Axios from 'axios';
import {notification } from '../../../utils/helper';
Axios.defaults.withCredentials = true;
export const setLoading = (payload) => ({
    type: ActionTypes.SHOP_LOADING,
    payload
})
export const setLoadingMenu = (payload) => ({
    type: ActionTypes.SHOP_LOADING_MENU,
    payload
})

export const SaveSuccess = (payload) => ({
    type: ActionTypes.SAVE_DATA_SUCCESS,
    payload
})
export const saveError = (payload) => ({
    type: ActionTypes.SAVE_DATA_ERROR,
    payload
})

export const getDataSuccess = (payload) => ({
    type: ActionTypes.GET_DATA_SUCCESS,
    payload
})
export const getDataError = (payload) => ({
    type: ActionTypes.GET_DATA_ERROR,
    payload
})

export const getProductSuccess = (payload) => ({
    type: ActionTypes.GET_PRODUCT_SUCCESS,
    payload
})
export const getProductError = (payload) => ({
    type: ActionTypes.GET_PRODUCT_ERROR,
    payload
})
export const getMenuSuccess = (payload) => ({
    type: ActionTypes.SHOP_GET_MENU_SUCCESS,
    payload
})
export const getMenuError = (payload) => ({
    type: ActionTypes.SHOP_GET_MENU_ERROR,
    payload
})



export const flushData = () => ({
    type: ActionTypes.SHOP_FLUSH_DATA,

})
export const setProductLoading = (payload) => ({
    type: ActionTypes.SHOP_PRODUCT_LOADING,
    payload

})

export const getProducts = (payload, id = null) => {
    return dispatch => {
        dispatch(setProductLoading(true));

        let url = 'getTopRatedProducts?fields=name,images,sku,product_id,regular_price,sale_price,description';
        if (payload && id) url = `products?category_id=${id}`;
        else if (payload == 'bestSelling') url = 'getBestSellingProducts?fields=name,regular_price,sale_price,images,sku,description';
        else if (payload == 'topRated') url = 'getTopRatedProducts?fields=name,images,sku,product_id,regular_price,sale_price,description';
        else if (payload == 'hotDeals') url = 'getHotProductList?fields=name,regular_price,sale_price,images,sku,description';


        Axios.get(`${process.env.REACT_APP_API_URL}/${url}`,
        )
            .then(res => {
                dispatch(setProductLoading(false));
                if (res.data) {
                    dispatch(getDataSuccess({ [payload]: res.data }));
                } else {
                    dispatch(getDataError({ [payload]: [] }));
                    //notification('error', 'Oops!! something went wrong')
                }
            })
            .catch(e => {
                dispatch(setProductLoading(false));
                dispatch(getDataError({ [payload]: undefined, error: e }));
                notification('error', 'Oops!! something went wrong')
            });
    }
}
export const getProduct = (id) => {
    return dispatch => {
        dispatch(setProductLoading(true));

        let url = `productDetails/${id}`;

        Axios.get(`${process.env.REACT_APP_API_URL}/${url}`,
        )
            .then(res => {
                dispatch(setProductLoading(false));
                if (res.data) {
                    dispatch(getProductSuccess(res.data));
                } else {
                    dispatch(getProductError(undefined));
                    //notification('error', 'Oops!! something went wrong')
                }
            })
            .catch(e => {
                dispatch(setProductLoading(false));
                dispatch(getProductError(e));
                notification('error', 'Oops!! something went wrong')
            });
    }
}

export const getMenu = () => {
    return dispatch => {
        dispatch(setLoadingMenu(true));
        let url = 'get_shop_cat_sub_cat_list';

        Axios.post(`${process.env.REACT_APP_API_URL}/${url}`,
        )
            .then(res => {
                dispatch(setLoadingMenu(false));
                if (res.data) {
                    dispatch(getMenuSuccess(res.data));
                } else {
                    dispatch(getMenuSuccess({}));
                    //notification('error', 'Oops!! something went wrong')
                }
            })
            .catch(e => {
                console.log({ e })
                dispatch(setLoading(false));
                dispatch(getMenuError(e));
                notification('error', 'Oops!! something went wrong')
            });
    }
}
export const addProductAction = (payload) => ({
    type: ActionTypes.ADD_TO_CART,
    payload,
});
export const removeProductAction = (payload) => ({
    type: ActionTypes.REMOVE_FROM_CART,
    payload
});

export const removeProduct = (payload) => {
    return dispatch => {
        dispatch(setLoading(true));
        let url = `cart/items/${payload}`;
        Axios.delete(`${process.env.REACT_APP_API_AJAX_URL}/${url}`, {
            withCredentials: true,
            crossDomain: true,
        }
        )
            .then(res => {
                dispatch(setLoading(false));
                if (res.data) {
                    dispatch(removeProductAction(res.data));
                } else {
                    //notification('error', 'Oops!! something went wrong')
                    // dispatch(getProductError(undefined));
                }
            })
            .catch(e => {
                dispatch(setLoading(false));
                dispatch(getProductError(e));
                notification('error', 'Oops!! something went wrong')
            });
    }
}
export const addProduct = (payload, qty = 1) => {
    return dispatch => {
        dispatch(setLoading(true));
        let url = `cart/items`;
        qty = qty == 'add' ? 1 : qty;
        const data = {
            product_id: payload.product_id ? payload.product_id : payload.id,
            quantity: qty,
            variant_id: null,
            quantity_update: true,
            quantity_type : true,
        };
        Axios.post(`${process.env.REACT_APP_API_AJAX_URL}/${url}`, data,
            {
                withCredentials: true,
                crossDomain: true,
            }
        )
            .then(res => {
                console.log(res)
                dispatch(setLoading(false));
                if (res.data) {
                    dispatch(addProductAction(res.data));
                } else {
                    dispatch(getProductError(undefined));
                   // notification('error', 'Oops!! something went wrong')
                }
            })
            .catch(e => {
                dispatch(setLoading(false));
                dispatch(getProductError(e));
                notification('error', 'Oops!! something went wrong')
            });
    }
}

export const setCartLoading = (payload) => ({
    type: ActionTypes.SHOP_CART_LOADING,
    payload

})

export const getCart = () => {
    return dispatch => {
        dispatch(setCartLoading(true));
        
        Axios.get(`${process.env.REACT_APP_API_AJAX_URL}/cart`,
            {
                withCredentials: true,
                crossDomain: true,
            }
        )
            .then(res => {
                dispatch(setCartLoading(false));
                if (res.data) {

                    dispatch(addProductAction(res.data));
                } else {
                    // dispatch(getProductError(undefined));
                   // notification('error', 'Oops!! something went wrong')
                }
            })
            .catch(e => {
                dispatch(setCartLoading(false));
                dispatch(getProductError(e));
                notification('error', 'Oops!! something went wrong')
            });
    }
}

export const getPaymentMethodSuccess = (payload) => ({
    type: ActionTypes.GET_PAYMENT_METHOD_SUCCESS,
    payload,
});
export const getPaymentMethodError = (payload) => ({
    type: ActionTypes.GET_PAYMENT_METHOD_ERROR,
    payload
});
export const getPaymentMethod = () => {
    return dispatch => {
        dispatch(setLoading(true));
        //Axios.put(`${process.env.REACT_APP_API_AJAX_URL}/cart/${type=='billing' ? `billing_address`:`shipping_methods`}`,payload,
        Axios.get(`${process.env.REACT_APP_API_AJAX_URL}/payment_methods`,
            {
                withCredentials: true,
                crossDomain: true,
            },
            
        )
            .then(res => {
                dispatch(setLoading(false));
                if (res.data) {
                    dispatch(getPaymentMethodSuccess(res.data));
                } else {
                     dispatch(getPaymentMethodError(undefined));
                }
            })
            .catch(e => {
                dispatch(setLoading(false));
                dispatch(getPaymentMethodError(e));
                
            });
    }
}

export const getPaymentMethodSettingsSuccess = (payload) => ({
    type: ActionTypes.GET_PAYMENT_METHOD_SETTINGS_SUCCESS,
    payload,
});
export const getPaymentMethodSettingsError = (payload) => ({
    type: ActionTypes.GET_PAYMENT_METHOD_SETTINGS_ERROR,
    payload
});
export const getPaymentSettingsMethod = () => {
    return dispatch => {
        dispatch(setLoading(true));
        //Axios.put(`${process.env.REACT_APP_API_AJAX_URL}/cart/${type=='billing' ? `billing_address`:`shipping_methods`}`,payload,
        Axios.get(`${process.env.REACT_APP_API_AJAX_URL}/payment_form_settings`,
            {
                withCredentials: true,
                crossDomain: true,
            },
            
        )
            .then(res => {
                dispatch(setLoading(false));
                if (res.data) {
                    dispatch(getPaymentMethodSettingsSuccess(res.data));
                } else {
                     //dispatch(getPaymentMethodSettingsError(undefined));
                     //notification('error', 'Oops!! something went wrong')
                }
            })
            .catch(e => {
                dispatch(setLoading(false));
                //dispatch(getPaymentMethodSettingsError(e));
                //notification('error', 'Oops!! something went wrong')
            });
    }
}

export const getShippingMethodSuccess = (payload) => ({
    type: ActionTypes.GET_SHIPPING_METHOD_SUCCESS,
    payload,
});
export const getShippingMethodError = (payload) => ({
    type: ActionTypes.GET_SHIPPING_METHOD_ERROR,
    payload
});
export const getShippingMethod = () => {
    return dispatch => {
        dispatch(setLoading(true));
        //Axios.put(`${process.env.REACT_APP_API_AJAX_URL}/cart/${type=='billing' ? `billing_address`:`shipping_methods`}`,payload,
        Axios.get(`${process.env.REACT_APP_API_AJAX_URL}/shipping_methods`,
            {
                withCredentials: true,
                crossDomain: true,
            },
            
        )
            .then(res => {
                dispatch(setLoading(false));
                if (res.data) {
                    dispatch(getShippingMethodSuccess(res.data));
                } else {
                     dispatch(getShippingMethodError(undefined));
                     //notification('error', 'Oops!! something went wrong')
                }
            })
            .catch(e => {
                dispatch(setLoading(false));
                dispatch(getShippingMethodError(e));
                notification('error', 'Oops!! something went wrong')
            });
    }
}


export const updateAddress = (payload, type) => {
    return dispatch => {
        dispatch(setLoading(true));
        //Axios.put(`${process.env.REACT_APP_API_AJAX_URL}/cart/${type=='billing' ? `billing_address`:`shipping_methods`}`,payload,
        Axios.put(`${process.env.REACT_APP_API_AJAX_URL}/cart`,payload,
            {
                withCredentials: true,
                crossDomain: true,
            },
            
        )
            .then(res => {
                dispatch(setLoading(false));
                if (res.data) {
                    dispatch(addProductAction(res.data));
                } else {
                    // dispatch(getProductError(undefined));
                }
            })
            .catch(e => {
                dispatch(setLoading(false));
                dispatch(getProductError(e));
            });
    }
}

export const orderSuccess = (payload) => ({
    type: ActionTypes.ORDER_SUCCESS,
    payload

})

export const orderError = (payload) => ({
    type: ActionTypes.ORDER_ERROR,
    payload

})


export const addOrder = (payload) => {
    return dispatch => {
        dispatch(setLoading(true));
        let url = `cart/checkout`;
        Axios.put(`${process.env.REACT_APP_API_AJAX_URL}/${url}`, payload,
            {
                withCredentials: true,
                crossDomain: true,
            }
        )
            .then(res => {
                dispatch(setLoading(false));
                if (res.data && res.data.number) {
                    dispatch(orderSuccess(res.data));
                    notification('success', 'Order Placed Succesfully')
                } else {
                    dispatch(orderError(undefined));
                    notification('error', 'Oops!! something went wrong')
                }
            })
            .catch(e => {
                dispatch(setLoading(false));
                dispatch(orderError(e));
                notification('error', 'Oops!! something went wrong')
            });
    }
}