import { FETCH_HOT_DEALS } from './hotDeals.actions';

const initialState = {
  fetchingDeals: false,
  hotDeals: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${FETCH_HOT_DEALS}_START`:
      return { ...state, fetchingDeals: true, hotDeals: [] };

    case FETCH_HOT_DEALS:
      return { ...state, hotDeals: payload };

    case `${FETCH_HOT_DEALS}_FINISHED`:
      return { ...state, fetchingDeals: false };

    default:
      return state;
  }
};
