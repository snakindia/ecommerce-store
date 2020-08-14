import { GET } from '../../services/httpService';
import { getNewsDetailURL } from '../../constants/urls';
import {
    FETCH_NEWS_DETAIL
} from './newsdetail.action.constants';


const fetchNewsDetail = (slug) => async (dispatch, getState) => {
    try {
        dispatch({ type: `${FETCH_NEWS_DETAIL}_START` });
        const url = getNewsDetailURL + slug
        const res = await GET({ url });
        dispatch({ type: FETCH_NEWS_DETAIL, payload: res.data });
    } catch (e) {
        dispatch({ type: `${FETCH_NEWS_DETAIL}_ERROR`, error: e });
    } finally {
        dispatch({ type: `${FETCH_NEWS_DETAIL}_FINISHED` });
    }
};

export {
    fetchNewsDetail
};
