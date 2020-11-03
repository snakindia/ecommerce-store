import * as ActionTypes from './ActionTypes';
import Axios from 'axios';
import {notification } from '../../../utils/helper';
import { getUserDetail, signOutUser } from '../../../actions/authActions';
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
export const loginSuccess = (payload) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload

})

export const doLogin = (payload) => {
    return dispatch => {
        dispatch(setLoading(true));
        Axios.post(`${process.env.REACT_APP_API_AJAX_URL}/login`,payload
        )
            .then(res => {
                dispatch(setLoading(false));
                if (res.data && res.data.status && res.data.token) {
                    dispatch(loginSuccess(res.data ));
                    dispatch(getUserDetail(res.data.token));
                } else {
                    notification('error', 'Credentials Invalid')
                }
            })
            .catch(e => {
                 console.log({e})
                notification('error', 'Oops!! something went wrong')
                dispatch(setLoading(false));
               
            });
    }
}


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
                notification('error', 'Oops!! something went wrong')
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
                notification('error', 'Oops!! something went wrong')
                dispatch(setLoading(false));
                dispatch(getOrdersDetailError(e));
            });
    }
}
export const cancelOrdersSuccess = (payload) => ({
    type: ActionTypes.GET_ACCOUNTS_ORDERS_CANCEL_SUCCESS,
    payload
})
export const getOrderStatusSuccess = (payload) => ({
    type: ActionTypes.GET_ACCOUNTS_ORDERS_STATUS_SUCCESS,
    payload
})

export const cancelOrder = (payload) => {

    return dispatch => {
        
        dispatch(setLoading(true));
        
        let url = `orders/${payload.id}`;

        Axios.put(`${process.env.REACT_APP_API_URL}/${url}`,payload
        )
            .then(res => {
                dispatch(setLoading(false));
                if (res.data) {
                    notification('success', 'Order canceled')
                    dispatch(cancelOrdersSuccess(res.data));
                } else {
                    notification('error', 'Oops!! something went wrong')
                }
            })
            .catch(e => {
                dispatch(setLoading(false));
                notification('error', 'Oops!! something went wrong')
            });
    }
}

export const updateDetail = (payload) => {
    return dispatch => {
        const token =localStorage.getItem('authToken');
        const headers= { Authorization: `Bearer ${token}`, withCredentials: true } ;
        dispatch(setLoading(true));
        Axios.put(`${process.env.REACT_APP_API_AJAX_URL}/customer-account`,
        {...payload,token},
        headers
        )
            .then(res => {
                dispatch(setLoading(false));
                if (res.data) {
                    notification('success', 'Info updated')
                    //dispatch(cancelOrdersSuccess(res.data));
                } else {
                    notification('error', 'Oops!! something went wrong')
                }
            })
            .catch(e => {
                dispatch(setLoading(false));
                notification('error', 'Oops!! something went wrong')
            });
    }
}
export const changePassword = (payload) => {

    return dispatch => {
        
        dispatch(setLoading(true));
        
        let url = `orders/${payload.id}`;

        Axios.put(`${process.env.REACT_APP_API_URL}/${url}`,payload
        )
            .then(res => {
                dispatch(setLoading(false));
                if (res.data) {
                    notification('success', 'Order canceled')
                    dispatch(cancelOrdersSuccess(res.data));
                } else {
                    notification('error', 'Oops!! something went wrong')
                }
            })
            .catch(e => {
                dispatch(setLoading(false));
                notification('error', 'Oops!! something went wrong')
            });
    }
}
export const getOrderStatus = () => {

    return dispatch => {
        let url = `order_statuses`;
        Axios.get(`${process.env.REACT_APP_API_URL}/${url}`
        )
            .then(res => {
                if (res.data) {
                    dispatch(getOrderStatusSuccess(res.data));
                } 
            })
            .catch(e => {
            });
    }
}
