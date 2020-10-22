import * as ActionTypes from './ActionTypes';
const initialState = {
    loading: false,
    hotDeals: undefined,
    bestSelling: undefined,
    products: undefined,
    topRated: undefined,
    error: undefined,
    product: undefined,
    menu: {},
    cart: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SHOP_LOADING:
            return { ...state, loading: payload }

        case ActionTypes.GET_DATA_SUCCESS:
            return { ...state, loading: false, ...payload }

        case ActionTypes.GET_DATA_ERROR:
            return { ...state, loading: false, ...payload }

        case ActionTypes.SHOP_GET_MENU_SUCCESS:
            return { ...state, loading: false, menu: payload, error: undefined }

        case ActionTypes.SHOP_GET_MENU_ERROR:
            return { ...state, loading: false, menu: {}, error: payload }
        case ActionTypes.GET_PRODUCT_SUCCESS:
            return { ...state, loading: false, product: payload, error: undefined }

        case ActionTypes.GET_PRODUCT_ERROR:
            return { ...state, loading: false, product: undefined, error: payload }

        case ActionTypes.ADD_TO_CART:
            return { ...state, cart:payload }
        case ActionTypes.REMOVE_FROM_CART:
            return { ...state, cart:payload }

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
