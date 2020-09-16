import { GET } from '../../services/httpService';
import { getPageDetailsUrl } from '../../constants/urls';
import { FETCH_PROJECTS_DETAIL } from './projects.action.constants';

const fetchProjectsDetail = (slug) => async (dispatch, getState) => {
    try {
        dispatch({ type: `${FETCH_PROJECTS_DETAIL}_START` });
        const url = getPageDetailsUrl + slug
        const res = await GET({ url });
        dispatch({ type: FETCH_PROJECTS_DETAIL, payload: res.data });
    } catch (e) {
        dispatch({ type: `${FETCH_PROJECTS_DETAIL}_ERROR`, error: e });
    } finally {
        dispatch({ type: `${FETCH_PROJECTS_DETAIL}_FINISHED` });
    }
};

export { fetchProjectsDetail };

