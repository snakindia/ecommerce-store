import { FETCH_NEWS_LIST } from "./news.action.constants";
const initialState = {
    fetchingNews: false,
    error: null,
    newsList: []
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case `${FETCH_NEWS_LIST}_START`:
            return { ...state, fetchingNews: true, newsList: [] };

        case FETCH_NEWS_LIST:
            return { ...state, newsList: payload };

        case `${FETCH_NEWS_LIST}_FINISHED`:
            return { ...state, fetchingNews: false };

        default:
            return state;
    }
};
