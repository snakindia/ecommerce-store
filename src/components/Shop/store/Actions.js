import * as ActionTypes from './ActionTypes';
import Axios from 'axios';
import { notification } from '../../../utils/helper';
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
export const setCompareLoading = (payload) => ({
    type: ActionTypes.SHOP_COMPAREPRODUCT_LOADING,
    payload

})
export const searchProductSuccess = (payload) => ({
    type: ActionTypes.SEARCH_PRODUCT,
    payload

})
export const searchAllProductSuccess = (payload) => ({
    type: ActionTypes.SEARCH_PRODUCT_ALL,
    payload

})

export const search = (payload, limit) => {
    return dispatch => {
        let url = `products?search=${payload}&fields=name,images,sku,product_id,regular_price,sale_price,description,topSelling,featured`;
        if(limit){
            url =url+'&limit=5'
        }
        Axios.get(`${process.env.REACT_APP_API_URL}/${url}`,)
            .then(res => {
                if (res.data && res.data) {
                    if(limit){
                        dispatch(searchProductSuccess(res.data));
                    } else {
                        dispatch(searchAllProductSuccess(res.data));
                    }
                   
                } else {
                    // dispatch(getDataError({ [payload]: [] }));
                }
            })
            .catch(e => {
                notification('error', 'Oops!! something went wrong')
            });
    }
}

export const getProducts = (payload, id = null) => {
    return dispatch => {
        dispatch(setProductLoading(true));

        console.log(payload);
        let url = 'products?fields=name,images,sku,product_id,regular_price,sale_price,description,topSelling,featured';
        if (payload && id && id !== 'featured' && id != 'bestselling' && id != "viewed") url = `products?category_id=${id}&enabled=true`;

        else if (payload == 'featured' || id == 'featured') url = 'products?featured=true&fields=name,topSelling,featured,regular_price,sale_price,images,sku,description';
        else if (payload == 'topRated') url = 'getTopRatedProducts?fields=name,topSelling,featured,images,sku,product_id,regular_price,sale_price,description';
        else if (payload == 'viewed') url = 'products?viewCount=true&fields=id,viewCount,name,id,regular_price,sale_price,description,images&limit=8';
        else if (payload == 'products' && id == 'viewed') url = 'products?viewCount=true&fields=id,viewCount,name,id,regular_price,sale_price,description,images&limit=8';
        else if (payload == 'bestselling' || id == "bestselling") url = 'products?topSelling=true&?fields=name,topSelling,featured,regular_price,sale_price,images,sku,description';


        Axios.get(`${process.env.REACT_APP_API_URL}/${url}`,
        )
            .then(res => {
                dispatch(setProductLoading(false));
                if (res.data) {
                    if (payload == 'featured' || payload == 'bestselling' || payload == 'viewed') {
                        if (res.data && res.data.data) {
                            dispatch(getDataSuccess({ [payload]: id ? res.data : res.data.data }));
                        }

                    } else {
                        dispatch(getDataSuccess({ [payload]: res.data }));
                    }

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
export const getCompareProducts = (payload) => {
    return dispatch => {
        dispatch(setCompareLoading(true));
        let url = `products?ids=${payload}&fields=name,images,sku,product_id,regular_price,sale_price,description,topSelling,featured`;
        
        Axios.get(`${process.env.REACT_APP_API_URL}/${url}`,
        )
            .then(res => {
                dispatch(setCompareLoading(false));
                if (res.data && res.data.data) {
                        dispatch(getDataSuccess({ ['compare']: res.data.data }));
                } else {
                   
                    notification('error', 'Oops!! something went wrong')
                }
            })
            .catch(e => {
                dispatch(setCompareLoading(false));
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
                // console.log({ e })
                dispatch(setLoading(false));
                dispatch(getMenuError(e));
                notification('error', 'Oops!! something went wrong')
            });
    }
}
export const addProductAction = (payload, pannelstep) => ({
    type: ActionTypes.ADD_TO_CART,
    payload,
    pannelstep
});
export const removeProductAction = (payload) => ({
    type: ActionTypes.REMOVE_FROM_CART,
    payload
});

export const removeShippingMethods = () => {
    return dispatch => {
        Axios.put(`${process.env.REACT_APP_API_AJAX_URL}/cart`, { shipping_method_id: '' }, {
            withCredentials: true,
            crossDomain: true,
        }).then(res => {

            if (res.data) {

                dispatch(addProductAction(res.data));
                dispatch(getShippingMethod())
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
                    dispatch(removeShippingMethods())
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
            quantity_type: true,
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
                    dispatch(removeShippingMethods())
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
export const applycoupon = (payload) => {
    return dispatch => {
        dispatch(setCartLoading(true));
        Axios.post(`${process.env.REACT_APP_API_URL}/applycoupon`,payload,
            {
                withCredentials: true,
                crossDomain: true,
            }
        )
            .then(res => {
                dispatch(setCartLoading(false));
                if (res.data && res.data.status) {
                    notification('success', 'Coupon applied successfully')
                    dispatch(addProductAction(res.data.data));
                } else {
                     notification('error',res.data.data ? res.data.data : 'Oops!! something went wrong')
                }
            })
            .catch(e => {
                dispatch(setCartLoading(false));
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

export const getShippingMethodSuccess = (payload, pannelstep) => ({
    type: ActionTypes.GET_SHIPPING_METHOD_SUCCESS,
    payload,
    pannelstep
});
export const getShippingMethodError = (payload) => ({
    type: ActionTypes.GET_SHIPPING_METHOD_ERROR,
    payload
});
export const getShippingMethod = (payload) => {
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
                    dispatch(getShippingMethodSuccess(res.data, payload ? 5 : null));
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

export const updateAddress = (payload, type, pannelstep) => {
    return dispatch => {
        dispatch(setLoading(true));
        //Axios.put(`${process.env.REACT_APP_API_AJAX_URL}/cart/${type=='billing' ? `billing_address`:`shipping_methods`}`,payload,
        Axios.put(`${process.env.REACT_APP_API_AJAX_URL}/cart`, payload,
            {
                withCredentials: true,
                crossDomain: true,
            },

        )
            .then(res => {
                dispatch(setLoading(false));
                if (res.data) {
                    dispatch(addProductAction(res.data, pannelstep));
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
export const updateCart =(payload)=>({
    type: ActionTypes.CART_UPDATE,
    payload
})
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
                //dispatch(setLoading(false));
                if (res.data && res.data.number) {
                    // console.log('dispatching');
                    dispatch(orderRecieved(res.data.id, payload))
                    // dispatch(orderSuccess(res.data));
                    // notification('success', 'Order Placed Succesfully')
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
export const orderRecieved = (orderId, payload) => {
    return dispatch => {
        dispatch(setLoading(true));
        let url = `orders/${orderId}/recieved`;
        Axios.post(`${process.env.REACT_APP_API_URL}/${url}`, payload)
            .then(res => {
                dispatch(setLoading(false));
                // console.log(res);
                if (res.data && res.data.status && res.data.data.number) {
                    dispatch(orderSuccess(res.data.data));
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

export const setpaymentCompletedSuccess = (payload) => ({
    type: ActionTypes.SET_PAYMENT_COMPLETE_SUCCESS,
    payload,
});
export const setpaymentCompletedError = (payload) => ({
    type: ActionTypes.SET_PAYMENT_COMPLETE_ERROR,
    payload
});
export const paymentCompleted = (payload, payment_data) => {
    return dispatch => {
        dispatch(setLoading(true));
        Axios.put(`${process.env.REACT_APP_API_AJAX_URL}/cart/checkout`, payload,
            {
                withCredentials: true,
                crossDomain: true,
            }
        ).then(res => {
            if (res.data && res.data.number) {
                let url = `orders/${res.data.id}/process`;
                Axios.post(`${process.env.REACT_APP_API_URL}/${url}`, { ...payment_data, status: payload.status, status_id: payload.status_id },
                    {
                        withCredentials: true,
                        crossDomain: true,
                    },

                )
                    .then(res => {
                        dispatch(setLoading(false));

                        if (res.data && res.data.status && res.data.data.number) {
                            dispatch(orderSuccess(res.data.data));
                            notification('success', 'Order Placed Succesfully')
                        } else if (res.data && !res.data.status && res.data.getewayData) {

                            notification('error', res.data.getewayData.responsetext)
                        }
                        else {
                            //dispatch(getPaymentMethodSettingsError(undefined));
                            notification('error', 'Oops!! something went wrong')
                        }
                    })
            }
        })
            .catch(e => {
                dispatch(setLoading(false));
                //dispatch(getPaymentMethodSettingsError(e));
                notification('error', 'Oops!! something went wrong')
            });
    }
}

//commetns
export const getCommentsSuccess = (payload) => ({
    type: ActionTypes.GET_COMMENTS_SUCCESS,
    payload,
});
export const setCommentsSuccess = (payload) => ({
    type: ActionTypes.SET_COMMENTS_SUCCESS,
    payload
});
export const compareWith = (payload) => ({
    type: ActionTypes.SET_COMPARE_PRODUCTS,
    payload
});
export const removeAllCompare = () => ({
    type: ActionTypes.CLEAR_COMPARE_PRODUCTS
});
export const getComments = (payload) => {
    return dispatch => {
        dispatch(setLoading(true));
        Axios.get(`${process.env.REACT_APP_API_URL}/comments/${payload}`).then(res => {
            if (res.data && res.data.status) {
                dispatch(setLoading(false));
                dispatch(getCommentsSuccess({id:payload,data:res.data.data.data}));
                
            }
            else {
                notification('error', 'Oops!! something went wrong')
            }

        })
            .catch(e => {
                dispatch(setLoading(false));
                notification('error', 'Oops!! something went wrong')
            });
    }
}
export const addComments = (payload) => {
    return dispatch => {
        dispatch(setLoading(true));
        Axios.post(`${process.env.REACT_APP_API_URL}/reviews`,payload).then(res => {
            if (res && res.data && res.data.status ) {
                dispatch(setLoading(false));
                dispatch(setCommentsSuccess(res.data.data));
                notification('success', res.data.data)
            } 
            else if (res && res.data && !res.data.status && res.data.already) {
                dispatch(setLoading(false));
                notification('warning', res.data.data)
            }
            else {
                notification('error', 'Oops!! something went wrong')
            }

        })
            .catch(e => {
                dispatch(setLoading(false));
                notification('error', 'Oops!! something went wrong')
            });
    }
}
export const updateComments = (id,payload) => {
    return dispatch => {
        dispatch(setLoading(true));
        Axios.put(`${process.env.REACT_APP_API_URL}/comments/${id}`,payload).then(res => {
            if (res.data) {
                dispatch(setLoading(false));
                dispatch(getCommentsSuccess(res.data));
            }
            else {
                notification('error', 'Oops!! something went wrong')
            }

        })
            .catch(e => {
                dispatch(setLoading(false));
                notification('error', 'Oops!! something went wrong')
            });
    }
}
export const deleteComments = (payload) => {
    return dispatch => {
        dispatch(setLoading(true));
        Axios.delete(`${process.env.REACT_APP_API_URL}/comments/${payload}`).then(res => {
            if (res.data) {
                dispatch(setLoading(false));
                dispatch(getCommentsSuccess(res.data));
            }
            else {
                notification('error', 'Oops!! something went wrong')
            }

        })
            .catch(e => {
                dispatch(setLoading(false));
                notification('error', 'Oops!! something went wrong')
            });
    }
}

