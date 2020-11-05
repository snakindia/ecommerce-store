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
    orderSyncTime: (new Date()).getTime()

}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ACCOUNTS_LOADING:
            return { ...state, loading: payload }
        case ActionTypes.SET_AUTH_LOADING:
            return { ...state, authloading: payload }

        case ActionTypes.LOGOUT_SUCCESS:
            localStorage.clear();
            return {
                ...state,
                authloading: false,
                orders: undefined,
                order: undefined,
                error: undefined,
                orderId: undefined,
                authenticated: undefined,
                user: undefined,
                orderSyncTime: (new Date()).getTime(),
            }
        case ActionTypes.GET_USER_SUCCESS:
            return {
                ...state,
                authloading: false,
                orders: payload && payload.order_statuses ? payload.order_statuses: undefined ,
                error: undefined,
                authenticated: true,
                orderSyncTime: (new Date()).getTime(),
                user: payload && payload.customer_settings ? payload.customer_settings: undefined,
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
                order: undefined,
                error: undefined,
                orderId: undefined,
                orderSyncTime: (new Date()).getTime(),
            }


        default:
            return state;
    }
}
