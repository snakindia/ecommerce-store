import * as ActionTypes from './ActionTypes';
import Axios from 'axios';
Axios.defaults.withCredentials = true;
export const setLoading = (payload) => ({
    type: ActionTypes.ACCOUNTS_LOADING,
    payload
})
export const getOrdersSuccess = (payload) => ({
    type: ActionTypes.GET_ACCOUNTS_ORDERS_SUCCESS,
    payload
})
export const getOrdersError = (payload) => ({
    type: ActionTypes.GET_ACCOUNTS_ORDERS_ERROR,
    payload
})
export const flushData = () => ({
    type: ActionTypes.ACCOUNTS_FLUSH_DATA,

})

export const getOrders = (payload, id = null) => {
    return dispatch => {
        dispatch(setLoading(true));

        Axios.get(`${process.env.REACT_APP_API_URL}/orders`,
        )
            .then(res => {
                dispatch(setLoading(false));
                if (res.data) {
                    dispatch(getOrdersSuccess(res.data ));
                } else {
                    dispatch(getOrdersError());
                }
            })
            .catch(e => {
                dispatch(setLoading(false));
                dispatch(getOrdersError(e));
            });
    }
}

export const getOrdersDetailSuccess = (payload) => ({
    type: ActionTypes.GET_ACCOUNTS_ORDERS_DETAIL_SUCCESS,
    payload
})
export const getOrdersDetailError = (payload) => ({
    type: ActionTypes.GET_ACCOUNTS_ORDERS_DETAIL_ERROR,
    payload
})
export const getOrderDetail = (id) => {
    return dispatch => {
        dispatch(setLoading(true));

        let url = `orders/${id}`;

        Axios.get(`${process.env.REACT_APP_API_URL}/${url}`,
        )
            .then(res => {
                dispatch(setLoading(false));
                if (res.data) {
                    dispatch(getOrdersDetailSuccess(res.data));
                } else {
                    dispatch(getOrdersDetailError(undefined));
                }
            })
            .catch(e => {
                dispatch(setLoading(false));
                dispatch(getOrdersDetailError(e));
            });
    }
}
