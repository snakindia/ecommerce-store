import store from "../store";
import {API_URL} from '../constants/appConstant'

export const fetch_post = () => {
    return {
          type: "FETCHED_ABOUT_US_PAGE_DETAILS"
    };
};

export const receive_post = post => {
    return {
        type: "FETCHED_ABOUT_US_PAGE_DETAILS",
        data: post
    };
};

export const receive_error = () => {
    return {
        type: "RECEIVE_ERROR"
    };
};

export const get_about_us_details = () => {
    store.dispatch(fetch_post());
    return function(dispatch, getState) {
      return fetch(`${API_URL}/get_slug_details?slug=about`)
        .then(data => data.json())
        .then(data => {
            console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
                    console.log(data);
            if (data.length === 0) {
                throw new Error("No details found!!");
            } else dispatch(receive_post(data));
        })
        .catch(err => dispatch(receive_error()));
    };
};

