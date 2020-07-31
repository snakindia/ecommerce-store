import { isRequired } from '../../services/validatorService';

export const validators = {
  token: [isRequired('Token is required'), isRequired()],
};
