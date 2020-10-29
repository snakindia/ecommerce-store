import * as ActionTypes from './ActionTypes';
import Axios from 'axios';
import {notification } from 'antd';

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
                openNotificationWithIcon('error', 'Oops!! something went wrong')
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
                openNotificationWithIcon('error', 'Oops!! something went wrong')
                dispatch(setLoading(false));
                dispatch(getOrdersDetailError(e));
            });
    }
}
export const cancelOrdersSuccess = (payload) => ({
    type: ActionTypes.GET_ACCOUNTS_ORDERS_CANCEL_SUCCESS,
    payload
})
const openNotificationWithIcon = (type, message) => {
    notification[type]({
      message, top:100,duration:2
      
    });
  };
export const cancelOrder = (payload) => {

    return dispatch => {
        
        dispatch(setLoading(true));
        
        let url = `orders/${payload.id}`;

        Axios.put(`${process.env.REACT_APP_API_URL}/${url}`,payload
        )
            .then(res => {
                dispatch(setLoading(false));
                if (res.data) {
                    openNotificationWithIcon('success', 'Order canceled')
                    dispatch(cancelOrdersSuccess(res.data));
                } else {
                    openNotificationWithIcon('error', 'Oops!! something went wrong')
                }
            })
            .catch(e => {
                dispatch(setLoading(false));
                openNotificationWithIcon('error', 'Oops!! something went wrong')
            });
    }
}
