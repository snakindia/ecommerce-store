import { PRIVACY_POLICY_DETAIL } from './privacypolicy.action.constants';
const initialState = {
    fetchingPrivacyPolicy: false,
    error: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
     case PRIVACY_POLICY_DETAIL:
          return { ...state, ...action.payload };

        case `${PRIVACY_POLICY_DETAIL}_START`:
            return {
            ...state,
                fetching: true,
                error: null,
                ...action.payload,
            };

        case `${PRIVACY_POLICY_DETAIL}_ERROR`:
            return { ...state, error: action.error };

        case `${PRIVACY_POLICY_DETAIL}_FINISHED`:
            return { ...state, fetching: false };

    default:
      return state;
  }
};

