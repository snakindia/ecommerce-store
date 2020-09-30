import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class AlertMessages extends React.Component {
    submit = () => {
        confirmAlert({
            title: 'Alert',
            message: 'Are you sure to do this.',
            buttons: [
                {
                  label: 'Ok',
                  onClick: () => alert('Click Yes')
                },
                {
                  label: 'No',
                  onClick: () => alert('Click No')
                }
            ]
        });
    };
 
    render() {
        return (
            <div className='container'>
              <button onClick={this.submit}>Confirm dialog</button>
            </div>
        );
    }
}

export default AlertMessages;