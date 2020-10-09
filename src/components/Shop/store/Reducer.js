import * as ActionTypes from './ActionTypes';
const initialState = {
    loading: false,
    hotDeals:undefined,
    bestSelling:undefined,
    topRated:undefined,
    error: undefined
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SHOP_LOADING:
            return { ...state, loading: payload }

        case ActionTypes.GET_DATA_SUCCESS:
            return { ...state, loading: false  , ...payload }

        case ActionTypes.GET_DATA_ERROR:
            return { ...state, loading: false  , ...payload}
        
        case ActionTypes.SHOP_FLUSH_DATA:
            return {
                ...state,
                loading: false,
                hotDeals:undefined,
                bestSelling:undefined,
                topRated:undefined,
                error: undefined
            }


        default:
            return state;
    }
}
