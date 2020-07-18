import {
  email,
  isRequired,
  phoneNumber,
  charactersOnly,
} from '../../services/validatorService';

export const validators = {
  name: [isRequired('Name is required'), charactersOnly()],
  phone: [isRequired('Phone Number is required'), phoneNumber()],
  companyName: [isRequired('Company Name is required'), charactersOnly()],
  email: [isRequired('Email Id is required'), email()],
};
