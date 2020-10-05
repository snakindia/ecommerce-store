

const url = process.env.REACT_APP_url ?   process.env.REACT_APP_url :  window.localStorage.__url || '127.0.0.1'; // 127.0.0.1

const API_URL = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL: 'http://127.0.0.1:3001/api/v1';
const API_AJAX_URL = process.env.REACT_APP_API_AJAX_URL ? process.env.REACT_APP_API_AJAX_URL :'http://127.0.0.1:3001/ajax';
const categoryImageUrl =process.env.REACT_APP_categoryImageUrl ? process.env.REACT_APP_categoryImageUrl:  'http://127.0.0.1:3001/images/categories';
const API_IMAGE_PATH =process.env.REACT_APP_API_IMAGE_PATH ? process.env.REACT_APP_API_IMAGE_PATH: 'http://127.0.0.1:3001/images/';
export { API_URL, API_AJAX_URL, categoryImageUrl, API_IMAGE_PATH };