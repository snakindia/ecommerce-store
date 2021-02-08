import { API_AJAX_URL, API_IMAGE_PATH, API_URL } from './appConstant';
const DEFAULT_IMG_URL = `${API_IMAGE_PATH}/default/default.jpg`;
const signUpUrl = `${API_AJAX_URL}/register`;
const forgotPasswordUrl = `${API_AJAX_URL}/forgot-password`;
const resetPasswordUrl = `${API_AJAX_URL}/reset-password`;
const signInUrl = `${API_AJAX_URL}/login`;
const settingsUrl = `${API_URL}/theme/settings`;
const countryUrl = `${API_URL}/country-list`;
const hotDealsUrl = `${API_URL}/getHotProductList?fields=name,regular_price,sale_price,images,sku,description`;
const userDetailUrl = `${API_AJAX_URL}/customer-account`;
const menuProductUrl = `${API_URL}/menu_product_categories?fields=name,id,slug,meta_title,banner_image,image`;
const saveBrochureUrl = `${API_URL}/save_brouchures`;
const getSlugDetailUrl = `${API_URL}/get_slug_details?slug=about`;
const getProductListUrl = ({
  limit = 12,
  page = 0,
  search = '',
  sortBy = 'name',
  price,
}) =>
  `${API_URL}/products?discontinued=false&fields=id,name,category_id,category_ids,category_name,sku,images,enabled,discontinued,description,stock_status,stock_quantity,price,on_sale,regular_price,url&limit=${limit}&offset=${page}&search=${search}&sort=${sortBy}&price=${encodeURIComponent(
    price
  )}`
const getPageMetaDetails = `${API_URL}/pages?fields=slug,meta_title,meta_description,content,template`;
const getNewsDetailURL = `${API_URL}/newsevents/get_news_details?`;
const getClientListURL = `${API_URL}/companies/get_list`;
const getNewsListUrl = ({ type, page = 1, size, filterBy }) =>
  `${API_URL}/newsevents/get_list?type=${type}&page=${page}&size=${size}&filterby=${filterBy}`;
export {   DEFAULT_IMG_URL, forgotPasswordUrl, countryUrl,resetPasswordUrl, signUpUrl,   signInUrl,   hotDealsUrl,   settingsUrl,   userDetailUrl,   menuProductUrl,   saveBrochureUrl,   getSlugDetailUrl,   getProductListUrl,   getPageMetaDetails,   getNewsDetailURL,   getClientListURL,   getNewsListUrl,
};

export const getPageDetailsUrl = `${API_URL}/get_slug_details?slug=`;
export const getIndustriesList = `${API_URL}/industries/get_list`;
