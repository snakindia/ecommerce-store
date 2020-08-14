import { FETCH_NEWS_LIST, FETCH_NEWS_DETAIL } from './news.action.constants';
const initialState = {
    fetchingNews: false,
    error: null,
    newsList: [],
    has_more: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${FETCH_NEWS_LIST}_START`:
      return { ...state, fetchingNews: true, ...payload };

    case FETCH_NEWS_LIST:
      return { ...state, ...payload };

    case `${FETCH_NEWS_LIST}_FINISHED`:
      return { ...state, fetchingNews: false };
      
     case FETCH_NEWS_DETAIL:
          return { ...state, ...action.payload };

        case `${FETCH_NEWS_DETAIL}_START`:
            return {
            ...state,
                fetching: true,
                error: null,
                ...action.payload,
            };

        case `${FETCH_NEWS_DETAIL}_ERROR`:
            return { ...state, error: action.error };

        case `${FETCH_NEWS_DETAIL}_FINISHED`:
            return { ...state, fetching: false };

    default:
      return state;
  }
};

