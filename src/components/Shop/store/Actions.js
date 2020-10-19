import * as ActionTypes from './ActionTypes';
import Axios from 'axios';
export const setLoading = (payload) => ({
    type: ActionTypes.SHOP_LOADING,
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
export const addProduct = (payload, qty=1) => ({
    type: ActionTypes.ADD_TO_CART,
    payload,
    qty
})
export const removeProduct = (payload) => ({
    type: ActionTypes.REMOVE_FROM_CART,
    payload
})


export const flushData = () => ({
    type: ActionTypes.SHOP_FLUSH_DATA,

})

export const getProducts = (payload, id=null) => {
    return dispatch => {
        dispatch(setLoading(true));
        
        let url='getTopRatedProducts?fields=name,images,sku,product_id,regular_price,sale_price,description';
        if (payload && id ) url=`products?category_id=${id}`;
        else if(payload=='bestSelling') url='getBestSellingProducts?fields=name,regular_price,sale_price,images,sku,description';
        else if(payload=='topRated') url='getTopRatedProducts?fields=name,images,sku,product_id,regular_price,sale_price,description';
        else if(payload=='hotDeals') url='getHotProductList?fields=name,regular_price,sale_price,images,sku,description';
         
        
        Axios.get(`${process.env.REACT_APP_API_URL}/${url}`,
        )
            .then(res => {
                dispatch(setLoading(false));
                if (res.data ) {
                    dispatch(getDataSuccess({[payload]:res.data}));
                } else {
                    dispatch(getDataError({[payload]:[]}));
                }
            })
            .catch(e => {
                dispatch(setLoading(false));
                dispatch(getDataError({[payload]:undefined,error:e}));
            });
    }
}
export const getProduct = (id) => {
    return dispatch => {
        dispatch(setLoading(true));
        
       let url=`productDetails/${id}`;
       
        Axios.get(`${process.env.REACT_APP_API_URL}/${url}`,
        )
            .then(res => {
                dispatch(setLoading(false));
                if (res.data ) {
                    dispatch(getProductSuccess(res.data));
                } else {
                    dispatch(getProductError(undefined));
                }
            })
            .catch(e => {
                dispatch(setLoading(false));
                dispatch(getProductError(e));
            });
    }
}

export const getMenu = () => {
    return dispatch => {
        dispatch(setLoading(true));
        let url='get_shop_cat_sub_cat_list';
       
        Axios.post(`${process.env.REACT_APP_API_URL}/${url}`,
        )
            .then(res => {
                dispatch(setLoading(false));
                if (res.data ) {
                    dispatch(getMenuSuccess(res.data));
                } else {
                    dispatch(getMenuSuccess({}));
                }
            })
            .catch(e => {
                dispatch(setLoading(false));
                dispatch(getMenuError(e));
            });
    }
}