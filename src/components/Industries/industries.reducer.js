import { FETCH_INDUSTRIES_DETAIL } from './industries.action.constants';
const initialState = {
    fetching: false,
    error: null,
    industriesList: [],
    has_more: false
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      
        case FETCH_INDUSTRIES_DETAIL:
            return { ...state, ...action.payload };

        case `${FETCH_INDUSTRIES_DETAIL}_START`:
            return {
            ...state,
                fetching: true,
                error: null,
                ...action.payload,
            };

        case `${FETCH_INDUSTRIES_DETAIL}_ERROR`:
            return { ...state, error: action.error };

        case `${FETCH_INDUSTRIES_DETAIL}_FINISHED`:
            return { ...state, fetching: false };

        default:
            return state;
    }
};

