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
                console.log({e})
                dispatch(setLoading(false));
                dispatch(getMenuError(e));
            });
    }
}
export const addProductAction = (payload, qty=1) => ({
    type: ActionTypes.ADD_TO_CART,
    payload,
    qty
});
export const removeProduct = (payload) => ({
    type: ActionTypes.REMOVE_FROM_CART,
    payload
});

export const addProduct = (payload, qty=1) => {
    return dispatch => {
       //return dispatch(addProductAction(payload, qty));
        dispatch(setLoading(true));
        
       let url=`cart/items`;
       qty = qty=='add' ? 1: qty;
       //const data ={product_id:payload.id, quantity:qty,variant_id:null};
       const data ={
        "product_id":"5f86c51930a929c68ddb364a",
        "quantity":1,
        "variant_id":null    
        }
        Axios.post(`${process.env.REACT_APP_API_AJAX_URL}/${url}`,data
        )
            .then(res => {
                dispatch(setLoading(false));
                if (res.data ) {
                    dispatch(addProductAction(payload, qty));
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
export const getCart = () => {
    return dispatch => {
        var config = {
            method: 'get',
            url: 'http://209.59.154.198:3001/ajax/cart',
            headers: { 
              'Cookie': 'order_id=s:5f9009e5c2f31b3b2065806a.kw6CXaEEX6/Z4bUxuy+JWNHfnSM0cDaZWEbyc07m0/4',
              withCredentials: true
            },
            withCredentials: true
          };
          
          
          Axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
          
        // dispatch(setLoading(true));
        // Axios.get(`${process.env.REACT_APP_API_AJAX_URL}/cart`,{
        //     headers: {
        //         Cookie: "order_id=s%3A5f8ffebec2f31b3b20658054.j84ANoNuUPmzJkAc1I205i4LDLArenwDJ4NM1XRur1Y;"
        //     }
        // }
        // )
        //     .then(res => {
        //         dispatch(setLoading(false));
        //         if (res.data ) {
        //             //dispatch(addProductAction(payload, qty));
        //         } else {
        //            // dispatch(getProductError(undefined));
        //         }
        //     })
        //     .catch(e => {
        //         dispatch(setLoading(false));
        //         dispatch(getProductError(e));
        //     });
    }
}