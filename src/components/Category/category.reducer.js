import {
  FETCH_PRODUCT_LIST,
  FIELD_VALUE_CHANGE,
} from './category.action.constants';

const initialState = {
  fetching: false,
  error: null,
  price: '',
  attributes: '',
  total_count: '',
  has_more: '',
  data: [],
  search: '',
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case FETCH_PRODUCT_LIST:
      return { ...state, ...action.payload };

    case `${FETCH_PRODUCT_LIST}_START`:
      return {
        ...state,
        fetching: true,
        error: null,
        ...action.payload,
      };

    case `${FETCH_PRODUCT_LIST}_ERROR`:
      return { ...state, error: action.error };

    case `${FETCH_PRODUCT_LIST}_FINISHED`:
      return { ...state, fetching: false };

    case FIELD_VALUE_CHANGE:
      return { ...state, search: action.payload };

    default:
      return state;
  }
};
