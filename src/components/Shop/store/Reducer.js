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

export default (state = initialState, { type, payload, qty }) => {
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
            let { cart } = state;
            let quantities = 0;
            if(qty==0){
                delete cart[payload.id];
                return { ...state, cart: { ...cart } }
            } else {
            if (Object.keys(cart) && Object.keys(cart).length > 0 && Object.keys(cart).includes(payload.id)) {
                quantities = cart[payload.id].qty;
                quantities =qty && qty =='add' ? quantities+1: qty;
                    cart = {
                        ...cart,
                        [payload.id]: { item: payload, qty:quantities }
                    }
                
               
            } else {
                quantities =qty && qty =='add' ? quantities+1: qty;
                cart = {
                    ...cart,
                    [payload.id]: { item: payload, qty: quantities }
                }
            }
            return { ...state, cart }
        }
        case ActionTypes.REMOVE_FROM_CART:
            let carts = state.cart;
            delete carts[payload];
            return { ...state, cart: { ...carts } }

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
