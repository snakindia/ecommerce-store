import axios from 'axios';

const getHeaders = customHeaders => {
  //add base headers that are same throughout the site and merge custom with action
  return { ...customHeaders };
};

const POST = ({ url, payload, headers }) => {
  const _headers = getHeaders(headers);
  return axios.post(url, payload, { ..._headers });
};

const GET = ({ url, headers }) => {
  const _headers = getHeaders(headers);
  return axios.get(url, { ..._headers });
};

const PATCH = ({ url, payload, headers }) => {
  const _headers = getHeaders(headers);
  return axios.patch(url, payload, { ..._headers });
};

export { POST, PATCH, GET };

export default axios;
