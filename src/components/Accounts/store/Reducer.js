import * as ActionTypes from './ActionTypes';
const initialState = {
    loading: false,
    orders: undefined,
    order: undefined,
    error: undefined,
    orderId: undefined,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ACCOUNTS_LOADING:
            return { ...state, loading: payload }

        case ActionTypes.GET_ACCOUNTS_ORDERS_SUCCESS:
            return {
                ...state,
                orders: payload,
                error: undefined,
                loading: false,
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


        case ActionTypes.ACCOUNTS_FLUSH_DATA:
            return {
                ...state,
                loading: false,
                orders: undefined,
                order: undefined,
                error: undefined,
                orderId: undefined,
            }


        default:
            return state;
    }
}
