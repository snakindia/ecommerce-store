import { SHOW_TOAST } from './action.constants';

const showToast = (msg, type, id = +new Date()) => ({
  type: SHOW_TOAST,
  payload: {
    notificationId: id,
    toastType: type,
    msg,
  },
});

export { showToast };
