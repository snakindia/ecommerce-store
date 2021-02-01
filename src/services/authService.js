const isLoggedIn = () => {
  return Boolean(localStorage.bhaAuth);
};

const setAuthDetails = token => {
  localStorage.bhaAuth = token;
};

const removeAuthDetails = () => {
  localStorage.bhaAuth = null;
};

const getAuthToken = () => {
  return localStorage.bhaAuth;
};

export { isLoggedIn, setAuthDetails, removeAuthDetails, getAuthToken };
