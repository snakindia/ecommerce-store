import { GET } from '../../services/httpService';
import { getNewsListUrl } from '../../constants/urls';
import {
    FETCH_NEWS_LIST,
} from './news.action.constants';

const fetchNews= () => async dispatch => {
    dispatch({ type: `${FETCH_NEWS_LIST}_START` });
    try {
        const res = await GET({ url: getNewsListUrl, payload: {} });
        dispatch({ type: FETCH_NEWS_LIST, payload: res.data });
    } catch (e) {
        throw e;
    } finally {
        dispatch({ type: `${FETCH_NEWS_LIST}_FINISHED` });
    }
};

export {
    fetchNews,
}
