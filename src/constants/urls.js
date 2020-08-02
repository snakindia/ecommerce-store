import { API_AJAX_URL, API_URL } from './appConstant';

const signUpUrl = `${API_AJAX_URL}/register`;
const signInUrl = `${API_AJAX_URL}/login`;
const settingsUrl = `${API_URL}/theme/settings`;
const hotDealsUrl = `${API_URL}/getHotProductList?fields=name,regular_price,sale_price,images,sku,description`;
const userDetailUrl = `${API_AJAX_URL}/customer-account`;
const menuProductUrl = `${API_URL}/menu_product_categories`;
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
  )}`;
const getPageMetaDetails = `${API_URL}/pages?fields=slug,meta_title,meta_description,content`;

export {
  signUpUrl,
  signInUrl,
  hotDealsUrl,
  settingsUrl,
  userDetailUrl,
  menuProductUrl,
  saveBrochureUrl,
  getSlugDetailUrl,
  getProductListUrl,
  getPageMetaDetails,
};
