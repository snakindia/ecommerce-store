import * as ActionTypes from './ActionTypes';
import Axios from 'axios';
import { message } from 'antd';
import {API_URL} from '../../../constants/appConstant'
export const setLoading = (payload) => ({
    type: ActionTypes.REPRESENTUS_LOADING,
    payload
})

export const setError = (payload) => ({
    type: ActionTypes.LOAD_REPRESENTUS_FAILURE,
    payload
})

export const setSuccess = () => ({
    type: ActionTypes.LOAD_REPRESENTUS_SUCCESS
})

export const getFAQSuccess = (payload) => ({
    type: ActionTypes.REPRESENTUS_GET_FAQ_SUCCESS,
    payload
})
export const getFAQError = (payload) => ({
    type: ActionTypes.REPRESENTUS_GET_FAQ_ERROR,
    payload
})



export const getFaq = () => {
    return dispatch => {
            const url =`${API_URL}/faqs/get_list`;
        dispatch(setLoading(true));
        Axios.get(url)
            .then(res => {
                dispatch(setLoading(false));
                if (res.data) {
                    dispatch(setSuccess());
                    dispatch(getFAQSuccess(res.data));
                } else {
                    dispatch(getFAQError('Something went wrong'));
                }
            })
            .catch(e => {
                message.error('Something went wrong');
                dispatch(setLoading(false));
                dispatch(setError(e));
                dispatch(getFAQError(e));
            });
    }
}