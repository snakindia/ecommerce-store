import { GET } from '../../services/httpService';
import { getClientListURL } from '../../constants/urls';
import {
    FETCH_CLIENT_LIST
} from './clients.action.constants';


const fetchClientList = () => async (dispatch, getState) => {
    try {
        dispatch({ type: `${FETCH_CLIENT_LIST}_START` });
        const url = getClientListURL
        const res = await GET({ url });
        dispatch({ type: FETCH_CLIENT_LIST, payload: res.data });
    } catch (e) {
        dispatch({ type: `${FETCH_CLIENT_LIST}_ERROR`, error: e });
    } finally {
        dispatch({ type: `${FETCH_CLIENT_LIST}_FINISHED` });
    }
};

export {
    fetchClientList
};
