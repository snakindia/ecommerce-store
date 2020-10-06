import React, { Component } from 'react';
import { MDBModal, MDBModalBody, MDBCloseIcon } from 'mdbreact';

export default class InquiryNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
    };
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <MDBModal isOpen={this.state.modal} toggle={this.toggleModal} centered>
        <MDBCloseIcon onClick={this.toggleModal} />
        <MDBModalBody>
          Thank you for sharing this information.
        </MDBModalBody>
        Cheers!
      </MDBModal>
    );
  }
}
