import { API_AJAX_URL, API_URL } from './appConstant';

const signUpUrl = `${API_AJAX_URL}/register`;
const settingsUrl = `${API_URL}/theme/settings`;
const menuProductUrl = `${API_URL}/menu_product_categories`;
const saveBrochureUrl = `${API_URL}/save_brouchures`;
const getSlugDetailUrl = `${API_URL}/get_slug_details?slug=about`;

export {
  signUpUrl,
  settingsUrl,
  menuProductUrl,
  saveBrochureUrl,
  getSlugDetailUrl,
};
