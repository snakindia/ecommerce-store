const isLoggedIn = () => {
  return Boolean(localStorage.authToken);
};

const setAuthDetails = token => {
  localStorage.authToken = token;
};

const removeAuthDetails = () => {
  localStorage.authToken = null;
};

const getAuthToken = () => {
  return localStorage.authToken;
};

export { isLoggedIn, setAuthDetails, removeAuthDetails, getAuthToken };
