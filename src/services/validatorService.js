const errRequired = 'Required field';
const isRequired = msg => value => {
  return value ? null : msg || errRequired;
};

const errCharacterOnly = 'Please enter alphabet characters only';
const charactersOnly = msg => value => {
  return /^[a-zA-Z ]*$/i.test(value) ? null : msg || errCharacterOnly;
};
const erralphaOnly = 'Please enter alphabet characters only';
const aphaOnly = msg => value => {
  return /^[a-zA-Z0-9~!@#$%^&*-_'" ]*$/i.test(value) ? null : msg || erralphaOnly;
};

const errPhoneNumber = 'Please enter valid phone number';
const phoneNumber = msg => value => {
  return /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i.test(
    value
  )
    ? null
    : msg || errPhoneNumber;
};

const errEmail = 'Invalid email address';
const email = msg => value => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ? null
    : msg || errEmail;
};

const minLength = (length, msg) => value => {
  return value.length >= length
    ? null
    : msg || `Min ${length} characters required`;
};

const errStrongPwd = 'Need Strong Password';
const strongPassWord = msg => value => {
  return /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/i.test(
    value
  )
    ? null
    : msg || errStrongPwd;
};

const errZip = 'Please Enter a valid Zip';
const zipCode = msg => value => {
  return /^[0-9]{6}$/i.test(value) ? null : msg || errZip;
};

const _runValidation = (validationRegistry, value, formValues) => {
  let err;
  for (let validateFn of validationRegistry) {
    err = validateFn(value, formValues);
    if (err) {
      break;
    }
  }
  return err;
};

const execValidation = (rules, formValues) => {
  const errors = {};
  for (const key of Object.keys(rules)) {
    const value = formValues[key];
    const err = _runValidation(rules[key], value, formValues);
    err && (errors[key] = err);
  }
  return errors;
};

export default execValidation;
export {
  isRequired,
  charactersOnly,
  phoneNumber,
  email,
  minLength,
  strongPassWord,
  zipCode,
  aphaOnly  
};
