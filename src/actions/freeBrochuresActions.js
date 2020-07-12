import store from "../store";
import {saveBrochureUrl} from "../constants/urls";

export const fetch_post = () => {
    return {
          type: "SAVE_FREE_BROCHURES_USER"
    };
};

export const receive_post = post => {
    return {
        type: "SAVE_FREE_BROCHURES_USER",
        data: post
    };
};

export const receive_error = () => {
    return {
        type: "RECEIVE_ERROR"
    };
};

export const save_brochures_details = (data) => {
    console.log(JSON.stringify(data));
    store.dispatch(fetch_post(data));
    return function(dispatch, getState) {
      return fetch(saveBrochureUrl,
        { 
            headers: { 'Content-Type': 'application/json' }, 
            method: 'post', body: JSON.stringify(data)}
        )
        .then(data => data.json())
        .then(data => {
            if (data.length === 0) {
                throw new Error("No details found!!");
            } else dispatch(receive_post(data));
        })
        .catch(err => dispatch(receive_error()));
    };
};

