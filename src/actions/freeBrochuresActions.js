import store from '../store';
import { saveBrochureUrl } from '../constants/urls';

export const fetch_post = () => {
  return {
    type: 'SAVE_FREE_BROCHURES_USER',
  };
};

export const receive_post = (post,contactFormType) => {
  return {
    type: 'SAVE_FREE_BROCHURES_USER',
    data: post,
    contactFormType
  };
};

export const receive_error = () => {
  return {
    type: 'RECEIVE_ERROR',
  };
};
export const setLoading = (payload) => {
  return {
    type: 'SET_BROCHURES_LOADING',
    payload
  };
};
export const flushData = (payload) => {
  return {
    type: 'FLUSH_BROCHURES_DATA',
    payload
  };
};

export const save_brochures_details = payload => {
  store.dispatch(flushData());
  store.dispatch(setLoading(true))
  
  
  return function (dispatch, getState) {
  
    return fetch(saveBrochureUrl, {
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      body: JSON.stringify(payload),
    })
      .then(data => data.json())
      .then(data => {
        const contactFormType =payload && payload.contactFormType ? payload.contactFormType :undefined;
        let status = false;
        store.dispatch(setLoading(false))
        if (data && data.error===true){
          dispatch(receive_post(false,contactFormType));
        } else if (data && data.status===true){
          dispatch(receive_post(true,contactFormType));
        }
        return data;
      })
      .catch(err => {
        store.dispatch(setLoading(false))
        dispatch(receive_error());
        throw err;
      });
  };
};
