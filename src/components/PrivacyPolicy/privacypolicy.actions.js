import { GET } from '../../services/httpService';
import { getPageDetailsUrl } from '../../constants/urls';
import { PRIVACY_POLICY_DETAIL } from './privacypolicy.action.constants';

const getDetails = (slug) => async (dispatch, getState) => {
    try {
        dispatch({ type: `${PRIVACY_POLICY_DETAIL}_START` });
        const url = getPageDetailsUrl + slug
        const res = await GET({ url });
        dispatch({ type: PRIVACY_POLICY_DETAIL, payload: res.data });
    } catch (e) {
        dispatch({ type: `${PRIVACY_POLICY_DETAIL}_ERROR`, error: e });
    } finally {
        dispatch({ type: `${PRIVACY_POLICY_DETAIL}_FINISHED` });
    }
};

export { getDetails };

