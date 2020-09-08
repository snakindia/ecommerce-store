const url = window.localStorage.__url || '127.0.0.1'; // 49.50.102.36

const API_URL = `http://${url}:3001/api/v1`;
const API_AJAX_URL = `http://${url}:3001/ajax`;
const categoryImageUrl = `http://${url}:3001/images/categories`;
const API_IMAGE_PATH = `http://${url}:3001/images/`;

export { API_URL, API_AJAX_URL, categoryImageUrl, API_IMAGE_PATH };
