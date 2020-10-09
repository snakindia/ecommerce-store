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


export const flushData = () => ({
    type: ActionTypes.SHOP_FLUSH_DATA,

})

export const getProducts = (payload) => {
    return dispatch => {
        dispatch(setLoading(true));
        let url='getTopRatedProducts?fields=name,images,sku,product_id,regular_price,sale_price,description';
        if(payload=='bestSelling') url='getBestSellingProducts?fields=name,regular_price,sale_price,images,sku,description';
        else if(payload=='topRated') url='getTopRatedProducts?fields=name,images,sku,product_id,regular_price,sale_price,description';
        else if(payload=='hotDeals') url='getHotProductList?fields=name,regular_price,sale_price,images,sku,description';
        
        Axios.get(`${process.env.REACT_APP_API_URL}/${url}`,
        )
            .then(res => {
                dispatch(setLoading(false));
                console.log(res.data)
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