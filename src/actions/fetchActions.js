import store from '../store';
import {
  menuProductUrl,
  settingsUrl,
  getPageMetaDetails,
} from '../constants/urls';

export const setLoading = (payload) => {
  return {
    type: 'LOADING',
    payload
  };
};
export const fetch_post = () => {
  return {
    type: 'FETCH_MENU',
  };
};

export const receive_post = post => {
  return {
    type: 'FETCHED_MENU',
    data: post,
  };
};

export const receive_error = () => {
  return {
    type: 'RECEIVE_ERROR',
  };
};

export const received_page_meta_details = data => {
  return {
    type: 'RECEIVED_PAGE_META_DETAILS',
    data: data,
  };
};

export const fetch_dynamic_menus = () => {
  store.dispatch(fetch_post());
  return function (dispatch, getState) {
    return fetch(settingsUrl)
      .then(data => data.json())
      .then(data => {
        if (data.message === 'Not Found') {
          throw new Error('No such user found!!');
        } else dispatch(receive_post(data));
      })
      .catch(err => dispatch(receive_error()));
  };
};

export const fetch_page_meta_details = () => {
  return function (dispatch, getState) {
    return fetch(getPageMetaDetails)
      .then(data => data.json())
      .then(data => {
        if (data.message === 'Not Found') {
          throw new Error('No page found!!');
        } else dispatch(received_page_meta_details(data));
      })
      .catch(err => dispatch(receive_error()));
  };
};

export const fetch_submenu_post = () => {
  return {
    type: 'FETCH_SUB_MENU',
  };
};

export const receive_submenu_post = post => {
  return {
    type: 'FETCHED_SUB_MENU',
    data: post,
  };
};

export const fetch_submenu_items = () => {
  store.dispatch(fetch_submenu_post());
  return function (dispatch, getState) {
    return fetch(menuProductUrl)
      .then(data => data.json())
      .then(data => {
        if (data.message === 'Not Found') {
          throw new Error('No such user found!!');
        } else dispatch(receive_submenu_post(data));
      })
      .catch(err => dispatch(receive_error()));
  };
};
