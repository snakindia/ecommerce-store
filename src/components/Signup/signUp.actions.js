import { POST,GET } from '../../services/httpService';
import { signUpUrl,forgotPasswordUrl ,resetPasswordUrl, countryUrl } from '../../constants/urls';

const signUp = payload => async () => {
  try {
    const response = await POST({ url: signUpUrl, payload });
    return response.data;
  } catch (e) {
    console.error('SignUp error', e);
    throw e;
  }
};
const forgotPasswordAction = payload => async () => {
  try {
    const response = await POST({ url: forgotPasswordUrl, payload });
    return response.data;
  } catch (e) {
    console.error('forgotPassword', e);
    throw e;
  }
};
const resetPasswordAction= payload => async () => {
  try {
    const response = await POST({ url: resetPasswordUrl, payload });
    return response.data;
  } catch (e) {
    console.error('resetPasswordUrl', e);
    throw e;
  }
};
const getCountries= payload => async () => {
  try {
    const response = await GET({ url: countryUrl });
    return response.data;
  } catch (e) {
    console.error('resetPasswordUrl', e);
    throw e;
  }
};

export { signUp, forgotPasswordAction,resetPasswordAction, getCountries };
