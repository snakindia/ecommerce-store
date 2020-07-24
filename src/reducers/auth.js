import { GET_USER_DETAILS } from '../actions/authActions';

const initialState = {
  token: null,
  authenticated: false,
  order_statuses: null,
  customer_settings: null,
  error: '',
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case GET_USER_DETAILS:
      return { ...state, ...payload };

    case `${GET_USER_DETAILS}_ERROR`:
      return { ...state, token: null, authenticated: false, error: error };

    default:
      return state;
  }
};
