import store from "../store";
import {API_URL} from '../constants/appConstant'

export const fetch_post = () => {
  return {
    type: "FETCH_MENU"
  };
};

export const receive_post = post => {
  return {
    type: "FETCHED_MENU",
    data: post
  };
};

export const receive_error = () => {
  return {
    type: "RECEIVE_ERROR"
  };
};

export const fetch_dynamic_menus = () => {
    store.dispatch(fetch_post());
    return function(dispatch, getState) {
      return fetch(`${API_URL}/theme/settings`)
        .then(data => data.json())
        .then(data => {
          if (data.message === "Not Found") {
            throw new Error("No such user found!!");
          } else dispatch(receive_post(data));
        })
        .catch(err => dispatch(receive_error()));
    };
  };