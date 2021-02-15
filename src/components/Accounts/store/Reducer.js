import * as ActionTypes from './ActionTypes';
const initialState = {
    loading: false,
    authloading: undefined,
    orders: undefined,
    order: undefined,
    error: undefined,
    orderId: undefined,
    statuses: undefined,
    authenticated: undefined,
    user: undefined,
    fav: []

}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FLUSH_ON_LOGOUT:
            return {
                ...state,
                loading: false,
                authloading: undefined,
                orders: undefined,
                order: undefined,
                error: undefined,
                orderId: undefined,
                statuses: undefined,
                authenticated: undefined,
                user: undefined,
                fav: [],
                favIds: []


            }
        case ActionTypes.ACCOUNTS_LOADING:
            return { ...state, loading: payload }
        case ActionTypes.SET_WISHLIST_TOGGLE_SUCCESS:
            let favData = state.fav;
            if (payload.type == 'add') {
                favData.push(payload.item);

            } else if (payload.type == 'remove') {
                favData = favData.filter(f => f.id != payload.item.id)
            }
            favData = [...new Set(favData)]
            const favIds = favData.map(item => item.id)
            return { ...state, favIds: [...favIds], fav: [...favData] }
        case ActionTypes.GET_WISHLIST_SUCCESS:
            let fav = payload && payload.data && payload.data.length > 0 ? payload.data : [];
            let favIdss = fav && fav.length > 0 ? fav.map(f => f.id) : [];
            return { ...state, fav: [...fav], favIds: [...favIdss] }
        case ActionTypes.SET_AUTH_LOADING:
            return { ...state, authloading: payload }
        case ActionTypes.UPDATE_USER_DETAIL:
            return {
                ...state, user: {
                    ...state.user,
                    first_name: payload.first_name,
                    full_name: payload.full_name,
                    last_name: payload.last_name,
                }
            }


        case ActionTypes.GET_USER_SUCCESS:
            return {
                ...state,
                authloading: false,
                error: undefined,
                authenticated: true,
                user: payload && payload.customer_settings ? payload.customer_settings : undefined,
                orders: payload && payload.order_statuses ? payload.order_statuses : undefined,
            }

        case ActionTypes.GET_ACCOUNTS_ORDERS_SUCCESS:
            return {
                ...state,
                orders: payload,
                error: undefined,
                loading: false,
                orderSyncTime: (new Date()).getTime(),
            }
        case ActionTypes.GET_ACCOUNTS_ORDERS_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            }

        case ActionTypes.GET_ACCOUNTS_ORDERS_DETAIL_SUCCESS:
            return {
                ...state,
                order: payload,
                error: undefined,
                loading: false,
            }
        case ActionTypes.GET_ACCOUNTS_ORDERS_DETAIL_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            }

        case ActionTypes.GET_ACCOUNTS_ORDERS_CANCEL_SUCCESS:
            return {
                ...state,
                order: payload,
                error: undefined,
                loading: false,
            }
        case ActionTypes.GET_ACCOUNTS_ORDERS_STATUS_SUCCESS:
            return {
                ...state,
                statuses: payload,
            }



        case ActionTypes.ACCOUNTS_FLUSH_DATA:
            return {
                ...state,
                loading: false,
                orders: undefined,
                error: undefined,
            }


        default:
            return state;
    }
}
