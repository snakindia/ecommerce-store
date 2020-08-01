import { GET } from '../../services/httpService';
import { getProductListUrl } from '../../constants/urls';
import {
  FETCH_PRODUCT_LIST,
  FIELD_VALUE_CHANGE,
  PAGE_CHANGE,
} from './category.action.constants';

export const SIZE = 12;
const fetchCategory = () => async (dispatch, getState) => {
  try {
    const { category } = getState();
    dispatch({ type: `${FETCH_PRODUCT_LIST}_START` });
    const url = getProductListUrl({
      limit: category.size,
      page: category.currentPage - 1 < 0 ? 0 : category.currentPage - 1,
      search: category.search,
      sortBy: category.sortBy,
    });
    const res = await GET({ url });
    console.log('res', res.data);
    dispatch({ type: FETCH_PRODUCT_LIST, payload: res.data });
  } catch (e) {
    dispatch({ type: `${FETCH_PRODUCT_LIST}_ERROR`, error: e });
  } finally {
    dispatch({ type: `${FETCH_PRODUCT_LIST}_FINISHED` });
  }
};

const changePage = pageNo => async dispatch => {
  try {
    const res = await dispatch({ type: PAGE_CHANGE, payload: pageNo });
    dispatch(fetchCategory());
  } catch (e) {
    throw e;
  }
};

let searchTimer = null;
const searchChange = value => dispatch => {
  dispatch({ type: FIELD_VALUE_CHANGE, fieldName: 'search', payload: value });
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => dispatch(fetchCategory()), 1000);
};

const dropDownChange = (fieldName, value) => async dispatch => {
  try {
    await dispatch({ type: FIELD_VALUE_CHANGE, payload: value, fieldName });
    dispatch(fetchCategory());
  } catch (e) {
    throw e;
  }
};

export { fetchCategory, searchChange, dropDownChange, changePage };
