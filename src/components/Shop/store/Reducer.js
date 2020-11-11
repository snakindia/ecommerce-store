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
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SHOP_LOADING:
            return { ...state, loading: payload }
        case ActionTypes.SHOP_PRODUCT_LOADING:
            return { ...state, loadingProduct: payload }
        case ActionTypes.SHOP_CART_LOADING:
            return { ...state, loadingCart: payload }

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
            return { ...state, cart: payload }
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
            return { ...state, shippingMethods: payload }


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
