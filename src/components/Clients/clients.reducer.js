import {
    FETCH_CLIENT_LIST
} from './clients.action.constants';

const initialState = {
    fetching: false,
    error: null,
    data: []
};

export default (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case FETCH_CLIENT_LIST:
          return { ...state, data:action.payload };

        case `${FETCH_CLIENT_LIST}_START`:
            return {
            ...state,
                fetching: true,
                error: null,
                ...action.payload,
            };

        case `${FETCH_CLIENT_LIST}_ERROR`:
            return { ...state, error: action.error };

        case `${FETCH_CLIENT_LIST}_FINISHED`:
            return { ...state, fetching: false };

        default:
            return state;
    }
};
