import { ADD_TO_COMPARE ,REMOVE_FROM_COMPARE} from "./compare.actions";

const initialState = {
    comparedDeals: [],
    comparedError: '',
};

export default (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
        case ADD_TO_COMPARE:
            return { ...state, comparedDeals: [...state.comparedDeals, payload] };
        case `${ADD_TO_COMPARE}_ERROR`:
            return { ...state, comparedError: error}
        case REMOVE_FROM_COMPARE:
            return { ...state, comparedDeals: payload}
        default:
            return state;
    }
};
