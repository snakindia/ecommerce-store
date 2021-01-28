import * as ActionTypes from './ActionTypes';
import Axios from 'axios';
import {notification } from '../../../utils/helper';
//import { getUserDetail, signOutUser } from '../../../actions/authActions';
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





export const getOrders = () => {
    return dispatch => {
       
        const token=localStorage.getItem('bhaAuth');
        
        if(token){
            //dispatch(flushData());
            dispatch(setLoading(true));
            Axios.post(`${process.env.REACT_APP_API_AJAX_URL}/customer-account`,{token}
        )
            .then(res => {
                dispatch(setLoading(false));
                if (res.data && res.data.data && res.data.data.order_statuses) {
                   console.log(res.data.data.order_statuses);
                   dispatch(getOrdersSuccess(res.data.data.order_statuses ));
                } else {
                    //dispatch(getOrdersError());
                }
            })
            .catch(e => {
                notification('error', 'Oops!! something went wrong')
                dispatch(setLoading(false));
                //dispatch(getOrdersError(e));
            });
        }
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
// export const updateUserName = (payload) => ({
//     type: ActionTypes.updateUserName,
//     payload
// })

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
                    dispatch(flushData());
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
        const token =localStorage.getItem('bhaAuth');
        const headers= { authorization: `Bearer Token ${token}` } ;
        dispatch(setLoading(true));
        const data ={...payload,token};
        const instance = Axios.create({
            baseURL: `${process.env.REACT_APP_API_AJAX_URL}`
          });
          instance.defaults.headers.common['authorization'] = `Bearer ${token}`;
          instance.put('/update-personal-detail', data).then(res => {
                dispatch(setLoading(false));
                if (res.data) {
                    notification('success', 'Info updated')
                    //dispatch(updateUserName(data));
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
        const token =localStorage.getItem('bhaAuth');
        const headers= { authorization: `Bearer Token ${token}` } ;
        dispatch(setLoading(true));
        const data ={...payload,token};
        const instance = Axios.create({
            baseURL: `${process.env.REACT_APP_API_AJAX_URL}`
          });
          instance.defaults.headers.common['authorization'] = `Bearer ${token}`;
          
          instance.put('/update-password', data).then(res => {
             
                dispatch(setLoading(false));
                if(res.status ==200){
                if(res.data && res.data.status){
                    notification('success', 'Info updated')
                }
                else if(!res.data.status && res.data.data){
                    notification('error',  res.data.data)
                } else {
                    notification('error', 'Oops!! something went wrong')
                }
            }else {
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
//login, 
export const setLoadingAuth = (payload) => ({
    type: ActionTypes.SET_AUTH_LOADING,
    payload

})
export const loginSuccess = (payload) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload

})
export const doLogin = (payload) => {
    return dispatch => {

        dispatch(setLoadingAuth(true));
        //const token =localStorage.getItem('bhaAuth');
        
        dispatch(setLoading(true));
        const instance = Axios.create({
            baseURL: `${process.env.REACT_APP_API_AJAX_URL}`
          });
          //instance.defaults.headers.common['Access-Control-Request-Headers'] = `content-type`;
          instance.defaults.headers.common['Access-Control-Allow-Headers'] = `*`;
          instance.defaults.withCredentials = false;
          console.log(instance,payload);
          instance.post('/login', payload)
        // Axios.post(`${process.env.REACT_APP_API_AJAX_URL}/login`,payload)
            .then(res => {
                dispatch(setLoadingAuth(false));
                if (res.data && res.data.status && res.data.token) {
                    localStorage.setItem('bhaAuth',res.data.token);
                    window.location.reload();
                    dispatch(getUser());
                } else {
                    notification('error', 'Credentials Invalid')
                }
            })
            .catch(e => {
                notification('error', 'Oops!! something went wrong')
                dispatch(setLoadingAuth(false));
               
            });
    }
}
export const getUserDetailSuccess = (payload) => ({
    type: ActionTypes.GET_USER_SUCCESS,payload
})
export const getUser = () => {
    return dispatch => {
       
        const token=localStorage.getItem('bhaAuth');
       
        if(token){
            dispatch(setLoadingAuth(true));
            Axios.post(`${process.env.REACT_APP_API_AJAX_URL}/customer-account`,{token}
        )
            .then(res => {
                dispatch(setLoadingAuth(false));
                if (res.data && res.data && res.data.data) {
                    dispatch(getUserDetailSuccess(res.data.data ));
                } else {
                    notification('error', 'Oops!! something went wrong')
                }
            })
            .catch(e => {
                notification('error', 'Oops!! something went wrong')
                dispatch(setLoadingAuth(false));
               
            });
        }
        
    }
}
export const logout = () => ({
    type: ActionTypes.LOGOUT_SUCCESS,
})