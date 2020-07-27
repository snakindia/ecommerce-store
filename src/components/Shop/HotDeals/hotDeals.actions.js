import { POST, GET } from '../../../services/httpService';
import { hotDealsUrl } from '../../../constants/urls';

const FETCH_HOT_DEALS = 'FETCH_HOT_DEALS';
export { FETCH_HOT_DEALS };

const fetchHotDeals = () => async dispatch => {
  dispatch({ type: `${FETCH_HOT_DEALS}_START` });
  try {
    const res = await GET({ url: hotDealsUrl, payload: {} });
    dispatch({ type: FETCH_HOT_DEALS, payload: res.data });
  } catch (e) {
    throw e;
  } finally {
    dispatch({ type: `${FETCH_HOT_DEALS}_FINISHED` });
  }
};

export { fetchHotDeals };
