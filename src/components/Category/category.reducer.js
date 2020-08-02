import {
  FETCH_PRODUCT_LIST,
  FIELD_VALUE_CHANGE,
  PAGE_CHANGE,
} from './category.action.constants';

const initialState = {
  fetching: false,
  error: null,
  price: {
    min: 0,
    max: 0,
  },
  attributes: '',
  total_count: '',
  has_more: '',
  data: [],
  search: '',
  currentPage: 1,
  sortBy: 'name',
  size: 12,
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
      return { ...state, [action.fieldName]: action.payload };

    case PAGE_CHANGE:
      return { ...state, currentPage: action.payload };

    default:
      return state;
  }
};
