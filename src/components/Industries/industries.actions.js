import { GET } from '../../services/httpService';
import { getIndustriesList } from '../../constants/urls';
import { FETCH_INDUSTRIES_DETAIL } from './industries.action.constants';

const fetchIndustriesList = () => async (dispatch, getState) => {
    try {
        dispatch({ type: `${FETCH_INDUSTRIES_DETAIL}_START` });
        const url = getIndustriesList
        const res = await GET({ url });
        dispatch({ type: FETCH_INDUSTRIES_DETAIL, payload: res.data });
    } catch (e) {
        dispatch({ type: `${FETCH_INDUSTRIES_DETAIL}_ERROR`, error: e });
    } finally {
        dispatch({ type: `${FETCH_INDUSTRIES_DETAIL}_FINISHED` });
    }
};

export { fetchIndustriesList };

