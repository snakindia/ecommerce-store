import { POST } from '../services/httpService';
import { removeAuthDetails } from '../services/authService';
import { userDetailUrl } from '../constants/urls';

const GET_USER_DETAILS = 'GET_USER_DETAILS';
const SIGN_OUT_USER = 'SIGN_OUT_USER';
const LOADING_AUTH = 'LOADING_AUTH';
export { GET_USER_DETAILS, SIGN_OUT_USER,LOADING_AUTH };

const getUserDetail = token => async dispatch => {
  dispatch({ type: LOADING_AUTH, payload: true });
  try {
    const res = await POST({ url: userDetailUrl, payload: { token } });
    dispatch({ type: GET_USER_DETAILS, payload: res.data.data });
    dispatch({ type: LOADING_AUTH, payload: false });
  } catch (e) {
    removeAuthDetails();
    dispatch({ type: LOADING_AUTH, payload: false });
    dispatch({ type: `${GET_USER_DETAILS}_ERROR`, error: e });
  }
};

const signOutUser = () => ({
  type: SIGN_OUT_USER,
});

export { getUserDetail, signOutUser };
