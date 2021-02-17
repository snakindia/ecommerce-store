import * as ActionTypes from './ActionTypes';
const initialState = {
    loading: false,
    loadingProduct: false,
    loadingCart: false,
    hotDeals: undefined,
    bestSelling: undefined,
    products: undefined,
    topRated: undefined,
    error: undefined,
    product: undefined,
    menu: {},
    cart: undefined,
    paymentMethods: undefined,
    shippingMethods: undefined,
    paymentSettings: undefined,
    orderId: undefined,
    checkoutSuccess: undefined,
    menuLoading: undefined,
    paymentDone: undefined,
    pannelstep: 1,
    searchResult: undefined,
    compare:[],
    comments: {
        id: undefined,
        data: []
    }


}


export default (state = initialState, { type, payload, pannelstep = null }) => {
    switch (type) {
        case ActionTypes.GET_COMMENTS_SUCCESS:
            return { ...state, comments: payload }
        case ActionTypes.SET_COMPARE_PRODUCTS:
            let compare=state.compare;
            compare = payload.type=='remove' ? compare.filter(c=>c.id !=payload.item.id) :[...compare, payload.item]
            return { ...state, compare }
         case ActionTypes.SET_COMMENTS_SUCCESS:
             let comments =state.comments;
             if(comments.id == payload.productId){
                 comments ={...comments, data:[...comments.data, payload]}
             } else {
                comments ={id:payload.productId, data:[payload]}  
             }
            return { ...state, comments }
        case ActionTypes.SHOP_LOADING:
            return { ...state, loading: payload }
        case ActionTypes.SHOP_LOADING_MENU:
            return { ...state, menuLoading: payload }
        case ActionTypes.SET_PAYMENT_COMPLETE_SUCCESS:
            return { ...state, paymentDone: payload }
        case ActionTypes.SHOP_PRODUCT_LOADING:
            return { ...state, loadingProduct: payload }
        case ActionTypes.SHOP_CART_LOADING:
            return { ...state, loadingCart: payload }
        case ActionTypes.SEARCH_PRODUCT:
            return { ...state, searchResult: payload }

        case ActionTypes.GET_DATA_SUCCESS:
            return { ...state, loading: false, ...payload }

        case ActionTypes.GET_DATA_ERROR:
            return { ...state, loading: false, ...payload }

        case ActionTypes.ORDER_SUCCESS:
            return {
                ...state, checkoutSuccess: payload, order: payload,
                cart: undefined,
                paymentMethods: undefined,
                shippingMethods: undefined,
                paymentSettings: undefined,
            }

        case ActionTypes.ORDER_ERROR:
            return { ...state, checkoutSuccess: undefined, orderId: undefined }

        case ActionTypes.SHOP_GET_MENU_SUCCESS:
            return { ...state, loading: false, menu: payload, error: undefined }

        case ActionTypes.SHOP_GET_MENU_ERROR:
            return { ...state, loading: false, menu: {}, error: payload }
        case ActionTypes.GET_PRODUCT_SUCCESS:
            return { ...state, loading: false, product: payload, error: undefined }

        case ActionTypes.GET_PRODUCT_ERROR:
            return { ...state, loading: false, product: undefined, error: payload }

        case ActionTypes.ADD_TO_CART:
            if (pannelstep == null && payload) {
                pannelstep = 1;
                if (payload.email) {
                    pannelstep = 2;
                    if (payload.billing_address && payload.billing_address.country) {
                        pannelstep = 3;
                        if (payload.shipping_address && payload.shipping_address.country) {
                            pannelstep = 4;
                            if (payload.shipping_method_id && payload.shipping_method_id) {
                                pannelstep = 5;
                            }
                        }
                    }
                }
            }
            // console.log({pannelstep});
            return { ...state, cart: payload, pannelstep }
        case ActionTypes.REMOVE_FROM_CART:
            return { ...state, cart: payload }


        case ActionTypes.GET_PAYMENT_METHOD_ERROR:
            return { ...state, paymentMethods: null, error: payload }
        case ActionTypes.GET_PAYMENT_METHOD_SUCCESS:
            return { ...state, paymentMethods: payload }

        case ActionTypes.GET_PAYMENT_METHOD_SETTINGS_ERROR:
            return { ...state, paymentSettings: null, error: payload }
        case ActionTypes.GET_PAYMENT_METHOD_SETTINGS_SUCCESS:
            return { ...state, paymentSettings: payload }


        case ActionTypes.GET_SHIPPING_METHOD_ERROR:
            return { ...state, shippingMethods: null, error: payload }
        case ActionTypes.GET_SHIPPING_METHOD_SUCCESS:
            //console.log('GET_SHIPPING_METHOD_SUCCESS' ,pannelstep);
            return { ...state, shippingMethods: payload, pannelstep: pannelstep ? pannelstep : state.pannelstep }


        case ActionTypes.SHOP_FLUSH_DATA:
            return {
                ...state,
                loading: false,
                hotDeals: undefined,
                bestSelling: undefined,
                topRated: undefined,
                error: undefined,
                product: undefined
            }


        default:
            return state;
    }
}
