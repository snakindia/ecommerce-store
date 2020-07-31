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
          Thanks you for filling out your information! We are thrilling to hear
          from you. Our inbox can't wait to get your messages, so talk to us any
          time you like.
        </MDBModalBody>
        Cheers!
      </MDBModal>
    );
  }
}
