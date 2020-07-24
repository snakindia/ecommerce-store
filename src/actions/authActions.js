import { POST } from '../services/httpService';
import { removeAuthDetails } from '../services/authService';
import { userDetailUrl } from '../constants/urls';

const GET_USER_DETAILS = 'GET_USER_DETAILS';
const SIGN_OUT_USER = 'SIGN_OUT_USER';
export { GET_USER_DETAILS, SIGN_OUT_USER };

const getUserDetail = token => async dispatch => {
  try {
    const res = await POST({ url: userDetailUrl, payload: { token } });
    dispatch({ type: GET_USER_DETAILS, payload: res.data.data });
  } catch (e) {
    removeAuthDetails();
    dispatch({ type: `${GET_USER_DETAILS}_ERROR`, error: e });
  }
};

const signOutUser = () => ({
  type: SIGN_OUT_USER,
});

export { getUserDetail, signOutUser };
