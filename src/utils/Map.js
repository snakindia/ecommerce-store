import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { MDBModal, MDBModalBody } from 'mdbreact';
import ContactForm from '../components/common/ContactForm'
const mapStyles = {
  width: '100%',
  height: '100%',
  position: 'relative'
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
  toggleModal = () => {
    const { modalVisible } = this.state;
    this.setState({ modalVisible: modalVisible ? false : true })
  }
  render() {
    const { modalVisible } = this.state;
    return (
      <>
        <Map
          initialCenter={coords}
          google={this.props.google}
          maxZoom={2}
          minZoom={2}
          streetViewControl={false}
          disableDefaultUI={true}
          draggable={false}
          onClick={this.toggleModal}
        >
          {/* <Marker
          name={
            '2415 East Camelback Road, Ste. 700, Phoenix, Arizona, P.O. Box: 6887, Goodyear, Arizona 85338, United States'
          }
          position={{ lat: 33.508057, lng: -112.028742 }}
          onClick={this.onMarkerClick}
        />

        <Marker
          name={
            'International Sales Office, North, South, & Central America, 801 Brickell Avenue, Suite 900, Miami, Florida, 33131, United States'
          }
          position={{ lat: 41.331989, lng: -74.356819 }}
          onClick={this.onMarkerClick}
        />

        <Marker
          name={
            'Edifício Candelária Corporate , Rua Candelária, 65, #1600, Rio de Janeiro, Brazil'
          }
          position={{ lat: -22.906847, lng: -43.172897 }}
          onClick={this.onMarkerClick}
        />

        <Marker
          name={
            'International Sales Office - 12 Abba Hillel Street, Suite 1600, 52136 Ramat-Gan, Tel-Aviv, Israel'
          }
          position={{ lat: 31.182882, lng: 34.811615 }}
          onClick={this.onMarkerClick}
        />

        <Marker
          name={
            'Africa- Block B & Block C, Metropolitan Park, 8 Hillside Road, Suite 1000 Parktown, Johannesburg, 2196, South Africa'
          }
          position={{ lat: -26.204103, lng: 28.047304 }}
          onClick={this.onMarkerClick}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow> */}
        </Map>
        <MDBModal isOpen={modalVisible} toggle={this.toggleModal} centered>
         
            <ContactForm />
          
        </MDBModal>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB1Bndnjywbdbg4mxA86S-nEgxAVEC4zN0',
})(MapContainer);
