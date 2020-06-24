import React, { Component } from 'react';
import { Map, GoogleApiWrapper,InfoWindow, Marker } from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
      };
onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={2}
        streetViewControl={false}
        style={mapStyles}
        
      >
        <Marker
        position={{ lat: 33.508058, lng: -112.028742 }}
            onClick={this.onMarkerClick}
            name={'2415 East Camelback Road, Ste. 700, Phoenix, Arizona, P.O. Box: 6887, Goodyear, Arizona 85338, United States'}
        />
        
        <Marker
            position={{ lat: 15.260204, lng: 74.109314 }}
            onClick={this.onMarkerClick}
            name={'International Sales Office, North, South, & Central America, 801 Brickell Avenue, Suite 900, Miami, Florida, 33131, United States'}
        />
        
        <Marker
            lat={40.741895}
            lng= {-73.989308}
            onClick={this.onMarkerClick}
            name={'South America, Edifício Candelária Corporate, Rua Candelária, 65, #1600, Rio de Janeiro, Brazil'}
        />
        
        <Marker
            lat={32.08227}
         lng= {34.81065}
          onClick={this.onMarkerClick}
          name={'International Sales Office - Eurasia & Oceania, 12 Abba Hillel Street, Suite 1600, 52136 Ramat-Gan, Tel-Aviv, Israel'}
        />
        
        <Marker
            lat={-26.1816667}
         lng= {28.0277778}
          onClick={this.onMarkerClick}
          name={'Africa- Block B & Block C, Metropolitan Park, 8 Hillside Road, Suite 1000 Parktown, Johannesburg, 2196, South Africa'}
        />
        
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB1Bndnjywbdbg4mxA86S-nEgxAVEC4zN0'
})(MapContainer);