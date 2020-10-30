import { GET_USER_DETAILS, SIGN_OUT_USER, LOADING_AUTH } from '../actions/authActions';

const initialState = {
  token: null,
  authenticated: false,
  order_statuses: null,
  customer_settings: null,
  error: '',
  auth_loading:undefined
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case GET_USER_DETAILS:
      return { ...state, ...payload };

    case `${GET_USER_DETAILS}_ERROR`:
      return { ...state, token: null, authenticated: false, error: error };
    case `${GET_USER_DETAILS}_ERROR`:
          return { ...state, token: null, authenticated: false, error: error };

    case LOADING_AUTH:
      return { ...state, auth_loading:payload};

    default:
      return state;
  }
};
