import { POST } from '../../services/httpService';
import { signUpUrl } from '../../constants/urls';

const signUp = payload => async () => {
  try {
    const response = await POST({ url: signUpUrl, payload });
    return response.data;
  } catch (e) {
    console.error('SignUp error', e);
    throw e;
  }
};

export { signUp };
