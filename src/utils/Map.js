import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { MDBModal, MDBModalBody } from 'mdbreact';
import ContactForm from '../components/common/ContactForm'
const mapStyles = {
  width: '100%',
  height: '100%',
  position: 'relative',
  maxHeight:'417px'
};

const coords = { lat: 0, lng: 0 };

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  toggleModal = (e) => {
    console.log({e})
    const { modalVisible } = this.state;
    this.setState({ modalVisible: modalVisible ? false : true })
  }
  handleMapReady=(mapProps,map)=> {
    map.setOptions({
      draggableCursor: "default",
      draggingCursor: "pointer"
    });
  }


  render() {
    const { modalVisible } = this.state;
    return (
      <>
        <Map
          style={{maxHeight:'411px'}}
          initialCenter={coords}
          google={this.props.google}
          maxZoom={2}
          minZoom={2}
          streetViewControl={false}
          disableDefaultUI={true}
          draggable={false}
          onClick={this.toggleModal}
          onReady={this.handleMapReady}
        >
         
        </Map>
        <MDBModal isOpen={modalVisible} toggle={this.toggleModal} >
        <MDBModalBody>
          <div
            className="animated fadeIn"
            //style={{ position: 'relative' }}
          >
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={this.toggleModal}
            >
              <span aria-hidden="true">×</span>
            </button>
           
            <ContactForm />
          </div>
          </MDBModalBody>
        </MDBModal>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB1Bndnjywbdbg4mxA86S-nEgxAVEC4zN0',
})(MapContainer);
