import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { MDBContainer } from 'mdbreact';
import { connect } from 'react-redux';
import { TOAST_TYPE } from './action.constants';
import 'react-toastify/dist/ReactToastify.css';

const Notification = ({ msg, id, type }) => {
  useEffect(() => {
    if (msg) {
      switch (type) {
        case TOAST_TYPE.INFO:
          toast.info(msg, { closeButton: true });
          break;
        case TOAST_TYPE.SUCCESS:
            console.log('AAAAAAAA')
          toast.success(msg, { closeButton: true });
          break;
        case TOAST_TYPE.WARNING:
          toast.warn(msg, { closeButton: true });
          break;
        case TOAST_TYPE.ERROR:
          toast.error(msg, { closeButton: true });
          break;
        default:
          toast.error(msg, { closeButton: true });
      }
    }
  }, [id]);

  return (
    <MDBContainer>
      <ToastContainer
        // hideProgressBar={true}
          //
          position="bottom-left"
        newestOnTop={true}
        autoClose={5000}
      />
    </MDBContainer>
  );
};

const mSTP = ({ notification }) => ({
  msg: notification.msg,
  id: notification.notificationId,
  type: notification.toastType,
});

export default connect(mSTP)(Notification);
