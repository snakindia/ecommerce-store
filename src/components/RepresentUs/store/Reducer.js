import * as ActionTypes from './ActionTypes';
const initialState = {
    faq:null,
    loading: false,
    loaded: false,
    error: null,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

   
    case ActionTypes.LOAD_REPRESENTUS_SUCCESS:
        return { ...state, loaded: true }
    
    case ActionTypes.LOAD_REPRESENTUS_FAILURE:
        return { ...state, error: payload }
    
    case ActionTypes.REPRESENTUS_LOADING:
        return { ...state, loading: payload }

    case ActionTypes.REPRESENTUS_GET_FAQ_SUCCESS:
        return { ...state, faq: payload, error:null }
    case ActionTypes.REPRESENTUS_GET_FAQ_ERROR:
        return { ...state, error: payload, faq:null }
    
    default:
        return state;
    }
}
