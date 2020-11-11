import { GET_USER_DETAILS, SIGN_OUT_USER, LOADING_AUTH } from '../actions/authActions';
import { LOGIN_SUCCESS } from '../components/Accounts/store/ActionTypes';

const initialState = {
  token: null,
  authenticated: false,
  order_statuses: null,
  customer_settings: null,
  error: '',
  addresses:undefined,
  auth_loading:undefined
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case GET_USER_DETAILS:
      if(payload && payload.customer_settings && payload.customer_settings.email){
        localStorage.setItem('BHAuserEmail', payload.customer_settings.email)
      }
      return { ...state, ...payload };

    case `${GET_USER_DETAILS}_ERROR`:
      return { ...state, token: null, authenticated: false, error: error };
    case `${GET_USER_DETAILS}_ERROR`:
          return { ...state, token: null, authenticated: false, error: error };
    case LOGIN_SUCCESS:
          localStorage.setItem('authToken',payload.token);
          return { ...state, token: payload.token, authenticated: true, error: '' };
  case SIGN_OUT_USER:
            localStorage.setItem('authToken',null);
            localStorage.setItem('BHAuserEmail',null);
            return { ...state, token: null, authenticated: undefined, error: '' };

    case LOADING_AUTH:
      return { ...state, auth_loading:payload};

    default:
      return state;
  }
};
