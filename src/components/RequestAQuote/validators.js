import {
  email,
  isRequired,
  phoneNumber,
  charactersOnly,
  aphaOnly,
} from '../../services/validatorService';

export const validators = {
  name: [isRequired('Name is required'), aphaOnly()],
  phone: [isRequired('Phone Number is required'), phoneNumber()],
  company: [isRequired('Company Name is required'), aphaOnly()],
  email: [isRequired('Email Id is required'), email()],
  category_id: [isRequired('Category is required'), isRequired()],
  message: [isRequired('Please type Message'), isRequired()],
};
