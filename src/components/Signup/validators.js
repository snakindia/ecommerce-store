import {
  email,
  zipCode,
  minLength,
  isRequired,
  phoneNumber,
  strongPassWord,
  charactersOnly,
} from '../../services/validatorService';

export const validators = {
  first_name: [isRequired('First Name is required'), charactersOnly()],
  last_name: [isRequired('Last Name is required'), charactersOnly()],
  phone: [isRequired('Phone Number is required'), phoneNumber()],
  companyname: [isRequired('Company Name is required'), charactersOnly()],
  email: [isRequired('Email Id is required'), email()],
  password: [
    isRequired('Password is required'),
    minLength(8, 'Password must be 8 characters long'),
    strongPassWord(
      'PASSWORD SHOULD BE A MINIMUM OF 8 CHARACTERS WITH AT LEAST ONE ' +
        'CAPITAL LETTER, ONE LOWER CASE LETTER AND ONE NUMBER. PASSWORD ' +
        'CANNOT START WITH A NUMBER OR BE THE SAME AS YOUR EMAIL.'
    ),
  ],
  confirmpassword: [
    (value, formValues) => {
      return value !== formValues.password
        ? 'Password does not match with Confirm Password'
        : null;
    },
  ],
  zipcode: [isRequired('Zip Code is required'), zipCode()],
};
