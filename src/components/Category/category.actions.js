import { GET } from '../../services/httpService';
import { getProductListUrl } from '../../constants/urls';
import {
  FETCH_PRODUCT_LIST,
  FIELD_VALUE_CHANGE,
} from './category.action.constants';

const fetchCategory = () => async dispatch => {
  try {
    dispatch({ type: `${FETCH_PRODUCT_LIST}_START` });
    const url = getProductListUrl;
    const res = await GET({ url });
    console.log('res', res.data);
    dispatch({ type: FETCH_PRODUCT_LIST, payload: res.data });
  } catch (e) {
    dispatch({ type: `${FETCH_PRODUCT_LIST}_ERROR`, error: e });
  } finally {
    dispatch({ type: `${FETCH_PRODUCT_LIST}_FINISHED` });
  }
};

const fieldChange = value => ({
  type: FIELD_VALUE_CHANGE,
  payload: value,
});

export { fetchCategory, fieldChange };
