import { SHOW_TOAST } from './action.constants';

const initialState = {
  notificationId: '',
  toastType: '',
  msg: null,
};

const notificationReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case SHOW_TOAST:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default notificationReducer;
