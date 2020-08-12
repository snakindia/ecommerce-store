import {
    FETCH_NEWS_DETAIL
} from './newsdetail.action.constants';

const initialState = {
    fetching: false,
    error: null,
    data: []
};

export default (state = initialState, action) => {
    const { type } = action;
    switch (type) {
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
