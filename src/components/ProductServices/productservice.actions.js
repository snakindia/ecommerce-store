import { GET } from '../../services/httpService';
import { getPageDetailsUrl } from '../../constants/urls';
import { FETCH_PRODUCTSERVICE_DETAIL } from './productservice.action.constants';

const fetchProdcutServiceDetail = (slug) => async (dispatch, getState) => {
    try {
        dispatch({ type: `${FETCH_PRODUCTSERVICE_DETAIL}_START` });
        const url = getPageDetailsUrl + slug
        const res = await GET({ url });
        dispatch({ type: FETCH_PRODUCTSERVICE_DETAIL, payload: res.data });
    } catch (e) {
        dispatch({ type: `${FETCH_PRODUCTSERVICE_DETAIL}_ERROR`, error: e });
    } finally {
        dispatch({ type: `${FETCH_PRODUCTSERVICE_DETAIL}_FINISHED` });
    }
};

export { fetchProdcutServiceDetail };

